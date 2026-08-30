import { guideGroups as garageGuideGroups, type GuideGroup } from "./guide-groups-garage";

export type { GuideGroup } from "./guide-groups-garage";

const chimneyGroup: GuideGroup = {
  eyebrow: "Schornstein & Kamin",
  title: "Schornstein sanieren, Kamin bauen und Ofen anschließen",
  description: "Schornsteinsanierung, Edelstahl-Nachrüstung, Versottung, Schornsteinfeger, Kaminbau, Kaminkassette und Kaminofen mit aktuellen 2026-Richtwerten vergleichen.",
  slugs: [
    "schornstein-sanieren-kosten",
    "edelstahlschornstein-nachruesten-kosten",
    "versottung-schornstein-sanieren-kosten",
    "schornsteinfeger-kosten",
    "kamin-bauen-kosten",
    "kaminkassette-nachruesten-kosten",
    "kaminofen-kosten",
  ],
};

const targetIndex = garageGuideGroups.findIndex((group) => group.eyebrow === "Heizung & Energie");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...garageGuideGroups, chimneyGroup]
  : [
      ...garageGuideGroups.slice(0, targetIndex + 1),
      chimneyGroup,
      ...garageGuideGroups.slice(targetIndex + 1),
    ];
