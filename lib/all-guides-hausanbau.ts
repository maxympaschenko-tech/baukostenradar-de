import { allGuides as dachausbauGuides } from "./all-guides-dachausbau";
import { hausanbauGuides } from "./guides-hausanbau";

const hausanbauSlugs = new Set(hausanbauGuides.map((guide) => guide.slug));
const baseWithoutHausanbauGuides = dachausbauGuides.filter((guide) => !hausanbauSlugs.has(guide.slug));

export const allGuides = [...baseWithoutHausanbauGuides, ...hausanbauGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
