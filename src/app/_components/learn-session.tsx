"use client";

import { useMemo, useState } from "react";

import { Flashcard } from "~/app/_components/flashcard";
import { LearnProgress } from "~/app/_components/learn-progress";
import { api } from "~/trpc/react";

type LearnSessionProps = {
  studySetId: number;
  studySetName: string;
};

export function LearnSession({ studySetId, studySetName }: LearnSessionProps) {
  const [batchRequestId, setBatchRequestId] = useState(0);
  const [retryIds, setRetryIds] = useState<number[]>([]);
  const [wrongIds, setWrongIds] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([]);
  const [isContinuing, setIsContinuing] = useState(false);

  const utils = api.useUtils();
  const progressQuery = api.flashCard.getLearnProgress.useQuery({ studySetId });
  const batchQuery = api.flashCard.getLearnBatch.useQuery({
    studySetId,
    retryIds,
    random: false,
    limit: 7,
    batchKey: batchRequestId,
  });

  const submitBatch = api.flashCard.submitLearnBatch.useMutation();
  const resetProgress = api.flashCard.resetLearnProgress.useMutation();

  const batch = batchQuery.data ?? [];
  const currentCard = batch[currentIndex];

  const getLongestStreak = (history: boolean[]) => {
    let current = 0;
    let max = 0;
    for (const isCorrect of history) {
      if (isCorrect) {
        current += 1;
        if (current > max) max = current;
      } else {
        current = 0;
      }
    }
    return max;
  };

  const baseStats = progressQuery.data;
  const resultEntries = Object.entries(results);
  const correctDelta = resultEntries.reduce(
    (count, [, isCorrect]) => (isCorrect ? count + 1 : count),
    0,
  );
  const incorrectDelta = resultEntries.length - correctDelta;
  const newlySeenDelta = resultEntries.reduce((count, [id]) => {
    return retryIds.includes(Number(id)) ? count : count + 1;
  }, 0);
  const optimisticStats = baseStats
    ? {
      totalCards: baseStats.totalCards,
      seenCount: baseStats.seenCount + newlySeenDelta,
      unseenCount: Math.max(0, baseStats.unseenCount - newlySeenDelta),
      inProgressCount: Math.max(
        0,
        baseStats.seenCount + newlySeenDelta - baseStats.masteredCount,
      ),
      masteredCount: baseStats.masteredCount,
      correctCount: baseStats.correctCount + correctDelta,
      incorrectCount: baseStats.incorrectCount + incorrectDelta,
      maxStreak: Math.max(baseStats.maxStreak, getLongestStreak(answerHistory)),
    }
    : undefined;

  const isBatchComplete = useMemo(
    () => batch.length > 0 && currentIndex >= batch.length,
    [batch.length, currentIndex],
  );

  const goToNextBatch = (nextRetryIds: number[]) => {
    setRetryIds(nextRetryIds);
    setWrongIds([]);
    setResults({});
    setAnswerHistory([]);
    setCurrentIndex(0);
    setBatchRequestId((value) => value + 1);
  };

  const handleResolveCard = (isCorrect: boolean) => {
    if (!currentCard) return;
    if (!isCorrect) {
      setWrongIds((prev) =>
        prev.includes(currentCard.id) ? prev : [...prev, currentCard.id],
      );
    }
    setResults((prev) => ({ ...prev, [currentCard.id]: isCorrect }));
    setAnswerHistory((prev) => [...prev, isCorrect]);
    setCurrentIndex((index) => index + 1);
  };

  const handleNextBatch = async () => {
    setIsContinuing(true);
    try {
      const batchResults = Object.entries(results).map(([id, correct]) => ({
        flashCardId: Number(id),
        correct,
      }));

      if (batchResults.length > 0) {
        const response = await submitBatch.mutateAsync({
          studySetId,
          results: batchResults,
        });
        await progressQuery.refetch();
        goToNextBatch(response.wrongIds);
        return;
      }

      goToNextBatch(wrongIds);
    } finally {
      setIsContinuing(false);
    }
  };

  const handleResetProgress = async () => {
    await resetProgress.mutateAsync({ studySetId });
    setRetryIds([]);
    setWrongIds([]);
    setResults({});
    setAnswerHistory([]);
    setCurrentIndex(0);
    setBatchRequestId((value) => value + 1);
    await Promise.all([
      utils.flashCard.getLearnProgress.invalidate({ studySetId }),
      utils.flashCard.getLearnBatch.invalidate({ studySetId }),
    ]);
  };

  const renderFooter = (footerCurrentIndex: number, footerBatchSize: number) => (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t-4 border-brand-secondary bg-white shadow-lg">
      <div className="mx-auto w-full max-w-4xl px-3 py-3 sm:px-4 sm:py-4">
        <LearnProgress
          setName={studySetName}
          currentIndex={footerCurrentIndex}
          batchSize={footerBatchSize}
          stats={optimisticStats ?? undefined}
          onResetAction={handleResetProgress}
        />
      </div>
    </div>
  );

  if (batchQuery.isLoading) {
    return (
      <div className="relative">
        <div className="mx-auto w-full max-w-3xl rounded-xl border bg-white p-4 shadow-sm sm:p-6">
          <p className="text-sm text-slate-600">Loading...</p>
        </div>
        {renderFooter(0, 7)}
      </div>
    );
  }

  if (batch.length === 0) {
    return (
      <div className="space-y-4 pb-56 sm:pb-64">
        <div className="mx-auto w-full max-w-2xl rounded-xl border bg-white p-4 sm:p-6">
          <p className="text-sm text-slate-600">
            This set has no unseen cards. Add cards or reset this set&apos;s progress.
          </p>
        </div>
        {renderFooter(0, 7)}
      </div>
    );
  }

  if (isBatchComplete) {
    return (
      <div className="space-y-4 pb-56 sm:pb-64">
        <div className="mx-auto w-full max-w-2xl rounded-xl border-4 border-brand-secondary bg-white p-4 text-sm sm:p-6">
          <div className="text-lg text-brand-primary font-medium">Keep it going!</div>
          <div className="mt-2 text-slate-600">Incorrect answers: {wrongIds.length}</div>
          <button
            type="button"
            onClick={handleNextBatch}
            disabled={isContinuing}
            className="mt-3 inline-flex items-center gap-2 rounded bg-slate-900 px-3 py-2 text-sm text-white disabled:opacity-60"
          >
            {isContinuing ? (
              <span
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-white"
                aria-label="Loading next batch"
              />
            ) : null}
            {isContinuing ? "Loading..." : "Continue"}
          </button>
        </div>
        {renderFooter(batch.length, batch.length)}
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-56 sm:pb-64">
      <div className="mx-auto w-full max-w-2xl">
        <Flashcard
          term={currentCard?.term ?? ""}
          definition={currentCard?.definition ?? ""}
          onResolveAction={handleResolveCard}
        />
      </div>
      {renderFooter(currentIndex, batch.length)}
    </div>
  );
}
