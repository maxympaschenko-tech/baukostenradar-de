import { guideGroups as malerGuideGroups, type GuideGroup } from "./guide-groups-maler";

export type { GuideGroup } from "./guide-groups-maler";

const trockenbauGroup: GuideGroup = {
  eyebrow: "Trockenbau & Oberflächen",
  title: "Trockenbauwände, Decken, Dachschrägen und Spachtelqualität kalkulieren",
  description: "Trockenbau mit aktuellen 2026-Richtwerten für Wände, Holz-Trennwände, Vorsatzschalen, abgehängte Decken, Dachschrägen, Q3/Q4 und Stundensätze vergleichen.",
  slugs: [
    "trockenbau-kosten-pro-qm",
    "trockenbauer-stundensatz",
    "trockenbauwand-kosten-pro-qm",
    "trennwand-holz-kosten-pro-qm",
    "vorsatzschale-kosten-pro-qm",
    "decke-abhaengen-kosten-pro-qm",
    "dachschraege-verkleiden-kosten-pro-qm",
    "verspachtelung-q3-kosten-pro-qm",
    "verspachtelung-q4-kosten-pro-qm",
  ],
};

const targetIndex = malerGuideGroups.findIndex((group) => group.eyebrow === "Trockenbau & Oberflächen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...malerGuideGroups, trockenbauGroup]
  : [
      ...malerGuideGroups.slice(0, targetIndex),
      trockenbauGroup,
      ...malerGuideGroups.slice(targetIndex + 1),
    ];
