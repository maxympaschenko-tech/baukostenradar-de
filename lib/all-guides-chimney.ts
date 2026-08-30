import { allGuides as garageGuides } from "./all-guides-garage";
import { chimneyGuides } from "./guides-chimney";

const chimneySlugs = new Set(chimneyGuides.map((guide) => guide.slug));
const baseWithoutChimneyGuides = garageGuides.filter((guide) => !chimneySlugs.has(guide.slug));

export const allGuides = [...baseWithoutChimneyGuides, ...chimneyGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
