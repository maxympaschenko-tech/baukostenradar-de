import { allGuides as hausanbauGuides } from "./all-guides-hausanbau";
import { kellerbauGuides } from "./guides-kellerbau";

const kellerbauSlugs = new Set(kellerbauGuides.map((guide) => guide.slug));
const baseWithoutKellerbauGuides = hausanbauGuides.filter((guide) => !kellerbauSlugs.has(guide.slug));

export const allGuides = [...baseWithoutKellerbauGuides, ...kellerbauGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
