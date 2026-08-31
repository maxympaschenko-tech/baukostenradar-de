import { allGuides as terraceCoverGuides } from "./all-guides-terrace-cover";
import { wintergartenGuides } from "./guides-wintergarten";

const wintergartenSlugs = new Set(wintergartenGuides.map((guide) => guide.slug));
const baseWithoutWintergartenGuides = terraceCoverGuides.filter((guide) => !wintergartenSlugs.has(guide.slug));

export const allGuides = [...baseWithoutWintergartenGuides, ...wintergartenGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
