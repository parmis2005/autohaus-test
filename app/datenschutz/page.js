export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der Demo-Webseite Nordglanz Automobilhaus.",
};

export default function DatenschutzPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Datenschutz</h1>
          <div className="section-divider" />
          <p>Informationen zum Umgang mit personenbezogenen Daten auf dieser Demo-Webseite.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="prose">
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Nordglanz Automobilhaus Demo GmbH, Musterweg 12, 00000 Beispielstadt,{" "}
              <a href="mailto:hallo@nordglanz-auto.example">hallo@nordglanz-auto.example</a>
            </p>
            <h2>2. Erhobene Daten</h2>
            <p>
              Beim Aufruf dieser Webseite werden keine personenbezogenen Daten an einen Server
              übertragen. Das Kontaktformular ist in der Demo-Version nicht angebunden;
              eingegebene Daten werden nicht gespeichert oder versendet.
            </p>
            <h2>3. Cookies und lokale Speicherung</h2>
            <p>
              Es werden ausschließlich essenzielle Einstellungen im Browser gespeichert (z. B.
              Ihre Auswahl im Cookie-Hinweis). Es findet kein Tracking und keine Weitergabe an
              Dritte statt.
            </p>
            <h2>4. Externe Dienste</h2>
            <p>
              Schriftarten werden von Google Fonts geladen; das Hero-Bild wird von Wikimedia
              Commons eingebunden. Beim Laden dieser Ressourcen wird Ihre IP-Adresse an den
              jeweiligen Anbieter übermittelt. Der Link zu Google Maps öffnet die Karte in einem
              neuen Fenster.
            </p>
            <h2>5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung Ihrer Daten. Wenden Sie sich dazu an die oben genannte Adresse.
            </p>
          </div>
          <div className="note-box">
            Diese Seite ist als Platzhalter für die Datenschutzerklärung der fiktiven Demo-Marke
            angelegt. Für einen echten Live-Betrieb müssen alle Dienste, Kontaktwege und
            Rechtsgrundlagen vollständig ergänzt werden.
          </div>
        </div>
      </section>
    </main>
  );
}
