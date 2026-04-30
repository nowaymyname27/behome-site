"use client";

import { useLocale } from "../../../../i18n/locale-context";

import FloorPlanDetail from "./FloorPlanDetail";

const COPY = {
  en: {
    brand: "Sara Homes",
    title: "Everglades Residences",
    subtitle: "Floor Plans",
    imageAlt: "Everglades floor plan layout",
    specs: [
      "3 bedrooms + Flex room / 2 bathrooms",
      "1,739 ft^2 (162 m^2) - Interior Area",
      "86 ft^2 (8 m^2) - Entrance",
      "447 ft^2 (42 m^2) - Garage (2 vehicles)",
      "2,396 ft^2 (223 m^2) - Total Area",
      "10,000 ft^2 (929 m^2) - Lot size (approx.)",
    ],
  },
  es: {
    brand: "Sara Homes",
    title: "Residencias Everglades",
    subtitle: "Planos de Planta",
    imageAlt: "Distribucion de plano Everglades",
    specs: [
      "3 habitaciones + cuarto flexible / 2 banos",
      "1,739 ft^2 (162 m^2) - Area interior",
      "86 ft^2 (8 m^2) - Entrada",
      "447 ft^2 (42 m^2) - Garaje (2 vehiculos)",
      "2,396 ft^2 (223 m^2) - Area total",
      "10,000 ft^2 (929 m^2) - Tamano de lote (aprox.)",
    ],
  },
} as const;

export default function EvergladesFloorPlan() {
  const { locale } = useLocale();
  const copy = locale === "es" ? COPY.es : COPY.en;

  return (
    <FloorPlanDetail
      brand={copy.brand}
      title={copy.title}
      subtitle={copy.subtitle}
      imageSrc="/everglades_fp.jpg"
      imageAlt={copy.imageAlt}
      specs={copy.specs}
    />
  );
}
