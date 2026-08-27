import { guides as primaryGuides } from "@/lib/guides";
import { secondaryGuides } from "@/lib/guides-secondary";
import { tertiaryGuides } from "@/lib/guides-tertiary";
import { tradeGuides } from "@/lib/guides-trade";
import { specialistGuides } from "@/lib/guides-specialists";
import { opportunityGuides } from "@/lib/guides-opportunities";
import { scenarioGuides } from "@/lib/guides-scenarios";
import { catalogScenarioGuides } from "@/lib/guides-catalog-scenarios";

const primaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "sanierungskosten-pro-qm": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
  ],
  "handwerker-stundensaetze": [
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "altbausanierung-kosten": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
  ],
  "wohnung-renovieren-kosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Renovierungskosten Haus", href: "/ratgeber/renovierungskosten-haus" },
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
  ],
};

const secondaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "haus-sanieren-kosten": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
    { label: "Haustür einbauen Kosten", href: "/ratgeber/haustuer-einbauen-kosten" },
  ],
  "renovierungskosten-haus": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
    { label: "Haus renovieren 200 m²", href: "/ratgeber/haus-renovieren-200-qm-kosten" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Küche 10 m² renovieren", href: "/ratgeber/kueche-10-qm-renovieren-kosten" },
    { label: "6 Innentüren austauschen", href: "/ratgeber/6-innentueren-austauschen-kosten" },
  ],
  "sanierung-reihenfolge": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
  "arbeitskosten-materialkosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Innenwand mauern Kosten", href: "/ratgeber/innenwand-mauern-kosten" },
  ],
};

const tertiaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "kernsanierung-kosten": [
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
    { label: "Innenwand mauern Kosten", href: "/ratgeber/innenwand-mauern-kosten" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
  "sanierungskosten-einfamilienhaus": [
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "renovierungskosten-100-qm": [
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
};

const tradeClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "dach-sanieren-kosten-pro-qm": [
    { label: "Dach 150 m² Kosten", href: "/ratgeber/dach-150-qm-kosten" },
    { label: "Dachrinne erneuern Kosten", href: "/ratgeber/dachrinne-erneuern-kosten" },
  ],
  "fenster-austauschen-kosten-haus": [
    { label: "20 Fenster austauschen Kosten", href: "/ratgeber/20-fenster-austauschen-kosten" },
    { label: "Fenstereinbau Kosten", href: "/ratgeber/fenstereinbau-kosten" },
  ],
  "elektrik-erneuern-altbau": [
    { label: "Elektrik bei 100 m² erneuern", href: "/ratgeber/elektrik-erneuern-100-qm-kosten" },
    { label: "Sicherungskasten erneuern Kosten", href: "/ratgeber/sicherungskasten-erneuern-kosten" },
  ],
  "heizung-erneuern-kosten": [
    { label: "Fußbodenheizung 100 m² Kosten", href: "/ratgeber/fussbodenheizung-100-qm-kosten" },
  ],
  "bad-komplett-sanieren-kosten": [
    { label: "Bad 10 m² sanieren Kosten", href: "/ratgeber/bad-10-qm-sanieren-kosten" },
  ],
};

const specialistClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "garten-anlegen-kosten": [
    { label: "Einfahrt pflastern Kosten", href: "/ratgeber/einfahrt-pflastern-kosten" },
    { label: "Terrasse pflastern Kosten", href: "/ratgeber/terrasse-pflastern-kosten" },
    { label: "Baum fällen Kosten", href: "/ratgeber/baum-faellen-kosten" },
    { label: "Rollrasen Kosten pro m²", href: "/ratgeber/rollrasen-kosten-pro-qm" },
  ],
  "bodenleger-kosten-pro-qm": [
    { label: "Parkett abschleifen Kosten", href: "/ratgeber/parkett-abschleifen-kosten" },
  ],
  "daemmung-kosten-pro-qm": [
    { label: "Fassadendämmung Kosten pro m²", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
  ],
  "waermepumpe-kosten-2026": [
    { label: "Wärmepumpe Wartung Kosten", href: "/ratgeber/waermepumpe-wartung-kosten" },
  ],
  "photovoltaik-kosten-2026": [
    { label: "Stromspeicher Kosten pro kWh", href: "/ratgeber/stromspeicher-kosten-pro-kwh" },
  ],
};

function addClusterLinks<T extends { slug: string; related: Array<{ label: string; href: string }> }>(
  items: T[],
  links: Record<string, Array<{ label: string; href: string }>>,
) {
  return items.map((item) => {
    const combined = [...item.related, ...(links[item.slug] ?? [])];
    return {
      ...item,
      related: combined.filter((link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index),
    };
  });
}

const enrichedPrimaryGuides = addClusterLinks(primaryGuides, primaryClusterLinks);
const enrichedSecondaryGuides = addClusterLinks(secondaryGuides, secondaryClusterLinks);
const enrichedTertiaryGuides = addClusterLinks(tertiaryGuides, tertiaryClusterLinks);
const enrichedTradeGuides = addClusterLinks(tradeGuides, tradeClusterLinks);
const enrichedSpecialistGuides = addClusterLinks(specialistGuides, specialistClusterLinks);

export const allGuides = [
  ...enrichedPrimaryGuides,
  ...enrichedSecondaryGuides,
  ...enrichedTertiaryGuides,
  ...enrichedTradeGuides,
  ...enrichedSpecialistGuides,
  ...opportunityGuides,
  ...scenarioGuides,
  ...catalogScenarioGuides,
];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
