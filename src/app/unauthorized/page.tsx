import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { FcGoogle } from "react-icons/fc";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] grid place-items-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center text-brand-primary shadow-md">
        <h1 className="text-2xl font-semibold">Unauthorized</h1>
        <p className="mt-3 text-sm text-slate-600">
          <strong> It looks like you are not Стефан Јаковљевић. </strong>Which probably means I should not let you use his study app.
        </p>
        <p className="mt-5 text-sm text-slate-600">Try logging in again</p>

        <SignedOut>
          <SignInButton>
            <button
              aria-label="Sign in"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-brand-secondary bg-white px-4 py-2 hover:bg-brand-secondary mt-3"
            >
              <FcGoogle className="h-5 w-5" />
              <span className="text-sm text-slate-600">
                Log in with Google
              </span>
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton>
            <button
              aria-label="Sign out"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-brand-secondary bg-white px-4 py-2 hover:bg-brand-secondary mt-3"
            >
              Log out
            </button>
          </SignOutButton>
        </SignedIn>

      </div>
    </main>
  );
}
