import type { Locale, HomeCardStrings } from "./types";

const en: HomeCardStrings = {
  status: {
    sold: "SOLD",
    rented: "CURRENTLY RENTED",
    underConstruction: "UNDER CONSTRUCTION",
    forSale: "FOR SALE",
  },
  actions: {
    viewOnMap: "View on map",
    closeMap: "Close map",
  },
  labels: {
    price: "Price",
    rent: "Rent",
    renewalDate: "Renewal Date",
    cap: "CAP",
  },
  toggle: "Characteristics",
  metrics: {
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    ac: "A/C Area",
    garage: "Garage",
    lanai: "Lanai",
    entry: "Entry",
    total: "Total Area",
    lot: "Lot",
    unit: "sq ft",
  },
};

const es: HomeCardStrings = {
  status: {
    sold: "VENDIDO",
    rented: "ALQUILADO",
    underConstruction: "EN CONSTRUCCIÓN",
    forSale: "EN VENTA",
  },
  actions: {
    viewOnMap: "Ver en mapa",
    closeMap: "Cerrar mapa",
  },
  labels: {
    price: "Precio",
    rent: "Renta",
    renewalDate: "Fecha Renovación",
    cap: "CAP",
  },
  toggle: "Características",
  metrics: {
    bedrooms: "Habitaciones",
    bathrooms: "Baños",
    ac: "Área A/C",
    garage: "Garaje",
    lanai: "Terraza",
    entry: "Entrada",
    total: "Área Total",
    lot: "Lote",
    unit: "pies²",
  },
};

export function tHomeCard(locale: Locale): HomeCardStrings {
  return locale === "es" ? es : en;
}
