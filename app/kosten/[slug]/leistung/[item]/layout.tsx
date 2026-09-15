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

  const title = `${item.name} Preis 2026`;
  const description = `${item.name}: konkreter Preis-Richtwert ${priceRange(item.low, item.high)} ${item.unit}. Preisdetail mit Rechner, Beispielmengen, Stadtmodell, Kostentreibern, Angebotscheck und Quelle.`;
  const sharedMetadata = socialMetadata({
    title,
    description,
    url: `/kosten/${service.slug}/leistung/${itemSlug}`,
  });

  return {
    ...sharedMetadata,
    title: {
      default: title,
      template: "%s – Preis & Rechner | BauKostenRadar",
    },
  };
}

export default function PriceItemLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
