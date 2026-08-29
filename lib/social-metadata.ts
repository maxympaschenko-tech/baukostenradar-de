import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
