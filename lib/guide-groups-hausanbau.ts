import { guideGroups as dachausbauGuideGroups, type GuideGroup } from "./guide-groups-dachausbau";

export type { GuideGroup } from "./guide-groups-dachausbau";

const hausanbauGroup: GuideGroup = {
  eyebrow: "Hausanbau & Wohnraumerweiterung",
  title: "Hausanbau nach Größe, Bauweise, Rohbau und Innenausbau kalkulieren",
  description: "Hausanbaukosten mit aktuellen 2026-Richtwerten für 20 bis 60 m², Massiv-, Holz- und Fertigbau, Rohbau, Fundament und Innenausbau vergleichen.",
  slugs: [
    "hausanbau-kosten",
    "hausanbau-20-30-50-qm-kosten",
    "hausanbau-massiv-holz-fertigbau-kosten",
    "hausanbau-rohbau-fundament-kosten",
    "hausanbau-innenausbau-kosten",
  ],
};

const targetIndex = dachausbauGuideGroups.findIndex((group) => group.eyebrow === "Dachausbau & Aufstockung");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...dachausbauGuideGroups, hausanbauGroup]
  : [
      ...dachausbauGuideGroups.slice(0, targetIndex + 1),
      hausanbauGroup,
      ...dachausbauGuideGroups.slice(targetIndex + 1),
    ];
