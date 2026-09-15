import { allGuides as terraceCoverGuides } from "./all-guides-terrace-cover";
import { kaltWohnwintergartenVergleichGuide } from "./guide-kalt-wohnwintergarten-vergleich";
import { wintergartenGuides } from "./guides-wintergarten";

const wintergartenExpansionGuides = [...wintergartenGuides, kaltWohnwintergartenVergleichGuide];
const wintergartenSlugs = new Set(wintergartenExpansionGuides.map((guide) => guide.slug));
const baseWithoutWintergartenGuides = terraceCoverGuides.filter((guide) => !wintergartenSlugs.has(guide.slug));

export const allGuides = [...baseWithoutWintergartenGuides, ...wintergartenExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
