import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    description: `${item.name}: aktuelle Kosten 2026 von ${priceRange(item.low, item.high)} ${item.unit}. Mit regionaler Einordnung, Quelle und Preisvergleich für deutsche Großstädte.`,
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
      answer: "Neben Region und Projektgröße wirken sich Materialqualität, Zugänglichkeit, vorhandener Bestand, Entsorgung, Sonderwünsche und der konkrete Leistungsumfang auf das Angebot aus.",
    },
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
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="contentHero">
        <div className="shell">
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
        <section className="contentCard proseCard">
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
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/handwerkerkosten">Eigene Kosten berechnen</Link>
            <Link className="ghostButton" href={`/kosten/${service.slug}`}>Alle {service.shortTitle}-Preise</Link>
          </div>
        </section>

        <section className="contentCard proseCard">
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
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Preisfaktoren</span>
          <h2>Was beeinflusst den tatsächlichen Preis?</h2>
          <div className="faqList">
            <div className="faqItem"><h3>Projektumfang</h3><p>Größere Aufträge können andere Stück- oder Quadratmeterpreise haben als kleine Einzelarbeiten.</p></div>
            <div className="faqItem"><h3>Bestand und Vorarbeiten</h3><p>Demontage, Ausgleich, Reparaturen, Schutzmaßnahmen oder Entsorgung können zusätzliche Kosten verursachen.</p></div>
            <div className="faqItem"><h3>Material und Ausführung</h3><p>Standardprodukte und einfache Ausführung liegen meist niedriger als Premium-Materialien oder Sonderlösungen.</p></div>
            <div className="faqItem"><h3>Region und Verfügbarkeit</h3><p>Lokales Lohnniveau, Auftragslage und Anfahrtswege können den Endpreis spürbar verändern.</p></div>
          </div>
        </section>

        <section className="contentCard proseCard">
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
          <p className="tableNote">
            Einen Fehler oder eine aktuellere Quelle können Sie an {" "}
            <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> melden.
          </p>
        </section>

        <section className="contentCard proseCard">
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
          <section className="contentCard proseCard">
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
          </section>
        )}
      </div>
    </>
  );
}
