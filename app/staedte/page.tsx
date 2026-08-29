import type { Metadata } from "next";
import Link from "next/link";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

const cities = regions.filter((region) => region.value !== "de");
const featuredServiceSlugs = ["badsanierung", "dachsanierung", "elektriker", "fenster", "heizung", "kueche"];
const featuredServices = featuredServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is NonNullable<typeof service> => Boolean(service));

export const metadata: Metadata = {
  title: "Handwerkerpreise nach Stadt 2026",
  description: `Handwerker- und Renovierungskosten 2026 nach Stadt vergleichen: Regionalfaktoren, Beispielbudgets und Detailseiten für ${cities.length} deutsche Großstädte.`,
  alternates: { canonical: "/staedte" },
};

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CitiesPage() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Städte", item: `${baseUrl}/staedte` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Handwerkerpreise nach Stadt 2026",
      url: `${baseUrl}/staedte`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: cities.length,
        itemListElement: cities.map((region, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `Handwerkerpreise ${region.label}`,
          url: `${baseUrl}/staedte/${region.slug}`,
        })),
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="contentHero">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Städte</span>
          </nav>
          <span className="eyebrow">Regionale Kosten 2026</span>
          <h1>Handwerkerpreise nach Stadt vergleichen</h1>
          <p>
            BauKostenRadar ordnet bundesweite Preisbänder mit transparenten Regionalfaktoren für {cities.length} deutsche
            Großstädte ein. So lässt sich ein Renovierungs- oder Handwerkerbudget vor der Angebotssuche grob regional anpassen.
          </p>
          <div className="heroFacts">
            <span><strong>{cities.length}</strong> Städte</span>
            <span><strong>{services.length}</strong> Gewerke je Stadt</span>
            <span><strong>2026</strong> Preisbasis</span>
            <span><strong>transparent</strong> modellierte Faktoren</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Stadt auswählen</span>
            <h2>Regionale Preisübersichten</h2>
            <p>
              Jede Stadtseite enthält Beispielbudgets, Richtwerte nach Gewerk, FAQ und Links zu den detaillierten
              lokalen Preisberechnungen.
            </p>
          </div>

          <div className="cityGrid cityGridLarge">
            {cities.map((region) => (
              <Link key={region.value} href={`/staedte/${region.slug}`} className="cityCard cityCardLarge">
                <strong>{region.label}</strong>
                <span>{region.factor >= 1 ? "+" : ""}{Math.round((region.factor - 1) * 100)} % Modellfaktor</span>
                <small>Preisübersicht öffnen →</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Direkt zum Gewerk</span>
            <h2>Beliebte Handwerkerkosten nach Stadt</h2>
            <p>
              Wenn das Gewerk bereits feststeht, führt diese Übersicht ohne Umweg direkt zur regionalen Preisseite.
              Dort stehen alle Preispositionen, Quellen, Rechner und passende Ratgeber für die gewählte Stadt bereit.
            </p>
          </div>

          <div className="directoryGrid">
            {featuredServices.map((service) => (
              <article className="directoryCard" key={service.slug}>
                <span className="eyebrow">{service.shortTitle}</span>
                <h3>{service.shortTitle}-Kosten regional vergleichen</h3>
                <p>{service.description}</p>
                <div className="regionChips">
                  {cities.map((region) => (
                    <Link
                      className="regionChip"
                      key={region.slug}
                      href={`/kosten/${service.slug}/${region.slug}`}
                    >
                      {service.shortTitle} {region.label}
                    </Link>
                  ))}
                </div>
                <Link className="textLink" href={`/kosten/${service.slug}`}>
                  Alle {service.shortTitle}-Preise Deutschland →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Direkter Vergleich</span>
            <h2>Was der Regionalfaktor praktisch bedeutet</h2>
            <p>
              Die Tabelle zeigt, wie ein beispielhafter bundesweiter Orientierungswert von 10.000 € im
              BauKostenRadar-Modell für die einzelnen Städte angepasst wird.
            </p>
          </div>

          <div className="priceTableWrap">
            <table className="priceTable">
              <thead>
                <tr>
                  <th>Stadt</th>
                  <th>Regionalfaktor</th>
                  <th>Aus 10.000 € werden</th>
                  <th>Detailseite</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((region) => {
                  const percent = Math.round((region.factor - 1) * 100);
                  return (
                    <tr key={region.slug}>
                      <td><strong>{region.label}</strong></td>
                      <td>{percent >= 0 ? "+" : ""}{percent} %</td>
                      <td><strong>{euro(10000 * region.factor)}</strong></td>
                      <td>
                        <Link className="textLink" href={`/staedte/${region.slug}`}>
                          {region.label} ansehen →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="notice cityNotice">
            Die Regionalfaktoren sind Modellannahmen zur Budgetorientierung. Sie bedeuten nicht, dass jedes reale
            Handwerkerangebot in einer Stadt exakt um diesen Prozentsatz vom bundesweiten Preis abweicht.
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">So funktioniert es</span>
            <h2>Von bundesweiten Preisen zur regionalen Orientierung</h2>
            <p>
              Ausgangspunkt sind nachvollziehbare deutsche Preisquellen für einzelne Gewerke und Sanierungsarbeiten.
              Für die Stadtseiten werden diese Preisbänder mit dem jeweiligen Regionalfaktor multipliziert.
            </p>
            <p>
              Dadurch bleibt die Rechenlogik auf allen Seiten identisch und nachvollziehbar. Wo Preise nur modelliert
              sind, kennzeichnen wir sie ausdrücklich als Richtwerte und nicht als lokal erhobene Festpreise.
            </p>
            <div className="heroActions">
              <Link className="primaryButton" href="/methodik">Methodik lesen</Link>
              <Link className="ghostButton" href="/quellen">Quellenverzeichnis</Link>
            </div>
          </div>

          <div className="contentCard proseCard">
            <span className="eyebrow">Für die Planung</span>
            <h2>Vom Richtwert zum echten Angebot</h2>
            <div className="stepsList">
              <div>
                <strong>1</strong>
                <span>Passendes Gewerk und Stadt auswählen.</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Preisband und Beispielbudget für den eigenen Umfang einordnen.</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Mehrere lokale Angebote mit möglichst identischem Leistungsumfang vergleichen.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
