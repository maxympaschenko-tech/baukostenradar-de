import type { Metadata } from "next";
import Link from "next/link";
import { TradeCostCalculator } from "@/components/trade-cost-calculator";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Handwerkerkosten Rechner 2026",
  description: "Handwerkerkosten online berechnen: Gewerk, Leistung, Menge und Region auswählen. Mit 101 Preispositionen, Einzelpreisen, Stadtvergleich und Quellen.",
  alternates: { canonical: "/rechner/handwerkerkosten" },
};

const featuredServiceSlugs = ["maler", "elektriker", "dachsanierung", "fenster", "heizung", "bodenleger"];

type CalculatorSearchParams = Record<string, string | string[] | undefined>;

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function HandwerkerCostCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<CalculatorSearchParams>;
}) {
  const query = await searchParams;
  const requestedServiceSlug = firstParam(query.gewerk);
  const requestedItemSlug = firstParam(query.leistung);
  const requestedRegion = firstParam(query.region);

  const selectedService = services.find((service) => service.slug === requestedServiceSlug);
  const validItemSlug = selectedService?.priceItems.some((item) => priceItemSlug(item.name) === requestedItemSlug)
    ? requestedItemSlug
    : undefined;
  const validRegion = regions.find(
    (region) => region.value === requestedRegion || region.slug === requestedRegion,
  );

  const base = siteConfig.url.replace(/\/$/, "");
  const priceCount = services.reduce((sum, service) => sum + service.priceItems.length, 0);
  const featuredServices = featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const cityRegions = regions.filter((region) => region.value !== "de").slice(0, 4);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Kostenrechner", item: `${base}/rechner` },
        { "@type": "ListItem", position: 3, name: "Handwerkerkosten Rechner", item: `${base}/rechner/handwerkerkosten` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Handwerkerkosten Rechner 2026",
      url: `${base}/rechner/handwerkerkosten`,
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
            <span aria-current="page">Handwerkerkosten</span>
          </nav>
          <span className="eyebrow">Kostenrechner Deutschland</span>
          <h1>Handwerkerkosten Rechner 2026</h1>
          <p>
            Berechnen Sie typische Kosten einzelner Arbeiten auf Basis der strukturierten Preisbänder von BauKostenRadar.
            Wählen Sie Leistung, Menge und Region und erhalten Sie sofort eine grobe Kostenspanne.
          </p>
          <div className="heroFacts">
            <span><strong>{services.length}</strong> Gewerke</span>
            <span><strong>{priceCount}</strong> Preispositionen</span>
            <span><strong>{regions.length - 1}</strong> Städte im Regionalmodell</span>
          </div>
        </div>
      </section>

      <div className="shell articleShell">
        <TradeCostCalculator
          initialServiceSlug={selectedService?.slug}
          initialItemSlug={validItemSlug}
          initialRegionValue={validRegion?.value}
        />

        <section className="contentCard proseCard">
          <span className="eyebrow">Datenbasis</span>
          <h2>Welche Leistungen sind enthalten?</h2>
          <p>
            Der Rechner greift direkt auf die Preispositionen aus unserem Preisspiegel zu. Dadurch werden dieselben
            Richtwerte in Kostenartikeln, Stadtseiten und Rechnern verwendet.
          </p>
          <div className="regionChips">
            {services.map((service) => (
              <Link className="regionChip" key={service.slug} href={`/kosten/${service.slug}`}>
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Direkt zu Einzelpreisen</span>
          <h2>Häufige Gewerke und konkrete Preispositionen</h2>
          <p>
            Für die Einordnung eines Rechnerergebnisses ist die zugrunde liegende Preisposition wichtiger als ein allgemeiner Durchschnitt.
            Diese Beispiele führen direkt zu den Detailseiten mit Quelle, Kostentreibern, Stadtvergleich und Beispielrechnungen.
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
                    <div className="miniPrice">
                      <span>{item.name}</span>
                      <strong>{item.low.toLocaleString("de-DE")} - {item.high.toLocaleString("de-DE")} € {item.unit}</strong>
                    </div>
                  ) : null}
                  {item ? (
                    <Link className="textLink" href={`/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`}>
                      Einzelpreis im Detail →
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Regionale Einordnung</span>
          <h2>Handwerkerkosten nach Stadt vergleichen</h2>
          <p>
            Der Rechner wendet bei ausgewählten Städten dieselben transparenten Regionalfaktoren an wie die Stadtseiten.
            Die Werte sind modellierte Budgetrichtwerte und keine lokal erhobenen Festpreise.
          </p>
          <div className="regionChips">
            {cityRegions.map((region) => (
              <Link className="regionChip" key={region.slug} href={`/staedte/${region.slug}`}>
                {region.label} - Faktor {region.factor.toFixed(2).replace(".", ",")}
              </Link>
            ))}
          </div>
          <Link className="textLink" href="/staedte">Alle Städte vergleichen →</Link>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Ratgeber</span>
          <h2>Handwerkerpreise besser einordnen</h2>
          <p>
            Einzelpreise sind leichter zu bewerten, wenn Stundensätze, Projektumfang und das Gesamtbudget getrennt
            betrachtet werden. Diese Ratgeber ergänzen die Rechnerwerte mit Beispielen und Hintergründen.
          </p>
          <div className="sourceList">
            <Link href="/ratgeber/handwerker-stundensaetze">
              <strong>Handwerker-Stundensätze 2026</strong>
              <span>Stundensätze ausgewählter Gewerke vergleichen</span>
            </Link>
            <Link href="/ratgeber/arbeitskosten-materialkosten">
              <strong>Arbeitskosten und Materialkosten</strong>
              <span>Angebote und Kostenblöcke besser vergleichen</span>
            </Link>
            <Link href="/ratgeber/sanierungskosten-pro-qm">
              <strong>Sanierungskosten pro m² 2026</strong>
              <span>Einzelarbeiten in das Gesamtbudget einordnen</span>
            </Link>
            <Link href="/ratgeber/altbausanierung-kosten">
              <strong>Altbausanierung Kosten 2026</strong>
              <span>Technische Gewerke im Bestand richtig priorisieren</span>
            </Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Hinweis</span>
          <h2>Warum ist das Ergebnis nur eine Orientierung?</h2>
          <p>
            Konkrete Handwerkerangebote hängen unter anderem von Objektzustand, Mindestauftragswert, Material,
            Zugänglichkeit, Anfahrt, Auslastung und notwendigen Vorarbeiten ab. Der Rechner ist deshalb für eine erste
            Budgetplanung gedacht und ersetzt kein Angebot eines Fachbetriebs.
          </p>
          <div className="heroActions">
            <Link className="ghostButton" href="/methodik">Methodik ansehen</Link>
            <Link className="ghostButton" href="/quellen">Quellen prüfen</Link>
          </div>
        </section>
      </div>
    </>
  );
}
