export const metadata = {
  title: "Impressum",
  description: "Impressum der Demo-Webseite Nordglanz Automobilhaus.",
};

export default function ImpressumPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Impressum</h1>
          <div className="section-divider" />
          <p>Angaben gemäß § 5 TMG – Demo-Version ohne rechtsverbindliche Angaben.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="prose">
            <h2>Anbieter</h2>
            <p>
              Nordglanz Automobilhaus Demo GmbH
              <br />
              Musterweg 12
              <br />
              00000 Beispielstadt
            </p>
            <h2>Vertreten durch</h2>
            <p>Geschäftsführung: Max Mustermann (Platzhalter)</p>
            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:+495550182049">0555 018 20 49</a>
              <br />
              E-Mail: <a href="mailto:hallo@nordglanz-auto.example">hallo@nordglanz-auto.example</a>
            </p>
            <h2>Registereintrag</h2>
            <p>
              Handelsregister: Amtsgericht Beispielstadt, HRB 00000 (Platzhalter)
              <br />
              Umsatzsteuer-ID: DE000000000 (Platzhalter)
            </p>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>Nordglanz Automobilhaus Demo GmbH, Anschrift wie oben.</p>
          </div>
          <div className="note-box">
            Hinweis: Dieses Impressum gehört zu einer fiktiven Demo-Seite und ist nicht für den
            produktiven Rechtsverkehr gedacht. Für den Live-Betrieb müssen alle Angaben durch die
            tatsächlichen Unternehmensdaten ersetzt werden.
          </div>
        </div>
      </section>
    </main>
  );
}
