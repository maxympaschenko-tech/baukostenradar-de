import { allGuides as fensterGuides } from "./all-guides-fenster";
import { tuerenGuides } from "./guides-tueren";

const tuerenSlugs = new Set(tuerenGuides.map((guide) => guide.slug));
const baseWithoutTuerenGuides = fensterGuides.filter((guide) => !tuerenSlugs.has(guide.slug));

export const allGuides = [...baseWithoutTuerenGuides, ...tuerenGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
