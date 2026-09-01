import { guideGroups as elektrikerGuideGroups, type GuideGroup } from "./guide-groups-elektriker";

export type { GuideGroup } from "./guide-groups-elektriker";

const bodenGroup: GuideGroup = {
  eyebrow: "Bodenbeläge & Aufarbeitung",
  title: "Vinyl, Parkett, Laminat, Rückbau und Untergrund kalkulieren",
  description: "Bodenlegerkosten, Klick- und Klebe-Vinyl, Parkett, Laminat, Rückbau, Untergrundvorbereitung und Parkett-Aufarbeitung mit aktuellen 2026-Richtwerten vergleichen.",
  slugs: [
    "bodenleger-kosten-pro-qm",
    "bodenleger-stundensatz",
    "vinylboden-verlegen-kosten-pro-qm",
    "klick-vinyl-verlegen-kosten-pro-qm",
    "klebe-vinyl-verlegen-kosten-pro-qm",
    "parkett-verlegen-kosten-pro-qm",
    "laminat-verlegen-kosten-pro-qm",
    "bodenbelag-entfernen-kosten-pro-qm",
    "boden-vorbereiten-ausgleichen-kosten-pro-qm",
    "boden-sanieren-kosten-pro-qm",
    "parkett-abschleifen-kosten",
  ],
};

const targetIndex = elektrikerGuideGroups.findIndex((group) => group.eyebrow === "Bodenbeläge & Aufarbeitung");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...elektrikerGuideGroups, bodenGroup]
  : [
      ...elektrikerGuideGroups.slice(0, targetIndex),
      bodenGroup,
      ...elektrikerGuideGroups.slice(targetIndex + 1),
    ];
