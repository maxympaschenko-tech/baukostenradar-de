import { allGuides as heizungGuides } from "./all-guides-heizung";
import { waermepumpeGuides } from "./guides-waermepumpe";

const waermepumpeSlugs = new Set(waermepumpeGuides.map((guide) => guide.slug));
const baseWithoutWaermepumpeGuides = heizungGuides.filter((guide) => !waermepumpeSlugs.has(guide.slug));

export const allGuides = [...baseWithoutWaermepumpeGuides, ...waermepumpeGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
