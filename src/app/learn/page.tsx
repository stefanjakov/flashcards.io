import { LearnNavbar } from "~/app/_components/learn-navbar";
import { LearnSession } from "~/app/_components/learn-session";
import { api, HydrateClient } from "~/trpc/server";

export default async function Learn() {
  const [studySets, currentStudySet] = await Promise.all([
    api.flashCard.getStudySets(),
    api.flashCard.getCurrentStudySet(),
  ]);
  const selectedSet = studySets.find(
    (set) => set.id === currentStudySet.studySetId,
  );

  return (
    <HydrateClient>
      <LearnNavbar
        studySets={studySets.map((set) => ({ id: set.id, name: set.name }))}
        initialStudySetId={currentStudySet.studySetId ?? studySets[0]?.id ?? null}
      />
      <main className="min-h-[calc(100vh-57px)] px-4 py-4 sm:px-6 sm:py-6 md:px-10">
        <div className="mx-auto w-full max-w-3xl">
          {selectedSet ? (
            <header className="mb-4 sm:mb-6">
              <h1 className="text-lg sm:text-2xl">{selectedSet.name}</h1>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Type the term for each definition. Wrong answers return next batch.
              </p>
            </header>
          ) : (
            <header className="mb-4 sm:mb-6">
              <h1 className="text-lg sm:text-2xl">Learn</h1>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Pick a study set from the navbar to start.
              </p>
            </header>
          )}
          {selectedSet ? (
            <LearnSession studySetId={selectedSet.id} studySetName={selectedSet.name} />
          ) : (
            <div className="rounded-xl border bg-white p-4 sm:p-6">
              <p className="text-sm text-slate-600">
                No set selected. Choose one from the navbar.
              </p>
            </div>
          )}
        </div>
      </main>
    </HydrateClient>
  );
}
