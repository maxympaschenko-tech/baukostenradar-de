import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu BauKostenRadar für Datenkorrekturen, Quellenhinweise, redaktionelle Fragen und Kooperationen.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
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
