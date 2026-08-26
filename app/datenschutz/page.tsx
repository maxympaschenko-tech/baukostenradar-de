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
            und Werbefinanzierung erforderlich ist. Personenbezogene Daten sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person beziehen.
          </p>

          <h2>3. Hosting und Server-Logfiles</h2>
          <p>
            Diese Website wird bei Hosting Ukraine LLC (ТОВ «Хостінг Україна») gehostet. Beim Aufruf der Website
            können technisch erforderliche Verbindungsdaten verarbeitet werden. Dazu können insbesondere
            IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene URL, übertragene Datenmenge, HTTP-Statuscode,
            Referrer-URL, Browsertyp, Betriebssystem und Hostname des zugreifenden Geräts gehören.
          </p>
          <p>
            Die Verarbeitung erfolgt zur sicheren und stabilen Bereitstellung der Website sowie zur Erkennung und
            Abwehr technischer Angriffe auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
            liegt in einem sicheren, funktionsfähigen und missbrauchsgeschützten Webangebot.
          </p>
          <p>
            Nach Angaben des Hosting-Anbieters befinden sich dessen Rechenzentren in der Ukraine. Dadurch kann eine
            Verarbeitung personenbezogener Daten außerhalb der Europäischen Union und des Europäischen
            Wirtschaftsraums stattfinden. Weitere Informationen zur Datenverarbeitung des Hosting-Anbieters finden
            Sie in dessen <a className="textLink" href="https://www.ukraine.com.ua/legal/privacypolicy/" target="_blank" rel="noreferrer">Datenschutzerklärung</a>.
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
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
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

          <h2>6. Vorgesehener Einsatz von Google Analytics 4</h2>
          <p>
            BauKostenRadar kann Google Analytics 4 zur Reichweitenmessung und zur Analyse der Nutzung dieser Website
            einsetzen. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google
            Analytics kann Informationen über Seitenaufrufe, Sitzungsdauer, verwendete Geräte, Browser, ungefähre
            geografische Herkunft, Referrer und Interaktionen mit der Website verarbeiten.
          </p>
          <p>
            Google Analytics wird erst aktiviert, wenn die dafür erforderliche Einwilligung erteilt wurde. Die
            Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO. Eine erteilte Einwilligung kann jederzeit mit
            Wirkung für die Zukunft widerrufen werden. Soweit Google Analytics über Google Tag Manager eingebunden
            wird, werden die entsprechenden Consent-Signale an Google übermittelt.
          </p>
          <p>
            Eine Übermittlung von Daten an Google-Unternehmen oder Dienstleister außerhalb des Europäischen
            Wirtschaftsraums kann nicht ausgeschlossen werden. Weitere Informationen finden Sie in der
            <a className="textLink" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Datenschutzerklärung von Google</a>.
          </p>

          <h2>7. Vorgesehener Einsatz von Google AdSense</h2>
          <p>
            BauKostenRadar kann Google AdSense zur Finanzierung des Angebots durch Werbung einsetzen. Anbieter für
            Nutzer im Europäischen Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland. Abhängig von den gewählten Einstellungen und Ihrer Einwilligung können Cookies oder vergleichbare
            Technologien verwendet und Informationen über Gerät, Browser, IP-Adresse, Werbeinteraktionen und
            Nutzungsverhalten verarbeitet werden.
          </p>
          <p>
            Für Nutzer im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz wird vor dem
            Einsatz zustimmungspflichtiger Werbetechnologien eine geeignete Consent Management Platform eingesetzt.
            Personalisierte Werbung und entsprechende Speicher- bzw. Verarbeitungsvorgänge werden nur im Rahmen der
            erteilten Einwilligung aktiviert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p>
            Je nach Einwilligung und technischer Konfiguration kann auch nicht personalisierte oder eingeschränkte
            Werbung ausgeliefert werden. Weitere Informationen zu Google-Werbediensten und Datenschutz finden Sie
            unter <a className="textLink" href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">policies.google.com/technologies/ads</a>.
          </p>

          <h2>8. Einwilligungsverwaltung und Google Consent Mode</h2>
          <p>
            Für einwilligungspflichtige Analyse- und Werbedienste werden die entsprechenden Consent-Signale zunächst
            restriktiv gesetzt. Erst nach einer wirksamen Einwilligung können die jeweils betroffenen Kategorien
            freigegeben werden. Für den zukünftigen Einsatz von Google AdSense ist eine von Google unterstützte bzw.
            zertifizierte Consent Management Platform vorgesehen, soweit dies für die jeweilige Region erforderlich ist.
          </p>
          <p>
            Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen. Nach
            Einrichtung des Consent-Dialogs wird hierfür eine dauerhaft erreichbare Möglichkeit zur Änderung der
            Datenschutzeinstellungen bereitgestellt.
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
