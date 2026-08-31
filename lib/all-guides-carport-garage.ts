import { allGuides as wintergartenGuides } from "./all-guides-wintergarten";
import { carportGarageGuides } from "./guides-carport-garage";

const carportGarageSlugs = new Set(carportGarageGuides.map((guide) => guide.slug));
const baseWithoutCarportGarageGuides = wintergartenGuides.filter((guide) => !carportGarageSlugs.has(guide.slug));

export const allGuides = [...baseWithoutCarportGarageGuides, ...carportGarageGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
