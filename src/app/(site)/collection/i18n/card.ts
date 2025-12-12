import type { Locale, CollectionCardStrings } from "./types";

const en: CollectionCardStrings = {
  status: {
    sold: "SOLD",
    rented: "CURRENTLY RENTED",
    underConstruction: "UNDER CONSTRUCTION",
    forSale: "FOR SALE",
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

const es: CollectionCardStrings = {
  status: {
    sold: "VENDIDO",
    rented: "ALQUILADO",
    underConstruction: "EN CONSTRUCCIÓN",
    forSale: "EN VENTA",
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

export function tCollectionCard(locale: Locale): CollectionCardStrings {
  return locale === "es" ? es : en;
}
