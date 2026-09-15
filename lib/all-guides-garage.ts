import { allGuides as balconyGuides } from "./all-guides-balcony";
import { fertiggarageMassivgarageVergleichGuide } from "./guide-fertiggarage-massivgarage-vergleich";
import { garageCarportVergleichGuide } from "./guide-garage-carport-vergleich";
import { garageGuides } from "./guides-garage";

const localGarageGuides = [
  ...garageGuides,
  fertiggarageMassivgarageVergleichGuide,
  garageCarportVergleichGuide,
];
const garageSlugs = new Set(localGarageGuides.map((guide) => guide.slug));
const baseWithoutGarageGuides = balconyGuides.filter((guide) => !garageSlugs.has(guide.slug));

export const allGuides = [...baseWithoutGarageGuides, ...localGarageGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
