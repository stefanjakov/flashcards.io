"use client";

import Link from "next/link";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FcGoogle } from "react-icons/fc";

export function LearnNavbar() {
  return (
    <nav className="flex items-center justify-between border-b-4 border-brand-secondary px-4 py-3 sm:px-6 sm:py-4 bg-white text-brand-primary">
      <Link href="/">
        <div className="text-base sm:text-lg">flashcards.io</div>
      </Link>
      <div className="flex gap-2">
        <Link href="/learn">
          <div className="text-sm underline px-3 py-2 ">Learn</div>
        </Link>
        <Link href="/create">
          <div className="text-sm underline px-3 py-2 ">Create</div>
        </Link>
        <SignedOut>
          <SignInButton>
            <button
              aria-label="Sign out"
              className="flex items-center justify-center rounded-full border border-brand-secondary bg-white p-1.5 transition-colors hover:bg-brand-secondary"
            >
              <FcGoogle className="h-5 w-5" />
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
