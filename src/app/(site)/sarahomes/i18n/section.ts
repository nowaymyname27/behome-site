import type { Locale, CollectionSectionStrings } from "./types";

const en: CollectionSectionStrings = {
  title: "SaraHomes Portfolio",
  subtitle: "Explore our curated single-family portfolio below.",
  showMore: "Show more",
};

const es: CollectionSectionStrings = {
  title: "SaraHomes Portafolio",
  subtitle:
    "Explore nuestro portafolio seleccionado de viviendas unifamiliares a continuación.",
  showMore: "Ver más",
};

export function tCollectionSection(locale: Locale): CollectionSectionStrings {
  return locale === "es" ? es : en;
}
