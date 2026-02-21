"server-only";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const ALLOWED_EMAIL = ["jakovljevicstefan2004@gmail.com", "sandrapooptegeltijafart@gmail.com"];

export async function requireAllowedEmail() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/unauthorized");
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const hasAllowedEmail = user.emailAddresses.some(
    (email) => email.emailAddress.toLowerCase() === ALLOWED_EMAIL[0] || email.emailAddress.toLowerCase() === ALLOWED_EMAIL[1],
  );

  if (!hasAllowedEmail) {
    redirect("/unauthorized");
  }

  return { userId, email: ALLOWED_EMAIL };
}
