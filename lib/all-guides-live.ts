import type { Guide } from "./guides";
import { allGuides as legacyGuides } from "./all-guides-sanitaer-trades";
import { allGuides as expandedGuides } from "./all-guides-kellerbau";

const redirectedLegacyGuideSlugs = new Set([
  "tuer-lackieren-kosten",
  "anhydritestrich-kosten-pro-qm",
  "gussasphaltestrich-kosten-pro-qm",
  "sichtestrich-kosten-pro-qm",
  "estrich-zement-oder-anhydrit-kosten",
  "kellerdeckendaemmung-kosten-pro-qm",
  "perimeterdaemmung-keller-kosten",
]);

function withCurrentPerimeterData(guide: Guide): Guide {
  if (guide.slug !== "kellerbau-erdarbeiten-weisse-wanne-kosten") return guide;

  return {
    ...guide,
    keyFact: "Weiße Wanne grob +15.000-20.000 €; Perimeterdämmung etwa 55-90 €/m², Erdarbeiten zusätzlich",
    sections: guide.sections.map((section) => {
      if (section.heading !== "Was kostet die Perimeterdämmung?") return section;

      return {
        ...section,
        paragraphs: [
          "co2online nennt für eine Perimeterdämmung etwa 55 bis 90 Euro pro Quadratmeter. Diese Spanne bezieht sich auf die Dämmung; Erdarbeiten kommen zusätzlich hinzu.",
          "Im Neubau kann die Perimeterdämmung bei offener Baugrube direkt mit ausgeführt werden. Im Bestand erhöhen Freilegung, Aushub, Bodenverhältnisse und gegebenenfalls Wasserhaltung den Gesamtaufwand deutlich.",
        ],
        table: section.table
          ? {
              ...section.table,
              rows: section.table.rows.map((row, index) =>
                index === 0
                  ? { ...row, cells: ["Perimeterdämmung inkl. Montage", "55-90 €/m²"] }
                  : row,
              ),
            }
          : section.table,
      };
    }),
    faqs: guide.faqs.map((faq) =>
      faq.question === "Was kostet Perimeterdämmung am Keller?"
        ? {
            ...faq,
            answer: "co2online nennt für die Perimeterdämmung etwa 55 bis 90 €/m². Erdarbeiten kommen zusätzlich hinzu; im Bestand können Freilegung, Aushub und gegebenenfalls Wasserhaltung die Gesamtkosten deutlich erhöhen.",
          }
        : faq,
    ),
  };
}

const guidesBySlug = new Map<string, Guide>();

for (const guide of [...legacyGuides, ...expandedGuides]) {
  if (redirectedLegacyGuideSlugs.has(guide.slug) || guidesBySlug.has(guide.slug)) continue;
  guidesBySlug.set(guide.slug, withCurrentPerimeterData(guide));
}

export const allGuides = [...guidesBySlug.values()];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
