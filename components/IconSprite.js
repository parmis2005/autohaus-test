// Icon-Sprite (Linien-Icons im Stil von Lucide + Fahrzeug-Silhouetten)
export default function IconSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <symbol id="i-phone" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </symbol>
      <symbol id="i-clock" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </symbol>
      <symbol id="i-search" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </symbol>
      <symbol id="i-chevron" viewBox="0 0 24 24">
        <path d="m6 9 6 6 6-6" />
      </symbol>
      <symbol id="i-share" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </symbol>
      <symbol id="i-ext" viewBox="0 0 24 24">
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </symbol>
      <symbol id="i-check-circle" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </symbol>
      <symbol id="i-shield" viewBox="0 0 24 24">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </symbol>
      <symbol id="i-badge-check" viewBox="0 0 24 24">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </symbol>
      <symbol id="i-card" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </symbol>
      <symbol id="i-car" viewBox="0 0 24 24">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </symbol>
      <symbol id="i-wrench" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </symbol>
      <symbol id="i-file-check" viewBox="0 0 24 24">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </symbol>
      <symbol id="i-menu" viewBox="0 0 24 24">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </symbol>
      <symbol id="i-x" viewBox="0 0 24 24">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </symbol>
      <symbol id="i-users" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </symbol>
      <symbol id="car-sport" viewBox="0 0 64 28">
        <path d="M2 20c2-4 6-6 12-7l10-5c4-2 10-3 16-3h6c5 1 9 4 12 8l4 2v5Z" />
        <circle cx="15" cy="21" r="4.5" />
        <circle cx="49" cy="21" r="4.5" />
        <circle cx="15" cy="21" r="1.8" fill="#fff" />
        <circle cx="49" cy="21" r="1.8" fill="#fff" />
      </symbol>
      <symbol id="car-limo" viewBox="0 0 64 28">
        <path d="M3 20l4-6c1-2 3-2 6-2h9l6-6c1-1 3-1 5-1h11c2 0 4 1 6 3l4 4 5 1c2 1 3 2 3 4v3Z" />
        <circle cx="15" cy="21" r="4.5" />
        <circle cx="49" cy="21" r="4.5" />
        <circle cx="15" cy="21" r="1.8" fill="#fff" />
        <circle cx="49" cy="21" r="1.8" fill="#fff" />
      </symbol>
      <symbol id="car-small" viewBox="0 0 64 28">
        <path d="M9 20l3-8c1-2 3-2 6-2h6l4-6c1-1 3-1 5-1h9c2 0 4 1 5 3l4 5 3 1c2 1 2 3 2 5v3Z" />
        <circle cx="18" cy="21" r="4.5" />
        <circle cx="47" cy="21" r="4.5" />
        <circle cx="18" cy="21" r="1.8" fill="#fff" />
        <circle cx="47" cy="21" r="1.8" fill="#fff" />
      </symbol>
      <symbol id="car-kombi" viewBox="0 0 64 28">
        <path d="M3 20l4-6c1-2 3-2 6-2h9l5-6c1-1 3-1 5-1h21c3 0 5 1 6 4l2 6 1 5Z" />
        <circle cx="15" cy="21" r="4.5" />
        <circle cx="49" cy="21" r="4.5" />
        <circle cx="15" cy="21" r="1.8" fill="#fff" />
        <circle cx="49" cy="21" r="1.8" fill="#fff" />
      </symbol>
      <symbol id="car-van" viewBox="0 0 64 28">
        <path d="M4 20l1-9c0-3 2-4 5-4l3-4c1-1 2-1 4-1h39c3 0 4 1 4 4v14Z" />
        <circle cx="14" cy="21" r="4.5" />
        <circle cx="50" cy="21" r="4.5" />
        <circle cx="14" cy="21" r="1.8" fill="#fff" />
        <circle cx="50" cy="21" r="1.8" fill="#fff" />
      </symbol>
      <symbol id="car-cabrio" viewBox="0 0 64 28">
        <path d="M3 20l4-6c1-2 3-2 6-2h14l4-3c1-1 2-1 3 0l1 3h17c3 0 5 1 7 3l3 2v3Z" />
        <circle cx="15" cy="21" r="4.5" />
        <circle cx="49" cy="21" r="4.5" />
        <circle cx="15" cy="21" r="1.8" fill="#fff" />
        <circle cx="49" cy="21" r="1.8" fill="#fff" />
      </symbol>
      <symbol id="car-suv" viewBox="0 0 64 28">
        <path d="M3 20l3-9c1-2 3-2 6-2h8l6-5c1-1 3-1 5-1h16c3 0 5 1 7 4l3 2c3 1 5 3 5 6v5Z" />
        <circle cx="14" cy="21" r="5" />
        <circle cx="50" cy="21" r="5" />
        <circle cx="14" cy="21" r="2" fill="#fff" />
        <circle cx="50" cy="21" r="2" fill="#fff" />
      </symbol>

      {/* Vereinfachte Marken-Embleme fürs Markenband (Wiedererkennungswert, keine
          exakten Markenzeichen) – einfarbig via currentColor, einheitliche viewBox. */}
      <symbol id="logo-bmw" viewBox="0 0 160 60">
        <circle cx="80" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M80 30 L80 5.5 A24.5 24.5 0 0 0 55.5 30 Z" />
        <path d="M80 30 L80 54.5 A24.5 24.5 0 0 0 104.5 30 Z" />
      </symbol>
      <symbol id="logo-mercedes" viewBox="0 0 160 60">
        <circle cx="80" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M80 8 L80 30 M80 30 L61 41 M80 30 L99 41"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="logo-audi" viewBox="0 0 160 60">
        <circle cx="34" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="58" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="82" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="106" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="3.5" />
      </symbol>
      <symbol id="logo-porsche" viewBox="0 0 160 60">
        <line x1="18" y1="16" x2="142" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
        <text
          x="80"
          y="38"
          textAnchor="middle"
          fontWeight="800"
          fontSize="19"
          letterSpacing="2.5"
          fill="currentColor"
          style={{ fontFamily: "var(--font-display, sans-serif)" }}
        >
          PORSCHE
        </text>
        <line x1="18" y1="44" x2="142" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      </symbol>
      <symbol id="logo-vw" viewBox="0 0 160 60">
        <circle cx="80" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M69 15 L80 28 L91 15 M62 24 L70 41 L80 27 L90 41 L98 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="logo-opel" viewBox="0 0 160 60">
        <circle cx="80" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M93 9 L68 33 L80 33 L66 51 L96 26 L82 26 Z" />
      </symbol>
      <symbol id="logo-mini" viewBox="0 0 160 60">
        <path
          d="M10 32 C 20 18, 32 16, 40 24 L34 30 C 29 25, 22 26, 16 34 Z"
          fill="currentColor"
        />
        <path
          d="M150 32 C 140 18, 128 16, 120 24 L126 30 C 131 25, 138 26, 144 34 Z"
          fill="currentColor"
        />
        <text
          x="80"
          y="38"
          textAnchor="middle"
          fontWeight="800"
          fontSize="22"
          letterSpacing="2"
          fill="currentColor"
          style={{ fontFamily: "var(--font-display, sans-serif)" }}
        >
          MINI
        </text>
      </symbol>
      <symbol id="logo-ford" viewBox="0 0 160 60">
        <ellipse cx="80" cy="30" rx="52" ry="22" fill="none" stroke="currentColor" strokeWidth="3" />
        <text
          x="80"
          y="39"
          textAnchor="middle"
          fontWeight="700"
          fontStyle="italic"
          fontSize="24"
          fill="currentColor"
          style={{ fontFamily: "var(--font-display, sans-serif)" }}
        >
          Ford
        </text>
      </symbol>
      <symbol id="logo-skoda" viewBox="0 0 160 60">
        <circle cx="80" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M80 12 L91 27 L83.5 27 L83.5 47 L76.5 47 L76.5 27 L69 27 Z" />
        <path
          d="M80 18 C 71 17, 64 21, 60 28 M80 18 C 89 17, 96 21, 100 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="logo-hyundai" viewBox="0 0 160 60">
        <g transform="rotate(-11 80 30)">
          <ellipse cx="80" cy="30" rx="46" ry="21" fill="none" stroke="currentColor" strokeWidth="3" />
          <path
            d="M67 16 L67 44 M93 16 L93 44 M67 22 L93 38"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
        </g>
      </symbol>
    </svg>
  );
}
