import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function detectLocale(pathname: string, acceptLanguage: string): "sr" | "en" {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/sr")) return "sr";

  const prefersSerbian =
    acceptLanguage.toLowerCase().includes("sr") ||
    acceptLanguage.toLowerCase().includes("bs") ||
    acceptLanguage.toLowerCase().includes("hr");

  return prefersSerbian ? "sr" : "en";
}

function resolveRootLocale(acceptLanguage: string): "sr" | "en" {
  const prefersSerbian =
    acceptLanguage.toLowerCase().includes("sr") ||
    acceptLanguage.toLowerCase().includes("bs") ||
    acceptLanguage.toLowerCase().includes("hr");

  return prefersSerbian ? "sr" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const acceptLanguage = request.headers.get("accept-language") ?? "";

  if (pathname === "/") {
    const locale = resolveRootLocale(acceptLanguage);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  const response = NextResponse.next();
  response.headers.set("x-locale", detectLocale(pathname, acceptLanguage));
  return response;
}

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
