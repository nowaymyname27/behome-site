import type { Locale, CollectionHeroStrings } from "./types";

const en: CollectionHeroStrings = {
  eyebrow: "Featuring",
  title: "Sara Homes",
  subtitle: "New Homes in Sarasota, Florida.",
  supportingText: "Created for rental ownership and lasting long-term value.",
  videoAria: "Collection background video",
};

const es: CollectionHeroStrings = {
  eyebrow: "Presentamos",
  title: "Sara Homes",
  subtitle: "Casas nuevas en Sarasota, Florida.",
  supportingText: "Creadas para invertir en alquiler y generar valor duradero a largo plazo.",
  videoAria: "Video de fondo de la colección",
};

export function tCollectionHero(locale: Locale): CollectionHeroStrings {
  return locale === "es" ? es : en;
}
