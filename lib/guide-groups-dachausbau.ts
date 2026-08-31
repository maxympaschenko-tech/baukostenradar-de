import { guideGroups as wintergartenGuideGroups, type GuideGroup } from "./guide-groups-wintergarten";

export type { GuideGroup } from "./guide-groups-wintergarten";

const dachausbauGroup: GuideGroup = {
  eyebrow: "Dachausbau & Aufstockung",
  title: "Dachboden ausbauen, Gaube, Kniestock und Dachaufstockung kalkulieren",
  description: "Dachausbaukosten mit aktuellen 2026-Richtwerten für kompletten Wohnraumausbau, Dämmung, Innenausbau, Dachgauben, Kniestockerhöhung und neue Dachgeschosse vergleichen.",
  slugs: [
    "dachausbau-kosten",
    "dachboden-ausbauen-kosten-pro-qm",
    "dachgaube-kosten",
    "dach-anheben-kosten",
    "dachaufstockung-kosten",
  ],
};

const targetIndex = wintergartenGuideGroups.findIndex((group) => group.eyebrow === "Wintergarten & Glasanbau");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...wintergartenGuideGroups, dachausbauGroup]
  : [
      ...wintergartenGuideGroups.slice(0, targetIndex + 1),
      dachausbauGroup,
      ...wintergartenGuideGroups.slice(targetIndex + 1),
    ];
