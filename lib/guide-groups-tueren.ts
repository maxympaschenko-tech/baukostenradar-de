import { guideGroups as fensterGuideGroups, type GuideGroup } from "./guide-groups-fenster";

export type { GuideGroup } from "./guide-groups-fenster";

const tuerenGroup: GuideGroup = {
  eyebrow: "Türen & Haustüren",
  title: "Innentüren, Zargen, Haustüren und Schiebetüren 2026 kalkulieren",
  description: "Aktuelle Türenkosten 2026 für Innentüren, Türblätter und Zargen, Haustüren nach Material und Ausstattung sowie Schiebetüren vergleichen.",
  slugs: [
    "innentueren-kosten",
    "tuerzarge-einbauen-kosten",
    "haustuer-material-kosten",
    "haustuer-zusatzausstattung-kosten",
    "schiebetuer-einbauen-kosten",
  ],
};

const targetIndex = fensterGuideGroups.findIndex((group) => group.eyebrow === "Fenster & Verglasung");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...fensterGuideGroups, tuerenGroup]
  : [
      ...fensterGuideGroups.slice(0, targetIndex + 1),
      tuerenGroup,
      ...fensterGuideGroups.slice(targetIndex + 1),
    ];
