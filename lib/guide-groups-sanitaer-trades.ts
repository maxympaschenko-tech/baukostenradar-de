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
  if (group.eyebrow === "Abriss & Entsorgung") {
    const slugs = group.slugs.includes("bauschutt-entsorgen-kosten") ? group.slugs : [...group.slugs, "bauschutt-entsorgen-kosten"];
    return {
      ...group,
      title: "Rückbau, Hausabriss, Bauschutt und Entsorgung kalkulieren",
      description: "Hausabriss, Innenabbruch, Industrieabbruch sowie Bauschutt und Bauabfall nach m³, Container und Sack mit aktuellen 2026-Richtwerten vergleichen.",
      slugs,
    };
  }
  if (group.eyebrow === "Türen & Haustüren") {
    const slugs = group.slugs.includes("tuerblatt-tauschen-kosten") ? group.slugs : [...group.slugs, "tuerblatt-tauschen-kosten"];
    return {
      ...group,
      title: "Innentüren, Türblätter, Zargen, Haustüren und Schiebetüren kalkulieren",
      description: "Türenkosten 2026 für Innentüren, Türblattausch, Zargen, Haustüren nach Material und Ausstattung sowie Schiebetüren vergleichen.",
      slugs,
    };
  }
  if (group.eyebrow === "Kellerbau & Unterkellerung") {
    const slugs = group.slugs.includes("perimeterdaemmung-keller-kosten") ? group.slugs : [...group.slugs, "perimeterdaemmung-keller-kosten"];
    return {
      ...group,
      title: "Kellerbau, Weiße Wanne und Perimeterdämmung kalkulieren",
      description: "Kellerbaukosten 2026 nach Bauweise, Größe und Ausbaustufe sowie Erdarbeiten, Weiße Wanne und Perimeterdämmung vergleichen.",
      slugs,
    };
  }
  if (group.eyebrow === "Garage & Carport") {
    const slugs = group.slugs.includes("carport-fundament-kosten") ? group.slugs : [...group.slugs, "carport-fundament-kosten"];
    return {
      ...group,
      title: "Garage, Carport, Fundamente und Tore kalkulieren",
      description: "Garagen- und Carportkosten 2026 für Fertig- und Massivgarage, Garagenfundament, Carport und Carport-Punktfundamente sowie Garagentore vergleichen.",
      slugs,
    };
  }
  if (group.eyebrow === "Pool & Schwimmbad") {
    const slugs = group.slugs.includes("pooltechnik-kosten") ? group.slugs : [...group.slugs, "pooltechnik-kosten"];
    return {
      ...group,
      title: "Poolbau, Poolarten, Erdarbeiten, Technik und Betriebskosten kalkulieren",
      description: "Poolkosten 2026 für GFK- und Betonpool, Erdarbeiten, Filteranlage, Poolpumpe, Verrohrung sowie laufende Betriebskosten vergleichen.",
      slugs,
    };
  }
  if (group.eyebrow === "Dämmung & Gebäudehülle") {
    const slugs = group.slugs.includes("kellerdeckendaemmung-kosten-pro-qm") ? group.slugs : [...group.slugs, "kellerdeckendaemmung-kosten-pro-qm"];
    return {
      ...group,
      title: "Dämmkosten für Fassade, Dach und Kellerdecke kalkulieren",
      description: "Dämmkosten 2026 für WDVS, Innendämmung, Zwischen- und Aufsparrendämmung sowie Kellerdeckendämmung nach Verfahren mit aktuellen Richtwerten vergleichen.",
      slugs,
    };
  }
  return group;
});
