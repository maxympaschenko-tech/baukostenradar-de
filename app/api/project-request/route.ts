import { spawn } from "node:child_process";
import { NextRequest, NextResponse } from "next/server";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestsByIp = new Map<string, number[]>();

function clean(value: unknown, max: number) {
  return typeof value === "string"
    ? value.replace(/\u0000/g, "").replace(/\r\n/g, "\n").trim().slice(0, max)
    : "";
}

function headerSafe(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function validEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    requestsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestsByIp.set(ip, recent);
  return false;
}

function sendMail(message: string) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn("/usr/sbin/sendmail", ["-t", "-i"], {
      stdio: ["pipe", "ignore", "pipe"],
    });

    let stderr = "";
    const timeout = setTimeout(() => {
      child.kill("SIGTERM");
      reject(new Error("sendmail timeout"));
    }, 10000);

    child.stderr.on("data", (chunk) => {
      stderr += String(chunk).slice(0, 1000);
    });
    child.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    child.on("close", (code) => {
      clearTimeout(timeout);
      if (code === 0) resolve();
      else reject(new Error(`sendmail exited with code ${code}: ${stderr}`));
    });

    child.stdin.end(message);
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== "https://baukostenradar.de" && origin !== "https://www.baukostenradar.de") {
    return NextResponse.json({ ok: false, error: "invalid_origin" }, { status: 403 });
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let input: Record<string, unknown>;
  try {
    input = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const honeypot = clean(input.website, 200);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const startedAt = Number(input.startedAt || 0);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 1500 || elapsed > 2 * 60 * 60 * 1000) {
    return NextResponse.json({ ok: false, error: "invalid_timing" }, { status: 400 });
  }

  const serviceSlug = clean(input.service, 80);
  const citySlug = clean(input.city, 80);
  const postcode = clean(input.postcode, 16);
  const budget = clean(input.budget, 80);
  const timing = clean(input.timing, 100);
  const details = clean(input.details, 2500);
  const name = clean(input.name, 120);
  const email = clean(input.email, 254).toLowerCase();
  const phone = clean(input.phone, 80);
  const source = clean(input.source, 180) || "direct";

  const service = services.find((item) => item.slug === serviceSlug);
  const city = citySlug === "andere-region"
    ? { label: "Andere Region in Deutschland" }
    : regions.find((item) => item.slug === citySlug && item.value !== "de");

  if (!service || !city || !name || !details || !validEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const safePostcode = /^[0-9]{5}$/.test(postcode) ? postcode : postcode || "nicht angegeben";
  const subject = `Projektanfrage: ${service.shortTitle} - ${city.label}`;
  const encodedSubject = Buffer.from(subject, "utf8").toString("base64");
  const body = [
    "Neue Projektanfrage über BauKostenRadar",
    "",
    `Leistung: ${service.shortTitle}`,
    `Ort: ${city.label}`,
    `PLZ: ${safePostcode}`,
    `Budget: ${budget || "Noch offen"}`,
    `Zeitrahmen: ${timing || "nicht angegeben"}`,
    `Quelle: ${source}`,
    "",
    "Projektbeschreibung:",
    details,
    "",
    "Kontaktdaten:",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "nicht angegeben"}`,
  ].join("\n");

  const message = [
    `To: ${siteConfig.email}`,
    `From: BauKostenRadar <${siteConfig.email}>`,
    `Reply-To: ${headerSafe(email)}`,
    `Subject: =?UTF-8?B?${encodedSubject}?=`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    body,
  ].join("\n");

  try {
    await sendMail(message);
    return NextResponse.json(
      { ok: true },
      {
        headers: {
          "Cache-Control": "no-store",
          "X-Robots-Tag": "noindex, nofollow",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "mail_delivery_failed" },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
          "X-Robots-Tag": "noindex, nofollow",
        },
      },
    );
  }
}
