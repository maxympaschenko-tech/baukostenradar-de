import { allGuides as hausanbauGuides } from "./all-guides-hausanbau";
import { fertigkellerMassivkellerVergleichGuide } from "./guide-fertigkeller-massivkeller-vergleich";
import { kellerbauGuides } from "./guides-kellerbau";

const localKellerbauGuides = [
  ...kellerbauGuides,
  fertigkellerMassivkellerVergleichGuide,
];
const kellerbauSlugs = new Set(localKellerbauGuides.map((guide) => guide.slug));
const baseWithoutKellerbauGuides = hausanbauGuides.filter((guide) => !kellerbauSlugs.has(guide.slug));

export const allGuides = [...baseWithoutKellerbauGuides, ...localKellerbauGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
