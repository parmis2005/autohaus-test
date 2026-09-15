"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Beobachtet alle Elemente mit der Klasse "reveal" im gesamten Dokument und
// blendet sie ein, sobald sie in den Viewport scrollen. Läuft global, damit
// sowohl serverseitig gerenderte als auch client-seitige Abschnitte erfasst
// werden. Der Pfad ist Teil der Dependency-Liste, damit nach einer
// clientseitigen Navigation neu gescannt wird (Layout bleibt sonst gemountet).
export default function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (!revealEls.length) return;

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

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
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
