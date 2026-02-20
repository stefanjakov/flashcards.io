import { api, HydrateClient } from "~/trpc/server";
import { requireAllowedEmail } from "~/lib/require-allowed-email";
import CreateSetPopup from "./_components/create-set-popup";
import StudySetList from "./_components/study-set-list";

export default async function Create() {
  await requireAllowedEmail();
  const [studySets, currentStudySet] = await Promise.all([
    api.flashCard.getStudySets(),
    api.flashCard.getCurrentStudySet(),
  ]);

  return (
    <HydrateClient>
      <main>
        <div className="flex items-center gap-4 p-4">
          <h1 className="text-2xl">Your sets</h1>
          <CreateSetPopup />
        </div>

        <section id="study-sets" className="mt-8">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-brand-primary mb-6 text-2xl font-semibold">
              Your Study Sets
            </h2>

            <StudySetList
              initialStudySets={studySets}
              currentStudySetId={currentStudySet?.studySetId ?? null}
            />
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}
