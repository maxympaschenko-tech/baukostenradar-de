import { allGuides as catalogGuides } from "./all-guides-catalog";
import { hostingerExpansionGuides } from "./guides-hostinger-expansion";

const expansionSlugs = new Set(hostingerExpansionGuides.map((guide) => guide.slug));

const baseWithoutReplacedGuides = catalogGuides.filter(
  (guide) => !expansionSlugs.has(guide.slug),
);

export const allGuides = [...baseWithoutReplacedGuides, ...hostingerExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
