import type { Locale } from "../../../../i18n/locale-context";

type CollectionHighlightsText = {
  title: string;
  points: string[];
};

export const tCollectionHighlights = (
  locale: Locale
): CollectionHighlightsText => {
  const en: CollectionHighlightsText = {
    title: "Turnkey Ownership. 360˚ Returns.",
    points: [
      "Fully rented and stabilized properties",
      "Immediate cash flow at closing",
      "HOA-expense free ownership",
      "Professional property management",
      "Performance reporting included",
      "Strategic locations in high-growth, high-yield cities",
      "Ideal for both domestic and international investors",
    ],
  };

  const es: CollectionHighlightsText = {
    title: "Propiedad llave en mano. Rendimientos 360˚.",
    points: [
      "Propiedades totalmente alquiladas y estabilizadas",
      "Flujo de efectivo inmediato al cierre",
      "Propiedad libre de gastos de HOA",
      "Gestión profesional de propiedades",
      "Informes de rendimiento incluidos",
      "Ubicaciones estratégicas en ciudades de alto crecimiento y alta rentabilidad",
      "Ideal para inversionistas nacionales e internacionales",
    ],
  };

  return locale === "es" ? es : en;
};
