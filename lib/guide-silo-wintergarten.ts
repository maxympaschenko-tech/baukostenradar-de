import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getTerraceCoverGuideRegions,
  getGuideSilo as getTerraceCoverGuideSilo,
  type GuideSilo,
} from "./guide-silo-terrace-cover";

export type { GuideSilo } from "./guide-silo-terrace-cover";

const wintergartenGuideSilos: Record<string, GuideSilo> = {
  "wintergarten-kosten": {
    serviceSlugs: ["wintergarten", "terrassenueberdachung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "wintergarten",
      itemSlug: "wintergarten-gesamtprojekt",
    }),
    calculatorLabel: "Wintergarten berechnen",
    regionalMode: "service",
  },
  "kaltwintergarten-kosten": {
    serviceSlugs: ["wintergarten", "terrassenueberdachung"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "wintergarten",
      itemSlug: "kaltwintergarten-durch-fachbetrieb",
    }),
    calculatorLabel: "Kaltwintergarten berechnen",
    regionalMode: "service",
  },
  "wohnwintergarten-kosten": {
    serviceSlugs: ["wintergarten"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "wintergarten",
      itemSlug: "wohnwintergarten-fachbetrieb",
    }),
    calculatorLabel: "Wohnwintergarten berechnen",
    regionalMode: "service",
  },
  "wintergarten-verglasung-kosten": {
    serviceSlugs: ["wintergarten"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "wintergarten",
      itemSlug: "wintergarten-dreifachverglasung",
    }),
    calculatorLabel: "Wintergarten-Verglasung berechnen",
    regionalMode: "service",
  },
  "wintergarten-fundament-kosten": {
    serviceSlugs: ["wintergarten"],
    calculatorHref: handwerkerCalculatorHref({
      serviceSlug: "wintergarten",
      itemSlug: "wintergarten-bodenplatte-gedaemmt",
    }),
    calculatorLabel: "Wintergarten-Fundament berechnen",
    regionalMode: "service",
  },
};

export function getGuideSilo(slug: string): GuideSilo {
  return wintergartenGuideSilos[slug] ?? getTerraceCoverGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return getTerraceCoverGuideRegions();
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
