import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getGartenGuideRegions,
  getGuideSilo as getGartenGuideSilo,
  type GuideSilo,
} from "./guide-silo-garten";

export type { GuideSilo } from "./guide-silo-garten";

const malerExpansionSilos: Record<string, GuideSilo> = {
  "maler-stundensatz": {
    serviceSlugs: ["maler"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "maler", itemSlug: "maler-stundensatz" }),
    calculatorLabel: "Maler-Stundensatz berechnen",
    regionalMode: "service",
  },
  "tapeten-entfernen-kosten-pro-qm": {
    serviceSlugs: ["maler"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "maler", itemSlug: "alte-tapeten-entfernen" }),
    calculatorLabel: "Tapeten entfernen berechnen",
    regionalMode: "service",
  },
  "innentuer-lackieren-kosten": {
    serviceSlugs: ["maler", "tueren"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "maler", itemSlug: "innentuer-inkl-zarge-lackieren" }),
    calculatorLabel: "Innentür lackieren berechnen",
    regionalMode: "service",
  },
  "fensterrahmen-lackieren-kosten": {
    serviceSlugs: ["maler", "fenster"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "maler", itemSlug: "fensterrahmen-lackieren" }),
    calculatorLabel: "Fensterrahmen berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return malerExpansionSilos[slug] ?? getGartenGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getGartenGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
