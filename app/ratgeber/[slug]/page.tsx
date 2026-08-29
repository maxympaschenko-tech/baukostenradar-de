import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allGuides, getAnyGuide } from "@/lib/all-guides";
import { getGuideRegionalServices, getGuideRegions, getGuideSilo, getGuideSiloServices } from "@/lib/guide-silo";
import { withSupplementalGuideLinks } from "@/lib/guide-supplemental-links";
import { priceItemSlug } from "@/lib/price-slug";
import { siteConfig } from "@/lib/site";
import { openGraphImage } from "@/lib/social-metadata";

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
      locale: "de_DE",
      siteName: siteConfig.name,
      title: guide.title,
      description: guide.description,
      url: `/ratgeber/${guide.slug}`,
      images: [openGraphImage],
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
  const regionalServices = getGuideRegionalServices(guide.slug);
  const relatedItems = withSupplementalGuideLinks(guide.slug, guide.related);

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
      author: { "@type": "Organization", name: siteConfig.name },
      publisher: { "@type": "Organization", name: siteConfig.name },
    },
  ];

  return (
    <article className="guidePage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="shell guideShell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Startseite</Link>
          <span>›</span>
          <Link href="/ratgeber">Ratgeber</Link>
          <span>›</span>
          <span>{guide.title}</span>
        </nav>

        <header className="guideHero">
          <div>
            <span className="eyebrow">{guide.eyebrow}</span>
            <h1>{guide.h1}</h1>
            <p className="guideLead">{guide.description}</p>
            <div className="guideTrustRow">
              <span>✓ Preise 2026</span>
              <span>✓ Quellen & Methodik</span>
              <span>✓ Regionale Einordnung</span>
            </div>
          </div>
          <aside className="guideKeyFact">
            <span>Wichtigster Richtwert</span>
            <strong>{guide.keyFact}</strong>
            <p>Für eine belastbare Planung immer Leistungsumfang, Region und Angebotsdetails prüfen.</p>
          </aside>
        </header>

        <div className="guideLayout">
          <aside className="guideToc" aria-label="Inhaltsverzeichnis">
            <strong>Inhalt</strong>
            <nav>
              {tocItems.map((item) => (
                <a key={item.id} href={`#${item.id}`}>{item.label}</a>
              ))}
              <a href="#rechenbeispiele">Rechenbeispiele</a>
              <a href="#weiter-planen">Weiter planen</a>
              <a href="#regional">Regional vergleichen</a>
            </nav>
          </aside>

          <div className="guideContent">
            {guide.sections.map((section) => (
              <section key={section.heading} id={headingId(section.heading)}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </section>
            ))}

            {guide.tables.map((table) => (
              <section key={table.heading}>
                <h2>{table.heading}</h2>
                <div className="tableWrap">
                  <table>
                    <thead>
                      <tr>{table.headers.map((header) => <th key={header}>{header}</th>)}</tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}

            <section id="rechenbeispiele">
              <h2>Rechenbeispiele</h2>
              <div className="exampleGrid">
                {guide.examples.map((example) => (
                  <article className="exampleCard" key={example.title}>
                    <h3>{example.title}</h3>
                    <p>{example.text}</p>
                    <strong>{example.result}</strong>
                  </article>
                ))}
              </div>
            </section>

            {guide.checklist?.length ? (
              <section>
                <h2>Checkliste für Angebote</h2>
                <ul className="checkList">
                  {guide.checklist.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ) : null}

            <section id="weiter-planen">
              <h2>Weiter planen</h2>
              <div className="guideRelatedGrid">
                {relatedItems.map((item) => (
                  <Link href={item.href} className="guideRelatedCard" key={item.href}>
                    <span>{relatedType(item.href)}</span>
                    <strong>{item.label}</strong>
                    <small>Öffnen →</small>
                  </Link>
                ))}
              </div>
            </section>

            <section id="regional">
              <h2>Kosten regional vergleichen</h2>
              <p>
                Handwerkerpreise unterscheiden sich nach Stadt, Auslastung und Projektbedingungen. Die folgenden
                Seiten helfen, den bundesweiten Richtwert regional einzuordnen.
              </p>
              <div className="guideRelatedGrid">
                {guideRegions.map((region) => (
                  <Link href={`/staedte/${region.slug}`} className="guideRelatedCard" key={region.slug}>
                    <span>Stadt</span>
                    <strong>{region.label}</strong>
                    <small>Preisniveau ansehen →</small>
                  </Link>
                ))}
              </div>

              {regionalServices.length ? (
                <div className="guideRegionalServices">
                  <h3>Passende Leistungen in Städten</h3>
                  <div className="guideRelatedGrid">
                    {regionalServices.flatMap((service) =>
                      guideRegions.slice(0, 3).map((region) => (
                        <Link
                          href={`/kosten/${service.slug}/${region.slug}`}
                          className="guideRelatedCard"
                          key={`${service.slug}-${region.slug}`}
                        >
                          <span>{service.shortTitle}</span>
                          <strong>{region.label}</strong>
                          <small>Kosten ansehen →</small>
                        </Link>
                      )),
                    )}
                  </div>
                </div>
              ) : null}
            </section>

            {primaryService ? (
              <section className="guidePriceContext">
                <h2>Passende Preispositionen</h2>
                <p>
                  Für die Budgetplanung lohnt sich zusätzlich ein Blick auf konkrete Einzelpositionen aus dem
                  Preisspiegel.
                </p>
                <div className="guideRelatedGrid">
                  {primaryService.priceItems.slice(0, 4).map((item) => (
                    <Link
                      href={`/kosten/${primaryService.slug}/leistung/${priceItemSlug(item)}`}
                      className="guideRelatedCard"
                      key={item.id}
                    >
                      <span>{primaryService.shortTitle}</span>
                      <strong>{item.name}</strong>
                      <small>{priceRange(item.low, item.high)} {item.unit}</small>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="sourceBox">
              <h2>Quellen und Einordnung</h2>
              <p>
                Die Richtwerte auf BauKostenRadar werden aus öffentlichen Quellen, Hersteller- und
                Marktinformationen sowie einem transparenten Preisband-Modell abgeleitet. Details zur Herleitung
                stehen in der <Link href="/methodik">Methodik</Link>.
              </p>
              {guide.sources.length ? (
                <ul>
                  {guide.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
