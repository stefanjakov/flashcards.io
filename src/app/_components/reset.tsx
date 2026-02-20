"use client";

import { useState } from "react";

type ResetProps = {
  onConfirmAction: () => Promise<void>;
  className?: string;
};

export function Reset({ onConfirmAction, className }: ResetProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await onConfirmAction();
      setOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "text-brand-primary bg-brand-secondary rounded px-3 py-2 text-xs sm:text-sm"
        }
      >
        Reset progress
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Reset progress?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              This will mark cards in this set as unseen and clear learn
              progress.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={isLoading}
                className="rounded border border-slate-300 px-3 py-2 text-sm text-slate-700 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                disabled={isLoading}
                className="inline-flex items-center gap-2 rounded bg-slate-900 px-3 py-2 text-sm text-white disabled:opacity-60"
              >
                {isLoading ? (
                  <span
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-white"
                    aria-label="Resetting"
                  />
                ) : null}
                {isLoading ? "Resetting..." : "Confirm reset"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
