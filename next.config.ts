import { execSync } from "node:child_process";
import type { NextConfig } from "next";

function resolveGitSha() {
  const explicitSha = process.env.NEXT_PUBLIC_GIT_SHA?.trim();
  if (explicitSha) return explicitSha;

  try {
    return execSync("git rev-parse HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "development";
  }
}

const liveCatalogHeaders = [
  { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, max-age=0, s-maxage=0" },
  { key: "CDN-Cache-Control", value: "no-store" },
  { key: "Vercel-CDN-Cache-Control", value: "no-store" },
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_GIT_SHA: resolveGitSha(),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/ratgeber",
        headers: liveCatalogHeaders,
      },
      {
        source: "/quellen",
        headers: liveCatalogHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.baukostenradar.de",
          },
        ],
        destination: "https://baukostenradar.de/:path*",
        permanent: true,
      },
      {
        source: "/kosten/tueren/leistung/innentuer-einbauen-inkl-zarge",
        destination: "/kosten/tueren/leistung/innentuer-mit-zarge-inkl-montage",
        permanent: true,
      },
      {
        source: "/kosten/tueren/leistung/tuer-lackieren-mit-zarge",
        destination: "/kosten/maler/leistung/innentuer-inkl-zarge-lackieren",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/zementestrich-komplett",
        destination: "/kosten/estrich/leistung/zementestrich-verlegen",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/calciumsulfat-anhydritestrich",
        destination: "/kosten/estrich/leistung/fliessestrich-verlegen",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/fliessestrich",
        destination: "/kosten/estrich/leistung/fliessestrich-verlegen",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/trockenestrich",
        destination: "/kosten/estrich/leistung/trockenestrich-verlegen",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/gussasphaltestrich",
        destination: "/kosten/estrich",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/sichtestrich",
        destination: "/kosten/estrich",
        permanent: true,
      },
      {
        source: "/ratgeber/tuer-lackieren-kosten",
        destination: "/ratgeber/innentuer-lackieren-kosten",
        permanent: true,
      },
      {
        source: "/ratgeber/anhydritestrich-kosten-pro-qm",
        destination: "/ratgeber/fliessestrich-kosten-pro-qm",
        permanent: true,
      },
      {
        source: "/ratgeber/gussasphaltestrich-kosten-pro-qm",
        destination: "/ratgeber/estrich-100-qm-kosten",
        permanent: true,
      },
      {
        source: "/ratgeber/sichtestrich-kosten-pro-qm",
        destination: "/ratgeber/estrich-100-qm-kosten",
        permanent: true,
      },
      {
        source: "/ratgeber/estrich-zement-oder-anhydrit-kosten",
        destination: "/ratgeber/estrich-100-qm-kosten",
        permanent: true,
      },
      {
        source: "/ratgeber/kellerdeckendaemmung-kosten-pro-qm",
        destination: "/ratgeber/daemmung-kellerdecke-kosten-pro-qm",
        permanent: true,
      },
      {
        source: "/ratgeber/perimeterdaemmung-keller-kosten",
        destination: "/ratgeber/perimeterdaemmung-kosten-pro-qm",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
