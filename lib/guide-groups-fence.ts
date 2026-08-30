import { guideGroups as chimneyGuideGroups, type GuideGroup } from "./guide-groups-chimney";

export type { GuideGroup } from "./guide-groups-chimney";

const fenceGroup: GuideGroup = {
  eyebrow: "Zaun & Sichtschutz",
  title: "Zaunbau, Doppelstabmatten und Sichtschutz kalkulieren",
  description: "Zaunbau, Doppelstabmatten, Sichtschutz, Maschendraht und Holzzaun mit aktuellen 2026-Richtwerten pro laufendem Meter und konkreten Rechner-Presets vergleichen.",
  slugs: [
    "zaun-bauen-kosten-pro-meter",
    "doppelstabmattenzaun-kosten-pro-meter",
    "sichtschutzzaun-kosten-pro-meter",
    "maschendrahtzaun-kosten-pro-meter",
    "holzzaun-kosten-pro-meter",
  ],
};

const targetIndex = chimneyGuideGroups.findIndex((group) => group.eyebrow === "Garten & Außenanlagen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...chimneyGuideGroups, fenceGroup]
  : [
      ...chimneyGuideGroups.slice(0, targetIndex),
      fenceGroup,
      ...chimneyGuideGroups.slice(targetIndex),
    ];
