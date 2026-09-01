import { guideGroups as bodenGuideGroups, type GuideGroup } from "./guide-groups-boden";

export type { GuideGroup } from "./guide-groups-boden";

const sanitaerGroup: GuideGroup = {
  eyebrow: "Sanitär & Badausstattung",
  title: "Sanitär, WC, Armaturen, Dusche und Reparaturen kalkulieren",
  description: "Sanitärkosten mit aktuellen 2026-Richtwerten für WC, Armaturen, Waschbecken, Dusche, Badewanne, Spülkasten, Rohrreinigung und Anfahrt vergleichen.",
  slugs: [
    "sanitaer-kosten", "sanitaer-anfahrt-kosten", "wasserhahn-montieren-kosten", "waschbecken-montieren-kosten",
    "wc-austauschen-kosten", "spuelkasten-reparieren-kosten", "dusch-wc-kosten", "dusche-einbauen-kosten",
    "bodengleiche-dusche-kosten", "badewanne-einbauen-kosten", "badewanne-durch-dusche-ersetzen-kosten",
    "rohrverstopfung-beseitigen-kosten", "sanitaerobjekte-bad-kosten", "bad-entkernen-kosten",
  ],
};

export const guideGroups: readonly GuideGroup[] = bodenGuideGroups.map((group) => {
  if (group.eyebrow === "Sanitär & Badausstattung") return sanitaerGroup;
  if (group.eyebrow === "Trockenbau & Oberflächen") {
    const slugs = group.slugs.includes("spanndecke-kosten-pro-qm") ? group.slugs : [...group.slugs, "spanndecke-kosten-pro-qm"];
    return {
      ...group,
      title: "Trockenbauwand, Decken und Verspachtelung kalkulieren",
      description: "Trockenbaukosten für Wände, Holztrennwände, Vorsatzschalen, abgehängte Decken, Dachschrägen, Spanndecken sowie Q3- und Q4-Oberflächen vergleichen.",
      slugs,
    };
  }
  return group;
});
