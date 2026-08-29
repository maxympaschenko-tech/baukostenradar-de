import type { Metadata } from "next";
import Link from "next/link";
import { RenovationCalculator } from "@/components/renovation-calculator";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, renovationModel, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Renovierungskosten Rechner 2026",
  description: "Renovierungskosten 2026 nach Wohnfläche, Sanierungsumfang, Standard und Region kalkulieren. Mit Richtwerten pro m², Gewerken, Stadtvergleich und Ratgebern.",
  alternates: { canonical: "/rechner/renovierungskosten" },
};

const featuredServiceSlugs = ["badsanierung", "elektriker", "dachsanierung", "fenster", "heizung", "bodenleger"];

function firstSearchValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function parseInitialArea(value: string | string[] | undefined) {
  const parsed = Number(firstSearchValue(value));
  if (!Number.isFinite(parsed)) return 80;
  return Math.min(1000, Math.max(10, parsed));
}

function parseInitialCondition(value: string | string[] | undefined) {
  const candidate = firstSearchValue(value) ?? "normal";
  return renovationModel.conditions.some((condition) => condition.value === candidate) ? candidate : "normal";
}

export default async function RenovationCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{
    flaeche?: string | string[];
    umfang?: string | string[];
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const initialArea = parseInitialArea(resolvedSearchParams.flaeche);
  const initialCondition = parseInitialCondition(resolvedSearchParams.umfang);
  const base = siteConfig.url.replace(/\/$/, "");
  const cityRegions = regions.filter((region) => region.value !== "de").slice(0, 4);
  const featuredServices = featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Kostenrechner", item: `${base}/rechner` },
        { "@type": "ListItem", position: 3, name: "Renovierungskosten Rechner", item: `${base}/rechner/renovierungskosten` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Renovierungskosten Rechner 2026",
      url: `${base}/rechner/renovierungskosten`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: metadata.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
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
            <Link href="/rechner">Kostenrechner</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Renovierungskosten</span>
          </nav>
          <span className="eyebrow">Kostenloser Rechner</span>
          <h1>Renovierungskosten Rechner 2026</h1>
          <p>
            Ermitteln Sie eine erste Kostenspanne für Ihr Renovierungsprojekt und sehen Sie,
            wie sich Arbeits-, Material- und Reservenkosten zusammensetzen.
          </p>
          <div className="heroFacts">
            <span><strong>{renovationModel.conditions.length}</strong> Sanierungsstufen</span>
            <span><strong>{renovationModel.standards.length}</strong> Qualitätsstandards</span>
            <span><strong>{regions.length - 1}</strong> Städte im Regionalmodell</span>
          </div>
        </div>
      </section>

      <div className="shell articleShell">
        <RenovationCalculator initialArea={initialArea} initialCondition={initialCondition} />

        <section className="contentCard proseCard">
          <span className="eyebrow">Richtwerte verstehen</span>
          <h2>Wie ordnet man das Ergebnis ein?</h2>
          <p>
            Der Rechner arbeitet mit vier Renovierungsstufen. Die Wohnfläche wird mit dem jeweiligen
            Quadratmeterband sowie dem gewählten Qualitäts- und Regionalfaktor kombiniert. Das Ergebnis ist eine
            Budgetorientierung und kein verbindlicher Angebotspreis.
          </p>
          <div className="priceTableWrap">
            <table className="priceTable">
              <thead>
                <tr>
                  <th>Umfang</th>
                  <th>Richtwert 2026</th>
                </tr>
              </thead>
              <tbody>
                {renovationModel.conditions.map((condition) => (
                  <tr key={condition.value}>
                    <td><strong>{condition.label}</strong></td>
                    <td>{condition.lowPerSquareMeter.toLocaleString("de-DE")} - {condition.highPerSquareMeter.toLocaleString("de-DE")} €/m²</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sourceList">
            <Link href="/ratgeber/sanierungskosten-pro-qm">
              <strong>Sanierungskosten pro m² 2026</strong>
              <span>Alle vier Kostenstufen mit Beispielen vergleichen</span>
            </Link>
            <Link href="/ratgeber/kernsanierung-kosten">
              <strong>Kernsanierung Kosten 2026</strong>
              <span>1.500 bis 3.500 €/m² und konkrete Flächenbeispiele</span>
            </Link>
            <Link href="/ratgeber/renovierungskosten-100-qm">
              <strong>Renovierungskosten 100 m²</strong>
              <span>Budgetspannen für 100 m² nach Sanierungsumfang</span>
            </Link>
            <Link href="/ratgeber/sanierungskosten-einfamilienhaus">
              <strong>Sanierungskosten Einfamilienhaus</strong>
              <span>Gebäudehülle, Haustechnik und Innenausbau getrennt einordnen</span>
            </Link>
            <Link href="/ratgeber/altbausanierung-kosten">
              <strong>Altbausanierung Kosten 2026</strong>
              <span>Umfangreiche Sanierung und Kernsanierung einordnen</span>
            </Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Vom Gesamtbudget zum Gewerk</span>
          <h2>Große Kostenblöcke separat prüfen</h2>
          <p>
            Ein Gesamtbudget wird belastbarer, wenn die wichtigsten Gewerke anschließend mit ihren eigenen Richtwerten geprüft werden.
            Die folgenden Bereiche sind bei umfangreichen Renovierungen besonders häufig relevant.
          </p>
          <div className="directoryGrid">
            {featuredServices.map((service) => {
              const item = service.priceItems[0];
              return (
                <article className="directoryCard" key={service.slug}>
                  <span className="eyebrow">{service.shortTitle}</span>
                  <h3><Link href={`/kosten/${service.slug}`}>{service.title}</Link></h3>
                  <p>{service.description}</p>
                  {item ? (
                    <Link className="textLink" href={`/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`}>
                      {item.name}: {item.low.toLocaleString("de-DE")} - {item.high.toLocaleString("de-DE")} € {item.unit} →
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/handwerkerkosten">Handwerkerkosten berechnen</Link>
            <Link className="ghostButton" href="/kosten">Alle Preisbereiche ansehen</Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Regionale Einordnung</span>
          <h2>Renovierungskosten nach Stadt vergleichen</h2>
          <p>
            Der Rechner verwendet dieselben transparenten Regionalfaktoren wie die Stadtseiten. Diese Werte sind modellierte
            Budgetrichtwerte und keine lokal erhobenen Festpreise.
          </p>
          <div className="regionChips">
            {cityRegions.map((region) => (
              <Link className="regionChip" key={region.slug} href={`/staedte/${region.slug}`}>
                {region.label} - Faktor {region.factor.toFixed(2).replace(".", ",")}
              </Link>
            ))}
          </div>
          <div className="heroActions">
            <Link className="ghostButton" href="/staedte">Alle Städte vergleichen</Link>
            <Link className="ghostButton" href="/methodik">Methodik & Quellen</Link>
          </div>
        </section>
      </div>
    </>
  );
}
