"use client";

type LearnProgressStats = {
  totalCards: number;
  seenCount: number;
  unseenCount: number;
  inProgressCount: number;
  masteredCount: number;
  correctCount: number;
  incorrectCount: number;
  maxStreak: number;
};

type LearnProgressProps = {
  setName: string;
  currentIndex: number;
  batchSize: number;
  stats?: LearnProgressStats;
};

export function LearnProgress({
  setName,
  currentIndex,
  batchSize,
  stats,
}: LearnProgressProps) {
  return (
    <section className="rounded-xl border bg-white p-4 text-sm sm:p-6">
      <div className="text-xs uppercase tracking-wide text-slate-500">Studying</div>
      <h2 className="mt-1 text-base text-slate-900 sm:text-lg">{setName}</h2>
      <p className="mt-1 text-xs text-slate-600 sm:text-sm">
        Card {Math.min(currentIndex + 1, batchSize)} of {batchSize}
      </p>

      {stats ? (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-700 sm:grid-cols-4 sm:text-sm">
          <div className="rounded bg-slate-50 p-2">Seen: {stats.seenCount}</div>
          <div className="rounded bg-slate-50 p-2">Unseen: {stats.unseenCount}</div>
          <div className="rounded bg-slate-50 p-2">Mastered: {stats.masteredCount}</div>
          <div className="rounded bg-slate-50 p-2">In progress: {stats.inProgressCount}</div>
          <div className="rounded bg-slate-50 p-2">Correct: {stats.correctCount}</div>
          <div className="rounded bg-slate-50 p-2">Incorrect: {stats.incorrectCount}</div>
          <div className="rounded bg-slate-50 p-2">Best streak: {stats.maxStreak}</div>
          <div className="rounded bg-slate-50 p-2">Total cards: {stats.totalCards}</div>
        </div>
      ) : null}
    </section>
  );
}
