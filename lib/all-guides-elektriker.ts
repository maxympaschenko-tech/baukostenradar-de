import { allGuides as fliesenGuides } from "./all-guides-fliesen";
import { elektrikerExpansionGuides } from "./guides-elektriker-expansion";

const expansionSlugs = new Set(elektrikerExpansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = fliesenGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...elektrikerExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
