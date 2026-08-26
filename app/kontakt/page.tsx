import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu BauKostenRadar für Hinweise, Datenkorrekturen, Kooperationen und allgemeine Anfragen.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Kontakt</span>
          <h1>BauKostenRadar kontaktieren</h1>
          <p>Für Hinweise zu Preisen, Datenkorrekturen, Kooperationen und allgemeine Anfragen erreichen Sie uns per E-Mail oder Telefon.</p>
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
        </section>

        <section className="contentCard proseCard">
          <h2>Wichtiger Hinweis</h2>
          <p>
            BauKostenRadar veröffentlicht unverbindliche Preisorientierungen und vermittelt über diese
            Kontaktadresse derzeit keine verbindlichen Handwerkerangebote. Für konkrete Bau- oder
            Renovierungsaufträge sollten lokale Fachbetriebe direkt angefragt und mehrere Angebote verglichen werden.
          </p>
        </section>
      </div>
    </>
  );
}
