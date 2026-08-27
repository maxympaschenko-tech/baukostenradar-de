import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCalculationExamples, getOfferChecks, getPriceDrivers } from "@/lib/price-guidance";
import { getPriceItem, priceItemSlug } from "@/lib/price-slug";
import { getService, priceSources, regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

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

function regionalPrice(value: number, factor: number) {
  return Math.round(value * factor);
}

export function generateStaticParams() {
  return services.flatMap((service) =>
    service.priceItems.map((item) => ({
      slug: service.slug,
      item: priceItemSlug(item.name),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; item: string }>;
}): Promise<Metadata> {
  const { slug, item: itemSlug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const item = getPriceItem(service, itemSlug);
  if (!item) return {};

  return {
    title: `${item.name} Kosten 2026`,
    description: `${item.name} 2026: Richtwert ${priceRange(item.low, item.high)} ${item.unit}. Mit Beispielrechnungen, Stadtvergleich, Kostentreibern, Angebots-Check und Quelle.`,
    alternates: { canonical: `/kosten/${service.slug}/leistung/${itemSlug}` },
  };
}

export default async function PriceItemPage({
  params,
}: {
  params: Promise<{ slug: string; item: string }>;
}) {
  const { slug, item: itemSlug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const item = getPriceItem(service, itemSlug);
  if (!item) notFound();

  const source = priceSources[item.sourceKey];
  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/kosten/${service.slug}/leistung/${itemSlug}`;
  const cityRegions = regions.filter((region) => region.value !== "de");
  const relatedItems = service.priceItems.filter((candidate) => candidate.name !== item.name).slice(0, 5);
  const calculationExamples = getCalculationExamples(item);
  const priceDrivers = getPriceDrivers(item, service.slug);
  const offerChecks = getOfferChecks(item);
  const driverSummary = priceDrivers.map((driver) => driver.title).join(", ");

  const faqs = [
    {
      question: `Was kostet ${item.name} 2026?`,
      answer: `Der bundesweite Richtwert liegt bei ${priceRange(item.low, item.high)} ${item.unit}. Der Wert dient als Orientierung und ist kein verbindliches Handwerkerangebot.`,
    },
    {
      question: `Warum kann ${item.name} regional mehr oder weniger kosten?`,
      answer: "Lohnniveau, Auslastung der Betriebe, Anfahrt, Objektzustand und notwendige Vorarbeiten unterscheiden sich regional. BauKostenRadar zeigt deshalb zusätzlich modellierte Stadtwerte, die ausdrücklich keine lokal erhobenen Festpreise sind.",
    },
    {
      question: `Welche Faktoren beeinflussen den Endpreis für ${item.name}?`,
      answer: `Zu den wichtigsten Kostentreibern zählen bei dieser Arbeit insbesondere ${driverSummary}. Der konkrete Leistungsumfang entscheidet darüber, welche Faktoren im einzelnen Angebot tatsächlich relevant sind.`,
    },
    ...(calculationExamples.length > 0
      ? [{
          question: `Wie kann ich die Kosten für ${item.name} auf meine Menge hochrechnen?`,
          answer: `Für eine erste Orientierung kann der Richtwert von ${priceRange(item.low, item.high)} ${item.unit} mit der geplanten Menge multipliziert werden. Die Beispielrechnungen auf dieser Seite zeigen mehrere Größenordnungen ohne Regionalfaktor und Zusatzleistungen.`,
        }]
      : []),
    {
      question: `Woher stammt der Richtwert für ${item.name}?`,
      answer: `Die Preisposition ist der öffentlich nachvollziehbaren Quelle „${source.name}“ zugeordnet. Das Prüfdatum der Quelle wird auf dieser Seite ausgewiesen.`,
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Handwerker Kosten", item: `${base}/kosten` },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: `${base}/kosten/${service.slug}` },
        { "@type": "ListItem", position: 4, name: item.name, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${item.name} Kosten 2026`,
      url: canonicalUrl,
      description: `${item.name}: Richtwert ${priceRange(item.low, item.high)} ${item.unit} mit Beispielrechnungen, regionaler Einordnung und Datenquelle.`,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: base,
      },
      about: {
        "@type": "Thing",
        name: item.name,
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
            <Link href="/kosten">Handwerker Kosten</Link>
            <span aria-hidden="true">›</span>
            <Link href={`/kosten/${service.slug}`}>{service.shortTitle}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{item.name}</span>
          </nav>
          <span className="eyebrow">{service.shortTitle} - Preisstand August 2026</span>
          <h1>{item.name}: Kosten 2026</h1>
          <p>
            Bundesweiter Richtwert: <strong>{priceRange(item.low, item.high)}</strong> {item.unit}.
            {item.note ? ` ${item.note}.` : ""}
          </p>
          <div className="heroFacts">
            <span><strong>{priceRange(item.low, item.high)}</strong> {item.unit}</span>
            <span><strong>8 Städte</strong> im Regionalmodell</span>
            <span><strong>Quelle geprüft</strong> {source.checkedAt}</span>
          </div>
        </div>
      </section>

      <div className="shell articleShell">
        <nav className="contentCard proseCard guideToc" aria-label="Inhaltsverzeichnis">
          <span className="eyebrow">Schnellnavigation</span>
          <h2>Inhalt</h2>
          <ol>
            <li><a href="#preis">Preis und Einordnung</a></li>
            {calculationExamples.length > 0 ? <li><a href="#beispiele">Beispielrechnungen</a></li> : null}
            <li><a href="#regionen">Preise nach Stadt</a></li>
            <li><a href="#preisfaktoren">Kostentreiber</a></li>
            <li><a href="#angebot">Angebote vergleichen</a></li>
            <li><a href="#quelle">Quelle und Aktualität</a></li>
            <li><a href="#faq">Häufige Fragen</a></li>
          </ol>
        </nav>

        <section className="contentCard proseCard articleSection" id="preis">
          <span className="eyebrow">Preisübersicht</span>
          <h2>Was kostet {item.name}?</h2>
          <p>
            Für <strong>{item.name}</strong> liegt der in unserer Datenbasis hinterlegte bundesweite
            Orientierungswert bei <strong>{priceRange(item.low, item.high)}</strong> {item.unit}.
            {item.note ? ` Die Quelle ergänzt dazu: ${item.note}.` : ""}
          </p>
          <p>
            Dieser Bereich ist keine Preisgarantie. Konkrete Angebote können insbesondere durch Projektgröße,
            Material, Zustand des Objekts, Anfahrt, Zugänglichkeit und zusätzliche Vorarbeiten abweichen.
          </p>
          <div className="heroFacts">
            <span><strong>{priceRange(item.low, item.high)}</strong> Richtwert</span>
            <span><strong>{item.unit}</strong> Abrechnungseinheit</span>
            <span><strong>{source.checkedAt}</strong> Quellenprüfung</span>
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/handwerkerkosten">Eigene Kosten berechnen</Link>
            <Link className="ghostButton" href={`/kosten/${service.slug}`}>Alle {service.shortTitle}-Preise</Link>
          </div>
        </section>

        {calculationExamples.length > 0 && (
          <section className="contentCard proseCard articleSection" id="beispiele">
            <span className="eyebrow">Beispielrechnungen</span>
            <h2>{item.name}: Kosten für verschiedene Mengen</h2>
            <p>
              Für eine schnelle Budgetorientierung wird derselbe bundesweite Richtwert auf drei typische Mengen
              hochgerechnet. So lässt sich besser erkennen, in welcher Größenordnung das eigene Vorhaben liegen kann.
            </p>
            <div className="priceTableWrap">
              <table className="priceTable">
                <thead>
                  <tr>
                    <th>Menge</th>
                    <th>Ausgangswert</th>
                    <th>Rechnerische Spanne</th>
                  </tr>
                </thead>
                <tbody>
                  {calculationExamples.map((example) => (
                    <tr key={example.quantityLabel}>
                      <td><strong>{example.quantityLabel}</strong></td>
                      <td>{priceRange(item.low, item.high)} {item.unit}</td>
                      <td><strong>{priceRange(example.low, example.high)}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tableNote">
              Rechenbeispiele ohne Regionalfaktor und ohne zusätzliche Leistungen. Sie sind keine Angebote und ersetzen keine konkrete Aufmaß- oder Projektkalkulation.
            </p>
          </section>
        )}

        <section className="contentCard proseCard articleSection" id="regionen">
          <span className="eyebrow">Regionalmodell</span>
          <h2>{item.name} nach Stadt</h2>
          <p>
            Die folgenden Stadtwerte werden aus dem bundesweiten Richtwert mit transparenten regionalen
            Modellfaktoren berechnet. Sie sind keine separat vor Ort erhobenen Marktpreise und sollen vor allem
            eine erste Budgeteinordnung ermöglichen.
          </p>
          <div className="priceTableWrap">
            <table className="priceTable">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Modellierte Spanne</th>
                  <th>Faktor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Deutschland Ø</strong></td>
                  <td><strong>{priceRange(item.low, item.high)}</strong></td>
                  <td>1,00</td>
                </tr>
                {cityRegions.map((region) => {
                  const low = regionalPrice(item.low, region.factor);
                  const high = regionalPrice(item.high, region.factor);
                  return (
                    <tr key={region.value}>
                      <td>
                        <Link className="textLink" href={`/kosten/${service.slug}/${region.slug}`}>{region.label}</Link>
                      </td>
                      <td><strong>{priceRange(low, high)}</strong></td>
                      <td>{region.factor.toFixed(2).replace(".", ",")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="tableNote">Alle Werte beziehen sich auf dieselbe Einheit: {item.unit}.</p>
          <Link className="textLink" href="/staedte">Alle Städte und Regionalfaktoren vergleichen →</Link>
        </section>

        <section className="contentCard proseCard articleSection" id="preisfaktoren">
          <span className="eyebrow">Kostentreiber</span>
          <h2>Was beeinflusst den Preis für {item.name}?</h2>
          <p>
            Die Preisspanne entsteht nicht nur durch regionale Unterschiede. Bei {service.shortTitle} sind je nach
            konkreter Arbeit insbesondere die folgenden Punkte für den tatsächlichen Angebotspreis relevant.
          </p>
          <div className="faqList">
            {priceDrivers.map((driver) => (
              <div className="faqItem" key={driver.title}>
                <h3>{driver.title}</h3>
                <p>{driver.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard articleSection" id="angebot">
          <span className="eyebrow">Angebote vergleichen</span>
          <h2>Was sollte bei {item.name} im Angebot klar sein?</h2>
          <p>
            Ein niedriger Endpreis allein sagt wenig aus. Für einen fairen Vergleich sollten mehrere Angebote dieselbe
            Menge, denselben Leistungsumfang und dieselben Nebenarbeiten abdecken. Diese Punkte helfen bei der Prüfung:
          </p>
          <div className="faqList">
            {offerChecks.map((check) => (
              <div className="faqItem" key={check.title}>
                <h3>{check.title}</h3>
                <p>{check.text}</p>
              </div>
            ))}
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/handwerkerkosten">Kosten vorab berechnen</Link>
            <Link className="ghostButton" href="/ratgeber/handwerker-stundensaetze">Handwerkerpreise besser verstehen</Link>
          </div>
        </section>

        <section className="contentCard proseCard articleSection" id="quelle">
          <span className="eyebrow">Quelle</span>
          <h2>Datenbasis für diesen Richtwert</h2>
          <p>
            BauKostenRadar ordnet jede Preisposition einer konkreten Quelle zu und trennt den veröffentlichten
            Ausgangswert von unserer regionalen Modellierung.
          </p>
          <div className="sourceList">
            <a href={source.url} target="_blank" rel="noreferrer">
              <strong>{source.name}</strong>
              <span>Geprüft: {source.checkedAt}</span>
            </a>
          </div>
          <div className="heroActions">
            <Link className="ghostButton" href="/methodik">Methodik ansehen</Link>
            <Link className="ghostButton" href="/quellen">Alle Quellen ansehen</Link>
          </div>
          <p className="tableNote">
            Einen Fehler oder eine aktuellere Quelle können Sie an {" "}
            <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> melden.
          </p>
        </section>

        <section className="contentCard proseCard articleSection" id="faq">
          <span className="eyebrow">Häufige Fragen</span>
          <h2>FAQ zu {item.name}</h2>
          <div className="faqList">
            {faqs.map((faq) => (
              <div className="faqItem" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {relatedItems.length > 0 && (
          <section className="contentCard proseCard articleSection" id="weitere-preise">
            <span className="eyebrow">Weitere Preise</span>
            <h2>Weitere {service.shortTitle}-Arbeiten</h2>
            <div className="sourceList">
              {relatedItems.map((related) => (
                <Link key={related.name} href={`/kosten/${service.slug}/leistung/${priceItemSlug(related.name)}`}>
                  <strong>{related.name}</strong>
                  <span>{priceRange(related.low, related.high)} {related.unit}</span>
                </Link>
              ))}
            </div>
            <div className="heroActions">
              <Link className="primaryButton" href={`/kosten/${service.slug}`}>Alle {service.shortTitle}-Preise</Link>
              <Link className="ghostButton" href="/kosten">Alle Gewerke vergleichen</Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
