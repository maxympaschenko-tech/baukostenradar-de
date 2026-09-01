import { allGuides as malerGuides } from "./all-guides-maler";
import { trockenbauExpansionGuidesA } from "./guides-trockenbau-expansion-a";
import { trockenbauExpansionGuidesB } from "./guides-trockenbau-expansion-b";

const trockenbauExpansionGuides = [...trockenbauExpansionGuidesA, ...trockenbauExpansionGuidesB];
const expansionSlugs = new Set(trockenbauExpansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = malerGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...trockenbauExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
