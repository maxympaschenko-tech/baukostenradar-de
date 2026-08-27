import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
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
        destination: "/kosten/tueren",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/zementestrich-komplett",
        destination: "/kosten/estrich/leistung/zementestrich-verlegen",
        permanent: true,
      },
      {
        source: "/kosten/estrich/leistung/calciumsulfat-anhydritestrich",
        destination: "/kosten/estrich/leistung/fliessestrich",
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
        destination: "/ratgeber/6-innentueren-austauschen-kosten",
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
    ];
  },
};

export default nextConfig;