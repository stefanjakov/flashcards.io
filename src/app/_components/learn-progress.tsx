"use client";

import { Reset } from "~/app/_components/reset";

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
  onResetAction?: () => Promise<void>;
};

export function LearnProgress({
  setName,
  currentIndex,
  batchSize,
  stats,
  onResetAction,
}: LearnProgressProps) {
  const cardIndex = Math.min(currentIndex + 1, batchSize);

  return (
    <section className="mx-auto w-full bg-white px-3 py-2 text-xs sm:px-4 sm:py-3">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h2 className="truncate text-sm text-brand-primary sm:text-base">{setName}</h2>
          <p className="text-[11px] text-slate-600 sm:text-xs">
            Card {cardIndex} / {batchSize}
            {stats ? ` • Total ${stats.totalCards}` : ""}
          </p>
        </div>
        {onResetAction ? (
          <Reset
            onConfirmAction={onResetAction}
            className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-2.5 py-1 text-[11px] text-brand-primary sm:text-xs"
          />
        ) : null}
      </div>

      {stats ? (
        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] sm:text-xs">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">Seen {stats.seenCount}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">Unseen {stats.unseenCount}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">In prog {stats.inProgressCount}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">Mastered {stats.masteredCount}</span>
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">✓ {stats.correctCount}</span>
          <span className="rounded-full bg-rose-100 px-2 py-1 text-rose-700">✕ {stats.incorrectCount}</span>
          <span className="rounded-full bg-brand-secondary/20 px-2 py-1 text-brand-primary">★ {stats.maxStreak}</span>
        </div>
      ) : null}
    </section>
  );
}
