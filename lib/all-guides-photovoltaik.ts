import { allGuides as waermepumpeGuides } from "./all-guides-waermepumpe";
import { photovoltaikExpansionGuides } from "./guides-photovoltaik-expansion";

const expansionSlugs = new Set(photovoltaikExpansionGuides.map((guide) => guide.slug));
const baseWithoutExpansionDuplicates = waermepumpeGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutExpansionDuplicates, ...photovoltaikExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
