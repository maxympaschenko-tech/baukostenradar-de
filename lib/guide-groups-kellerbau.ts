import { guideGroups as hausanbauGuideGroups, type GuideGroup } from "./guide-groups-hausanbau";

export type { GuideGroup } from "./guide-groups-hausanbau";

const kellerbauGroup: GuideGroup = {
  eyebrow: "Kellerbau & Unterkellerung",
  title: "Kellerbau nach Bauweise, Größe, Ausbaustufe und Baugrund kalkulieren",
  description: "Aktuelle Kellerbaukosten 2026 für Nutz- und Wohnkeller, Fertig- und Massivkeller, 80 bis 120 m², Erdarbeiten, Weiße Wanne und Perimeterdämmung vergleichen.",
  slugs: [
    "kellerbau-kosten",
    "fertigkeller-kosten",
    "massivkeller-wohnkeller-kosten",
    "keller-80-100-120-qm-kosten",
    "kellerbau-erdarbeiten-weisse-wanne-kosten",
  ],
};

const targetIndex = hausanbauGuideGroups.findIndex((group) => group.eyebrow === "Hausanbau & Wohnraumerweiterung");

export const guideGroups: readonly GuideGroup[] = targetIndex === -1
  ? [...hausanbauGuideGroups, kellerbauGroup]
  : [
      ...hausanbauGuideGroups.slice(0, targetIndex + 1),
      kellerbauGroup,
      ...hausanbauGuideGroups.slice(targetIndex + 1),
    ];
