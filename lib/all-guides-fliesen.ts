import { allGuides as trockenbauGuides } from "./all-guides-trockenbau";
import { fliesenExpansionGuides } from "./guides-fliesen-expansion";

const expansionSlugs = new Set(fliesenExpansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = trockenbauGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...fliesenExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
