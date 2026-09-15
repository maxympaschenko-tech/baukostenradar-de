import { createCostSocialImage, costSocialImageAlt, costSocialImageContentType, costSocialImageSize } from "@/lib/cost-social-image";
import { getPriceItem } from "@/lib/price-slug";
import { getService } from "@/lib/pricing";

export const dynamic = "force-static";
export const alt = costSocialImageAlt;
export const size = costSocialImageSize;
export const contentType = costSocialImageContentType;

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function range(low: number, high: number) {
  return low === high ? euro(low) : `${euro(low)} - ${euro(high)}`;
}

export default async function PriceItemOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string; item: string }>;
}) {
  const { slug, item: itemSlug } = await params;
  const service = getService(slug);
  const item = service ? getPriceItem(service, itemSlug) : undefined;

  if (!service || !item) {
    return createCostSocialImage({
      badge: "EINZELPREIS · 2026",
      title: "Handwerkerpreis im Detail",
      subtitle: "Richtwert, Stadtvergleich, Kostentreiber und nachvollziehbare Quelle.",
      metricLabel: "Preisorientierung",
      metric: "Kosten 2026",
      detail: "Konkrete Preispositionen für Bau, Sanierung und Renovierung.",
    });
  }

  return createCostSocialImage({
    badge: `${service.shortTitle.toUpperCase()} · EINZELPREIS 2026`,
    title: `${item.name}: Kosten 2026`,
    subtitle: "Mit Beispielrechnungen, Stadtvergleich, Kostentreibern und Datenquelle.",
    metricLabel: "Bundesweiter Richtwert",
    metric: `${range(item.low, item.high)} ${item.unit}`,
    detail: item.note ? item.note : `${service.shortTitle}: Preisposition aus der aktuellen BauKostenRadar-Datenbasis.`,
  });
}
