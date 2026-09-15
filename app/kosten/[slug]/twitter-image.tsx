import { createCostSocialImage, costSocialImageAlt, costSocialImageContentType, costSocialImageSize } from "@/lib/cost-social-image";
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

export default async function CostTwitterImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createCostSocialImage({
      badge: "HANDWERKERKOSTEN · 2026",
      title: "Handwerkerkosten transparent vergleichen",
      subtitle: "Richtwerte, Rechner, Quellen und regionale Preisorientierung für Deutschland.",
      metricLabel: "Datenbasis",
      metric: "Kosten 2026",
      detail: "BauKostenRadar bündelt strukturierte Preispositionen für Renovierung und Bau.",
    });
  }

  const lead = service.priceItems[0];

  return createCostSocialImage({
    badge: `${service.shortTitle.toUpperCase()} · KOSTEN 2026`,
    title: service.title,
    subtitle: `${service.priceItems.length} Preispositionen mit Quellen, Stadtvergleich und Rechner.`,
    metricLabel: "Beispiel-Richtwert",
    metric: lead ? `${range(lead.low, lead.high)} ${lead.unit}` : "Preise 2026",
    detail: lead ? lead.name : "Bundesweite Richtwerte und regionale Einordnung.",
  });
}
