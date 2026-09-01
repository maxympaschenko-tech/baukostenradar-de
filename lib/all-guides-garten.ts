import { allGuides as photovoltaikGuides } from "./all-guides-photovoltaik";
import { gartenExpansionGuides } from "./guides-garten-expansion";

const expansionSlugs = new Set(gartenExpansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = photovoltaikGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...gartenExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
