import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { priceItemSlug } from "@/lib/price-slug";
import { getRegion, getService, priceSources, regions, services } from "@/lib/pricing";
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
  return Math.round(low) === Math.round(high)
    ? euro(low)
    : `${euro(low)} - ${euro(high)}`;
}

export function generateStaticParams() {
  const cities = regions.filter((region) => region.value !== "de");
  return services.flatMap((service) =>
    cities.map((region) => ({ slug: service.slug, city: region.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const service = getService(slug);
  const region = getRegion(city);
  if (!service || !region || region.value === "de") return {};

  return {
    title: `${service.shortTitle} Kosten ${region.label} 2026`,
    description: `${service.shortTitle}-Kosten in ${region.label}: modellierte Richtwerte 2026 mit regional angepasster Preistabelle, Quellen und Erklärung des Standortfaktors.`,
    alternates: { canonical: `/kosten/${service.slug}/${region.slug}` },
  };
}

export default async function LocalCostPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const service = getService(slug);
  const region = getRegion(city);
  if (!service || !region || region.value === "de") notFound();

  const percent = Math.round((region.factor - 1) * 100);
  const sourceKeys = [...new Set(service.priceItems.map((item) => item.sourceKey))];
  const leadPrice = service.priceItems[0];
  const adjustedLeadLow = leadPrice.low * region.factor;
  const adjustedLeadHigh = leadPrice.high * region.factor;
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/kosten/${service.slug}/${region.slug}`;
  const otherCities = regions.filter((item) => item.value !== "de" && item.slug !== region.slug);
  const calculatorUrl = service.slug === "badsanierung" ? "/rechner/badsanierungskosten" : "/rechner/handwerkerkosten";

  const faqs = [
    {
      question: `Was kostet ${service.shortTitle} in ${region.label} 2026?`,
      answer: `Für „${leadPrice.name}“ ergibt das BauKostenRadar-Modell in ${region.label} derzeit etwa ${priceRange(adjustedLeadLow, adjustedLeadHigh)} ${leadPrice.unit}. Die vollständige lokal angepasste Preistabelle steht auf dieser Seite.`,
    },
    {
      question: `Wie wird der Preis für ${region.label} berechnet?`,
      answer: `Die bundesweiten Richtwerte werden derzeit mit einem transparent ausgewiesenen Standortfaktor von ${percent >= 0 ? "+" : ""}${percent} % modelliert. Das ist eine Budgethilfe und kein pauschaler Marktaufschlag für jedes konkrete Angebot.`,
    },
    {
      question: `Sind das direkt in ${region.label} erhobene Handwerkerpreise?`,
      answer: "Nein. Die Basispreise stammen aus öffentlich nachvollziehbaren deutschen Quellen. Die Stadtwerte werden daraus mit dem ausgewiesenen Regionalfaktor modelliert und ausdrücklich nicht als lokal erhobene Festpreise dargestellt.",
    },
    {
      question: `Wie bekomme ich einen verbindlichen Preis für ${service.shortTitle} in ${region.label}?`,
      answer: "Für ein konkretes Projekt sollten Leistungsumfang und Material möglichst genau beschrieben und mehrere lokale Fachbetriebe angefragt werden. BauKostenRadar hilft dabei, Angebote vorab grob einzuordnen.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Handwerker Kosten", item: `${baseUrl}/kosten` },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: `${baseUrl}/kosten/${service.slug}` },
        { "@type": "ListItem", position: 4, name: region.label, item: canonicalUrl },
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
            <Link href="/kosten">Handwerker Kosten</Link>
            <span aria-hidden="true">›</span>
            <Link href={`/kosten/${service.slug}`}>{service.shortTitle}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{region.label}</span>
          </nav>
          <span className="eyebrow">{region.label} - Preisstand August 2026</span>
          <h1>{service.shortTitle} Kosten in {region.label} 2026</h1>
          <p>
            Regionale Budgetorientierung für {service.shortTitle} in {region.label}. Die bundesweiten
            Preisbänder werden transparent mit dem aktuellen Standortfaktor von {percent >= 0 ? "+" : ""}{percent} % eingeordnet.
          </p>
          <div className="heroFacts">
            <span><strong>{service.priceItems.length}</strong> Preispositionen</span>
            <span><strong>{percent >= 0 ? "+" : ""}{percent} %</strong> Modellfaktor</span>
            <span><strong>{sourceKeys.length}</strong> geprüfte Quellen</span>
          </div>
        </div>
      </section>

      <div className="shell contentGrid">
        <div>
          <section className="contentCard">
            <span className="eyebrow">Regionale Preistabelle</span>
            <h2>{service.shortTitle}: Richtwerte für {region.label}</h2>
            <div className="priceTableWrap">
              <table className="priceTable">
                <thead>
                  <tr>
                    <th>Leistung</th>
                    <th>{region.label}</th>
                    <th>Deutschland</th>
                    <th>Einheit</th>
                  </tr>
                </thead>
                <tbody>
                  {service.priceItems.map((item) => (
                    <tr key={item.name}>
                      <td>
                        <Link className="priceItemLink" href={`/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`}>
                          {item.name}
                        </Link>
                        {item.note ? <small>{item.note}</small> : null}
                      </td>
                      <td><strong>{priceRange(item.low * region.factor, item.high * region.factor)}</strong></td>
                      <td>{priceRange(item.low, item.high)}</td>
                      <td>{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tableNote">
              Die Spalte „{region.label}“ ist modelliert. Sie ist keine Behauptung über lokal erhobene Festpreise
              und ersetzt kein individuelles Angebot eines Fachbetriebs.
            </p>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Einordnung</span>
            <h2>Was bedeutet der Standortfaktor für {region.label}?</h2>
            <p>
              Für {region.label} verwendet BauKostenRadar aktuell einen Faktor von {region.factor.toFixed(2).replace(".", ",")}.
              Damit werden bundesweite Preisbänder für eine erste Budgetplanung um {Math.abs(percent)} % {percent >= 0 ? "nach oben" : "nach unten"} angepasst.
              In einem echten Angebot können Anfahrt, Auslastung, Objektzustand, Material, Mindestauftragswerte und der konkrete Betrieb wichtiger sein als dieser Modellwert.
            </p>
            <p>
              Deshalb zeigt die Tabelle bewusst beide Werte nebeneinander: den bundesweiten Ausgangswert und die
              regionale Modellierung. So bleibt nachvollziehbar, wie die Schätzung entsteht.
            </p>
            <Link className="textLink" href={`/kosten/${service.slug}`}>Bundesweite {service.shortTitle}-Preise ansehen →</Link>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>FAQ zu {service.shortTitle} in {region.label}</h2>
            <div className="faqList">
              {faqs.map((faq) => (
                <div key={faq.question} className="faqItem">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Datenbasis</span>
            <h2>Quellen der Ausgangspreise</h2>
            <p>
              Die regionalen Werte beginnen immer bei den auf BauKostenRadar dokumentierten bundesweiten Quellen.
              Der Standortfaktor wird erst anschließend angewendet.
            </p>
            <div className="sourceList">
              {sourceKeys.map((key) => {
                const source = priceSources[key];
                return (
                  <a key={key} href={source.url} target="_blank" rel="noreferrer">
                    <strong>{source.name}</strong>
                    <span>Geprüft: {source.checkedAt}</span>
                  </a>
                );
              })}
            </div>
            <Link className="textLink" href="/methodik">Methodik und regionale Modellierung →</Link>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Andere Städte</span>
            <h2>{service.shortTitle}-Kosten regional vergleichen</h2>
            <div className="regionChips">
              {otherCities.map((item) => (
                <Link className="regionChip" key={item.slug} href={`/kosten/${service.slug}/${item.slug}`}>
                  {item.label} <strong>{item.factor >= 1 ? "+" : ""}{Math.round((item.factor - 1) * 100)} %</strong>
                </Link>
              ))}
            </div>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Kontakt</span>
            <h2>Datenhinweis oder Korrektur?</h2>
            <p>
              Wenn Sie für diese Seite eine aktuellere belastbare Quelle oder einen Fehler finden, schreiben Sie an
              {" "}<a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </section>
        </div>

        <aside className="sidebarSticky">
          <section className="contentCard">
            <span className="eyebrow">Schnellvergleich</span>
            <h2>{region.label}</h2>
            <p>{leadPrice.name}</p>
            <strong className="bigMetric">{priceRange(adjustedLeadLow, adjustedLeadHigh)}</strong>
            <p>{leadPrice.unit}</p>
            <Link className="primaryButton" href={calculatorUrl}>Kosten berechnen</Link>
            <Link className="textLink" href={`/kosten/${service.slug}`}>Deutschland vergleichen →</Link>
          </section>
        </aside>
      </div>
    </>
  );
}
