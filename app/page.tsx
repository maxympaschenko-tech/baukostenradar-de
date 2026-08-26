import Link from "next/link";
import { RenovationCalculator } from "@/components/renovation-calculator";
import { services } from "@/lib/pricing";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Bau- und Handwerkerkosten transparent planen</span>
            <h1>Was kostet Ihre Renovierung?</h1>
            <p>
              Berechnen Sie Renovierungs- und Handwerkerkosten nach Fläche, Zustand,
              Qualitätsstandard und Region. Klar aufgeteilt in Arbeit, Material und Reserve.
            </p>
            <div className="trustRow">
              <div><strong>Klare Kostenspannen</strong><span>Keine einzelne Fantasiezahl, sondern nachvollziehbare Bereiche.</span></div>
              <div><strong>Regionale Faktoren</strong><span>Die Architektur ist bereits für Stadt- und Regionalpreise vorbereitet.</span></div>
              <div><strong>Kostenlos rechnen</strong><span>Ohne Registrierung direkt eine erste Orientierung erhalten.</span></div>
            </div>
          </div>
          <div className="heroCard">
            <RenovationCalculator compact />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Kostenbereiche</span>
            <h2>Beliebte Handwerker- und Sanierungskosten</h2>
            <p>Die ersten Preisbereiche sind bereits als strukturierte SEO-Landingpages angelegt.</p>
          </div>
          <div className="cardGrid">
            {services.map((service) => (
              <Link className="serviceCard" href={`/kosten/${service.slug}`} key={service.slug}>
                <span className="serviceIcon" aria-hidden="true">{service.icon}</span>
                <h3>{service.shortTitle}</h3>
                <p>{service.description}</p>
                <span className="cardLink">Kosten ansehen →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Ein Datenmodell, viele Anwendungen</span>
            <h2>Preise nicht in Artikeln verstecken</h2>
            <p>
              BauKostenRadar wird so aufgebaut, dass Rechner, Tabellen, Stadtseiten und
              Preisvergleiche dieselben strukturierten Daten verwenden. Ändert sich ein Wert,
              kann er überall konsistent aktualisiert werden.
            </p>
            <Link className="primaryButton" href="/rechner/renovierungskosten">
              Rechner vollständig öffnen
            </Link>
          </div>
          <div className="featurePanel">
            <div><strong>01</strong><span>Preisdaten</span></div>
            <div><strong>02</strong><span>Regionen & Städte</span></div>
            <div><strong>03</strong><span>Rechner</span></div>
            <div><strong>04</strong><span>SEO-Landingpages</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="staedte">
        <div className="shell ctaPanel">
          <div>
            <span className="eyebrow">Nächster Ausbau</span>
            <h2>Deutschlandweite Preise plus lokale Unterschiede</h2>
            <p>Berlin, Hamburg, München, Köln, Frankfurt, Stuttgart, Düsseldorf und Leipzig sind im Datenmodell vorbereitet.</p>
          </div>
          <Link className="secondaryButton" href="/rechner/renovierungskosten">Projekt kalkulieren</Link>
        </div>
      </section>
    </>
  );
}
