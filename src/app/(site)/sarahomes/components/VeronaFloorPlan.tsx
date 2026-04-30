"use client";

import { useLocale } from "../../../../i18n/locale-context";

import FloorPlanDetail from "./FloorPlanDetail";

const COPY = {
  en: {
    brand: "Sara Homes",
    title: "Verona Residences",
    subtitle: "Floor Plans",
    imageAlt: "Verona floor plan layout",
    specs: [
      "3 bedrooms + Flex room / 2 bathrooms",
      "1,768 ft^2 (164 m^2) - Interior Area",
      "96 ft^2 (9 m^2) - Entrance",
      "388 ft^2 (36 m^2) - Garage (2 vehicles)",
      "261 ft^2 (24.2 m^2) - Lanai",
      "2,484 ft^2 (230.7 m^2) - Total Area",
      "10,000 ft^2 (929 m^2) - Lot size (approx.)",
    ],
  },
  es: {
    brand: "Sara Homes",
    title: "Residencias Verona",
    subtitle: "Planos de Planta",
    imageAlt: "Distribucion de plano Verona",
    specs: [
      "3 habitaciones + cuarto flexible / 2 banos",
      "1,768 ft^2 (164 m^2) - Area interior",
      "96 ft^2 (9 m^2) - Entrada",
      "388 ft^2 (36 m^2) - Garaje (2 vehiculos)",
      "261 ft^2 (24.2 m^2) - Lanai",
      "2,484 ft^2 (230.7 m^2) - Area total",
      "10,000 ft^2 (929 m^2) - Tamano de lote (aprox.)",
    ],
  },
} as const;

export default function VeronaFloorPlan() {
  const { locale } = useLocale();
  const copy = locale === "es" ? COPY.es : COPY.en;

  return (
    <FloorPlanDetail
      brand={copy.brand}
      title={copy.title}
      subtitle={copy.subtitle}
      imageSrc="/verona_fp.jpg"
      imageAlt={copy.imageAlt}
      specs={copy.specs}
    />
  );
}
