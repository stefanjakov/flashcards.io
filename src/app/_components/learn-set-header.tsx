"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { api } from "~/trpc/react";

type StudySetOption = {
  id: number;
  name: string;
};

type LearnSetHeaderProps = {
  studySets: StudySetOption[];
  initialStudySetId: number | null;
};

export function LearnSetHeader({
  studySets,
  initialStudySetId,
}: LearnSetHeaderProps) {
  const router = useRouter();
  const [isRefreshing, startTransition] = useTransition();
  const [isChangingSet, setIsChangingSet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fallbackStudySetId = studySets[0]?.id ?? null;
  const hasInitial = studySets.some((set) => set.id === initialStudySetId);
  const [selectedStudySetId, setSelectedStudySetId] = useState<number | null>(
    hasInitial ? initialStudySetId : fallbackStudySetId,
  );

  const setCurrentStudySet = api.flashCard.setCurrentStudySet.useMutation();

  const handleChange = async (nextStudySetId: number) => {
    setSelectedStudySetId(nextStudySetId);
    setIsChangingSet(true);
    try {
      await setCurrentStudySet.mutateAsync({ studySetId: nextStudySetId });
      startTransition(() => {
        router.refresh();
      });
      setIsOpen(false);
    } finally {
      setIsChangingSet(false);
    }
  };

  const isLoading =
    isChangingSet || isRefreshing || setCurrentStudySet.isPending;
  const selectedSetName =
    studySets.find((set) => set.id === selectedStudySetId)?.name ?? "Learn";

  return (
    <header className="mb-4 sm:mb-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl sm:text-2xl">{selectedSetName}</h1>
        <div className="flex items-center gap-2">
          {isLoading ? (
            <span
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700"
              aria-label="Changing set"
            />
          ) : null}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                disabled={studySets.length === 0 || isLoading}
                className="hover:bg-brand-secondary hover:text-brand-primary hover:border-brand-secondary rounded-2xl border-2 border-white px-3 py-2 text-sm"
              >
                Change set
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2" align="end">
              <div className="max-h-72 overflow-y-auto">
                {studySets.map((set) => (
                  <button
                    key={set.id}
                    type="button"
                    onClick={() => handleChange(set.id)}
                    disabled={isLoading}
                    className={`block w-full rounded px-3 py-2 text-left text-sm hover:bg-zinc-200 ${
                      set.id === selectedStudySetId ? "bg-zinc-100" : ""
                    }`}
                  >
                    {set.name}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <p className="mt-1 text-xs sm:text-sm">
        Type the term for each definition.
      </p>
    </header>
  );
}
