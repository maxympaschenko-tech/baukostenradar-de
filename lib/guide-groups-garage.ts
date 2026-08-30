import { guideGroups as balconyGuideGroups, type GuideGroup } from "./guide-groups-balcony";

export type { GuideGroup } from "./guide-groups-balcony";

const garageGroup: GuideGroup = {
  eyebrow: "Garage & Carport",
  title: "Garage, Fertiggarage, Carport und Garagentor kalkulieren",
  description: "Einzel- und Doppelgarage, Fertig- und Massivgarage, Garagenfundament, Garagentor sowie Holz- und Aluminiumcarports mit aktuellen 2026-Richtwerten vergleichen.",
  slugs: [
    "garage-bauen-kosten",
    "fertiggarage-kosten",
    "massivgarage-kosten",
    "garagenfundament-kosten-pro-qm",
    "garagentor-einbauen-kosten",
    "carport-kosten",
  ],
};

const targetIndex = balconyGuideGroups.findIndex((group) => group.eyebrow === "Garten & Außenanlagen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...balconyGuideGroups, garageGroup]
  : [
      ...balconyGuideGroups.slice(0, targetIndex),
      garageGroup,
      ...balconyGuideGroups.slice(targetIndex),
    ];
