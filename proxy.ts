import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const indexableContentRoots = ["/kosten", "/ratgeber", "/rechner", "/staedte"] as const;

function isIndexableContentPath(pathname: string) {
  return indexableContentRoots.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`),
  );
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const isDocumentRequest = request.method === "GET" || request.method === "HEAD";

  if (
    isDocumentRequest
    && request.nextUrl.search
    && isIndexableContentPath(request.nextUrl.pathname)
  ) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: [
    "/kosten/:path*",
    "/ratgeber/:path*",
    "/rechner/:path*",
    "/staedte/:path*",
  ],
};
