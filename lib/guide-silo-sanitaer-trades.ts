import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getBodenGuideRegions,
  getGuideSilo as getBodenGuideSilo,
  type GuideSilo,
} from "./guide-silo-boden";

export type { GuideSilo } from "./guide-silo-boden";

const silos: Record<string, GuideSilo> = {
  "sanitaer-anfahrt-kosten": {
    serviceSlugs: ["sanitaer"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer", itemSlug: "sanitaer-anfahrt" }),
    calculatorLabel: "Sanitär-Anfahrt berechnen",
    regionalMode: "service",
  },
  "wasserhahn-montieren-kosten": {
    serviceSlugs: ["sanitaer"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer", itemSlug: "wasserhahn-montieren" }),
    calculatorLabel: "Wasserhahn-Montage berechnen",
    regionalMode: "service",
  },
  "spuelkasten-reparieren-kosten": {
    serviceSlugs: ["sanitaer"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer", itemSlug: "spuelkasten-reparieren" }),
    calculatorLabel: "Spülkasten-Reparatur berechnen",
    regionalMode: "service",
  },
  "waschbecken-montieren-kosten": {
    serviceSlugs: ["sanitaer"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer", itemSlug: "waschbecken-montieren" }),
    calculatorLabel: "Waschbecken-Montage berechnen",
    regionalMode: "service",
  },
  "dusche-einbauen-kosten": {
    serviceSlugs: ["sanitaer", "badsanierung"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer", itemSlug: "dusche-einbauen" }),
    calculatorLabel: "Duschmontage berechnen",
    regionalMode: "service",
  },
  "badewanne-einbauen-kosten": {
    serviceSlugs: ["sanitaer", "badsanierung"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer", itemSlug: "badewanne-einbauen" }),
    calculatorLabel: "Badewannen-Montage berechnen",
    regionalMode: "service",
  },
  "rohrverstopfung-beseitigen-kosten": {
    serviceSlugs: ["sanitaer"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "sanitaer", itemSlug: "rohrverstopfung-beseitigen" }),
    calculatorLabel: "Rohrreinigung berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return silos[slug] ?? getBodenGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  return getGuideSilo(slug).serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getBodenGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
