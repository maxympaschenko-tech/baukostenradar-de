import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
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
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/ratgeber/${guide.slug}`;

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
      dateModified: "2026-08-26",
      mainEntityOfPage: canonicalUrl,
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

      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">{guide.eyebrow}</span>
          <h1>{guide.h1}</h1>
          <p>{guide.intro}</p>
          <div className="guideMeta" aria-label="Redaktionelle Angaben">
            <span><strong>Redaktion:</strong> <Link href="/ueber-uns">BauKostenRadar</Link></span>
            <span><strong>Aktualisiert:</strong> 26. August 2026</span>
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
        <section className="contentCard proseCard">
          <span className="eyebrow">Kurz zusammengefasst</span>
          <h2>{guide.keyFact}</h2>
          <p>{guide.intro}</p>
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/renovierungskosten">Renovierung berechnen</Link>
            <Link className="ghostButton" href="/kosten">Handwerkerpreise vergleichen</Link>
          </div>
        </section>

        {guide.sections.map((section) => (
          <section className="contentCard proseCard" key={section.heading}>
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

        <section className="contentCard proseCard">
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

        <section className="contentCard proseCard">
          <span className="eyebrow">Weiter planen</span>
          <h2>Passende Preise und Rechner</h2>
          <div className="sourceList">
            {guide.related.map((item) => (
              <Link href={item.href} key={item.href}>
                <strong>{item.label}</strong>
                <span>Weiterlesen →</span>
              </Link>
            ))}
          </div>
          <p className="tableNote">
            Wie BauKostenRadar Quellen, Modellbänder und regionale Faktoren trennt, ist auf der {" "}
            <Link className="textLink" href="/methodik">Methodik-Seite</Link> dokumentiert.
          </p>
        </section>
      </article>
    </>
  );
}
