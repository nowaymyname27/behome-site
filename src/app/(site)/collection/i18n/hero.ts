import type { Locale, CollectionHeroStrings } from "./types";

const en: CollectionHeroStrings = {
  title: "The 360 Collection",
  subtitle: "Immersive tours of our premier properties.",
  videoAria: "Collection background video",
};

const es: CollectionHeroStrings = {
  title: "La Colección 360",
  subtitle: "Recorridos inmersivos de nuestras mejores propiedades.",
  videoAria: "Video de fondo de la colección",
};

export function tCollectionHero(locale: Locale): CollectionHeroStrings {
  return locale === "es" ? es : en;
}
