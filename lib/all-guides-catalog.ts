import { allGuides as baseAllGuides } from "./all-guides";
import { doorGuides } from "./guides-doors";

const doorRelatedLinks = {
  kunststoff: {
    label: "Haustür Kunststoff Kosten",
    href: "/ratgeber/haustuer-kunststoff-kosten",
  },
  rc2: {
    label: "Haustür Holz/Alu RC2 Kosten",
    href: "/ratgeber/haustuer-rc2-kosten",
  },
} as const;

const masonryRelatedLinks = {
  innenwand: {
    label: "Innenwand mauern Kosten",
    href: "/ratgeber/innenwand-mauern-kosten",
  },
  kalksandstein: {
    label: "Kalksandstein-Mauerwerk Kosten",
    href: "/ratgeber/kalksandstein-mauerwerk-kosten-pro-qm",
  },
  poroton: {
    label: "Poroton-Mauerwerk Kosten",
    href: "/ratgeber/poroton-mauerwerk-kosten-pro-qm",
  },
  porenbeton: {
    label: "Porenbeton-Mauerwerk Kosten",
    href: "/ratgeber/porenbeton-mauerwerk-kosten-pro-qm",
  },
  klinker: {
    label: "Klinkerfassade und Verblendmauerwerk Kosten",
    href: "/ratgeber/klinkerfassade-kosten-pro-qm",
  },
  bodenplatte: {
    label: "Bodenplatte Kosten",
    href: "/ratgeber/bodenplatte-kosten-pro-qm",
  },
  klinkerCalculator: {
    label: "Klinker-Verblendmauerwerk berechnen",
    href: "/rechner/handwerkerkosten?gewerk=maurer&leistung=klinker-verblendmauerwerk",
  },
} as const;

const relatedByGuide: Record<string, Array<{ label: string; href: string }>> = {
  "haustuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
  "innentuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
  "innenwand-mauern-kosten": [masonryRelatedLinks.klinker],
  "kalksandstein-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "poroton-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "porenbeton-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "bodenplatte-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "klinkerfassade-kosten-pro-qm": [
    masonryRelatedLinks.innenwand,
    masonryRelatedLinks.kalksandstein,
    masonryRelatedLinks.poroton,
    masonryRelatedLinks.porenbeton,
    masonryRelatedLinks.bodenplatte,
    masonryRelatedLinks.klinkerCalculator,
  ],
};

const enrichedBaseGuides = baseAllGuides.map((guide) => {
  const candidates = relatedByGuide[guide.slug];
  if (!candidates) return guide;

  const missingLinks = candidates.filter(
    (candidate) => !guide.related.some((link) => link.href === candidate.href),
  );
  if (missingLinks.length === 0) return guide;

  return { ...guide, related: [...guide.related, ...missingLinks] };
});

export const allGuides = [...enrichedBaseGuides, ...doorGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
