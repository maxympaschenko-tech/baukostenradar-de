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
    ];
  },
};

export default nextConfig;
