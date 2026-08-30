import { allGuides as currentGuides } from "./all-guides-current";
import { balconyGuides } from "./guides-balcony";

const balconySlugs = new Set(balconyGuides.map((guide) => guide.slug));
const baseWithoutBalconyGuides = currentGuides.filter((guide) => !balconySlugs.has(guide.slug));

export const allGuides = [...baseWithoutBalconyGuides, ...balconyGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
