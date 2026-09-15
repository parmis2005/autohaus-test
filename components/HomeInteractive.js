"use client";

import { useMemo, useState } from "react";
import { vehicles, priceOptions, vehicleTypes, brandMarquee } from "@/data/vehicles";

const EMPTY_FILTER = { brand: "", model: "", maxPrice: "", type: "" };

const formatNumber = (n) => n.toLocaleString("de-DE");

const matchesFilter = (vehicle, filter) => {
  if (filter.brand && vehicle.brand !== filter.brand) return false;
  if (filter.model && vehicle.model !== filter.model) return false;
  if (filter.maxPrice && vehicle.price > Number(filter.maxPrice)) return false;
  if (filter.type && vehicle.type !== filter.type) return false;
  return true;
};

const describeFilter = (filter) => {
  const parts = [];
  if (filter.brand) parts.push(filter.brand);
  if (filter.model) parts.push(filter.model);
  if (filter.type) parts.push(filter.type);
  if (filter.maxPrice) parts.push(`bis ${formatNumber(Number(filter.maxPrice))} €`);
  return parts.join(" · ");
};

const unique = (values) => Array.from(new Set(values.filter(Boolean)));

function ShareButton({ vehicle }) {
  const [label, setLabel] = useState("Teilen");

  const handleShare = async () => {
    const title = vehicle.title;
    const url = `${window.location.origin}${window.location.pathname}#${vehicle.id}`;

    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setLabel("Link kopiert");
        window.setTimeout(() => setLabel("Teilen"), 1800);
      } else {
        window.prompt("Link kopieren:", url);
      }
    } catch (error) {
      /* Abbruch durch Nutzer – nichts zu tun */
    }
  };

  return (
    <button className="btn btn-outline btn-block" type="button" onClick={handleShare}>
      <svg className="icon">
        <use href="#i-share" />
      </svg>
      {label}
    </button>
  );
}

