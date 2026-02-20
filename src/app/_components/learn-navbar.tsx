"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FcGoogle } from "react-icons/fc";

export function LearnNavbar() {
  return (
    <nav className="border-brand-secondary text-brand-primary flex items-center justify-between border-b-4 bg-white px-4 py-3 sm:px-6 sm:py-4">
      <Link href="/">
        <div className="text-base sm:text-lg">Stefan&apos;s Study App</div>
      </Link>
      <div className="flex gap-2">
        <Link href="/learn">
          <div className="px-3 py-2 text-sm underline">Learn</div>
        </Link>
        <Link href="/create">
          <div className="px-3 py-2 text-sm underline">Create</div>
        </Link>
        <SignedOut>
          <SignInButton>
            <button
              aria-label="Sign out"
              className="border-brand-secondary hover:bg-brand-secondary flex items-center justify-center rounded-full border bg-white p-1.5 transition-colors"
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
