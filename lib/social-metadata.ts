import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const socialImageAlt = "BauKostenRadar – Bau- und Renovierungskosten 2026";

export const openGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: socialImageAlt,
};

export const twitterImage = {
  url: "/twitter-image",
  alt: socialImageAlt,
};

type SocialMetadataInput = {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
};

export function socialMetadata({
  title,
  description,
  url,
  type = "website",
}: SocialMetadataInput): Metadata {
  return {
    openGraph: {
      type,
      locale: "de_DE",
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  };
}
