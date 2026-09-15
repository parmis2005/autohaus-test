"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "nordglanz-cookie-consent";

const readConsent = () => {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch (error) {
    return null;
  }
};

const writeConsent = (value) => {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch (error) {
    /* Speicher nicht verfügbar – Hinweis erscheint beim nächsten Besuch erneut */
  }
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!readConsent()) setVisible(true);

    const openBanner = () => {
      setExpanded(false);
      setVisible(true);
    };
    window.addEventListener("nordglanz:open-cookie-banner", openBanner);
    return () => window.removeEventListener("nordglanz:open-cookie-banner", openBanner);
  }, []);

  const acceptAll = () => {
    writeConsent("all");
    setVisible(false);
    setExpanded(false);
  };

  const manage = () => {
    setExpanded((prevExpanded) => {
      const next = !prevExpanded;
      if (!next) {
        writeConsent("essential");
        setVisible(false);
      }
      return next;
    });
  };

  if (!visible) return null;

  return (
    <div
      className={`cookie-banner${expanded ? " is-expanded" : ""}`}
      id="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-title"
    >
      <h2 id="cookie-title">Cookie-Einstellungen</h2>
      <p>
        Wir verwenden Cookies, um grundlegende Funktionen bereitzustellen. Sie können die
        Auswahl jederzeit anpassen.
      </p>
      <div className="cookie-details">
        <strong>Essenziell (immer aktiv)</strong>
        <p>
          Erforderlich für Grundfunktionen, Sicherheit und Seitennavigation. Aktuell sind nur
          essenzielle Cookies im Einsatz.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-outline" type="button" onClick={manage}>
          {expanded ? "Auswahl speichern" : "Cookies verwalten"}
        </button>
        <button className="btn btn-primary" type="button" onClick={acceptAll}>
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
