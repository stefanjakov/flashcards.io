"use client";

import { useMemo, useState } from "react";

import { api } from "~/trpc/react";

const normalize = (value: string) => value.trim().toLowerCase();

export function LearnDebug() {
  const [batchRequestId, setBatchRequestId] = useState(0);
  const [retryIds, setRetryIds] = useState<number[]>([]);
  const [wrongIds, setWrongIds] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">(
    "idle",
  );
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [progressSnapshot, setProgressSnapshot] = useState<object | null>(null);

  const utils = api.useUtils();
  const progressQuery = api.flashCard.getLearnProgress.useQuery(undefined, {
    enabled: false,
  });

  const batchQuery = api.flashCard.getLearnBatch.useQuery({
    retryIds,
    random: false,
    limit: 7,
    // Force refetch on batch boundary even if retryIds are the same.
    batchKey: batchRequestId,
  });

  const submitBatch = api.flashCard.submitLearnBatch.useMutation();

  const resetProgress = api.flashCard.resetLearnProgress.useMutation({
    onSuccess: async () => {
      setRetryIds([]);
      setWrongIds([]);
      setResults({});
      setCurrentIndex(0);
      setAnswer("");
      setStatus("idle");
      setProgressSnapshot(null);
      setBatchRequestId((value) => value + 1);
      await Promise.all([
        utils.flashCard.getLearnProgress.invalidate(),
        utils.flashCard.getLearnBatch.invalidate(),
      ]);
    },
  });

  const batch = batchQuery.data ?? [];
  const currentCard = batch[currentIndex];

  const isBatchComplete = useMemo(
    () => batch.length > 0 && currentIndex >= batch.length,
    [batch.length, currentIndex],
  );

  const goToNextBatch = (nextRetryIds: number[]) => {
    setRetryIds(nextRetryIds);
    setWrongIds([]);
    setResults({});
    setCurrentIndex(0);
    setAnswer("");
    setStatus("idle");
    setBatchRequestId((value) => value + 1);
  };

  const handleSubmit = () => {
    if (!currentCard) return;
    const isCorrect = normalize(answer) === normalize(currentCard.term);
    if (!isCorrect) {
      setWrongIds((prev) =>
        prev.includes(currentCard.id) ? prev : [...prev, currentCard.id],
      );
    }
    setStatus(isCorrect ? "correct" : "incorrect");
    setResults((prev) => ({ ...prev, [currentCard.id]: isCorrect }));
    setAnswer("");
    setCurrentIndex((index) => index + 1);
  };

  const handleNextBatch = async () => {
    const batchResults = Object.entries(results).map(([id, correct]) => ({
      flashCardId: Number(id),
      correct,
    }));

    if (batchResults.length > 0) {
      const response = await submitBatch.mutateAsync({
        results: batchResults,
      });
      setWrongIds(response.wrongIds);
      const nextProgress = await progressQuery.refetch();
      setProgressSnapshot(nextProgress.data ?? null);
      goToNextBatch(response.wrongIds);
      return;
    }

    goToNextBatch(wrongIds);
  };

  if (batchQuery.isLoading) {
    return <p className="mt-2 text-sm text-slate-600">Loading batch...</p>;
  }

  if (batch.length === 0) {
    return (
      <div>
        <p className="mt-2 text-sm text-slate-600">
          No cards yet. Add some flashcards to get started.
        </p>

        <button
          type="button"
          onClick={() => resetProgress.mutate()}
          className="mt-4 rounded border border-slate-300 px-3 py-2 text-xs text-slate-700"
        >
          Reset progress
        </button>
      </div>

    );
  }

  if (isBatchComplete) {
    return (
      <div className="mt-4 rounded border p-4 text-sm">
        <div className="font-medium">Batch complete</div>
        <div className="mt-2 text-slate-600">
          Wrong in this batch: {wrongIds.length}
        </div>
        <button
          type="button"
          onClick={handleNextBatch}
          className="mt-3 rounded bg-slate-900 px-3 py-2 text-sm text-white"
        >
          Next batch
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded border p-4 text-sm">
      <div className="text-slate-600">
        Card {currentIndex + 1} of {batch.length}
      </div>
      <div className="mt-2 font-medium">Definition</div>
      <div className="text-slate-700">{currentCard?.definition}</div>
      <div className="mt-4 flex gap-2">
        <input
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="Type the term"
          className="w-full rounded border px-3 py-2"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded bg-slate-900 px-3 py-2 text-white"
        >
          Check
        </button>
      </div>
      {status !== "idle" ? (
        <div
          className={`mt-2 ${status === "correct" ? "text-emerald-600" : "text-rose-600"
            }`}
        >
          {status === "correct" ? "Correct" : "Incorrect"}
        </div>
      ) : null}

      {progressSnapshot ? (
        <div className="mt-4 rounded bg-slate-50 p-3 text-xs text-slate-700">
          <div className="font-medium">Progress snapshot</div>
          <pre className="mt-2 whitespace-pre-wrap">
            {JSON.stringify(progressSnapshot, null, 2)}
          </pre>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => resetProgress.mutate()}
        className="mt-4 rounded border border-slate-300 px-3 py-2 text-xs text-slate-700"
      >
        Reset progress
      </button>
    </div>
  );
}
