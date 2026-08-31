import { allGuides as wintergartenGuides } from "./all-guides-wintergarten";
import { dachausbauGuides } from "./guides-dachausbau";

const dachausbauSlugs = new Set(dachausbauGuides.map((guide) => guide.slug));
const baseWithoutDachausbauGuides = wintergartenGuides.filter((guide) => !dachausbauSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDachausbauGuides, ...dachausbauGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
