import { guideGroups as heizungGuideGroups, type GuideGroup } from "./guide-groups-heizung";

export type { GuideGroup } from "./guide-groups-heizung";

const waermepumpeGroup: GuideGroup = {
  eyebrow: "Wärmepumpe & Wartung",
  title: "Wärmepumpe im Neubau und Altbau 2026 vollständig kalkulieren",
  description: "Wärmepumpen-Gesamtbudget nach Neubau und Altbau aufteilen sowie Luft-Wasser-System, Installation, Elektrik, Heizkörperanpassung und Wartung mit aktuellen Richtwerten vergleichen.",
  slugs: [
    "waermepumpe-kosten-2026",
    "waermepumpe-altbau-kosten",
    "waermepumpe-neubau-kosten",
    "waermepumpe-installation-kosten",
    "waermepumpe-heizkoerper-kosten",
    "luft-wasser-waermepumpe-kosten",
    "waermepumpe-wartung-kosten",
  ],
};

const targetIndex = heizungGuideGroups.findIndex((group) => group.eyebrow === "Wärmepumpe & Wartung");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...heizungGuideGroups, waermepumpeGroup]
  : [
      ...heizungGuideGroups.slice(0, targetIndex),
      waermepumpeGroup,
      ...heizungGuideGroups.slice(targetIndex + 1),
    ];
