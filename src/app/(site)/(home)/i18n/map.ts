// Florida/i18n/map.ts
import { products } from "./products";

export const map = {
  en: {
    products: products.en,
    clearFilters: "Clear filters",
    card: { explore: "Explore", toggleAria: "Show {title} on map" },
  },
  es: {
    products: products.es,
    clearFilters: "Borrar filtros",
    card: { explore: "Explorar", toggleAria: "Mostrar {title} en el mapa" },
  },
} as const;
