import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegion, regions, renovationModel, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function priceRange(low: number, high: number) {
  return Math.round(low) === Math.round(high) ? euro(low) : `${euro(low)} - ${euro(high)}`;
}

export function generateStaticParams() {
  return regions.filter((region) => region.value !== "de").map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region || region.value === "de") return {};

  return {
    title: `Handwerker Kosten ${region.label} 2026`,
    description: `Handwerker- und Renovierungskosten in ${region.label}: modellierte Richtwerte 2026, regionale Einordnung, Beispielbudgets und Preisübersicht nach Gewerken.`,
    alternates: { canonical: `/staedte/${region.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region || region.value === "de") notFound();

  const percent = Math.round((region.factor - 1) * 100);
  const factorLabel = `${percent >= 0 ? "+" : ""}${percent} %`;
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/staedte/${region.slug}`;
  const otherCities = regions.filter((item) => item.value !== "de" && item.slug !== region.slug);

  const normalRenovation = renovationModel.conditions.find((condition) => condition.value === "normal")!;
  const extensiveRenovation = renovationModel.conditions.find((condition) => condition.value === "extensive")!;
  const coreRenovation = renovationModel.conditions.find((condition) => condition.value === "core")!;

  const renovationExamples = [
    {
      label: "Normale Renovierung",
      low: normalRenovation.lowPerSquareMeter * 100 * region.factor,
      high: normalRenovation.highPerSquareMeter * 100 * region.factor,
      detail: "100 m², Standardausführung",
    },
    {
      label: "Umfangreiche Sanierung",
      low: extensiveRenovation.lowPerSquareMeter * 100 * region.factor,
      high: extensiveRenovation.highPerSquareMeter * 100 * region.factor,
      detail: "100 m², mehrere Gewerke",
    },
    {
      label: "Kernsanierung",
      low: coreRenovation.lowPerSquareMeter * 100 * region.factor,
      high: coreRenovation.highPerSquareMeter * 100 * region.factor,
      detail: "100 m², umfassender Eingriff",
    },
  ];

  const modelPosition = percent >= 15
    ? "deutlich über dem bundesweiten Ausgangswert"
    : percent >= 10
      ? "spürbar über dem bundesweiten Ausgangswert"
      : percent > 0
        ? "leicht über dem bundesweiten Ausgangswert"
        : percent < 0
          ? "unter dem bundesweiten Ausgangswert"
          : "auf Höhe des bundesweiten Ausgangswerts";

  const faqs = [
    {
      question: `Wie hoch sind Handwerkerkosten in ${region.label} 2026?`,
      answer: `BauKostenRadar modelliert die Richtwerte für ${region.label} derzeit mit einem Standortfaktor von ${factorLabel} gegenüber dem bundesweiten Ausgangswert. Die konkrete Höhe hängt zusätzlich von Gewerk, Leistungsumfang, Material und Objektzustand ab.`,
    },
    {
      question: `Was bedeutet der Regionalfaktor ${factorLabel} für ${region.label}?`,
      answer: `Ein bundesweiter Orientierungswert von 10.000 € wird im Modell für ${region.label} mit rund ${euro(10000 * region.factor)} angesetzt. Der Faktor ist eine Budgethilfe und kein pauschaler Aufschlag auf jedes reale Angebot.`,
    },
    {
      question: `Was kostet eine Renovierung von 100 m² in ${region.label}?`,
      answer: `Für eine normale Renovierung von 100 m² ergibt das Modell derzeit etwa ${priceRange(normalRenovation.lowPerSquareMeter * 100 * region.factor, normalRenovation.highPerSquareMeter * 100 * region.factor)}. Bei umfangreicher Sanierung oder Kernsanierung kann das Budget deutlich höher liegen.`,
    },
    {
      question: `Sind die Preise direkt in ${region.label} erhoben?`,
      answer: "Nein. Die Basiswerte stammen aus öffentlich nachvollziehbaren deutschen Quellen. Für die Stadtseiten werden diese Werte mit einem transparent ausgewiesenen Regionalfaktor modelliert. Die Ergebnisse sind unverbindliche Orientierungswerte.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Städte", item: `${baseUrl}/staedte` },
        { "@type": "ListItem", position: 3, name: region.label, item: canonicalUrl },
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
            <Link href="/staedte">Städte</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{region.label}</span>
          </nav>
          <span className="eyebrow">Regionale Einordnung 2026</span>
          <h1>Handwerker Kosten in {region.label}</h1>
          <p>
            Richtwerte für Renovierung, Sanierung und Handwerker in {region.label}. BauKostenRadar passt
            bundesweite Preisbänder transparent mit einem Regionalfaktor von {factorLabel} an.
          </p>
          <div className="heroFacts">
            <span><strong>{factorLabel}</strong> Regionalfaktor</span>
            <span><strong>2026</strong> Datenstand</span>
            <span><strong>{services.length}</strong> Gewerke im Vergleich</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Regionale Einordnung</span>
            <h2>Wie BauKostenRadar {region.label} einordnet</h2>
            <p>
              Der aktuell verwendete Faktor für {region.label} liegt {modelPosition}. Er wird auf die
              bundesweiten Preisbänder angewendet, damit sich ein Projektbudget regional grob einordnen lässt.
            </p>
            <p>
              Wichtig: Der Faktor ersetzt keine lokalen Angebote. Ein konkreter Handwerkerpreis hängt unter anderem
              von Objektzustand, Zugänglichkeit, Material, Terminlage und genauem Leistungsumfang ab.
            </p>
            <div className="heroActions">
              <Link className="primaryButton" href="/methodik">Methodik ansehen</Link>
              <Link className="ghostButton" href="/quellen">Quellen prüfen</Link>
            </div>
          </div>

          <div className="dataPanel">
            <span className="eyebrow">Beispiel Regionalfaktor</span>
            <strong className="bigMetric">{factorLabel}</strong>
            <p>So verändert der Modellfaktor beispielhafte bundesweite Budgets:</p>
            <div className="metricGrid">
              {[10000, 50000, 100000, 200000].map((amount) => (
                <div key={amount}>
                  <strong>{euro(amount * region.factor)}</strong>
                  <span>aus {euro(amount)} Deutschland-Orientierung</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Beispielbudgets</span>
            <h2>Was 100 m² Renovierung in {region.label} kosten können</h2>
            <p>
              Die Beispiele kombinieren die bundesweiten BauKostenRadar-Richtwerte pro Quadratmeter mit dem
              Regionalfaktor für {region.label}. Sie zeigen Größenordnungen, keine Festpreise.
            </p>
          </div>

          <div className="cityBudgetGrid">
            {renovationExamples.map((example) => (
              <article className="contentCard cityBudgetCard" key={example.label}>
                <span className="eyebrow">{example.detail}</span>
                <h3>{example.label}</h3>
                <strong>{priceRange(example.low, example.high)}</strong>
                <small>modelliertes Gesamtbudget für {region.label}</small>
              </article>
            ))}
          </div>

          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/renovierungskosten">Renovierungskosten berechnen</Link>
            <Link className="ghostButton" href="/ratgeber/sanierungskosten-pro-qm">Sanierungskosten pro m²</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Preisübersicht</span>
            <h2>Handwerkerpreise nach Gewerk in {region.label}</h2>
            <p>
              Für jedes Gewerk zeigen wir einen repräsentativen Startwert. Auf der Detailseite findest du die
              vollständige Preistabelle, Quellen, lokale Modellierung und weitere Rechenbeispiele.
            </p>
          </div>

          <div className="cityServiceGrid">
            {services.map((service) => {
              const item = service.priceItems[0];
              return (
                <article key={service.slug} className="cityServiceCard">
                  <span className="serviceIcon" aria-hidden="true">{service.icon}</span>
                  <div>
                    <h2>{service.shortTitle}</h2>
                    <span>{item.name}</span>
                    <strong>{priceRange(item.low * region.factor, item.high * region.factor)}</strong>
                    <small>{item.unit}, modelliert für {region.label}</small>
                    <Link className="textLink" href={`/kosten/${service.slug}/${region.slug}`}>
                      {service.shortTitle}-Preise in {region.label} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="notice cityNotice">
            Die Stadtwerte sind keine lokal erhobenen Festpreise. Sie entstehen aus bundesweiten Richtwerten plus
            regionalem Modellfaktor. Für ein konkretes Projekt sollten mehrere lokale Angebote verglichen werden.
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Angebote vergleichen</span>
            <h2>So planst du ein Handwerkerbudget in {region.label}</h2>
            <div className="stepsList">
              <div>
                <strong>1</strong>
                <span>Leistungsumfang möglichst genau in Mengen, Flächen und gewünschter Qualität beschreiben.</span>
              </div>
              <div>
                <strong>2</strong>
                <span>BauKostenRadar-Richtwerte als Budgetrahmen nutzen und Material sowie Zusatzarbeiten separat beachten.</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Mehrere vergleichbare Angebote einholen und Positionen statt nur den Endpreis gegenüberstellen.</span>
              </div>
            </div>
          </div>

          <div className="contentCard proseCard">
            <span className="eyebrow">Wichtig beim Vergleich</span>
            <h2>Nicht nur auf den Gesamtpreis schauen</h2>
            <p>
              Prüfe, ob Anfahrt, Baustelleneinrichtung, Demontage, Entsorgung, Material, Nebenarbeiten und Mehrwertsteuer
              im Angebot enthalten sind. Unterschiedliche Leistungsumfänge können scheinbar große Preisunterschiede erklären.
            </p>
            <Link className="textLink" href="/ratgeber/arbeitskosten-materialkosten">
              Arbeits- und Materialkosten verstehen →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>Handwerkerkosten in {region.label}: FAQ</h2>
          </div>
          <div className="faqList">
            {faqs.map((faq) => (
              <article className="faqItem" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt sectionTight">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Weitere Städte</span>
            <h2>Regionale Richtwerte vergleichen</h2>
            <p>Vergleiche denselben Modellansatz für andere große Städte in Deutschland.</p>
          </div>
          <div className="regionChips">
            {otherCities.map((city) => (
              <Link className="regionChip" href={`/staedte/${city.slug}`} key={city.slug}>
                {city.label} <strong>{Math.round((city.factor - 1) * 100) >= 0 ? "+" : ""}{Math.round((city.factor - 1) * 100)} %</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
