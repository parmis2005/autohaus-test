/* Nordglanz Automobilhaus – Interaktionen
   Header (Einblenden/Ausblenden, Mobile-Menü, Dropdown), Schnellsuche,
   Teilen-Buttons, Einblend-Animationen, Kontaktformular, Cookie-Hinweis. */

(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------------------------------------------------------------------
     Header: Schatten beim Scrollen, Ausblenden beim Runterscrollen
     --------------------------------------------------------------------- */
  const header = $("#site-header");
  const navToggle = $(".nav-toggle");
  const mobileMenu = $("#mobile-menu");
  let menuOpen = false;

  if (header) {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 20);
      const bottomReached = y + window.innerHeight >= document.documentElement.scrollHeight - 40;

      if (y < 50 || menuOpen) {
        header.classList.remove("is-hidden");
      } else if (y > lastY && y > 120) {
        header.classList.add("is-hidden");
      } else if (y < lastY && !bottomReached) {
        header.classList.remove("is-hidden");
      }
      lastY = y;
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  /* ---------------------------------------------------------------------
     Mobile-Menü
     --------------------------------------------------------------------- */
  const setMenu = (open) => {
    menuOpen = open;
    if (!navToggle || !mobileMenu) return;
    mobileMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  };

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => setMenu(!menuOpen));
    $$("a", mobileMenu).forEach((link) => link.addEventListener("click", () => setMenu(false)));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023 && menuOpen) setMenu(false);
    });
  }

  /* ---------------------------------------------------------------------
     Desktop-Dropdown (Touch / Tastatur)
     --------------------------------------------------------------------- */
  $$(".has-dropdown").forEach((item) => {
    const trigger = $(".nav-link", item);
    if (!trigger) return;
    const touchOnly = window.matchMedia("(hover: none)");

    trigger.addEventListener("click", (event) => {
      if (touchOnly.matches && !item.classList.contains("is-open")) {
        event.preventDefault();
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    document.addEventListener("click", (event) => {
      if (!item.contains(event.target)) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });

    item.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        trigger.focus();
      }
    });
  });

  /* ---------------------------------------------------------------------
     Schnellsuche + Fahrzeugfilter
     --------------------------------------------------------------------- */
  const searchForm = $("#quick-search");
  const cards = $$(".vehicle-card");
  const notice = $("#filter-notice");

  const formatNumber = (n) => n.toLocaleString("de-DE");

  const filterState = { brand: "", model: "", maxPrice: 0, type: "" };

  const matches = (card, state) => {
    const brand = card.dataset.brand || "";
    const model = card.dataset.model || "";
    const type = card.dataset.type || "";
    const price = Number(card.dataset.price || 0);
    if (state.brand && brand !== state.brand) return false;
    if (state.model && model !== state.model) return false;
    if (state.maxPrice && price > state.maxPrice) return false;
    if (state.type && type !== state.type) return false;
    return true;
  };

  const describeFilter = (state) => {
    const parts = [];
    if (state.brand) parts.push(state.brand);
    if (state.model) parts.push(state.model);
    if (state.type) parts.push(state.type);
    if (state.maxPrice) parts.push(`bis ${formatNumber(state.maxPrice)} €`);
    return parts.join(" · ");
  };

  const applyFilter = (state) => {
    let shown = 0;
    cards.forEach((card) => {
      const ok = matches(card, state);
      card.hidden = !ok;
      if (ok) shown += 1;
    });
    if (notice) {
      const text = $("[data-filter-text]", notice);
      const active = describeFilter(state);
      if (active) {
        text.textContent = `${shown} ${shown === 1 ? "Fahrzeug" : "Fahrzeuge"} gefunden für: ${active}. `;
        notice.classList.add("is-visible");
      } else {
        notice.classList.remove("is-visible");
      }
    }
  };

  const resetFilter = () => {
    filterState.brand = "";
    filterState.model = "";
    filterState.maxPrice = 0;
    filterState.type = "";
    if (searchForm) {
      searchForm.reset();
      populateModels();
      updateCount();
    }
    applyFilter(filterState);
  };

  const brandSelect = $("#qs-brand");
  const modelSelect = $("#qs-model");
  const priceSelect = $("#qs-price");
  const submitBtn = $("#qs-submit");
  const countLabel = submitBtn ? $("[data-count]", submitBtn) : null;

  const unique = (values) => Array.from(new Set(values.filter(Boolean)));

  const populateBrands = () => {
    if (!brandSelect) return;
    const brands = unique(cards.map((c) => c.dataset.brand)).sort((a, b) => a.localeCompare(b, "de"));
    brands.forEach((brand) => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandSelect.appendChild(option);
    });
  };

  const populateModels = () => {
    if (!modelSelect || !brandSelect) return;
    const brand = brandSelect.value;
    modelSelect.innerHTML = "";
    const all = document.createElement("option");
    all.value = "";
    all.textContent = "Alle Modelle";
    modelSelect.appendChild(all);
    if (!brand) {
      modelSelect.disabled = true;
      return;
    }
    const models = unique(cards.filter((c) => c.dataset.brand === brand).map((c) => c.dataset.model)).sort((a, b) =>
      a.localeCompare(b, "de")
    );
    models.forEach((model) => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
    modelSelect.disabled = false;
  };

  const readForm = () => ({
    brand: brandSelect ? brandSelect.value : "",
    model: modelSelect ? modelSelect.value : "",
    maxPrice: priceSelect ? Number(priceSelect.value || 0) : 0,
    type: "",
  });

  const updateCount = () => {
    if (!countLabel || !submitBtn) return;
    const state = readForm();
    const n = cards.filter((card) => matches(card, state)).length;
    countLabel.textContent = n > 0 ? `${n} Treffer` : "Keine Treffer";
    submitBtn.disabled = n === 0;
  };

  if (searchForm && cards.length) {
    populateBrands();
    populateModels();
    updateCount();

    brandSelect?.addEventListener("change", () => {
      populateModels();
      updateCount();
    });
    modelSelect?.addEventListener("change", updateCount);
    priceSelect?.addEventListener("change", updateCount);

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      Object.assign(filterState, readForm());
      applyFilter(filterState);
      $("#fahrzeuge")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  $$("[data-filter-reset]").forEach((el) => {
    el.addEventListener("click", (event) => {
      if (el.tagName === "BUTTON") event.preventDefault();
      resetFilter();
    });
  });

  $$("[data-filter-type]").forEach((el) => {
    el.addEventListener("click", () => {
      resetFilter();
      filterState.type = el.dataset.filterType || "";
      applyFilter(filterState);
    });
  });

  $$(".brand-item[data-brand]").forEach((el) => {
    el.addEventListener("click", () => {
      resetFilter();
      if (brandSelect) {
        brandSelect.value = el.dataset.brand || "";
        populateModels();
        updateCount();
      }
      filterState.brand = el.dataset.brand || "";
      applyFilter(filterState);
    });
  });

  /* ---------------------------------------------------------------------
     Kaufanfrage: Wunschfahrzeug ins Kontaktformular übernehmen
     --------------------------------------------------------------------- */
  const messageField = $("#cf-msg");
  $$("[data-inquiry]").forEach((el) => {
    el.addEventListener("click", () => {
      if (!messageField) return;
      const vehicle = el.dataset.inquiry;
      if (!messageField.value.trim()) {
        messageField.value = `Guten Tag, ich interessiere mich für den ${vehicle}. Bitte kontaktieren Sie mich.`;
      }
    });
  });

  /* ---------------------------------------------------------------------
     Teilen
     --------------------------------------------------------------------- */
  $$("[data-share]").forEach((button) => {
    button.addEventListener("click", async () => {
      const card = button.closest(".vehicle-card");
      const title = card ? $("h3", card)?.textContent?.trim() : document.title;
      const url = card && card.id ? `${location.origin}${location.pathname}#${card.id}` : location.href;
      const original = button.innerHTML;
      const flash = (text) => {
        button.textContent = text;
        window.setTimeout(() => {
          button.innerHTML = original;
        }, 1800);
      };

      try {
        if (navigator.share) {
          await navigator.share({ title, url });
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(url);
          flash("Link kopiert");
        } else {
          window.prompt("Link kopieren:", url);
        }
      } catch (error) {
        /* Abbruch durch Nutzer – nichts zu tun */
      }
    });
  });

  /* ---------------------------------------------------------------------
     Einblend-Animationen
     --------------------------------------------------------------------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------------------
     Kontaktformular (Demo: keine Serveranbindung)
     --------------------------------------------------------------------- */
  const contactForm = $("#contact-form");
  const contactMsg = $("#contact-msg");
  if (contactForm && contactMsg) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const first = $("#cf-first")?.value.trim();
      const last = $("#cf-last")?.value.trim();
      const mail = $("#cf-mail")?.value.trim();
      contactMsg.className = "form-msg";

      if (!first || !last || !mail) {
        contactMsg.textContent = "Bitte Vorname, Nachname und E-Mail ausfüllen.";
        contactMsg.classList.add("is-error");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        contactMsg.textContent = "Bitte eine gültige E-Mail-Adresse angeben.";
        contactMsg.classList.add("is-error");
        return;
      }

      contactForm.reset();
      contactMsg.textContent = "Vielen Dank! Wir melden uns zeitnah.";
      contactMsg.classList.add("is-success");
    });
  }

  /* ---------------------------------------------------------------------
     Cookie-Hinweis
     --------------------------------------------------------------------- */
  const banner = $("#cookie-banner");
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

  if (banner) {
    if (!readConsent()) banner.hidden = false;

    $("[data-cookie-accept]", banner)?.addEventListener("click", () => {
      writeConsent("all");
      banner.hidden = true;
      banner.classList.remove("is-expanded");
    });

    $("[data-cookie-manage]", banner)?.addEventListener("click", (event) => {
      const expanded = banner.classList.toggle("is-expanded");
      event.currentTarget.textContent = expanded ? "Auswahl speichern" : "Cookies verwalten";
      if (!expanded) {
        writeConsent("essential");
        banner.hidden = true;
      }
    });

    $$("[data-cookie-open]").forEach((el) => {
      el.addEventListener("click", () => {
        banner.hidden = false;
        banner.classList.remove("is-expanded");
        const manage = $("[data-cookie-manage]", banner);
        if (manage) manage.textContent = "Cookies verwalten";
      });
    });
  }
})();
