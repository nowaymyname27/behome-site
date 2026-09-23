import type { Locale, HomeSectionStrings } from "./types";

const en: HomeSectionStrings = {
  title: "SaraHomes Portfolio",
  subtitle: "Explore our curated single-family portfolio below.",
  showMore: "Show more",
};

const es: HomeSectionStrings = {
  title: "SaraHomes Portafolio",
  subtitle:
    "Explore nuestro portafolio seleccionado de viviendas unifamiliares a continuación.",
  showMore: "Ver más",
};

export function tHomeSection(locale: Locale): HomeSectionStrings {
  return locale === "es" ? es : en;
}
