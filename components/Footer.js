"use client";

import Link from "next/link";

export default function Footer() {
  const openCookieBanner = () => {
    window.dispatchEvent(new Event("nordglanz:open-cookie-banner"));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">NORDGLANZ</div>
            <div className="footer-brand-sub">Automobilhaus</div>
            <p>Ihr Partner für Gebrauchtwagen und Jahreswagen in Beispielstadt.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/">Startseite</Link>
              </li>
              <li>
                <Link href="/#fahrzeuge">Fahrzeuge</Link>
              </li>
              <li>
                <Link href="/#service">Service</Link>
              </li>
              <li>
                <Link href="/unternehmen">Unternehmen</Link>
              </li>
              <li>
                <Link href="/#kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/#finanzierung">Finanzierung</Link>
              </li>
              <li>
                <Link href="/#dekra-tuev">DEKRA &amp; TÜV</Link>
              </li>
              <li>
                <Link href="/#garantie">Garantie</Link>
              </li>
              <li>
                <Link href="/#inzahlungnahme">Inzahlungnahme</Link>
              </li>
              <li>
                <Link href="/#oelwechsel">Ölwechsel</Link>
              </li>
              <li>
                <Link href="/#zulassung">Zulassungsdienst</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul className="footer-contact">
              <li>
                <a href="tel:+495550182049">
                  <svg className="icon">
                    <use href="#i-phone" />
                  </svg>
                  0555 018 20 49
                </a>
              </li>
              <li>
                <a href="mailto:hallo@nordglanz-auto.example">
                  <svg className="icon">
                    <use href="#i-mail" />
                  </svg>
                  hallo@nordglanz-auto.example
                </a>
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-pin" />
                </svg>
                <span>
                  Musterweg 12
                  <br />
                  00000 Beispielstadt
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Nordglanz Automobilhaus Demo GmbH. Alle Rechte vorbehalten.</p>
          <nav aria-label="Rechtliches">
            <button type="button" onClick={openCookieBanner}>
              Cookies
            </button>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
