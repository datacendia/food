/**
 * Nothing is public except the login page.
 *
 * A deny-by-default list rather than an allow-by-default one: a page added
 * next month is private until someone deliberately says otherwise, which is
 * the right way round for an app carrying your cost base.
 *
 * This is the outer gate, not the permission model. It only asks whether
 * somebody is signed in; what they may then see is decided by
 * lib/permissions.ts on the server, per dish, per quote.
 */
import { NextResponse, type NextRequest } from "next/server";

const PUBLIC = ["/login", "/api/auth"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (PUBLIC.some((p) => pathname.startsWith(p))) return NextResponse.next();

  // The session cookie's presence is enough to route on. Whether it is valid is
  // settled by the server on the page itself - this check exists to redirect a
  // signed-out visitor, not to authorise a signed-in one.
  const signedIn = req.cookies.has("authjs.session-token") ||
                   req.cookies.has("__Secure-authjs.session-token");
  if (signedIn) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|svg|woff2)$).*)"]
};
