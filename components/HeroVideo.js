"use client";

import { useEffect, useRef, useState } from "react";

// Hintergrundvideo im Hero: läuft stumm in Endlosschleife und wird bei
// reduzierter Bewegungspräferenz (prefers-reduced-motion) durch das
// Poster-Standbild ersetzt statt automatisch abzuspielen.
export default function HeroVideo() {
  const videoRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        /* Autoplay kann vom Browser blockiert werden – Poster bleibt sichtbar */
      });
    }
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <img
        className="hero-video-fallback"
        src="/assets/video/hero-dealership-poster.jpg"
        alt=""
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="hero-video"
      poster="/assets/video/hero-dealership-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/assets/video/hero-dealership.webm" type="video/webm" />
      <source src="/assets/video/hero-dealership.mp4" type="video/mp4" />
    </video>
  );
}
