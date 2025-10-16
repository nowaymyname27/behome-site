import type { Locale } from "./types";

const HERO = {
  en: {
    title: "Multiply your wealth with peace of mind.",
    subtitle:
      "Build your portfolio of new, build-to-rent properties—just like the major investment funds do.",
    videoAria: "Background video of homes and neighborhoods",
    phrase: {
      text: "The best investment is the one that works for you while you sleep. And if it’s built to rent, even better.",
      attribution: "— RentPortfolio",
    },
  },
  es: {
    title: "Multiplique su riqueza con tranquilidad.",
    subtitle:
      "Cree su portafolio de propiedades nuevas, construidas para rentar, como lo hacen los grandes fondos de inversión.",
    videoAria: "Video de fondo de hogares y vecindarios",
    phrase: {
      text: "La mejor inversión es la que trabaja por usted, mientras usted duerme. Y si está construida para rentar, mucho mejor.",
      attribution: "— RentPortfolio",
    },
  },
} as const;

export function tHomeHero(locale: Locale) {
  return locale === "es" ? HERO.es : HERO.en;
}
// Near the bottom of hero.ts
export function tHomePhrase(locale: Locale) {
  return locale === "es" ? HERO.es.phrase : HERO.en.phrase;
}
