import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getKellerbauGuideRegions,
  getGuideSilo as getKellerbauGuideSilo,
  type GuideSilo,
} from "./guide-silo-kellerbau";

export type { GuideSilo } from "./guide-silo-kellerbau";

const fensterGuideSilos: Record<string, GuideSilo> = {
  "fenster-rahmenmaterial-kosten": {
    serviceSlugs: ["fenster"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fenster",
      itemSlug: "kunststofffenster-1300-x-1300-mm-dreifachverglasung",
    }),
    calculatorLabel: "Fenster nach Rahmenmaterial berechnen",
    regionalMode: "service",
  },
  "waermeschutzfenster-kosten": {
    serviceSlugs: ["fenster", "daemmung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fenster",
      itemSlug: "waermeschutzfenster-1100-x-1400-mm",
    }),
    calculatorLabel: "Wärmeschutzfenster berechnen",
    regionalMode: "service",
  },
  "schallschutzfenster-kosten": {
    serviceSlugs: ["fenster"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fenster",
      itemSlug: "schallschutzfenster-kunststoff-bis-40-db",
    }),
    calculatorLabel: "Schallschutzfenster berechnen",
    regionalMode: "service",
  },
  "sicherheitsglas-vsg-fenster-kosten": {
    serviceSlugs: ["fenster"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fenster",
      itemSlug: "kunststofffenster-vsg-beidseitig-1300-x-1300-mm",
    }),
    calculatorLabel: "VSG-Fenster berechnen",
    regionalMode: "service",
  },
  "fenster-rollladen-kosten": {
    serviceSlugs: ["fenster"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "fenster",
      itemSlug: "neues-fenster-mit-rollladen-inklusive-einbau",
    }),
    calculatorLabel: "Fenster mit Rollladen berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return fensterGuideSilos[slug] ?? getKellerbauGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getKellerbauGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
