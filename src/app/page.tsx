import Link from "next/link";
import { Button } from "~/components/ui/button";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-center text-4xl font-semibold">Stefan&apos;s Study App</h1>
        <Button className="bg-brand-primary border-brand-secondary hover:bg-brand-secondary hover:text-brand-primary border-2 text-lg">
          <Link href="/learn">Start learning</Link>
        </Button>
      </main>
    </HydrateClient>
  );
}
