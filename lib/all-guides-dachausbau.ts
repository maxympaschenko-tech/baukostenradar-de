import { allGuides as wintergartenGuides } from "./all-guides-wintergarten";
import { dachgaubeDachfensterVergleichGuide } from "./guide-dachgaube-dachfenster-vergleich";
import { dachausbauGuides } from "./guides-dachausbau-current";

const localDachausbauGuides = [
  ...dachausbauGuides,
  dachgaubeDachfensterVergleichGuide,
];
const dachausbauSlugs = new Set(localDachausbauGuides.map((guide) => guide.slug));
const baseWithoutDachausbauGuides = wintergartenGuides.filter((guide) => !dachausbauSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDachausbauGuides, ...localDachausbauGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
