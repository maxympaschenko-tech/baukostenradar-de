import { createCostSocialImage, costSocialImageAlt, costSocialImageContentType, costSocialImageSize } from "@/lib/cost-social-image";
import { getRegion, getService } from "@/lib/pricing";

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
  return Math.round(low) === Math.round(high) ? euro(low) : `${euro(low)} - ${euro(high)}`;
}

export default async function CityCostOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const service = getService(slug);
  const region = getRegion(city);

  if (!service || !region || region.value === "de") {
    return createCostSocialImage({
      badge: "REGIONALMODELL · 2026",
      title: "Handwerkerkosten nach Stadt vergleichen",
      subtitle: "Transparent modellierte Preisorientierung auf Basis bundesweiter Richtwerte.",
      metricLabel: "Einordnung",
      metric: "8 Städte",
      detail: "Regionalfaktoren dienen der Budgetplanung und sind keine lokal erhobenen Festpreise.",
    });
  }

  const lead = service.priceItems[0];
  const percent = Math.round((region.factor - 1) * 100);

  return createCostSocialImage({
    badge: `REGIONALMODELL · ${region.label.toUpperCase()} · 2026`,
    title: `${service.shortTitle} Kosten ${region.label} 2026`,
    subtitle: "Modellierte Richtwerte aus bundesweiten Basispreisen mit transparentem Standortfaktor.",
    metricLabel: "Modellierter Richtwert",
    metric: lead ? `${range(lead.low * region.factor, lead.high * region.factor)} ${lead.unit}` : "Preise 2026",
    detail: lead
      ? `${lead.name} · Standortfaktor ${percent >= 0 ? "+" : ""}${percent} % · keine lokal erhobenen Festpreise.`
      : `Standortfaktor ${percent >= 0 ? "+" : ""}${percent} % · keine lokal erhobenen Festpreise.`,
  });
}
