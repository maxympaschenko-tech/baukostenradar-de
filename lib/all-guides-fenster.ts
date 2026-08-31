import { allGuides as kellerbauGuides } from "./all-guides-kellerbau";
import { fensterGuides } from "./guides-fenster";

const fensterSlugs = new Set(fensterGuides.map((guide) => guide.slug));
const baseWithoutFensterGuides = kellerbauGuides.filter((guide) => !fensterSlugs.has(guide.slug));

export const allGuides = [...baseWithoutFensterGuides, ...fensterGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
