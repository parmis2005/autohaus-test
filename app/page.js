import HomeInteractive from "@/components/HomeInteractive";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main id="start">
      {/* Hero */}
      <section className="hero" id="home" aria-label="Willkommen">
        <div className="hero-content">
          <h1>Ihr Auto wartet auf Sie!</h1>
          <p>Jahreswagen &amp; junge Gebrauchtwagen</p>
        </div>
      </section>

      {/* Schnellsuche, Markenband, Fahrzeuge, Fahrzeugtypen */}
      <HomeInteractive />

      {/* Service */}
      <section id="service" className="services">
        <div className="container-narrow">
          <div className="section-head is-dark reveal">
            <h2>Unser Service für Sie</h2>
            <div className="section-divider is-thin" />
            <p>
              Professionelle Leistungen von der Finanzierung bis zur Wartung – transparent,
              zuverlässig und kundenorientiert.
            </p>
          </div>

          <div className="service-grid">
            <article className="service reveal" id="finanzierung">
              <div className="service-icon">
                <svg className="icon">
                  <use href="#i-card" />
                </svg>
              </div>
              <h3>Finanzierung</h3>
              <p>Attraktive Raten und flexible Laufzeiten. Berechnen Sie Ihre Rate in wenigen Minuten.</p>
              <ul className="service-marks">
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Partnerbank-Finanzierung
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Sofort-Zusage möglich
                </li>
              </ul>
              <a className="btn btn-primary btn-block btn-between" href="#kontakt">
                Finanzierung berechnen
                <svg className="icon icon-arrow">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </article>

            <article className="service reveal" id="dekra-tuev" style={{ "--delay": "90ms" }}>
              <div className="service-icon">
                <svg className="icon">
                  <use href="#i-badge-check" />
                </svg>
              </div>
              <h3>DEKRA &amp; TÜV</h3>
              <p>Prüfung direkt vor Ort. Ohne Wartezeit, ohne Stress – damit Sie sofort Klarheit haben.</p>
              <ul className="service-marks">
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Zertifizierte Prüfung
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Vor Ort Service
                </li>
              </ul>
              <a className="btn btn-outline btn-block btn-between" href="#kontakt">
                Termin vereinbaren
                <svg className="icon icon-arrow">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </article>

            <article className="service reveal" id="garantie" style={{ "--delay": "180ms" }}>
              <div className="service-icon">
                <svg className="icon">
                  <use href="#i-shield" />
                </svg>
              </div>
              <h3>Garantie</h3>
              <p>Umfassender Schutz für Ihr Fahrzeug. Sicherheit nach dem Kauf, transparent und fair.</p>
              <ul className="service-marks">
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Variable Laufzeiten
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Transparente Bedingungen
                </li>
              </ul>
              <a className="btn btn-outline btn-block btn-between" href="#kontakt">
                Garantie ansehen
                <svg className="icon icon-arrow">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </article>

            <article className="service reveal" id="inzahlungnahme">
              <div className="service-icon">
                <svg className="icon">
                  <use href="#i-car" />
                </svg>
              </div>
              <h3>Inzahlungnahme</h3>
              <p>Schnelle Bewertung und sofortige Auszahlung. Verkaufen Sie unkompliziert und ohne Stress.</p>
              <ul className="service-marks">
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Sofortbewertung
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Faire Preise
                </li>
              </ul>
              <a className="btn btn-primary btn-block btn-between" href="#kontakt">
                Fahrzeug bewerten
                <svg className="icon icon-arrow">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </article>

            <article className="service reveal" id="oelwechsel" style={{ "--delay": "90ms" }}>
              <div className="service-icon">
                <svg className="icon">
                  <use href="#i-wrench" />
                </svg>
              </div>
              <h3>Ölwechsel</h3>
              <p>Hochwertige Öle nach Herstellerfreigabe. Optimale Motorleistung und maximale Langlebigkeit.</p>
              <ul className="service-marks">
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Herstellerfreigabe
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Premium Öle
                </li>
              </ul>
              <a className="btn btn-outline btn-block btn-between" href="#kontakt">
                Service buchen
                <svg className="icon icon-arrow">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </article>

            <article className="service reveal" id="zulassung" style={{ "--delay": "180ms" }}>
              <div className="service-icon">
                <svg className="icon">
                  <use href="#i-file-check" />
                </svg>
              </div>
              <h3>Zulassungsdienst</h3>
              <p>Komplette Abwicklung der Zulassung. Einfach, schnell und ohne bürokratischen Aufwand.</p>
              <ul className="service-marks">
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Komplettservice
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check-circle" />
                  </svg>
                  Schnelle Abwicklung
                </li>
              </ul>
              <a className="btn btn-outline btn-block btn-between" href="#kontakt">
                Zulassung anfragen
                <svg className="icon icon-arrow">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </article>
          </div>

          <div className="service-footer">
            <div className="reveal">
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-shield" />
                </svg>
              </div>
              <h4>Geprüfte Qualität</h4>
              <p>Alle Fahrzeuge werden vor dem Verkauf professionell geprüft und zertifiziert.</p>
            </div>
            <div className="reveal" style={{ "--delay": "90ms" }}>
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-badge-check" />
                </svg>
              </div>
              <h4>Transparente Abläufe</h4>
              <p>Klare Preise, faire Konditionen – keine versteckten Kosten oder Überraschungen.</p>
            </div>
            <div className="reveal" style={{ "--delay": "180ms" }}>
              <div className="mini-icon">
                <svg className="icon">
                  <use href="#i-check-circle" />
                </svg>
              </div>
              <h4>Sicherheit nach dem Kauf</h4>
              <p>Umfassende Garantie und langfristiger Service für Ihre Zufriedenheit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="about">
        <div className="container">
          <div className="section-head reveal">
            <h2>Willkommen bei Nordglanz Automobilhaus</h2>
            <div className="section-divider" />
          </div>
          <p className="about-text reveal">
            Nordglanz Automobilhaus ist Ihr Gebrauchtwagen-Spezialist in Beispielstadt. Als Partner
            einer Demo-Partnerbank bieten wir über 80 geprüfte Jahres- und Gebrauchtwagen – mit
            Finanzierung, DEKRA-Prüfung und Garantie. Besuchen Sie uns in Beispielstadt oder stöbern
            Sie direkt online in unserem Bestand.
          </p>
          <ul className="about-list">
            <li className="reveal">
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              <span>Langjährige Partnerschaften mit Leasinggesellschaften</span>
            </li>
            <li className="reveal" style={{ "--delay": "80ms" }}>
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              <span>Ausgezeichnetes Preis-Leistungs-Verhältnis</span>
            </li>
            <li className="reveal" style={{ "--delay": "160ms" }}>
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              <span>Transparente Beratung ohne versteckte Kosten</span>
            </li>
            <li className="reveal" style={{ "--delay": "240ms" }}>
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              <span>Partnerbank-Finanzierung verfügbar</span>
            </li>
            <li className="reveal" style={{ "--delay": "320ms" }}>
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              <span>Inzahlungnahme Ihres Altfahrzeugs</span>
            </li>
            <li className="reveal" style={{ "--delay": "400ms" }}>
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              <span>DEKRA und TÜV-Prüfung vor Ort</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="contact">
        <div className="container">
          <div className="section-head reveal">
            <h2>Kontakt</h2>
            <div className="section-divider" />
            <p>Wir freuen uns auf Ihren Besuch in unserem Showroom in Beispielstadt.</p>
          </div>

          <div className="contact-grid">
            <div className="info-stack reveal">
              <div className="info-card">
                <div className="info-card-head">
                  <div className="info-icon">
                    <svg className="icon">
                      <use href="#i-pin" />
                    </svg>
                  </div>
                  <div>
                    <h3>Adresse</h3>
                    <p>
                      Nordglanz Automobilhaus Demo GmbH
                      <br />
                      Musterweg 12
                      <br />
                      00000 Beispielstadt
                    </p>
                  </div>
                </div>
                <a
                  className="map-link"
                  href="https://www.google.com/maps/search/?api=1&query=Musterweg+12+00000+Beispielstadt"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Standort in Google Maps anzeigen"
                >
                  <svg className="icon icon-pin">
                    <use href="#i-pin" />
                  </svg>
                  <span>Standort in Google Maps anzeigen</span>
                  <svg className="icon icon-ext">
                    <use href="#i-ext" />
                  </svg>
                </a>
              </div>

              <div className="info-pair">
                <a className="info-tile" href="tel:+495550182049">
                  <svg className="icon">
                    <use href="#i-phone" />
                  </svg>
                  <h4>Telefon</h4>
                  <p>0555 018 20 49</p>
                </a>
                <a className="info-tile" href="mailto:hallo@nordglanz-auto.example">
                  <svg className="icon">
                    <use href="#i-mail" />
                  </svg>
                  <h4>E-Mail</h4>
                  <p>hallo@nordglanz-auto.example</p>
                </a>
              </div>

              <div className="info-card">
                <div className="info-card-head">
                  <div className="info-icon">
                    <svg className="icon">
                      <use href="#i-clock" />
                    </svg>
                  </div>
                  <h3 className="no-margin">Öffnungszeiten</h3>
                </div>
                <ul className="hours">
                  <li>
                    <span>Montag - Freitag</span>
                    <strong>09:30 - 17:30 Uhr</strong>
                  </li>
                  <li>
                    <span>Samstag</span>
                    <strong>10:00 - 13:00 Uhr</strong>
                  </li>
                  <li>
                    <span>Sonntag</span>
                    <span className="closed">Geschlossen</span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
