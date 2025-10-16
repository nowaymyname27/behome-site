// File: src/i18n/site-wide/index.ts
import type { Locale } from "../locale-context";
import { tHeader } from "./header";
import { dict as footer } from "./footer";
import { homeShowcaseCopy } from "./home-showcase";

type MediaCarouselI18n = {
  label: string;
  learnMoreTitle: string;
  learnMoreBody: string;
  prevAria: string;
  nextAria: string;
  goToSlideAria: (n: number) => string;
  seeDetails: string;
};

// Inline i18n for MediaCarousel (small copy, no separate file)
const mediaCarousel: Record<Locale, MediaCarouselI18n> = {
  en: {
    label: "Home media",
    learnMoreTitle: "Want to learn more?",
    learnMoreBody:
      "Explore detailed floor plans, materials, and neighborhood insights.",
    prevAria: "Previous",
    nextAria: "Next",
    goToSlideAria: (n: number) => `Go to slide ${n}`,
    seeDetails: "See Details",
  },
  es: {
    label: "Galería de la vivienda",
    learnMoreTitle: "¿Quieres saber más?",
    learnMoreBody:
      "Explora planos detallados, materiales y datos del vecindario.",
    prevAria: "Anterior",
    nextAria: "Siguiente",
    goToSlideAria: (n: number) => `Ir a la diapositiva ${n}`,
    seeDetails: "Ver detalles",
  },
};

// Use the function-based header i18n instead of a 'dict' object
export type HeaderI18n = ReturnType<typeof tHeader>;

export type SiteI18n = {
  header: HeaderI18n;
  footer: typeof footer.en;
  homeShowcase: typeof homeShowcaseCopy.en;
  mediaCarousel: MediaCarouselI18n; // ← widened (no literal lock-in)
};

export const tSite = (l: Locale): SiteI18n => ({
  header: tHeader(l),
  footer: footer[l],
  homeShowcase: homeShowcaseCopy[l],
  mediaCarousel: mediaCarousel[l],
});
