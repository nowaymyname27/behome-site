"use client";

import { useLocale } from "../../../../i18n/locale-context";

import FloorPlanDetail from "./FloorPlanDetail";

const COPY = {
  en: {
    brand: "Sara Homes",
    title: "The Everglades Residence",
    subtitle: "Floor Plans",
    imageAlt: "Everglades floor plan layout",
    specs: [
      "3 Bedrooms + Flex-Room / 2 Bathrooms",
      "1,814 ft^2 (168.5 m^2) - Living Area",
      "92 ft^2 (8.5 m^2) - Entrance",
      "447 ft^2 (42 m^2) - Garage (2 vehicles)",
      "264 ft^2 (24.5 m^2) - Lanai",
      "2,617 ft^2 (243.1 m^2) - Total Area",
      "10,000 ft^2 (929 m^2) - Lot Size (approx.)",
    ],
  },
  es: {
    brand: "Sara Homes",
    title: "La Residencia Everglades",
    subtitle: "Planos de Planta",
    imageAlt: "Distribucion de plano Everglades",
    specs: [
      "3 habitaciones + cuarto flexible / 2 banos",
      "1,814 ft^2 (168.5 m^2) - Area habitable",
      "92 ft^2 (8.5 m^2) - Entrada",
      "447 ft^2 (42 m^2) - Garaje (2 vehiculos)",
      "264 ft^2 (24.5 m^2) - Lanai",
      "2,617 ft^2 (243.1 m^2) - Area total",
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
