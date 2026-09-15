import { allGuides as balconyGuides } from "./all-guides-balcony";
import { fertiggarageMassivgarageVergleichGuide } from "./guide-fertiggarage-massivgarage-vergleich";
import { garageGuides } from "./guides-garage";

const localGarageGuides = [...garageGuides, fertiggarageMassivgarageVergleichGuide];
const garageSlugs = new Set(localGarageGuides.map((guide) => guide.slug));
const baseWithoutGarageGuides = balconyGuides.filter((guide) => !garageSlugs.has(guide.slug));

export const allGuides = [...baseWithoutGarageGuides, ...localGarageGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
