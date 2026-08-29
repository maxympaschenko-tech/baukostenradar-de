import type { Metadata } from "next";
import { getRegion, services } from "@/lib/pricing";
import { socialMetadata } from "@/lib/social-metadata";

const priceCount = services.reduce((sum, service) => sum + service.priceItems.length, 0);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region || region.value === "de") return {};

  const title = `Handwerker Kosten ${region.label} 2026: ${services.length} Gewerke`;
  const description = `Handwerker- und Renovierungskosten in ${region.label}: ${services.length} Gewerke, ${priceCount} Preispositionen, modellierte Richtwerte 2026, Rechner und regionale Einordnung.`;

  return socialMetadata({
    title,
    description,
    url: `/staedte/${region.slug}`,
  });
}

export default function CityLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
