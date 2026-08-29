import type { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const leadPrice = service.priceItems[0];
  const description = `${service.shortTitle} Kosten 2026: ${leadPrice.name} ${priceRange(leadPrice.low, leadPrice.high)} ${leadPrice.unit}. Mit Preistabelle, Quellen, Stadtvergleich und Rechner.`;

  return socialMetadata({
    title: service.title,
    description,
    url: `/kosten/${service.slug}`,
  });
}

export default function ServiceCostLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
