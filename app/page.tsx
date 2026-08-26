import Link from "next/link";
import { RenovationCalculator } from "@/components/renovation-calculator";
import { regions, services } from "@/lib/pricing";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Handwerkerpreise Deutschland - Stand August 2026</span>
            <h1>Was kostet Renovieren wirklich?</h1>
            <p>
              BauKostenRadar bündelt aktuelle Richtpreise für Handwerkerarbeiten und macht sie
              mit Rechnern, Tabellen und regionalen Faktoren vergleichbar.
            </p>
            <div className="heroActions">
              <Link className="primaryButton" href="/kosten">Preise vergleichen</Link>
              <Link className="ghostButton" href="/rechner/renovierungskosten">Kosten berechnen</Link>
            </div>
            <div className="trustRow">
              <div><strong>28+ Preispositionen</strong><span>Strukturierte Richtwerte statt langer Fließtexte.</span></div>
              <div><strong>9 Regionen</strong><span>Deutschland plus wichtige Großstädte im Modell.</span></div>
              <div><strong>Quellen sichtbar</strong><span>Preisangaben mit Datenquelle und Prüfdatum.</span></div>
            </div>
          </div>
          <div className="heroCard">
            <RenovationCalculator compact />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="sectionHeading splitHeading">
            <div>
              <span className="eyebrow">Preisspiegel 2026</span>
              <h2>Beliebte Handwerkerkosten</h2>
              <p>Direkt zu typischen Preisen, Einheiten, Quellen und regionaler Einordnung.</p>
            </div>
            <Link className="textLink" href="/kosten">Alle Kostenbereiche →</Link>
          </div>
          <div className="cardGrid">
            {services.map((service) => {
              const firstPrice = service.priceItems[0];
              return (
                <Link className="serviceCard" href={`/kosten/${service.slug}`} key={service.slug}>
                  <span className="serviceIcon" aria-hidden="true">{service.icon}</span>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.description}</p>
                  <div className="miniPrice">
                    <span>{firstPrice.name}</span>
                    <strong>{euro(firstPrice.low)} - {euro(firstPrice.high)}</strong>
                    <small>{firstPrice.unit}</small>
                  </div>
                  <span className="cardLink">Preise ansehen →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">So funktioniert BauKostenRadar</span>
            <h2>Ein Preisportal statt eines Preis-Blogs</h2>
            <p>
              Preispositionen liegen als strukturierte Daten vor. Dieselben Werte können in
              Tabellen, Rechnern, Stadtseiten und später in Angebotsvergleichen verwendet werden.
            </p>
            <div className="stepsList">
              <div><strong>1</strong><span><b>Leistung wählen</b> - zum Beispiel Maler, Bad oder Dach.</span></div>
              <div><strong>2</strong><span><b>Richtwert prüfen</b> - Preisspanne und Einheit vergleichen.</span></div>
              <div><strong>3</strong><span><b>Region einordnen</b> - lokale Preisunterschiede berücksichtigen.</span></div>
              <div><strong>4</strong><span><b>Projekt kalkulieren</b> - Gesamtbudget im Rechner abschätzen.</span></div>
            </div>
            <Link className="primaryButton" href="/methodik">Unsere Methodik</Link>
          </div>
          <div className="dataPanel">
            <span className="eyebrow">Datenstand</span>
            <strong className="bigMetric">August 2026</strong>
            <p>Aktuelle öffentlich verfügbare deutsche Handwerker- und Sanierungspreise.</p>
            <div className="metricGrid">
              <div><strong>{services.length}</strong><span>Kostenbereiche</span></div>
              <div><strong>{services.reduce((sum, service) => sum + service.priceItems.length, 0)}</strong><span>Preispositionen</span></div>
              <div><strong>{regions.length}</strong><span>Regionen</span></div>
              <div><strong>€</strong><span>Richtwerte</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="staedte">
        <div className="shell">
          <div className="sectionHeading splitHeading">
            <div>
              <span className="eyebrow">Regionen</span>
              <h2>Handwerkerpreise nach Stadt einordnen</h2>
              <p>Die Standortfaktoren dienen als grobe Modellhilfe und ersetzen kein lokales Angebot.</p>
            </div>
            <Link className="textLink" href="/staedte">Alle Städte →</Link>
          </div>
          <div className="cityGrid">
            {regions.filter((region) => region.value !== "de").map((region) => (
              <Link key={region.value} href={`/staedte/${region.slug}`} className="cityCard">
                <strong>{region.label}</strong>
                <span>{region.factor >= 1 ? "+" : ""}{Math.round((region.factor - 1) * 100)} % Modellfaktor</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionTight">
        <div className="shell ctaPanel">
          <div>
            <span className="eyebrow">Projekt planen</span>
            <h2>Vom Einzelpreis zum Renovierungsbudget</h2>
            <p>Wohnfläche, Umfang, Standard und Region auswählen und sofort eine grobe Kostenspanne erhalten.</p>
          </div>
          <Link className="secondaryButton" href="/rechner/renovierungskosten">Jetzt berechnen</Link>
        </div>
      </section>
    </>
  );
}
