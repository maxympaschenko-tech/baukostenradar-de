import type { Metadata } from "next";
import Link from "next/link";
import { BathCostCalculator } from "@/components/bath-cost-calculator";
import { priceItemSlug } from "@/lib/price-slug";
import { getService, priceSources, regions } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Badsanierung Kosten Rechner 2026",
  description: "Badsanierungskosten 2026 nach Badgröße und Region online berechnen. Mit transparentem m²-Richtwert, Regionalfaktor, Einzelpreisen, Quellen und Stadtvergleich.",
  alternates: { canonical: "/rechner/badsanierungskosten" },
};

export default function BathCostCalculatorPage() {
  const service = getService("badsanierung");
  const squareMeterItem = service?.priceItems.find((item) => item.name === "Bad-Neubau / Sanierung");
  const wholeBathItem = service?.priceItems.find((item) => item.name === "Bad-Sanierung komplett");
  const sourceKeys = [...new Set([squareMeterItem?.sourceKey, wholeBathItem?.sourceKey].filter(Boolean))] as Array<keyof typeof priceSources>;
  const base = siteConfig.url.replace(/\/$/, "");
  const cityRegions = regions.filter((region) => region.value !== "de").slice(0, 4);

  const faqs = [
    {
      question: "Was kostet eine Badsanierung pro Quadratmeter 2026?",
      answer: "BauKostenRadar verwendet für eine vollständige Bad-Sanierung bzw. einen Bad-Neubau derzeit einen veröffentlichten Orientierungsbereich von 1.000 bis 2.500 Euro pro Quadratmeter. Region, Bestand, Ausstattung und notwendige Vorarbeiten können den tatsächlichen Angebotspreis deutlich verändern.",
    },
    {
      question: "Was kostet ein komplettes Bad 2026?",
      answer: "Als separaten Projekt-Richtwert führt die BauKostenRadar-Datenbasis für eine komplette Badsanierung derzeit 12.000 bis 32.000 Euro pro Bad. Dieser Wert wird im Rechner als Vergleich gezeigt, aber nicht mit dem Quadratmeter-Modell vermischt.",
    },
    {
      question: "Wie berücksichtigt der Rechner regionale Unterschiede?",
      answer: "Der bundesweite Quadratmeter-Richtwert wird mit dem transparent ausgewiesenen BauKostenRadar-Regionalfaktor multipliziert. Diese Stadtwerte sind modelliert und keine lokal erhobenen Festpreise.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Rechner", item: `${base}/rechner` },
        { "@type": "ListItem", position: 3, name: "Badsanierungskosten Rechner", item: `${base}/rechner/badsanierungskosten` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Badsanierung Kosten Rechner 2026",
      url: `${base}/rechner/badsanierungskosten`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: metadata.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
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
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <Link href="/rechner">Kostenrechner</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Badsanierungskosten</span>
          </nav>
          <span className="eyebrow">Badkosten Rechner Deutschland</span>
          <h1>Badsanierung Kosten Rechner 2026</h1>
          <p>
            Badgröße und Region auswählen und sofort eine nachvollziehbare Kostenspanne erhalten. Der Rechner trennt
            den veröffentlichten Quadratmeter-Richtwert bewusst vom separaten Komplettbad-Richtwert.
          </p>
          <div className="heroFacts">
            <span><strong>1.000 - 2.500 €</strong> Basis pro m²</span>
            <span><strong>{regions.length - 1} Städte</strong> im Regionalmodell</span>
            <span><strong>2 Quellenanker</strong> transparent getrennt</span>
          </div>
        </div>
      </section>

      <div className="shell articleShell">
        <BathCostCalculator />

        <section className="contentCard proseCard">
          <span className="eyebrow">Methodik</span>
          <h2>So rechnet der Badsanierungskosten-Rechner</h2>
          <p>
            Ausgangspunkt ist der in unserer Preisdatenbank hinterlegte Richtwert für „Bad-Neubau / Sanierung“.
            Der Rechner multipliziert diesen Bereich mit der angegebenen Badfläche. Anschließend wird nur dann ein
            Regionalfaktor angewendet, wenn eine der modellierten Großstadtregionen ausgewählt wurde.
          </p>
          <p>
            Der separate Richtwert für eine komplette Badsanierung von 12.000 bis 32.000 Euro wird als Plausibilitäts-
            und Vergleichswert angezeigt. Er wird nicht zusätzlich auf die Quadratmeterberechnung aufgeschlagen.
          </p>
          <Link className="textLink" href="/methodik">Gesamte Methodik ansehen →</Link>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Einzelpreise</span>
          <h2>Die Preisanker des Rechners im Detail</h2>
          <p>
            Für die Berechnung und den Vergleich werden die zugrunde liegenden Preispositionen getrennt geführt.
            Auf den Detailseiten finden Sie Quelle, Kostentreiber, Beispielrechnungen und regionale Einordnung.
          </p>
          <div className="sourceList">
            {service?.priceItems.slice(0, 4).map((item) => (
              <Link key={item.name} href={`/kosten/badsanierung/leistung/${priceItemSlug(item.name)}`}>
                <strong>{item.name}</strong>
                <span>{item.low.toLocaleString("de-DE")} - {item.high.toLocaleString("de-DE")} € {item.unit}</span>
              </Link>
            ))}
          </div>
          <Link className="textLink" href="/kosten/badsanierung">Alle Badsanierungspreise ansehen →</Link>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Regionale Einordnung</span>
          <h2>Badsanierungskosten nach Stadt</h2>
          <p>
            Die Stadtseiten verwenden denselben Regionalfaktor wie der Rechner. Sie zeigen modellierte Richtwerte zur
            Budgetorientierung und ausdrücklich keine lokal erhobenen Festpreise.
          </p>
          <div className="regionChips">
            {cityRegions.map((region) => (
              <Link className="regionChip" key={region.slug} href={`/kosten/badsanierung/${region.slug}`}>
                Badsanierung {region.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Weiterführende Planung</span>
          <h2>Badkosten im Gesamtbudget einordnen</h2>
          <p>
            Eine Badsanierung ist häufig nur ein Teil einer größeren Wohnungs- oder Altbausanierung. Die folgenden
            Ratgeber helfen dabei, den Badposten mit dem gesamten Renovierungsbudget zu vergleichen.
          </p>
          <div className="sourceList">
            <Link href="/ratgeber/bad-komplett-sanieren-kosten">
              <strong>Bad komplett sanieren: Kosten 2026</strong>
              <span>Leistungsumfang und typische Kostenblöcke im Detail</span>
            </Link>
            <Link href="/ratgeber/bad-10-qm-sanieren-kosten">
              <strong>Bad 10 m² sanieren: Kosten</strong>
              <span>Konkretes Flächenbeispiel für die Budgetplanung</span>
            </Link>
            <Link href="/ratgeber/sanierungskosten-pro-qm">
              <strong>Sanierungskosten pro m² 2026</strong>
              <span>Vier Sanierungsstufen und Beispielbudgets</span>
            </Link>
            <Link href="/ratgeber/wohnung-renovieren-kosten">
              <strong>Wohnung renovieren: Kosten 2026</strong>
              <span>Beispiele für 60, 80 und 100 m²</span>
            </Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Quellen</span>
          <h2>Datenbasis der Berechnung</h2>
          <p>
            Die Preisanker stammen aus öffentlich nachvollziehbaren deutschen Quellen. BauKostenRadar strukturiert
            diese Werte für die Budgetplanung und kennzeichnet regionale Anpassungen ausdrücklich als Modell.
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
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Häufige Fragen</span>
          <h2>FAQ zum Badsanierungskosten-Rechner</h2>
          <div className="faqList">
            {faqs.map((faq) => (
              <div className="faqItem" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
