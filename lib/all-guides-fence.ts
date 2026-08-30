import { allGuides as chimneyGuides } from "./all-guides-chimney";
import { fenceGuides } from "./guides-fence";

const fenceSlugs = new Set(fenceGuides.map((guide) => guide.slug));
const baseWithoutFenceGuides = chimneyGuides.filter((guide) => !fenceSlugs.has(guide.slug));

export const allGuides = [...baseWithoutFenceGuides, ...fenceGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
