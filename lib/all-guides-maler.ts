import { allGuides as gartenGuides } from "./all-guides-garten";
import { malerExpansionGuides } from "./guides-maler-expansion";

const expansionSlugs = new Set(malerExpansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = gartenGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...malerExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
