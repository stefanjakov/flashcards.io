import { LearnSetHeader } from "~/app/_components/learn-set-header";
import { LearnSession } from "~/app/_components/learn-session";
import { requireAllowedEmail } from "~/lib/require-allowed-email";
import { api, HydrateClient } from "~/trpc/server";

export default async function Learn() {
  await requireAllowedEmail();
  const [studySets, currentStudySet] = await Promise.all([
    api.flashCard.getStudySets(),
    api.flashCard.getCurrentStudySet(),
  ]);
  const selectedSet = studySets.find(
    (set) => set.id === currentStudySet.studySetId,
  );

  return (
    <HydrateClient>
      <div className="bg-brand-primary h-screen overflow-hidden">
        <main className="h-[calc(100vh-57px)] overflow-hidden px-4 py-4 sm:px-6 sm:py-6 md:px-10">
          <div className="mx-auto w-full max-w-3xl">
            <LearnSetHeader
              studySets={studySets.map((set) => ({
                id: set.id,
                name: set.name,
              }))}
              initialStudySetId={
                currentStudySet.studySetId ?? studySets[0]?.id ?? null
              }
            />
            {selectedSet ? (
              <LearnSession
                studySetId={selectedSet.id}
                studySetName={selectedSet.name}
              />
            ) : (
              <div className="rounded-xl border bg-white p-4 sm:p-6">
                <p className="text-sm text-slate-600">
                  No set selected. Choose one from the navbar.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </HydrateClient>
  );
}
