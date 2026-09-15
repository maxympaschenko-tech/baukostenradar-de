import { allGuides as terraceGuides } from "./all-guides-terrace";
import { terrassendachGlasKunststoffVergleichGuide } from "./guide-terrassendach-glas-kunststoff-vergleich";
import { terraceCoverGuides } from "./guides-terrace-cover";

const terraceCoverExpansionGuides = [
  ...terraceCoverGuides,
  terrassendachGlasKunststoffVergleichGuide,
];
const terraceCoverSlugs = new Set(terraceCoverExpansionGuides.map((guide) => guide.slug));
const baseWithoutTerraceCoverGuides = terraceGuides.filter((guide) => !terraceCoverSlugs.has(guide.slug));

export const allGuides = [...baseWithoutTerraceCoverGuides, ...terraceCoverExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
