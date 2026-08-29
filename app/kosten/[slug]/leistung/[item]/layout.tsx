import type { Metadata } from "next";
import { getPriceItem } from "@/lib/price-slug";
import { getService } from "@/lib/pricing";
import { socialMetadata } from "@/lib/social-metadata";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function priceRange(low: number, high: number) {
  return low === high ? euro(low) : `${euro(low)} - ${euro(high)}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; item: string }>;
}): Promise<Metadata> {
  const { slug, item: itemSlug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const item = getPriceItem(service, itemSlug);
  if (!item) return {};

  const title = `${item.name} Kosten 2026`;
  const description = `${item.name} 2026: Richtwert ${priceRange(item.low, item.high)} ${item.unit}. Mit Beispielrechnungen, Stadtvergleich, Kostentreibern, Angebots-Check und Quelle.`;

  return socialMetadata({
    title,
    description,
    url: `/kosten/${service.slug}/leistung/${itemSlug}`,
  });
}

export default function PriceItemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
