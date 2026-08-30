import { guideGroups as terraceGuideGroups, type GuideGroup } from "./guide-groups-terrace";

export type { GuideGroup } from "./guide-groups-terrace";

const terraceCoverGroup: GuideGroup = {
  eyebrow: "Terrassenüberdachung & Pergola",
  title: "Terrassendach, Holz, Aluminium, Glas und Lamellendach kalkulieren",
  description: "Terrassenüberdachungen mit aktuellen 2026-Richtwerten für Gesamtprojekt, Holz- und Aluminiumkonstruktionen, Glas- und Kunststoffdächer sowie Pergola und Lamellendach vergleichen.",
  slugs: [
    "terrassenueberdachung-kosten",
    "holz-terrassenueberdachung-kosten",
    "alu-terrassenueberdachung-kosten",
    "glasdach-terrasse-kosten",
    "lamellendach-pergola-kosten",
  ],
};

const targetIndex = terraceGuideGroups.findIndex((group) => group.eyebrow === "Terrasse & Terrassenbau");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...terraceGuideGroups, terraceCoverGroup]
  : [
      ...terraceGuideGroups.slice(0, targetIndex + 1),
      terraceCoverGroup,
      ...terraceGuideGroups.slice(targetIndex + 1),
    ];
