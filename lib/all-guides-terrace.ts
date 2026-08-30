import { allGuides as poolGuides } from "./all-guides-pool";
import { terraceGuides } from "./guides-terrace";

const terraceSlugs = new Set(terraceGuides.map((guide) => guide.slug));
const baseWithoutTerraceGuides = poolGuides.filter((guide) => !terraceSlugs.has(guide.slug));

export const allGuides = [...baseWithoutTerraceGuides, ...terraceGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
