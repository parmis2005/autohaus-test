"use client";

import { useEffect, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState(null); // { type: "success" | "error", text: string }

  useEffect(() => {
    const onInquiry = (event) => {
      const vehicle = event.detail;
      if (!vehicle) return;
      setFields((prev) =>
        prev.message.trim()
          ? prev
          : {
              ...prev,
              message: `Guten Tag, ich interessiere mich für den ${vehicle}. Bitte kontaktieren Sie mich.`,
            }
      );
    };
    window.addEventListener("nordglanz:inquiry", onInquiry);
    return () => window.removeEventListener("nordglanz:inquiry", onInquiry);
  }, []);

  const update = (field) => (event) => {
    setFields((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const first = fields.firstName.trim();
    const last = fields.lastName.trim();
    const mail = fields.email.trim();

    if (!first || !last || !mail) {
      setStatus({ type: "error", text: "Bitte Vorname, Nachname und E-Mail ausfüllen." });
      return;
    }
    if (!EMAIL_RE.test(mail)) {
      setStatus({ type: "error", text: "Bitte eine gültige E-Mail-Adresse angeben." });
      return;
    }

    setFields(initialFields);
    setStatus({ type: "success", text: "Vielen Dank! Wir melden uns zeitnah." });
  };

  return (
    <div className="contact-form-card reveal" style={{ "--delay": "120ms" }}>
      <h3>Kontaktformular</h3>
      <form className="form-grid" id="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="cf-first">Vorname</label>
            <input
              type="text"
              id="cf-first"
              name="firstName"
              placeholder="Max"
              required
              autoComplete="given-name"
              value={fields.firstName}
              onChange={update("firstName")}
            />
          </div>
          <div className="field">
            <label htmlFor="cf-last">Nachname</label>
            <input
              type="text"
              id="cf-last"
              name="lastName"
              placeholder="Mustermann"
              required
              autoComplete="family-name"
              value={fields.lastName}
              onChange={update("lastName")}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="cf-mail">E-Mail</label>
          <input
            type="email"
            id="cf-mail"
            name="email"
            placeholder="max@beispiel.de"
            required
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Telefon</label>
          <input
            type="tel"
            id="cf-phone"
            name="phone"
            placeholder="+49 123 456789"
            autoComplete="tel"
            value={fields.phone}
            onChange={update("phone")}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-msg">Nachricht</label>
          <textarea
            id="cf-msg"
            name="message"
            placeholder="Ihre Nachricht..."
            value={fields.message}
            onChange={update("message")}
          />
        </div>
        <button className="btn btn-primary btn-block btn-send" type="submit">
          Nachricht senden
          <svg className="icon icon-arrow">
            <use href="#i-arrow" />
          </svg>
        </button>
        {status ? (
          <div
            className={`form-msg is-${status.type}`}
            id="contact-msg"
            role="status"
            aria-live="polite"
          >
            {status.text}
          </div>
        ) : null}
      </form>
    </div>
  );
}
