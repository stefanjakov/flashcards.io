import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const [progress, batch] = await Promise.all([
    api.flashCard.getLearnProgress(),
    api.flashCard.getLearnBatch({}),
  ]);

  return (
    <HydrateClient>
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Learn Debug</h1>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Progress</h2>
          <pre className="mt-2 rounded bg-slate-100 p-4 text-sm">
            {JSON.stringify(progress, null, 2)}
          </pre>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Batch</h2>
          {batch.length === 0 ? (
            <p className="mt-2 text-sm text-slate-600">
              No cards yet. Add some flashcards to see a batch.
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {batch.map((card) => (
                <li key={card.id} className="rounded border p-3 text-sm">
                  <div className="font-medium">Definition</div>
                  <div className="text-slate-700">{card.definition}</div>
                  <div className="mt-2 text-slate-500">
                    Term: {card.term}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </HydrateClient>
  );
}
