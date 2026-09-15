import { allGuides as fenceGuides } from "./all-guides-fence";
import { gfkBetonpoolVergleichGuide } from "./guide-gfk-betonpool-vergleich";
import { poolGuides } from "./guides-pool";

const poolExpansionGuides = [...poolGuides, gfkBetonpoolVergleichGuide];
const poolSlugs = new Set(poolExpansionGuides.map((guide) => guide.slug));
const baseWithoutPoolGuides = fenceGuides.filter((guide) => !poolSlugs.has(guide.slug));

export const allGuides = [...baseWithoutPoolGuides, ...poolExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
