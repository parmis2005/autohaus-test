"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Startseite", exact: true },
  { href: "/#inzahlungnahme", label: "Inzahlungnahme" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/#kontakt", label: "Kontakt" },
];

const SERVICE_LINKS = [
  { href: "/#finanzierung", label: "Finanzierung" },
  { href: "/#garantie", label: "Garantie" },
  { href: "/#zulassung", label: "Zulassungsdienst" },
  { href: "/#dekra-tuev", label: "DEKRA & TÜV" },
  { href: "/#oelwechsel", label: "Ölwechsel" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastYRef = useRef(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    lastYRef.current = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const bottomReached =
        y + window.innerHeight >= document.documentElement.scrollHeight - 40;

      if (y < 50 || mobileOpen) {
        setHidden(false);
      } else if (y > lastYRef.current && y > 120) {
        setHidden(true);
      } else if (y < lastYRef.current && !bottomReached) {
        setHidden(false);
      }
      lastYRef.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1023 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  useEffect(() => {
    const onDocClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const isActive = (href, exact) => {
    if (exact) return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  const handleDropdownTrigger = (event) => {
    const touchOnly = window.matchMedia("(hover: none)").matches;
    if (touchOnly && !dropdownOpen) {
      event.preventDefault();
      setDropdownOpen(true);
    }
  };

  const handleDropdownKeyDown = (event) => {
    if (event.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}
      id="site-header"
    >
      <div className="topbar">
        <div className="container topbar-inner">
          <a href="tel:+495550182049">
            <svg className="icon">
              <use href="#i-phone" />
            </svg>
            0555 018 20 49
          </a>
          <a href="mailto:hallo@nordglanz-auto.example">
            <svg className="icon">
              <use href="#i-mail" />
            </svg>
            hallo@nordglanz-auto.example
          </a>
        </div>
      </div>

      <nav className="navbar" aria-label="Hauptnavigation">
        <div className="container navbar-inner">
          <Link className="brand" href="/" aria-label="Nordglanz Automobilhaus – Startseite">
            <svg className="icon brand-icon">
              <use href="#i-car" />
            </svg>
            <span className="brand-text">
              <strong className="brand-name">Nordglanz</strong>
              <span className="brand-sub">Automobilhaus</span>
            </span>
          </Link>

          <ul className="nav">
            <li>
              <Link
                className={`nav-link${isActive("/", true) ? " is-active" : ""}`}
                href="/"
              >
                Startseite
              </Link>
            </li>
            <li
              className={`has-dropdown${dropdownOpen ? " is-open" : ""}`}
              ref={dropdownRef}
              onKeyDown={handleDropdownKeyDown}
            >
              <Link
                className="nav-link"
                href="/#service"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={handleDropdownTrigger}
              >
                Service
                <svg className="icon">
                  <use href="#i-chevron" />
                </svg>
              </Link>
              <div className="dropdown-menu">
                <ul>
                  {SERVICE_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {NAV_LINKS.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  className={`nav-link${isActive(item.href, item.exact) ? " is-active" : ""}`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link className="btn btn-primary btn-display header-cta" href="/#fahrzeuge">
            Fahrzeugsuche
            <svg className="icon icon-arrow">
              <use href="#i-arrow" />
            </svg>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg className="icon icon-menu">
              <use href="#i-menu" />
            </svg>
            <svg className="icon icon-close">
              <use href="#i-x" />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " is-open" : ""}`} id="mobile-menu">
        <div className="container">
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Startseite
              </Link>
            </li>
            <li>
              <Link href="/#service" onClick={() => setMobileOpen(false)}>
                Service
              </Link>
            </li>
            {SERVICE_LINKS.map((item) => (
              <li className="mobile-sub" key={item.href}>
                <Link href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#inzahlungnahme" onClick={() => setMobileOpen(false)}>
                Inzahlungnahme
              </Link>
            </li>
            <li>
              <Link href="/unternehmen" onClick={() => setMobileOpen(false)}>
                Unternehmen
              </Link>
            </li>
            <li>
              <Link href="/#kontakt" onClick={() => setMobileOpen(false)}>
                Kontakt
              </Link>
            </li>
            <li className="mobile-cta">
              <Link
                className="btn btn-primary btn-block btn-display"
                href="/#fahrzeuge"
                onClick={() => setMobileOpen(false)}
              >
                Fahrzeugsuche
                <svg className="icon icon-arrow">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
