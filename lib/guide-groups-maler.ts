import { guideGroups as gartenGuideGroups, type GuideGroup } from "./guide-groups-garten";

export type { GuideGroup } from "./guide-groups-garten";

const malerGroup: GuideGroup = {
  eyebrow: "Maler & Oberflächen",
  title: "Malerpreise, Vorarbeiten, Türen und Fensterrahmen kalkulieren",
  description: "Malerarbeiten mit aktuellen 2026-Richtwerten für Streichen, Tapezieren, Tapeten entfernen, Q3, Stundensatz sowie Lackierarbeiten an Türen und Fensterrahmen vergleichen.",
  slugs: [
    "maler-kosten-pro-qm",
    "maler-stundensatz",
    "waende-streichen-kosten-pro-qm",
    "tapezieren-kosten-pro-qm",
    "tapeten-entfernen-kosten-pro-qm",
    "innenputz-q3-kosten-pro-qm",
    "innentuer-lackieren-kosten",
    "fensterrahmen-lackieren-kosten",
  ],
};

const targetIndex = gartenGuideGroups.findIndex((group) => group.eyebrow === "Maler & Oberflächen");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...gartenGuideGroups, malerGroup]
  : [
      ...gartenGuideGroups.slice(0, targetIndex),
      malerGroup,
      ...gartenGuideGroups.slice(targetIndex + 1),
    ];
