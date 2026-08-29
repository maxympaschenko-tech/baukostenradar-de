import type { Metadata } from "next";
import { getRegion, getService } from "@/lib/pricing";
import { socialMetadata } from "@/lib/social-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const service = getService(slug);
  const region = getRegion(city);
  if (!service || !region || region.value === "de") return {};

  const title = `${service.shortTitle} Kosten ${region.label} 2026`;
  const description = `${service.shortTitle}-Kosten in ${region.label}: modellierte Richtwerte 2026 mit regional angepasster Preistabelle, Quellen und Erklärung des Standortfaktors.`;

  return socialMetadata({
    title,
    description,
    url: `/kosten/${service.slug}/${region.slug}`,
  });
}

export default function LocalServiceCostLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
