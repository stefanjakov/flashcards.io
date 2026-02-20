"use client";

import { useEffect, useState } from "react";

const normalize = (value: string) => value.trim().toLowerCase();

type FlashcardProps = {
  term: string;
  definition: string;
  onResolve: (correct: boolean) => void;
};

export function Flashcard({ term, definition, onResolve }: FlashcardProps) {
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState("");

  const resetCard = () => {
    setAnswer("");
    setShowHint(false);
    setResultOpen(false);
    setSubmittedAnswer("");
    setIsCorrect(false);
  };

  const handleCheck = () => {
    const correct = normalize(answer) === normalize(term);
    setIsCorrect(correct);
    setSubmittedAnswer(answer);
    setResultOpen(true);
  };

  const handleResolve = (correct: boolean) => {
    onResolve(correct);
    resetCard();
  };

  useEffect(() => {
    if (!resultOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      handleResolve(isCorrect);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [resultOpen, isCorrect]);

  return (
    <div className="rounded-xl border bg-white p-4 text-sm sm:p-6">
      <div className="text-xs uppercase tracking-wide text-slate-500">
        Definition
      </div>
      <div className="mt-1 text-sm text-slate-700 sm:text-base">{definition}</div>

      <form
        className="mt-4 flex flex-col gap-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          handleCheck();
        }}
      >
        <input
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="Type the term"
          className="w-full rounded border px-3 py-2"
        />
        <button
          type="button"
          onClick={handleCheck}
          className="rounded bg-slate-900 px-3 py-2 text-sm text-white sm:text-base"
        >
          Check
        </button>
      </form>

      <button
        type="button"
        onClick={() => setShowHint((value) => !value)}
        className="mt-3 rounded border border-slate-300 px-3 py-2 text-xs text-slate-700 sm:text-sm"
      >
        {showHint ? "Hide hint" : "Show hint"}
      </button>

      {showHint ? (
        <div className="mt-3 rounded bg-slate-100 p-3 text-sm text-slate-800">
          Hint: {term}
        </div>
      ) : null}

      {resultOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-lg">
            <div
              className={`text-lg font-semibold ${
                isCorrect ? "text-emerald-700" : "text-rose-700"
              }`}
            >
              {isCorrect ? "Correct" : "Incorrect"}
            </div>

            {isCorrect ? (
              <div className="mt-3 space-y-1 text-sm text-slate-700">
                <p>Definition: {definition}</p>
                <p>Term: {term}</p>
              </div>
            ) : (
              <div className="mt-3 space-y-1 text-sm text-slate-700">
                <p>Name: {term}</p>
                <p>Incorrect answer: {submittedAnswer || "(empty)"}</p>
                <p>Correct answer: {term}</p>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {!isCorrect ? (
                <button
                  type="button"
                  onClick={() => handleResolve(true)}
                  className="rounded border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
                >
                  Override answer
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => handleResolve(isCorrect)}
                className="rounded bg-slate-900 px-3 py-2 text-sm text-white"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
