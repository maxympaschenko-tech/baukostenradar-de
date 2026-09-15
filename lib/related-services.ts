import type { Service } from "@/lib/pricing";

const relatedServiceSlugs: Record<string, string[]> = {
  badsanierung: ["sanitaer", "fliesenleger", "elektriker", "heizung", "abriss-entsorgung"],
  maler: ["trockenbau", "fassade", "daemmung", "bodenleger", "fliesenleger"],
  fliesenleger: ["badsanierung", "sanitaer", "bodenleger", "estrich", "trockenbau"],
  elektriker: ["photovoltaik", "waermepumpe", "heizung", "badsanierung", "trockenbau"],
  dachsanierung: ["daemmung", "photovoltaik", "fenster", "fassade", "abriss-entsorgung"],
  bodenleger: ["estrich", "fliesenleger", "trockenbau", "heizung", "badsanierung"],
  trockenbau: ["maler", "elektriker", "daemmung", "bodenleger", "sanitaer"],
  sanitaer: ["badsanierung", "fliesenleger", "heizung", "elektriker", "abriss-entsorgung"],
  waermepumpe: ["heizung", "daemmung", "elektriker", "photovoltaik", "sanitaer"],
  photovoltaik: ["elektriker", "dachsanierung", "waermepumpe", "daemmung", "heizung"],
  daemmung: ["dachsanierung", "fassade", "fenster", "heizung", "waermepumpe"],
  kellerabdichtung: ["daemmung", "fassade", "abriss-entsorgung", "trockenbau", "estrich"],
  fenster: ["tueren", "daemmung", "fassade", "dachsanierung", "maler"],
  heizung: ["waermepumpe", "sanitaer", "elektriker", "daemmung", "badsanierung"],
  fassade: ["daemmung", "maler", "fenster", "dachsanierung", "abriss-entsorgung"],
  garten: ["abriss-entsorgung", "fassade", "dachsanierung", "tueren", "maler"],
  tueren: ["fenster", "maler", "trockenbau", "elektriker", "fassade"],
  estrich: ["bodenleger", "fliesenleger", "heizung", "trockenbau", "badsanierung"],
  "abriss-entsorgung": ["badsanierung", "trockenbau", "estrich", "fassade", "garten"],
};

export function getRelatedServices(
  serviceSlug: string,
  allServices: Service[],
  limit = 5,
): Service[] {
  const preferredSlugs = relatedServiceSlugs[serviceSlug] ?? [];
  const serviceBySlug = new Map(allServices.map((service) => [service.slug, service]));
  const preferred = preferredSlugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is Service => Boolean(service));
  const preferredSet = new Set(preferred.map((service) => service.slug));
  const fallback = allServices.filter(
    (service) => service.slug !== serviceSlug && !preferredSet.has(service.slug),
  );

  return [...preferred, ...fallback].slice(0, limit);
}
