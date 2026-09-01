import { allGuides as bodenGuides } from "./all-guides-boden";
import { sanitaerTradesExpansionGuidesA } from "./guides-sanitaer-trades-expansion-a";
import { sanitaerTradesExpansionGuidesB } from "./guides-sanitaer-trades-expansion-b";
import { spanndeckeGuide } from "./guide-spanndecke";
import { bauschuttEntsorgenGuide } from "./guide-bauschutt-entsorgen";

const expansionGuides = [
  ...sanitaerTradesExpansionGuidesA,
  ...sanitaerTradesExpansionGuidesB,
  spanndeckeGuide,
  bauschuttEntsorgenGuide,
];
const expansionSlugs = new Set(expansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = bodenGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...expansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
