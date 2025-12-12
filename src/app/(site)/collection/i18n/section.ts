import type { Locale, CollectionSectionStrings } from "./types";

const en: CollectionSectionStrings = {
  title: "Our Collection",
  subtitle: "Explore our curated single-family portfolio below.",
};

const es: CollectionSectionStrings = {
  title: "Nuestra Colección",
  subtitle:
    "Explore nuestro portafolio seleccionado de viviendas unifamiliares a continuación.",
};

export function tCollectionSection(locale: Locale): CollectionSectionStrings {
  return locale === "es" ? es : en;
}
