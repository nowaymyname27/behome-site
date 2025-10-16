// file: src/i18n/site-wide/home-showcase.ts
export type Locale = "en" | "es";

export type HomeShowcaseStrings = {
  sqftUnit: string;
  bedsLabel: string;
  bathsLabel: string;
  carsLabel: string;
  estimatedPaymentLabel: string;
  perMonthSuffix: string;
  startingPriceLabel: string;
  startingPriceNote: string;
  viewDetailsLabel: string; // new
};

export const homeShowcaseCopy: Record<Locale, HomeShowcaseStrings> = {
  en: {
    sqftUnit: "Sq ft",
    bedsLabel: "Beds",
    bathsLabel: "Baths",
    carsLabel: "Cars",
    estimatedPaymentLabel: "Estimated payment",
    perMonthSuffix: "/mo.",
    startingPriceLabel: "Starting price",
    startingPriceNote: "Starting price may include lot premium",
    viewDetailsLabel: "View Home Details",
  },
  es: {
    sqftUnit: "pies²",
    bedsLabel: "Habitaciones",
    bathsLabel: "Baños",
    carsLabel: "Autos",
    estimatedPaymentLabel: "Pago estimado",
    perMonthSuffix: "/mes",
    startingPriceLabel: "Precio desde",
    startingPriceNote: "El precio puede incluir prima del lote",
    viewDetailsLabel: "Ver detalles de la vivienda",
  },
};
