import { allGuides as bodenGuides } from "./all-guides-boden";
import { sanitaerTradesExpansionGuidesA } from "./guides-sanitaer-trades-expansion-a";
import { sanitaerTradesExpansionGuidesB } from "./guides-sanitaer-trades-expansion-b";
import { spanndeckeGuide } from "./guide-spanndecke";
import { bauschuttEntsorgenGuide } from "./guide-bauschutt-entsorgen";
import { tuerblattTauschenGuide } from "./guide-tuerblatt-tauschen";
import { perimeterdaemmungKellerGuide } from "./guide-perimeterdaemmung-keller";
import { carportFundamentGuide } from "./guide-carport-fundament";
import { pooltechnikGuide } from "./guide-pooltechnik";
import { kellerdeckendaemmungGuide } from "./guide-kellerdeckendaemmung";
import { fassadendaemmungWdvsGuide } from "./guide-fassadendaemmung-wdvs";
import { sockeldaemmungGuide } from "./guide-sockeldaemmung";
import { kerndaemmungGuide } from "./guide-kerndaemmung";

const expansionGuides = [
  ...sanitaerTradesExpansionGuidesA,
  ...sanitaerTradesExpansionGuidesB,
  spanndeckeGuide,
  bauschuttEntsorgenGuide,
  tuerblattTauschenGuide,
  perimeterdaemmungKellerGuide,
  carportFundamentGuide,
  pooltechnikGuide,
  kellerdeckendaemmungGuide,
  fassadendaemmungWdvsGuide,
  sockeldaemmungGuide,
  kerndaemmungGuide,
];
const expansionSlugs = new Set(expansionGuides.map((guide) => guide.slug));
const baseWithoutDuplicates = bodenGuides.filter((guide) => !expansionSlugs.has(guide.slug));

export const allGuides = [...baseWithoutDuplicates, ...expansionGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
