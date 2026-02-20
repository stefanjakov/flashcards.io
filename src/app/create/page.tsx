import { api, HydrateClient } from "~/trpc/server";
import SetCard from "../_components/set-card";
import CreateSetPopup from "./_components/create-set-popup";

export default async function Create() {
  const [studySets, currentStudySet] = await Promise.all([
    api.flashCard.getStudySets(),
    api.flashCard.getCurrentStudySet(),
  ]);

  const selectedSet = studySets.find(
    (set) => set.id === currentStudySet.studySetId,
  );

  return (
    <HydrateClient>
      <main>
        <div className="flex gap-4 items-center p-4">
          <h1 className="text-2xl">Your sets</h1>
          <CreateSetPopup />
        </div>

        <section id="study-sets" className="mt-8">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-brand-primary mb-6">
              Your Study Sets
            </h2>

            <div className="space-y-4">
              {studySets.map((set) => (
                <SetCard
                  key={set.id}
                  id={set.id}
                  name={set.name}
                  currentStudySetId={currentStudySet?.studySetId ?? null}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
