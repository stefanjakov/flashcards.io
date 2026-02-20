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
    <section className="mx-auto w-full bg-white p-3 text-xs sm:p-4 sm:text-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/15 px-3 py-1 text-xs font-medium text-brand-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-secondary" />
            Studying
          </div>
          <h2 className="mt-2 text-lg text-brand-primary sm:text-2xl">{setName}</h2>
          <div className="flex gap-4">
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Card {Math.min(currentIndex + 1, batchSize)} of {batchSize}
            </p>
            {stats ? (
              <div className="flex items-center gap-1 text-slate-600">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  #
                </span>
                Total cards: <span className="font-medium">{stats.totalCards}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {stats ? (
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 sm:grid-cols-4 sm:text-sm">
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">Seen</div>
              <div className="mt-1 text-sm text-brand-primary sm:text-base">{stats.seenCount}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">Unseen</div>
              <div className="mt-1 text-sm text-brand-primary sm:text-base">{stats.unseenCount}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">Mastered</div>
              <div className="mt-1 text-sm text-brand-primary sm:text-base">{stats.masteredCount}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">In progress</div>
              <div className="mt-1 text-sm text-brand-primary sm:text-base">
                {stats.inProgressCount}
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                ✓
              </span>
              Correct: <span className="font-medium">{stats.correctCount}</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                ✕
              </span>
              Incorrect: <span className="font-medium">{stats.incorrectCount}</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-primary">
                ★
              </span>
              Best streak: <span className="font-medium">{stats.maxStreak}</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
