import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const contactDescription =
  "Kontakt zu BauKostenRadar für Datenkorrekturen, Quellenhinweise, redaktionelle Fragen und Kooperationen.";

export const metadata: Metadata = {
  title: "Kontakt",
  description: contactDescription,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/kontakt`;
  const organizationId = `${base}/#organization`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Kontakt", item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${canonicalUrl}#contact`,
      url: canonicalUrl,
      name: "BauKostenRadar kontaktieren",
      description: contactDescription,
      isPartOf: { "@id": `${base}/#website` },
      about: { "@id": organizationId },
      mainEntity: { "@id": organizationId },
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
            <span aria-current="page">Kontakt</span>
          </nav>
          <span className="eyebrow">Kontakt</span>
          <h1>BauKostenRadar kontaktieren</h1>
          <p>Für Datenkorrekturen, Quellenhinweise, redaktionelle Fragen und Kooperationen erreichen Sie uns per E-Mail oder Telefon.</p>
        </div>
      </section>

      <div className="shell articleShell">
        <section className="contentCard proseCard">
          <h2>Kontaktmöglichkeiten</h2>
          <p>
            E-Mail: <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
            Telefon: <a className="textLink" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          </p>
          <p>
            Verantwortlich für BauKostenRadar ist <strong>{siteConfig.operator.name}</strong>. Die vollständigen
            Anbieter- und Anschriftangaben finden Sie im <Link className="textLink" href="/impressum">Impressum</Link>.
          </p>
          <p>
            Bei einer Datenkorrektur nennen Sie bitte möglichst die betroffene URL, die konkrete Preisposition
            und - falls vorhanden - eine nachvollziehbare Quelle. So können wir Hinweise schneller prüfen.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href="/quellen">Unsere Quellen</Link>
            <Link className="ghostButton" href="/methodik">Methodik ansehen</Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <h2>Keine Handwerkervermittlung</h2>
          <p>
            BauKostenRadar ist derzeit ein Informations- und Preisportal. Wir vermitteln aktuell keine
            Handwerksbetriebe und nehmen über die Website keine Renovierungs- oder Handwerkerprojekte zur
            Vermittlung entgegen. Die veröffentlichten Preise und Rechner dienen der Budgetorientierung.
          </p>
          <p>
            Für ein verbindliches Angebot wenden Sie sich bitte direkt an geeignete Fachbetriebe in Ihrer Region.
          </p>
        </section>
      </div>
    </>
  );
}
