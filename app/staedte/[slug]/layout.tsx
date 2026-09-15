import type { Metadata } from "next";
import { getRegion, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";
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

export default async function CityLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const region = getRegion(slug);

  if (!region || region.value === "de") return children;

  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/staedte/${region.slug}`;
  const description = `Handwerker- und Renovierungskosten in ${region.label}: ${services.length} Gewerke, ${priceCount} Preispositionen, modellierte Richtwerte 2026, Rechner und regionale Einordnung.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Handwerker Kosten ${region.label} 2026`,
    url: canonicalUrl,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: base,
    },
    about: {
      "@type": "Place",
      name: region.label,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
