import { allGuides as elektrikerGuides } from "./all-guides-elektriker";
import { bodenExpansionGuidesA } from "./guides-boden-expansion-a";
import { bodenExpansionGuidesB } from "./guides-boden-expansion-b";

const bodenExpansionGuides = [...bodenExpansionGuidesA, ...bodenExpansionGuidesB];
const expansionSlugs = new Set(bodenExpansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = elektrikerGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...bodenExpansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
