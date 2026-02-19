import { LearnDebug } from "~/app/_components/learn-debug";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Learn Debug</h1>
        <LearnDebug />
      </main>
    </HydrateClient>
  );
}
