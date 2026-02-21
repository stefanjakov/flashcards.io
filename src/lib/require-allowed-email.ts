"server-only";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ALLOWED_EMAILS = new Set([
  "jakovljevicstefan2004@gmail.com",
  "sandrapooptegeltijafart@gmail.com",
  "jakovlje@umich.edu",
].map((e) => e.toLowerCase()));

export async function requireAllowedEmail() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/unauthorized");
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  const primaryEmail = user.primaryEmailAddress?.emailAddress.toLowerCase();

  if (!primaryEmail || !ALLOWED_EMAILS.has(primaryEmail)) {
    redirect("/unauthorized");
  }

  return {
    userId,
    email: primaryEmail,
  };
}
