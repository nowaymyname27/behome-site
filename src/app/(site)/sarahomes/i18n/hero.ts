import type { Locale, CollectionHeroStrings } from "./types";

const en: CollectionHeroStrings = {
  title: "SaraHomes",
  subtitle: "Immersive tours of our premier properties.",
  videoAria: "Collection background video",
};

const es: CollectionHeroStrings = {
  title: "SaraHomes",
  subtitle: "Recorridos inmersivos de nuestras mejores propiedades.",
  videoAria: "Video de fondo de la colección",
};

export function tCollectionHero(locale: Locale): CollectionHeroStrings {
  return locale === "es" ? es : en;
}
