"use client";

import SetCard from "~/app/_components/set-card";
import { api } from "~/trpc/react";

type StudySetListProps = {
  initialStudySets: Array<{
    id: number;
    name: string;
    _count: { cards: number };
  }>;
  currentStudySetId: number | null;
};

export default function StudySetList({
  initialStudySets,
  currentStudySetId,
}: StudySetListProps) {
  const { data: studySets } = api.flashCard.getStudySets.useQuery(undefined, {
    initialData: initialStudySets,
  });

  return (
    <div className="space-y-4">
      {studySets.map((set) => (
        <SetCard
          key={set.id}
          id={set.id}
          name={set.name}
          currentStudySetId={currentStudySetId}
        />
      ))}
    </div>
  );
}
