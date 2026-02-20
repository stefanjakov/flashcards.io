import Link from "next/link";
import { Button } from "~/components/ui/button";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl font-semibold text-center">flashcards.io</h1>
        <Button className="bg-brand-primary border-2 border-brand-secondary text-lg hover:bg-brand-secondary hover:text-brand-primary">
          <Link href="/learn">Start learning</Link>
        </Button>
      </main>
    </HydrateClient>
  );
}
