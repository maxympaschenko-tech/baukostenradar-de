import { allGuides as dachausbauGuides } from "./all-guides-dachausbau";
import { hausanbauDachaufstockungVergleichGuide } from "./guide-hausanbau-dachaufstockung-vergleich";
import { hausanbauGuides } from "./guides-hausanbau";

const localHausanbauGuides = [...hausanbauGuides, hausanbauDachaufstockungVergleichGuide];
const hausanbauSlugs = new Set(localHausanbauGuides.map((guide) => guide.slug));
const baseWithoutHausanbauGuides = dachausbauGuides.filter((guide) => !hausanbauSlugs.has(guide.slug));

export const allGuides = [...baseWithoutHausanbauGuides, ...localHausanbauGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
