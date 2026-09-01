import { guideGroups as bodenGuideGroups, type GuideGroup } from "./guide-groups-boden";

export type { GuideGroup } from "./guide-groups-boden";

const sanitaerGroup: GuideGroup = {
  eyebrow: "Sanitär & Badausstattung",
  title: "Sanitär, WC, Armaturen, Dusche und Reparaturen kalkulieren",
  description: "Sanitärkosten mit aktuellen 2026-Richtwerten für WC, Armaturen, Waschbecken, Dusche, Badewanne, Spülkasten, Rohrreinigung und Anfahrt vergleichen.",
  slugs: [
    "sanitaer-kosten",
    "sanitaer-anfahrt-kosten",
    "wasserhahn-montieren-kosten",
    "waschbecken-montieren-kosten",
    "wc-austauschen-kosten",
    "spuelkasten-reparieren-kosten",
    "dusch-wc-kosten",
    "dusche-einbauen-kosten",
    "bodengleiche-dusche-kosten",
    "badewanne-einbauen-kosten",
    "badewanne-durch-dusche-ersetzen-kosten",
    "rohrverstopfung-beseitigen-kosten",
    "sanitaerobjekte-bad-kosten",
    "bad-entkernen-kosten",
  ],
};

const targetIndex = bodenGuideGroups.findIndex((group) => group.eyebrow === "Sanitär & Badausstattung");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...bodenGuideGroups, sanitaerGroup]
  : [
      ...bodenGuideGroups.slice(0, targetIndex),
      sanitaerGroup,
      ...bodenGuideGroups.slice(targetIndex + 1),
    ];
