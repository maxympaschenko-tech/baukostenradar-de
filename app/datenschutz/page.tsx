import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von BauKostenRadar.",
  alternates: { canonical: "/datenschutz" },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function DatenschutzPage() {
  const { operator } = siteConfig;

  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Datenschutz</span>
          <h1>Datenschutzerklärung</h1>
          <p>Informationen zur Verarbeitung personenbezogener Daten auf BauKostenRadar.</p>
        </div>
      </section>

      <div className="shell articleShell">
        <section className="contentCard proseCard">
          <h2>1. Verantwortlicher</h2>
          <p>
            <strong>{operator.name}</strong><br />
            {operator.addressLine}<br />
            {operator.postalCode} {operator.city}<br />
            {operator.country}
          </p>
          <p>
            Telefon: <a className="textLink" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><br />
            E-Mail: <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>

          <h2>2. Allgemeine Hinweise</h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website, die technische
            Sicherheit, die Bearbeitung von Anfragen sowie - nach entsprechender Einwilligung - für Reichweitenmessung
            erforderlich ist. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person beziehen.
          </p>

          <h2>3. Hosting und Server-Logfiles</h2>
          <p>
            Diese Website wird über Hostinger gehostet. Vertragspartner für die Hosting-Dienste ist Hostinger
            International Ltd., 61 Lordou Vironos str., 6023 Larnaca, Zypern. Für BauKostenRadar wurde ein
            Serverstandort in Deutschland gewählt. Beim Aufruf der Website können technisch erforderliche
            Verbindungsdaten verarbeitet werden. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
            aufgerufene URL, übertragene Datenmenge, HTTP-Statuscode, Referrer-URL, Browsertyp, Betriebssystem und
            Hostname des zugreifenden Geräts gehören.
          </p>
          <p>
            Die Verarbeitung erfolgt zur sicheren und stabilen Bereitstellung der Website sowie zur Erkennung und
            Abwehr technischer Angriffe auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
            liegt in einem sicheren, funktionsfähigen und missbrauchsgeschützten Webangebot. Soweit Hostinger
            personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt dies auf Grundlage einer Vereinbarung zur
            Auftragsverarbeitung nach Art. 28 DSGVO.
          </p>
          <p>
            Hostinger ist innerhalb der Europäischen Union ansässig. Im Rahmen einzelner Support-, Sicherheits- oder
            Infrastrukturleistungen können von Hostinger eingesetzte Unterauftragnehmer Daten auch außerhalb des
            Europäischen Wirtschaftsraums verarbeiten. In solchen Fällen kommen die nach der DSGVO vorgesehenen
            Schutzmechanismen zur Anwendung. Weitere Informationen finden Sie in der
            <a className="textLink" href="https://www.hostinger.com/legal/privacy-policy" target="_blank" rel="noreferrer"> Datenschutzerklärung von Hostinger</a>
            sowie im <a className="textLink" href="https://www.hostinger.com/legal/dpa" target="_blank" rel="noreferrer">Data Processing Addendum</a>.
          </p>

          <h2>4. Kontaktaufnahme per E-Mail oder Telefon</h2>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten zur
            Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen. Erfolgt die Anfrage im Zusammenhang mit
            einem Vertrag oder vorvertraglichen Maßnahmen, ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage.
            In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund
            unseres berechtigten Interesses an der Beantwortung von Anfragen.
          </p>
          <p>
            Die Daten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr erforderlich sind und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen. BauKostenRadar bietet derzeit kein Formular zur
            Übermittlung von Renovierungs- oder Handwerkerprojekten an und verarbeitet daher keine entsprechenden
            Projektformulardaten über die Website.
          </p>

          <h2>5. Google Tag Manager</h2>
          <p>
            Auf BauKostenRadar wird Google Tag Manager eingesetzt. Anbieter für Nutzer im Europäischen
            Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der Tag
            Manager dient der zentralen Verwaltung von Website-Tags und Skripten.
          </p>
          <p>
            Beim Laden des Google Tag Managers stellt Ihr Browser eine Verbindung zu Servern von Google her. Dabei
            können insbesondere die IP-Adresse sowie technische Informationen über Browser und Gerät an Google
            übermittelt werden. Eine Verarbeitung von Daten außerhalb der Europäischen Union bzw. des Europäischen
            Wirtschaftsraums kann dabei nicht ausgeschlossen werden.
          </p>
          <p>
            Welche weiteren Daten verarbeitet oder Cookies gesetzt werden, hängt von den im Tag-Manager-Container
            eingebundenen Diensten ab. Informationen zum Datenschutz bei Google finden Sie unter
            <a className="textLink" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> policies.google.com/privacy</a>.
          </p>

          <h2>6. Google Analytics 4</h2>
          <p>
            BauKostenRadar setzt Google Analytics 4 zur Reichweitenmessung und zur Analyse der Nutzung dieser Website
            ein. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics
            kann insbesondere Informationen über Seitenaufrufe, Sitzungsdauer, verwendete Geräte, Browser,
            ungefähre geografische Herkunft, Referrer und Interaktionen mit der Website verarbeiten.
          </p>
          <p>
            Google Analytics ist über Google Tag Manager eingebunden. Für einwilligungspflichtige Speicher- und
            Analysevorgänge werden die entsprechenden Consent-Signale standardmäßig restriktiv gesetzt. Soweit eine
            Einwilligung erforderlich ist, erfolgt die Freigabe erst nach einer wirksamen Einwilligung. Rechtsgrundlage
            für die einwilligungsbasierte Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte Einwilligung kann
            jederzeit mit Wirkung für die Zukunft widerrufen werden.
          </p>
          <p>
            Bei verweigerter Einwilligung bleiben die entsprechenden Speicherzugriffe deaktiviert. Abhängig von der
            technischen Konfiguration des Google Consent Mode können dabei eingeschränkte, cookielose Signale an
            Google übermittelt werden. Eine Übermittlung von Daten an Google-Unternehmen oder Dienstleister außerhalb
            des Europäischen Wirtschaftsraums kann nicht ausgeschlossen werden. Weitere Informationen finden Sie in
            der <a className="textLink" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Datenschutzerklärung von Google</a>.
          </p>

          <h2>7. Geplanter Einsatz von Google AdSense</h2>
          <p>
            Google AdSense ist auf BauKostenRadar derzeit nicht für die Auslieferung von Werbung aktiviert. Für eine
            spätere Finanzierung des Angebots kann Google AdSense eingesetzt werden. Anbieter für Nutzer im
            Europäischen Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            Abhängig von den später gewählten Einstellungen und Ihrer Einwilligung können Cookies oder vergleichbare
            Technologien verwendet und Informationen über Gerät, Browser, IP-Adresse, Werbeinteraktionen und
            Nutzungsverhalten verarbeitet werden.
          </p>
          <p>
            Vor einer Aktivierung von Google AdSense für Nutzer im Europäischen Wirtschaftsraum, im Vereinigten
            Königreich und in der Schweiz wird eine von Google zertifizierte Consent Management Platform eingesetzt,
            die die dafür erforderlichen IAB-TCF-Signale unterstützt. Personalisierte Werbung und entsprechende
            Speicher- bzw. Verarbeitungsvorgänge werden nur im Rahmen der jeweils erforderlichen Einwilligung aktiviert.
          </p>
          <p>
            Je nach Einwilligung und technischer Konfiguration kann später auch nicht personalisierte oder
            eingeschränkte Werbung ausgeliefert werden. Weitere Informationen zu Google-Werbediensten und Datenschutz
            finden Sie unter <a className="textLink" href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">policies.google.com/technologies/ads</a>.
          </p>

          <h2>8. Einwilligungsverwaltung und Google Consent Mode</h2>
          <p>
            Beim ersten Besuch zeigt BauKostenRadar eine Einwilligungsabfrage. Notwendige Funktionen bleiben aktiv;
            aktuell kann zusätzlich die Nutzung von Google Analytics für Statistik erlaubt oder abgelehnt werden.
            Das Google-Consent-Signal <code>analytics_storage</code> ist zunächst auf <code>denied</code> gesetzt und
            wird entsprechend Ihrer Auswahl aktualisiert.
          </p>
          <p>
            Die Werbesignale <code>ad_storage</code>, <code>ad_user_data</code> und <code>ad_personalization</code>
            bleiben derzeit auf <code>denied</code>. Der aktuelle eigene Einwilligungsdialog erteilt keine Zustimmung
            für personalisierte Werbung. Vor einer späteren AdSense-Aktivierung in den dafür relevanten Regionen wird
            eine von Google zertifizierte CMP mit IAB-TCF-Unterstützung eingesetzt.
          </p>
          <p>
            Ihre aktuelle Statistik-Auswahl wird ausschließlich im lokalen Speicher Ihres Browsers unter dem Schlüssel
            <code> baukostenradar-consent-v2</code> gespeichert, damit wir die Abfrage nicht bei jedem Seitenaufruf
            erneut anzeigen müssen. Eine frühere Auswahl aus <code>baukostenradar-consent-v1</code> wird einmalig nur
            hinsichtlich der Statistik-Einstellung übernommen; eine frühere Marketing-Auswahl wird nicht weiterverwendet.
          </p>
          <p>
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen. Verwenden Sie
            dazu den dauerhaft im Seitenfuß erreichbaren Link „Datenschutz-Einstellungen“.
          </p>

          <h2>9. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites und Quellen. Erst wenn Sie einen solchen Link öffnen,
            werden Daten an den jeweiligen externen Anbieter übertragen. Für die Datenverarbeitung auf externen
            Websites ist der jeweilige Anbieter verantwortlich.
          </p>

          <h2>10. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung, um die Übertragung von Inhalten und Anfragen zu
            schützen. Eine verschlüsselte Verbindung erkennen Sie insbesondere an der Verwendung von HTTPS in der
            Adresszeile Ihres Browsers.
          </p>

          <h2>11. Ihre Rechte</h2>
          <p>
            Im Rahmen der gesetzlichen Voraussetzungen haben Sie insbesondere das Recht auf Auskunft über Ihre
            personenbezogenen Daten, Berichtigung unrichtiger Daten, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen. Soweit eine Verarbeitung auf
            einer Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Sie haben außerdem das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren,
            insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des
            Orts des mutmaßlichen Verstoßes.
          </p>

          <h2>12. Widerspruch nach Art. 21 DSGVO</h2>
          <p>
            Soweit personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, können
            Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die
            Verarbeitung einlegen. Wenden Sie sich hierzu an <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>13. Automatisierte Entscheidungen</h2>
          <p>
            Eine ausschließlich automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22
            DSGVO findet auf BauKostenRadar derzeit nicht statt.
          </p>

          <h2>14. Aktualisierung dieser Datenschutzerklärung</h2>
          <p>
            Wir passen diese Datenschutzerklärung an, wenn sich die Website, eingesetzte Dienste oder rechtliche
            Anforderungen ändern. Stand dieser Datenschutzerklärung: August 2026.
          </p>
        </section>
      </div>
    </>
  );
}
