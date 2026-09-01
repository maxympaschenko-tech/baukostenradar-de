import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getElektrikerGuideRegions,
  getGuideSilo as getElektrikerGuideSilo,
  type GuideSilo,
} from "./guide-silo-elektriker";

export type { GuideSilo } from "./guide-silo-elektriker";

const bodenExpansionSilos: Record<string, GuideSilo> = {
  "bodenleger-stundensatz": {
    serviceSlugs: ["bodenleger"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "bodenleger", itemSlug: "bodenleger-stundensatz" }),
    calculatorLabel: "Bodenleger-Stundensatz berechnen",
    regionalMode: "service",
  },
  "klick-vinyl-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "bodenleger", itemSlug: "klick-vinyl-verlegen" }),
    calculatorLabel: "Klick-Vinyl berechnen",
    regionalMode: "service",
  },
  "klebe-vinyl-verlegen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "bodenleger", itemSlug: "klebe-vinyl-verlegen" }),
    calculatorLabel: "Klebe-Vinyl berechnen",
    regionalMode: "service",
  },
  "bodenbelag-entfernen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "bodenleger", itemSlug: "alten-bodenbelag-entfernen-entsorgen" }),
    calculatorLabel: "Bodenrückbau berechnen",
    regionalMode: "service",
  },
  "boden-vorbereiten-ausgleichen-kosten-pro-qm": {
    serviceSlugs: ["bodenleger", "estrich"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "bodenleger", itemSlug: "untergrund-vorbereiten-ausgleichen" }),
    calculatorLabel: "Untergrundvorbereitung berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return bodenExpansionSilos[slug] ?? getElektrikerGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getElektrikerGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
