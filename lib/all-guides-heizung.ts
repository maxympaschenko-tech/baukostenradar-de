import { allGuides as tuerenGuides } from "./all-guides-tueren";
import { heizungGuides } from "./guides-heizung";

const heizungSlugs = new Set(heizungGuides.map((guide) => guide.slug));
const baseWithoutHeizungGuides = tuerenGuides.filter((guide) => !heizungSlugs.has(guide.slug));

export const allGuides = [...baseWithoutHeizungGuides, ...heizungGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