function VehicleCard({ vehicle, onInquiry, hidden }) {
  return (
    <article
      className="vehicle-card reveal"
      id={vehicle.id}
      hidden={hidden}
      style={vehicle.delay ? { "--delay": vehicle.delay } : undefined}
    >
      <div className="vehicle-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={vehicle.image} alt={vehicle.alt} loading="lazy" />
        <span className="chip chip-light">{vehicle.badge}</span>
        {vehicle.isNew ? <span className="chip chip-primary">Neu eingetroffen</span> : null}
      </div>
      <div className="vehicle-body">
        <h3>{vehicle.title}</h3>
        <p className="vehicle-sub">{vehicle.sub}</p>
        <div className="vehicle-price">{vehicle.priceLabel}</div>
        <p className="vehicle-tax">MwSt. ausweisbar</p>
        <a
          className="btn btn-primary btn-sm"
          href="#kontakt"
          onClick={() => onInquiry(vehicle.title)}
        >
          Kaufanfrage
          <svg className="icon icon-arrow">
            <use href="#i-arrow" />
          </svg>
        </a>
        <ul className="vehicle-specs">
          {vehicle.specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
        <ul className="vehicle-colors">
          {vehicle.colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul>
        <div className="vehicle-actions">
          <a
            className="btn btn-outline btn-block"
            href="#kontakt"
            onClick={() => onInquiry(vehicle.title)}
          >
            Fahrzeug ansehen
          </a>
          <ShareButton vehicle={vehicle} />
        </div>
      </div>
    </article>
  );
}

export default function HomeInteractive() {
  const [qsBrand, setQsBrand] = useState("");
  const [qsModel, setQsModel] = useState("");
  const [qsMaxPrice, setQsMaxPrice] = useState("");
  const [filter, setFilter] = useState(EMPTY_FILTER);

  const brandOptions = useMemo(
    () => unique(vehicles.map((v) => v.brand)).sort((a, b) => a.localeCompare(b, "de")),
    []
  );

  const modelOptions = useMemo(() => {
    if (!qsBrand) return [];
    return unique(vehicles.filter((v) => v.brand === qsBrand).map((v) => v.model)).sort((a, b) =>
      a.localeCompare(b, "de")
    );
  }, [qsBrand]);

  const liveCount = useMemo(
    () =>
      vehicles.filter((v) =>
        matchesFilter(v, { brand: qsBrand, model: qsModel, maxPrice: qsMaxPrice, type: "" })
      ).length,
    [qsBrand, qsModel, qsMaxPrice]
  );

  const visibleVehicles = useMemo(() => vehicles.filter((v) => matchesFilter(v, filter)), [filter]);
  const activeDescription = describeFilter(filter);

  const resetFilter = () => {
    setQsBrand("");
    setQsModel("");
    setQsMaxPrice("");
    setFilter(EMPTY_FILTER);
  };

  const handleBrandChange = (event) => {
    setQsBrand(event.target.value);
    setQsModel("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilter({ brand: qsBrand, model: qsModel, maxPrice: qsMaxPrice, type: "" });
    document.getElementById("fahrzeuge")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleTypeClick = (type) => {
    resetFilter();
    setFilter({ ...EMPTY_FILTER, type });
  };

  const handleBrandTileClick = (brand) => {
    resetFilter();
    setQsBrand(brand);
    setFilter({ ...EMPTY_FILTER, brand });
  };

  const handleInquiry = (vehicleTitle) => {
    window.dispatchEvent(new CustomEvent("nordglanz:inquiry", { detail: vehicleTitle }));
  };

  return (
    <>
      {/* Schnellsuche */}
      <section className="quick-search" aria-label="Schnellsuche">
        <div className="container">
          <form className="quick-search-card" id="quick-search" onSubmit={handleSubmit}>
            <div className="quick-search-grid">
              <div className="field">
                <label htmlFor="qs-brand">Hersteller</label>
                <select id="qs-brand" name="brand" value={qsBrand} onChange={handleBrandChange}>
                  <option value="">Alle Hersteller</option>
                  {brandOptions.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="qs-model">Modell</label>
                <select
                  id="qs-model"
                  name="model"
                  value={qsModel}
                  onChange={(event) => setQsModel(event.target.value)}
                  disabled={!qsBrand}
                >
                  <option value="">Alle Modelle</option>
                  {modelOptions.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="qs-price">Preis bis</label>
                <select
                  id="qs-price"
                  name="maxPrice"
                  value={qsMaxPrice}
                  onChange={(event) => setQsMaxPrice(event.target.value)}
                >
                  {priceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="btn btn-primary quick-search-btn"
                type="submit"
                id="qs-submit"
                disabled={liveCount === 0}
              >
                <svg className="icon">
                  <use href="#i-search" />
                </svg>
                <span data-count>{liveCount > 0 ? `${liveCount} Treffer` : "Keine Treffer"}</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Markenband */}
      <section className="brands" aria-label="Marken in unserem Bestand">
        <h2>Markenauswahl in unserem Bestand</h2>
        <div className="marquee-wrap">
          <div className="marquee" id="brand-marquee">
            {brandMarquee.map((item, index) => (
              <a
                className="brand-item"
                href="#fahrzeuge"
                key={`${item.name}-${index}`}
                onClick={
                  item.brand
                    ? (event) => {
                        event.preventDefault();
                        handleBrandTileClick(item.brand);
                        document
                          .getElementById("fahrzeuge")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    : undefined
                }
              >
                <span className="sr-only">{item.name}</span>
                <svg className="brand-logo" aria-hidden="true">
                  <use href={`#${item.icon}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="container">
          <p className="brands-note">
            <strong>Rechtlicher Hinweis:</strong> Alle genannten Marken sind Eigentum der jeweiligen
            Hersteller. Wir sind kein Vertragshändler und stehen in keiner wirtschaftlichen
            Verbindung zu den genannten Marken. Die Nennung dient ausschließlich zur Filterung und
            Markenidentifikation.
          </p>
        </div>
      </section>

      {/* Fahrzeuge */}
      <section id="fahrzeuge" className="vehicles">
        <div className="container">
          <div className="section-head reveal">
            <h2>Sofort verfügbare Fahrzeuge</h2>
            <div className="section-divider" />
            <p>Geprüfte Gebrauchtwagen – direkt bei uns in Beispielstadt verfügbar</p>
          </div>

          <div
            className={`filter-notice${activeDescription ? " is-visible" : ""}`}
            id="filter-notice"
            role="status"
          >
            <span data-filter-text>
              {activeDescription
                ? `${visibleVehicles.length} ${
                    visibleVehicles.length === 1 ? "Fahrzeug" : "Fahrzeuge"
                  } gefunden für: ${activeDescription}. `
                : ""}
            </span>
            <button type="button" onClick={resetFilter}>
              Filter zurücksetzen
            </button>
          </div>

          <div className="vehicle-grid" id="vehicle-grid">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onInquiry={handleInquiry}
                hidden={!visibleVehicles.includes(vehicle)}
              />
            ))}
          </div>

          <div className="trust-row reveal">
            <span>
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              Geprüfte Fahrzeuge
            </span>
            <span>
              <svg className="icon">
                <use href="#i-shield" />
              </svg>
              Transparente Preise
            </span>
            <span>
              <svg className="icon">
                <use href="#i-check-circle" />
              </svg>
              Sofort verfügbar
            </span>
          </div>

          <div className="vehicles-cta reveal">
            <a
              className="btn btn-primary btn-lg"
              href="#fahrzeuge"
              onClick={(event) => {
                event.preventDefault();
                resetFilter();
              }}
            >
              Alle Fahrzeuge ansehen
              <svg className="icon icon-arrow">
                <use href="#i-arrow" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Fahrzeugtypen */}
      <section className="types" aria-labelledby="types-title">
        <div className="container">
          <h2 id="types-title" className="reveal">
            Welcher Typ passt zu Deinem Leben?
          </h2>
          <div className="type-grid">
            {vehicleTypes.map((item) => (
              <a
                className="type-card reveal"
                href="#fahrzeuge"
                key={item.type}
                style={{ "--delay": item.delay }}
                onClick={(event) => {
                  event.preventDefault();
                  handleTypeClick(item.type);
                  document
                    .getElementById("fahrzeuge")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <svg className="silhouette" viewBox="0 0 64 28">
                  <use href={`#${item.icon}`} />
                </svg>
                <span>{item.type}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
