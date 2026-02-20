export default function LearnLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <span
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-700"
        aria-label="Loading study set"
      />
    </main>
  );
}
