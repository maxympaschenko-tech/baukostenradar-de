import { guideGroups as poolGuideGroups, type GuideGroup } from "./guide-groups-pool";

export type { GuideGroup } from "./guide-groups-pool";

const terraceGroup: GuideGroup = {
  eyebrow: "Terrasse & Terrassenbau",
  title: "Terrassenbau, Holz, WPC, Pflaster und Dachterrasse kalkulieren",
  description: "Terrassenbau mit aktuellen 2026-Richtwerten für Gesamtprojekt, Holz- und WPC-Terrassen, Unterbau, Pflaster- und Natursteinflächen sowie Dachterrassen planen und vergleichen.",
  slugs: [
    "terrasse-bauen-kosten",
    "holzterrasse-kosten",
    "wpc-terrasse-kosten",
    "terrasse-unterbau-kosten",
    "terrasse-pflastern-kosten",
    "dachterrasse-kosten",
  ],
};

const terraceSlug = "terrasse-pflastern-kosten";
const baseGroups = poolGuideGroups.map((group) =>
  group.eyebrow === "Garten & Außenanlagen"
    ? { ...group, slugs: group.slugs.filter((slug) => slug !== terraceSlug) }
    : group,
);
const targetIndex = baseGroups.findIndex((group) => group.eyebrow === "Garten & Außenanlagen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...baseGroups, terraceGroup]
  : [
      ...baseGroups.slice(0, targetIndex),
      terraceGroup,
      ...baseGroups.slice(targetIndex),
    ];
