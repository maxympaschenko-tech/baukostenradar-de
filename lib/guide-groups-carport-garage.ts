import { guideGroups as wintergartenGuideGroups, type GuideGroup } from "./guide-groups-wintergarten";

export type { GuideGroup } from "./guide-groups-wintergarten";

const carportGarageGroup: GuideGroup = {
  eyebrow: "Carport & Garage",
  title: "Carport, Fertiggarage, Massivgarage und Fundament kalkulieren",
  description: "Aktuelle 2026-Richtwerte für Carport-Bausätze und Montage sowie Einzel-, Doppel-, Fertig- und Massivgaragen einschließlich Fundament und Nebenarbeiten vergleichen.",
  slugs: [
    "carport-kosten",
    "garage-bauen-kosten",
    "fertiggarage-kosten",
    "massivgarage-kosten",
    "garagenfundament-kosten",
  ],
};

const targetIndex = wintergartenGuideGroups.findIndex((group) => group.eyebrow === "Wintergarten & Glasanbau");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...wintergartenGuideGroups, carportGarageGroup]
  : [
      ...wintergartenGuideGroups.slice(0, targetIndex + 1),
      carportGarageGroup,
      ...wintergartenGuideGroups.slice(targetIndex + 1),
    ];
