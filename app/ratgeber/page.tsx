import type { Metadata } from "next";
import Link from "next/link";
import { GuideDirectory, type GuideDirectoryGroup } from "@/components/guide-directory";
import { allGuides } from "@/lib/all-guides";
import { guideGroups } from "@/lib/guide-groups";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ratgeber zu Sanierung, Renovierung & Handwerkerkosten 2026",
  description: "Ratgeber zu Sanierungskosten, Dach, Fenster, Elektrik, Heizung, Wärmepumpen, Photovoltaik, Dämmung, Kellerabdichtung, Fassaden, Garten und Außenanlagen, Sanitär, Malerarbeiten, Fliesen, Bodenbelägen, Trockenbau, Türen, Estrich, Abriss, Entsorgung, Maurerarbeiten, Treppen, Küchenrenovierung, Balkon, Garage, Carport, Schornstein, Kamin und konkreten Projektgrößen mit Richtwerten und Beispielbudgets.",
  alternates: { canonical: "/ratgeber" },
};

function guideBySlug(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}

function groupId(value: string) {
  return value
    .toLocaleLowerCase("de-DE")
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function directoryGuide(guide: (typeof allGuides)[number]) {
  return {
    slug: guide.slug,
    eyebrow: guide.eyebrow,
    title: guide.title,
    description: guide.description,
    keyFact: guide.keyFact,
  };
}

function buildDirectoryGroups(): GuideDirectoryGroup[] {
  const usedSlugs = new Set<string>();

  const curatedGroups = guideGroups
    .map((group) => {
      const guides = group.slugs
        .map(guideBySlug)
        .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide))
        .filter((guide) => {
          if (usedSlugs.has(guide.slug)) return false;
          usedSlugs.add(guide.slug);
          return true;
        })
        .map(directoryGuide);

      return {
        id: groupId(group.eyebrow),
        eyebrow: group.eyebrow,
        title: group.title,
        description: group.description,
        guides,
      };
    })
    .filter((group) => group.guides.length > 0);

  const remainingGuides = allGuides
    .filter((guide) => !usedSlugs.has(guide.slug))
    .map(directoryGuide);

  if (remainingGuides.length === 0) return curatedGroups;

  return [
    ...curatedGroups,
    {
      id: "weitere-ratgeber",
      eyebrow: "Weitere Ratgeber",
      title: "Weitere Kostenfragen und Spezialthemen",
      description: "Zusätzliche Detailfragen, Spezialfälle und Kostenbeispiele, die keinem der großen Themenblöcke eindeutig zugeordnet sind.",
      guides: remainingGuides,
    },
  ];
}

export default function GuidesPage() {
  const base = siteConfig.url.replace(/\/$/, "");
  const directoryGroups = buildDirectoryGroups();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${base}/ratgeber` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Baukosten-Ratgeber 2026",
      url: `${base}/ratgeber`,
      description: metadata.description,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: allGuides.length,
        itemListElement: allGuides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: `${base}/ratgeber/${guide.slug}`,
        })),
      },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="contentHero">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Ratgeber</span>
          </nav>
          <span className="eyebrow">Baukosten-Ratgeber</span>
          <h1>Sanierung, Renovierung und Handwerkerkosten verständlich erklärt</h1>
          <p>
            Praxisnahe Richtwerte, Rechenbeispiele und Einordnung für typische Kosten- und Planungsfragen rund um
            Renovierung, Sanierung und Handwerkerleistungen in Deutschland.
          </p>
          <div className="heroFacts">
            <span><strong>{allGuides.length}</strong> ausführliche Ratgeber</span>
            <span><strong>{directoryGroups.length}</strong> Themenbereiche</span>
            <span><strong>2026</strong> aktueller Datenstand</span>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell">
          <div className="premiumSectionHeading">
            <div>
              <span className="eyebrow">So nutzt du BauKostenRadar</span>
              <h2>Vom Thema zum belastbaren Budget</h2>
              <p>Die Ratgeber erklären die Kostenlogik. Danach geht es direkt zu Einzelpreisen, Rechnern und regionalen Modellwerten.</p>
            </div>
          </div>
          <div className="stepsList">
            <div><strong>1</strong><span><b>Ratgeber wählen</b><small>Projektumfang, typische Kostenblöcke und Fallstricke verstehen.</small></span></div>
            <div><strong>2</strong><span><b>Einzelpreise prüfen</b><small>Passende Gewerke und konkrete Preispositionen vergleichen.</small></span></div>
            <div><strong>3</strong><span><b>Eigene Menge rechnen</b><small>Fläche, Stückzahl, Umfang und Qualitätsniveau im Rechner anpassen.</small></span></div>
            <div><strong>4</strong><span><b>Region einordnen</b><small>Modellierte Richtwerte für deutsche Großstädte als Budgethilfe nutzen.</small></span></div>
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/kosten">Alle Handwerkerpreise</Link>
            <Link className="ghostButton" href="/rechner">Alle Rechner</Link>
            <Link className="ghostButton" href="/staedte">Städte vergleichen</Link>
          </div>
        </div>
      </section>

      <GuideDirectory groups={directoryGroups} />

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Direkt rechnen</span>
            <h2>Vom Ratgeber zur eigenen Kostenspanne</h2>
            <p>
              Die Ratgeber erklären die Größenordnung. Mit den Rechnern können Sie Fläche, Umfang, Region oder
              konkrete Einzelarbeiten direkt für Ihr eigenes Szenario anpassen.
            </p>
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/renovierungskosten">Renovierung berechnen</Link>
            <Link className="ghostButton" href="/rechner/handwerkerkosten">Handwerkerkosten berechnen</Link>
            <Link className="ghostButton" href="/methodik">Methodik verstehen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
