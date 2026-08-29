import Link from "next/link";
import { RenovationCalculator } from "@/components/renovation-calculator";
import { allGuides } from "@/lib/all-guides";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function priceRange(low: number, high: number) {
  return low === high ? euro(low) : `${euro(low)} - ${euro(high)}`;
}

const heroCategories = [
  ["Badsanierung", "/kosten/badsanierung"],
  ["Dacharbeiten", "/kosten/dachsanierung"],
  ["Fenster", "/kosten/fenster"],
  ["Heizung", "/kosten/heizung"],
  ["Sanitär", "/kosten/sanitaer"],
  ["Elektroarbeiten", "/kosten/elektriker"],
] as const;

const featuredServiceSlugs = [
  "badsanierung",
  "maler",
  "elektriker",
  "dachsanierung",
  "fenster",
  "heizung",
] as const;

const featuredGuideSlugs = [
  "sanierungskosten-pro-qm",
  "kernsanierung-kosten",
  "haus-sanieren-kosten",
  "sanierungskosten-einfamilienhaus",
  "dach-sanieren-kosten-pro-qm",
  "bad-komplett-sanieren-kosten",
];

export default function HomePage() {
  const siteUrl = siteConfig.url.replace(/\/$/, "");
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "de-DE",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
  const priceCount = services.reduce((sum, service) => sum + service.priceItems.length, 0);
  const featuredServices = featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const featuredGuides = featuredGuideSlugs
    .map((slug) => allGuides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof allGuides)[number] => Boolean(guide));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />

      <section className="premiumHero">
        <div className="premiumHeroBackdrop" aria-hidden="true" />
        <div className="shell premiumHeroGrid">
          <div className="premiumHeroCopy">
            <span className="premiumKicker">Aktuelle Baukosten 2026 für Deutschland</span>
            <h1>Baukosten im Blick.<br />Projekte besser planen.</h1>
            <p>
              Aktuelle Kosten für Handwerkerarbeiten, Sanierungen und Modernisierung transparent,
              regional und verständlich erklärt.
            </p>

            <div className="premiumHeroActions">
              <Link className="premiumPrimaryButton" href="/kosten">Preise vergleichen</Link>
              <Link className="premiumOutlineButton" href="/rechner">Kostenrechner nutzen</Link>
            </div>

            <div className="premiumTrustRow">
              <div>
                <span className="premiumTrustIcon">€</span>
                <div><strong>Aktuelle Preise 2026</strong><small>Regelmäßig geprüft und aktualisiert</small></div>
              </div>
              <div>
                <span className="premiumTrustIcon">●</span>
                <div><strong>Regional & transparent</strong><small>Preise nach Städten und Regionen</small></div>
              </div>
              <div>
                <span className="premiumTrustIcon">✓</span>
                <div><strong>Quellen nachvollziehbar</strong><small>Richtwerte mit Methodik und Herkunft</small></div>
              </div>
            </div>
          </div>

          <div className="premiumHeroVisual">
            <img src="/hero-house.svg" alt="Modernes Wohnhaus als Symbol für Bau- und Renovierungskosten" />
            <div className="premiumCategoryPanel">
              <strong>Beliebte Kategorien</strong>
              <div className="premiumCategoryList">
                {heroCategories.map(([label, href]) => (
                  <Link key={href} href={href}>
                    <span>{label}</span>
                    <span aria-hidden="true">›</span>
                  </Link>
                ))}
              </div>
              <Link className="premiumAllCategories" href="/kosten">Alle Kategorien anzeigen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="premiumQuickStats">
        <div className="shell premiumStatsGrid">
          <div><strong>{services.length}</strong><span>Kostenbereiche</span></div>
          <div><strong>{priceCount}</strong><span>Preispositionen</span></div>
          <div><strong>{regions.length - 1}</strong><span>Städte im Vergleich</span></div>
          <div><strong>2026</strong><span>Aktueller Datenstand</span></div>
        </div>
      </section>

      <section className="section premiumCalculatorSection">
        <div className="shell premiumCalculatorGrid">
          <div className="premiumCalculatorIntro">
            <span className="eyebrow">Kosten schnell einschätzen</span>
            <h2>Renovierungskosten direkt berechnen</h2>
            <p>
              Fläche, Sanierungsumfang, Qualitätsniveau und Region auswählen. Der Rechner liefert sofort eine
              unverbindliche Kostenspanne als erste Budgetorientierung.
            </p>
            <div className="premiumMiniFeatures">
              <span>Keine Anmeldung</span>
              <span>Regionale Faktoren</span>
              <span>Transparente Methodik</span>
            </div>
            <Link className="textLink" href="/rechner">Alle Rechner ansehen →</Link>
          </div>
          <div className="premiumCalculatorCard">
            <RenovationCalculator compact />
          </div>
        </div>
      </section>

      <section className="section premiumServiceSection">
        <div className="shell">
          <div className="premiumSectionHeading">
            <div>
              <span className="eyebrow">Preisspiegel 2026</span>
              <h2>Beliebte Handwerkerkosten</h2>
              <p>Typische Preise, Einheiten, Quellen und regionale Einordnung auf einen Blick.</p>
            </div>
            <Link className="premiumTextArrow" href="/kosten">Alle Kostenbereiche ansehen</Link>
          </div>

          <div className="premiumServiceGrid">
            {featuredServices.map((service) => {
              const firstPrice = service.priceItems[0];
              return (
                <Link className="premiumServiceCard" href={`/kosten/${service.slug}`} key={service.slug}>
                  <div className="premiumServiceCardTop">
                    <span className="premiumServiceIcon" aria-hidden="true">{service.icon}</span>
                    <span className="premiumServiceArrow" aria-hidden="true">↗</span>
                  </div>
                  <h3>{service.shortTitle}</h3>
                  <p>{firstPrice.name}</p>
                  <strong>{priceRange(firstPrice.low, firstPrice.high)}</strong>
                  <small>{firstPrice.unit}</small>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section premiumCitiesSection">
        <div className="shell">
          <div className="premiumSectionHeading">
            <div>
              <span className="eyebrow">Ratgeber</span>
              <h2>Kostenfragen ausführlich erklärt</h2>
              <p>Evergreen-Ratgeber mit Rechenbeispielen, Tabellen und klarer Trennung zwischen Quellen und Modellwerten.</p>
            </div>
            <Link className="premiumTextArrow" href="/ratgeber">Alle Ratgeber ansehen</Link>
          </div>

          <div className="directoryGrid">
            {featuredGuides.map((guide) => (
              <article className="directoryCard" key={guide.slug}>
                <span className="eyebrow">{guide.eyebrow}</span>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <div className="miniPrice">
                  <span>Wichtigster Richtwert</span>
                  <strong>{guide.keyFact}</strong>
                </div>
                <Link className="textLink" href={`/ratgeber/${guide.slug}`}>Ratgeber lesen →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section premiumDarkSection">
        <div className="shell premiumHowGrid">
          <div>
            <span className="premiumDarkKicker">So funktioniert BauKostenRadar</span>
            <h2>Von der ersten Preisidee bis zur belastbaren Budgetplanung</h2>
            <p>
              BauKostenRadar verbindet strukturierte Preisdaten mit Rechnern, Stadtseiten und nachvollziehbaren
              Quellen. So lassen sich Kosten Schritt für Schritt besser einordnen.
            </p>
            <Link className="premiumLightButton" href="/methodik">Methodik & Quellen</Link>
          </div>

          <div className="premiumSteps">
            <div><span>01</span><strong>Leistung wählen</strong><p>Zum Beispiel Bad, Dach, Fenster oder Elektrik.</p></div>
            <div><span>02</span><strong>Preis einordnen</strong><p>Richtwerte und Einheiten transparent vergleichen.</p></div>
            <div><span>03</span><strong>Region berücksichtigen</strong><p>Stadtfaktoren als Modellhilfe für die Budgetplanung nutzen.</p></div>
            <div><span>04</span><strong>Details vertiefen</strong><p>Einzelpreise, Rechner, Ratgeber, Quellen und Methodik miteinander abgleichen.</p></div>
          </div>
        </div>
      </section>

      <section className="section premiumCitiesSection" id="staedte">
        <div className="shell">
          <div className="premiumSectionHeading">
            <div>
              <span className="eyebrow">Regionen</span>
              <h2>Handwerkerpreise nach Stadt</h2>
              <p>Regionale Modellfaktoren helfen bei der ersten Einordnung des Budgets.</p>
            </div>
            <Link className="premiumTextArrow" href="/staedte">Alle Städte ansehen</Link>
          </div>

          <div className="premiumCityGrid">
            {regions.filter((region) => region.value !== "de").map((region) => (
              <Link key={region.value} href={`/staedte/${region.slug}`} className="premiumCityCard">
                <span>{region.label}</span>
                <strong>{region.factor >= 1 ? "+" : ""}{Math.round((region.factor - 1) * 100)} %</strong>
                <small>Modellfaktor</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="premiumFinalCta">
        <div className="shell premiumFinalCtaInner">
          <div>
            <span>Budget planen</span>
            <h2>Preise vergleichen und Kosten selbst berechnen.</h2>
          </div>
          <div className="premiumHeroActions">
            <Link className="premiumPrimaryButton premiumPrimaryButtonLight" href="/rechner">Kosten berechnen</Link>
            <Link className="premiumOutlineButton premiumOutlineButtonDark" href="/kosten">Preise ansehen</Link>
          </div>
        </div>
      </section>
    </>
  );
}