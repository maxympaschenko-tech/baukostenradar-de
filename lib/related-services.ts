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
  kellerabdichtung: ["daemmung", "kellerbau", "fassade", "abriss-entsorgung", "estrich"],
  fenster: ["tueren", "daemmung", "fassade", "dachsanierung", "maler"],
  heizung: ["waermepumpe", "sanitaer", "elektriker", "daemmung", "badsanierung"],
  fassade: ["daemmung", "maler", "fenster", "dachsanierung", "abriss-entsorgung"],
  garten: ["terrassenbau", "zaunbau", "poolbau", "abriss-entsorgung", "carport"],
  tueren: ["fenster", "maler", "trockenbau", "elektriker", "fassade"],
  estrich: ["bodenleger", "fliesenleger", "heizung", "trockenbau", "badsanierung"],
  maurer: ["hausanbau", "kellerbau", "garage", "abriss-entsorgung", "trockenbau"],
  treppen: ["bodenleger", "maler", "trockenbau", "maurer", "tueren"],
  kueche: ["elektriker", "sanitaer", "bodenleger", "fliesenleger", "maler"],
  balkon: ["terrassenbau", "fliesenleger", "daemmung", "fassade", "maler"],
  garage: ["carport", "maurer", "elektriker", "dachsanierung", "abriss-entsorgung"],
  carport: ["garage", "garten", "maurer", "dachsanierung", "elektriker"],
  schornstein: ["dachsanierung", "heizung", "maurer", "abriss-entsorgung", "daemmung"],
  zaunbau: ["garten", "terrassenbau", "carport", "maurer", "abriss-entsorgung"],
  poolbau: ["garten", "terrassenbau", "zaunbau", "elektriker", "sanitaer"],
  terrassenbau: ["garten", "terrassenueberdachung", "zaunbau", "poolbau", "balkon"],
  terrassenueberdachung: ["terrassenbau", "wintergarten", "garten", "carport", "fenster"],
  wintergarten: ["terrassenueberdachung", "fenster", "tueren", "daemmung", "elektriker"],
  dachausbau: ["dachsanierung", "daemmung", "trockenbau", "fenster", "elektriker"],
  hausanbau: ["maurer", "dachsanierung", "fenster", "elektriker", "trockenbau"],
  kellerbau: ["kellerabdichtung", "daemmung", "maurer", "abriss-entsorgung", "sanitaer"],
  "abriss-entsorgung": ["maurer", "trockenbau", "estrich", "fassade", "garten"],
};

export function getRelatedServices(
  serviceSlug: string,
  allServices: Service[],
  limit = 5,
): Service[] {
  const preferredSlugs = relatedServiceSlugs[serviceSlug];
  if (!preferredSlugs) return [];

  const serviceBySlug = new Map(allServices.map((service) => [service.slug, service]));
  return preferredSlugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is Service => Boolean(service))
    .slice(0, limit);
}
