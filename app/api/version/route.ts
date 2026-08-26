import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(
    {
      service: "BauKostenRadar",
      sha: process.env.NEXT_PUBLIC_GIT_SHA || "development",
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
