import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allGuides, getAnyGuide } from "@/lib/all-guides";
import { getGuideRegions, getGuideSilo, getGuideSiloServices } from "@/lib/guide-silo";
import { priceItemSlug } from "@/lib/price-slug";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

function headingId(value: string) {
  return value
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function relatedType(href: string) {
  if (href.startsWith("/rechner")) return "Rechner";
  if (href.startsWith("/kosten")) return "Preisübersicht";
  if (href.startsWith("/ratgeber")) return "Ratgeber";
  return "Weiterführend";
}

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

export function generateStaticParams() {
  return allGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAnyGuide(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/ratgeber/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: `/ratgeber/${guide.slug}`,
      publishedTime: "2026-08-26T08:00:00+02:00",
      modifiedTime: "2026-08-27T10:00:00+02:00",
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getAnyGuide(slug);
  if (!guide) notFound();

  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/ratgeber/${guide.slug}`;
  const tocItems = guide.sections.map((section) => ({
    label: section.heading,
    id: headingId(section.heading),
  }));
  const silo = getGuideSilo(guide.slug);
  const siloServices = getGuideSiloServices(guide.slug);
  const primaryService = siloServices[0];
  const guideRegions = getGuideRegions();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${base}/ratgeber` },
        { "@type": "ListItem", position: 3, name: guide.title, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.h1,
      description: guide.description,
      datePublished: "2026-08-26",
      dateModified: "2026-08-27",
      mainEntityOfPage: canonicalUrl,
      articleSection: guide.sections.map((section) => section.heading),
      author: {
        "@type": "Organization",
        name: siteConfig.name,
        url: base,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: base,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="contentHero" id="artikel-start">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <Link href="/ratgeber">Ratgeber</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{guide.title.replace(" 2026", "")}</span>
          </nav>

          <span className="eyebrow">{guide.eyebrow}</span>
          <h1>{guide.h1}</h1>
          <p>{guide.intro}</p>
          <div className="guideMeta" aria-label="Redaktionelle Angaben">
            <span><strong>Redaktion:</strong> <Link href="/ueber-uns">BauKostenRadar</Link></span>
            <span><strong>Aktualisiert:</strong> 27. August 2026</span>
            <span><strong>Datenbasis:</strong> Quellen + transparentes Kostenmodell</span>
          </div>
          <div className="heroFacts">
            <span><strong>2026</strong> Datenstand</span>
            <span><strong>Richtwerte</strong> statt Preisversprechen</span>
            <span><strong>Quellen & Modell</strong> transparent getrennt</span>
          </div>
        </div>
      </section>

      <article className="shell articleShell">
        <section className="contentCard proseCard guideSummary" aria-labelledby="guide-summary-title">
          <span className="eyebrow">Das Wichtigste in Kürze</span>
          <h2 id="guide-summary-title">{guide.keyFact}</h2>
          <ul className="summaryFacts">
            <li><strong>Orientierung:</strong> {guide.keyFact}</li>
            <li><strong>Einordnung:</strong> Die veröffentlichten Spannen sind Richtwerte und kein verbindliches Angebot.</li>
            <li><strong>Genauer planen:</strong> Fläche, Stückzahl, Zustand, Ausstattung und Region können das konkrete Budget deutlich verändern.</li>
          </ul>
          <div className="heroActions">
            <Link className="primaryButton" href={silo.calculatorHref}>{silo.calculatorLabel}</Link>
            <Link className="ghostButton" href="/kosten">Handwerkerpreise vergleichen</Link>
          </div>
        </section>

        <nav className="contentCard proseCard guideToc" aria-labelledby="guide-toc-title">
          <span className="eyebrow">Auf dieser Seite</span>
          <h2 id="guide-toc-title">Inhalt</h2>
          <ol>
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <li><a href="#gewerke">Passende Gewerke und Einzelpreise</a></li>
            <li><a href="#regional">Regionale Einordnung</a></li>
            <li><a href="#haeufige-fragen">Häufige Fragen</a></li>
            <li><a href="#weiter-planen">Passende Preise und Rechner</a></li>
          </ol>
        </nav>

        {guide.sections.map((section) => (
          <section className="contentCard proseCard articleSection" id={headingId(section.heading)} key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            {section.bullets ? (
              <ul className="guideBullets">
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            ) : null}

            {section.table ? (
              <div className="priceTableWrap">
                <table className="priceTable guideTable">
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => <th key={header}>{header}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.cells.join("|")}>
                        {row.cells.map((cell, index) => (
                          <td key={`${cell}-${index}`}>
                            {index === 0 && row.href ? <Link className="textLink" href={row.href}>{cell}</Link> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}

        <section className="contentCard proseCard articleSection" id="gewerke">
          <span className="eyebrow">Vom Ratgeber zum Einzelpreis</span>
          <h2>Passende Gewerke und konkrete Preispositionen</h2>
          <p>
            Gesamtbudgets werden belastbarer, wenn die wichtigsten Arbeiten einzeln geprüft werden. Die folgenden
            Preisbereiche passen thematisch zu diesem Ratgeber und führen direkt zu dokumentierten Richtwerten.
          </p>
          <div className="directoryGrid">
            {siloServices.map((service) => (
              <article className="directoryCard" key={service.slug}>
                <span className="eyebrow">{service.shortTitle}</span>
                <h3><Link href={`/kosten/${service.slug}`}>{service.title}</Link></h3>
                <p>{service.description}</p>
                <div className="sourceList">
                  {service.priceItems.slice(0, 2).map((item) => (
                    <Link key={item.name} href={`/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`}>
                      <strong>{item.name}</strong>
                      <span>{priceRange(item.low, item.high)} {item.unit}</span>
                    </Link>
                  ))}
                </div>
                <Link className="textLink" href={`/kosten/${service.slug}`}>Alle {service.shortTitle}-Preise →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard articleSection" id="regional">
          <span className="eyebrow">Regionale Einordnung</span>
          <h2>{silo.regionalMode === "service" && primaryService ? `${primaryService.shortTitle}-Kosten nach Stadt` : "Sanierungskosten nach Stadt einordnen"}</h2>
          <p>
            BauKostenRadar nutzt transparente regionale Modellfaktoren für die Budgetorientierung. Die Stadtwerte
            sind keine lokal erhobenen Festpreise, sondern modellierte Richtwerte auf Basis der bundesweiten Ausgangswerte.
          </p>
          <div className="regionChips">
            {guideRegions.map((region) => {
              const href = silo.regionalMode === "service" && primaryService
                ? `/kosten/${primaryService.slug}/${region.slug}`
                : `/staedte/${region.slug}`;
              const label = silo.regionalMode === "service" && primaryService
                ? `${primaryService.shortTitle} ${region.label}`
                : `Handwerkerkosten ${region.label}`;

              return (
                <Link className="regionChip" href={href} key={region.value}>
                  {label} <strong>{region.factor >= 1 ? "+" : ""}{Math.round((region.factor - 1) * 100)} %</strong>
                </Link>
              );
            })}
          </div>
          <div className="heroActions">
            <Link className="ghostButton" href="/staedte">Alle Städte vergleichen</Link>
            <Link className="ghostButton" href="/methodik">Regionalmodell verstehen</Link>
          </div>
        </section>

        <section className="contentCard proseCard articleSection" id="haeufige-fragen">
          <span className="eyebrow">Häufige Fragen</span>
          <h2>FAQ zu {guide.title.replace(" 2026", "")}</h2>
          <div className="faqList">
            {guide.faqs.map((faq) => (
              <div className="faqItem" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard articleSection relatedGuideSection" id="weiter-planen">
          <span className="eyebrow">Weiter planen</span>
          <h2>Passende Preise, Rechner und Ratgeber</h2>
          <p>Vertiefen Sie die Kostenfrage mit den nächsten passenden Seiten, statt wieder bei der allgemeinen Suche zu beginnen.</p>
          <div className="sourceList relatedGuideList">
            {guide.related.map((item) => (
              <Link href={item.href} key={item.href}>
                <span className="relatedType">{relatedType(item.href)}</span>
                <strong>{item.label}</strong>
                <span>Weiterlesen →</span>
              </Link>
            ))}
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href={silo.calculatorHref}>{silo.calculatorLabel}</Link>
            <Link className="ghostButton" href="/quellen">Quellen ansehen</Link>
          </div>
          <p className="tableNote">
            Wie BauKostenRadar Quellen, Modellbänder und regionale Faktoren trennt, ist auf der {" "}
            <Link className="textLink" href="/methodik">Methodik-Seite</Link> dokumentiert.
          </p>
          <a className="textLink" href="#artikel-start">Zum Seitenanfang ↑</a>
        </section>
      </article>
    </>
  );
}
