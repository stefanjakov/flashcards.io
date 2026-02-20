import { clerkClient, clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const ALLOWED_EMAIL = "jakovljevicstefan2004@gmail.com";

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;
  const isApiRoute = pathname.startsWith("/api") || pathname.startsWith("/trpc");

  if (pathname === "/" || pathname === "/unauthorized") {
    return NextResponse.next();
  }

  const { userId } = await auth();
  if (!userId) {
    if (isApiRoute) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const hasAllowedEmail = user.emailAddresses.some(
    (email) => email.emailAddress.toLowerCase() === ALLOWED_EMAIL,
  );

  if (!hasAllowedEmail) {
    if (isApiRoute) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}; 
