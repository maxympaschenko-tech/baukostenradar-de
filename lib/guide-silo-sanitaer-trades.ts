import { handwerkerCalculatorHref } from "@/lib/calculator-links";
import { services } from "@/lib/pricing";
import {
  getGuideRegions as getBodenGuideRegions,
  getGuideSilo as getBodenGuideSilo,
  type GuideSilo,
} from "./guide-silo-boden";

export type { GuideSilo } from "./guide-silo-boden";

const silos: Record<string, GuideSilo> = {
  "spanndecke-kosten-pro-qm": {
    serviceSlugs: ["trockenbau"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "trockenbau", itemSlug: "spanndecke" }),
    calculatorLabel: "Spanndecke berechnen",
    regionalMode: "service",
  },
  "bauschutt-entsorgen-kosten": {
    serviceSlugs: ["abriss-entsorgung"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "abriss-entsorgung", itemSlug: "bauschutt-entsorgen" }),
    calculatorLabel: "Bauschutt entsorgen berechnen",
    regionalMode: "service",
  },
  "tuerblatt-tauschen-kosten": {
    serviceSlugs: ["tueren"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "tueren", itemSlug: "tuerblatt-tauschen-montage" }),
    calculatorLabel: "Türblatt-Tausch berechnen",
    regionalMode: "service",
  },
  "perimeterdaemmung-keller-kosten": {
    serviceSlugs: ["kellerbau"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "kellerbau", itemSlug: "perimeterdaemmung-keller-komplett" }),
    calculatorLabel: "Perimeterdämmung berechnen",
    regionalMode: "service",
  },
  "carport-fundament-kosten": {
    serviceSlugs: ["carport"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "carport", itemSlug: "carport-fundamente-komplett" }),
    calculatorLabel: "Carport-Fundament berechnen",
    regionalMode: "service",
  },
  "pooltechnik-kosten": {
    serviceSlugs: ["poolbau"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "poolbau", itemSlug: "filteranlage" }),
    calculatorLabel: "Pooltechnik berechnen",
    regionalMode: "service",
  },
  "daemmung-kellerdecke-kosten-pro-qm": {
    serviceSlugs: ["daemmung"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "daemmung", itemSlug: "kellerdeckendaemmung-inkl-montage" }),
    calculatorLabel: "Kellerdeckendämmung berechnen",
    regionalMode: "service",
  },
  "sockeldaemmung-kosten": {
    serviceSlugs: ["daemmung"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "daemmung", itemSlug: "sockeldaemmung" }),
    calculatorLabel: "Sockeldämmung berechnen",
    regionalMode: "service",
  },
  "daemmung-oberste-geschossdecke-kosten-pro-qm": {
    serviceSlugs: ["daemmung"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "daemmung", itemSlug: "oberste-geschossdecke-daemmen-begehbar" }),
    calculatorLabel: "Oberste Geschossdecke berechnen",
    regionalMode: "service",
  },
  "kerndaemmung-kosten-pro-qm": {
    serviceSlugs: ["daemmung", "fassade"],
    calculatorHref: handwerkerCalculatorHref({ serviceSlug: "daemmung", itemSlug: "kerndaemmung-einblasdaemmung-fassade" }),
    calculatorLabel: "Kerndämmung berechnen",
    regionalMode: "service",
  },
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
