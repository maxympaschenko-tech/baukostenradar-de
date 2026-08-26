import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von BauKostenRadar.",
  alternates: { canonical: "/impressum" },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function ImpressumPage() {
  const { operator } = siteConfig;

  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Rechtliche Angaben</span>
          <h1>Impressum</h1>
          <p>Anbieterkennzeichnung für BauKostenRadar.</p>
        </div>
      </section>

      <div className="shell articleShell">
        <section className="contentCard proseCard">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            <strong>{operator.name}</strong><br />
            {operator.addressLine}<br />
            {operator.postalCode} {operator.city}<br />
            {operator.country}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a className="textLink" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><br />
            E-Mail: <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
            Website: <a className="textLink" href={siteConfig.url}>{siteConfig.url}</a>
          </p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            {operator.name}<br />
            {operator.addressLine}<br />
            {operator.postalCode} {operator.city}<br />
            {operator.country}
          </p>

          <h2>Hinweis zu Preisangaben</h2>
          <p>
            BauKostenRadar veröffentlicht unverbindliche Orientierungswerte für Renovierungs-, Sanierungs-
            und Handwerkerkosten. Die Angaben stellen keine Angebote oder Preisgarantien dar. Konkrete Preise
            können insbesondere je nach Region, Objektzustand, Leistungsumfang, Material und Anbieter abweichen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website werden mit Sorgfalt erstellt und regelmäßig überprüft. Eine Gewähr für
            Richtigkeit, Vollständigkeit und Aktualität kann dennoch nicht übernommen werden. Maßgeblich für
            konkrete Bau- und Renovierungsleistungen sind individuelle Angebote und Verträge mit den jeweiligen
            Fachbetrieben.
          </p>
        </section>
      </div>
    </>
  );
}
