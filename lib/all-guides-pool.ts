import { allGuides as fenceGuides } from "./all-guides-fence";
import { poolGuides } from "./guides-pool";

const poolSlugs = new Set(poolGuides.map((guide) => guide.slug));
const baseWithoutPoolGuides = fenceGuides.filter((guide) => !poolSlugs.has(guide.slug));

export const allGuides = [...baseWithoutPoolGuides, ...poolGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
