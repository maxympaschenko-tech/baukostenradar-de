import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu BauKostenRadar für Hinweise, Datenkorrekturen, Kooperationen und Projektanfragen.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Kontakt</span>
          <h1>BauKostenRadar kontaktieren</h1>
          <p>Für Hinweise zu Preisen, Datenkorrekturen, Kooperationen und Projektanfragen erreichen Sie uns per E-Mail oder Telefon.</p>
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
          <h2>Renovierungs- oder Handwerkerprojekt?</h2>
          <p>
            In der Pilotphase können Sie Ihr Vorhaben bereits strukturiert erfassen. Die Anfrage wird zunächst
            manuell durch BauKostenRadar geprüft. Eine Vermittlung an einen Fachbetrieb oder ein verbindliches
            Handwerkerangebot ist aktuell nicht garantiert.
          </p>
          <Link className="primaryButton" href="/angebot">Projektanfrage starten</Link>
        </section>
      </div>
    </>
  );
}
