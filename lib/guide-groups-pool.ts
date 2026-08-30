import { guideGroups as fenceGuideGroups, type GuideGroup } from "./guide-groups-fence";

export type { GuideGroup } from "./guide-groups-fence";

const poolGroup: GuideGroup = {
  eyebrow: "Pool & Schwimmbad",
  title: "Poolbau, GFK-Pool, Betonpool und Betriebskosten kalkulieren",
  description: "Poolbau mit aktuellen 2026-Richtwerten für GFK-, Beton-, Styropor- und Edelstahlpools, Erdarbeiten sowie laufende Poolkosten planen und vergleichen.",
  slugs: [
    "pool-bauen-kosten",
    "gfk-pool-kosten",
    "betonpool-kosten",
    "pool-erdarbeiten-kosten",
    "pool-betriebskosten",
  ],
};

const targetIndex = fenceGuideGroups.findIndex((group) => group.eyebrow === "Garten & Außenanlagen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...fenceGuideGroups, poolGroup]
  : [
      ...fenceGuideGroups.slice(0, targetIndex),
      poolGroup,
      ...fenceGuideGroups.slice(targetIndex),
    ];
