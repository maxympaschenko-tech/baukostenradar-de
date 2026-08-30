import { allGuides as balconyGuides } from "./all-guides-balcony";
import { garageGuides } from "./guides-garage";

const garageSlugs = new Set(garageGuides.map((guide) => guide.slug));
const baseWithoutGarageGuides = balconyGuides.filter((guide) => !garageSlugs.has(guide.slug));

export const allGuides = [...baseWithoutGarageGuides, ...garageGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
