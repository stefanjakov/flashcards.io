"use client";

import Link from "next/link";

export function LearnNavbar() {
  return (
    <nav className="flex items-center justify-between border-b px-4 py-3 sm:px-6 sm:py-4">
      <Link href="/">
        <div className="text-base sm:text-lg">flashcards.io</div>
      </Link>
      <Link href="/learn">
        <div className="text-sm text-brand-secondary">Learn</div>
      </Link>
    </nav>
  );
}
