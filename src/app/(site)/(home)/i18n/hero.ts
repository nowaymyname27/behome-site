import type { Locale } from "./types";

// 1. Define the type manually so it accepts ANY string, not just the English ones
export type HomeHeroStrings = {
  copies: readonly {
    title: string;
    subtitle: string;
  }[];
  videoAria: string;
  phrase: {
    text: string;
    attribution: string;
  };
};

const HERO = {
  en: {
    copies: [
      {
        title: "Build lasting income through lasting homes",
        subtitle: "Build-to-Rent homes, engineered for performance and yield.",
      },
      {
        title: "The Smart way to invest in Income Producing Properties (IPPs)",
        subtitle: "Build-to-Rent homes, engineered for performance and yield.",
      },
      {
        title:
          "Create something lasting where families grow and value endures.",
        subtitle: "Build-to-Rent homes, engineered for performance and yield.",
      },
    ],
    videoAria: "Background video of homes and neighborhoods",
    phrase: {
      text: "The best investment is the one that works for you while you sleep. And if it’s built to rent, even better.",
      attribution: "— RentPortfolio",
    },
  },
  es: {
    copies: [
      {
        title: "Genere ingresos duraderos con hogares duraderos",
        subtitle:
          "Casas Build-to-Rent, diseñadas para rendimiento y rentabilidad.",
      },
      {
        title:
          "La forma inteligente de invertir en propiedades que generan ingresos (IPP)",
        subtitle:
          "Casas Build-to-Rent, diseñadas para rendimiento y rentabilidad.",
      },
      {
        title:
          "Cree algo duradero donde crecen las familias y perdura el valor.",
        subtitle:
          "Casas Build-to-Rent, diseñadas para rendimiento y rentabilidad.",
      },
    ],
    videoAria: "Video de fondo de hogares y vecindarios",
    phrase: {
      text: "La mejor inversión es la que trabaja por usted, mientras usted duerme. Y si está construida para rentar, mucho mejor.",
      attribution: "— RentPortfolio",
    },
  },
} as const;

// 2. Now the return type is 'HomeHeroStrings', which allows both EN and ES
export function tHomeHero(locale: Locale): HomeHeroStrings {
  return locale === "es" ? HERO.es : HERO.en;
}

export function tHomePhrase(locale: Locale) {
  return locale === "es" ? HERO.es.phrase : HERO.en.phrase;
}
