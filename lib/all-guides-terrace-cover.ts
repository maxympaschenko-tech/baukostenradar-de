import { allGuides as terraceGuides } from "./all-guides-terrace";
import { terraceCoverGuides } from "./guides-terrace-cover";

const terraceCoverSlugs = new Set(terraceCoverGuides.map((guide) => guide.slug));
const baseWithoutTerraceCoverGuides = terraceGuides.filter((guide) => !terraceCoverSlugs.has(guide.slug));

export const allGuides = [...baseWithoutTerraceCoverGuides, ...terraceCoverGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
