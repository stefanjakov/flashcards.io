"server-only";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ALLOWED_EMAILS = [
  "jakovljevicstefan2004@gmail.com",
  "sandrapooptegeltijafart@gmail.com",
  "jakovlje@umich.edu"
];

export async function requireAllowedEmail() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/unauthorized");
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  const matchedEmail = user.emailAddresses.find((email) =>
    ALLOWED_EMAILS.includes(email.emailAddress.toLowerCase())
  );

  if (!matchedEmail) {
    redirect("/unauthorized");
  }

  return {
    userId,
    email: matchedEmail.emailAddress,
  };
}
