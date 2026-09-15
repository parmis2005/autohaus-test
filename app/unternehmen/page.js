export const metadata = {
  title: "Unternehmen",
  description:
    "Nordglanz Automobilhaus in Beispielstadt: Gebrauchtwagen-Spezialist mit geprüften Leasingrückläufern, Finanzierung, DEKRA-Prüfung und Garantie. Demo-Webseite.",
};

export default function UnternehmenPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Unternehmen</h1>
          <div className="section-divider" />
          <p>
            Nordglanz Automobilhaus ist Ihr Gebrauchtwagen-Spezialist in Beispielstadt – fair,
            geprüft und persönlich.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="prose">
            <h2>Wer wir sind</h2>
            <p>
              Nordglanz Automobilhaus ist ein inhabergeführtes Autohaus mit Fokus auf Jahreswagen
              und junge Gebrauchtwagen. Der Schwerpunkt liegt auf Leasingrückläufern mit
              lückenloser Servicehistorie – von BMW und Mercedes-Benz über Audi bis Porsche. Über
              80 geprüfte Fahrzeuge stehen in unserem Showroom in Beispielstadt bereit.
            </p>
            <h2>Was uns auszeichnet</h2>
            <p>
              Transparente Beratung ohne versteckte Kosten, Finanzierung über unsere
              Demo-Partnerbank, DEKRA- und TÜV-Prüfung direkt vor Ort sowie optionale Garantie bis
              24 Monate. Auf Wunsch nehmen wir Ihr bisheriges Fahrzeug in Zahlung und übernehmen
              die komplette Zulassung.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-shield" />
                </svg>
              </div>
              <h3>Geprüfte Qualität</h3>
              <p>Jedes Fahrzeug wird vor dem Verkauf technisch geprüft, dokumentiert und aufbereitet.</p>
            </article>
            <article className="card">
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-users" />
                </svg>
              </div>
              <h3>Persönliche Beratung</h3>
              <p>Ein fester Ansprechpartner begleitet Sie von der ersten Anfrage bis zur Übergabe.</p>
            </article>
            <article className="card">
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-badge-check" />
                </svg>
              </div>
              <h3>Alles aus einer Hand</h3>
              <p>Finanzierung, Garantie, Inzahlungnahme, Zulassung und Service im selben Haus.</p>
            </article>
          </div>

          <div className="card-grid">
            <article className="card">
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-pin" />
                </svg>
              </div>
              <h3>Standort</h3>
              <p>
                Nordglanz Automobilhaus Demo GmbH
                <br />
                Musterweg 12
                <br />
                00000 Beispielstadt
              </p>
            </article>
            <article className="card">
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-clock" />
                </svg>
              </div>
              <h3>Öffnungszeiten</h3>
              <p>
                Montag - Freitag: 09:30 - 17:30 Uhr
                <br />
                Samstag: 10:00 - 13:00 Uhr
                <br />
                Sonntag: Geschlossen
              </p>
            </article>
            <article className="card">
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-phone" />
                </svg>
              </div>
              <h3>Kontakt</h3>
              <p>
                <a href="tel:+495550182049">0555 018 20 49</a>
                <br />
                <a href="mailto:hallo@nordglanz-auto.example">hallo@nordglanz-auto.example</a>
              </p>
            </article>
          </div>

          <div className="note-box">
            Nordglanz Automobilhaus ist eine fiktive Demo-Marke. Alle Angaben zu Standort, Bestand
            und Kontaktdaten sind Platzhalter für die Präsentation dieser Webseite.
          </div>
        </div>
      </section>
    </main>
  );
}
