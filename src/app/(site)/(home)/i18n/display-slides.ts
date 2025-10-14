// File: src/app/(site)/(home)/i18n/display-slides.ts
import type { Locale } from "./index";

type SlideId = "hardwood" | "quartz" | "tile";

type BaseSlide = {
  id: SlideId;
  src: string; // assets defined once
};

// 1) Define assets once
const BASE_SLIDES: BaseSlide[] = [
  { id: "hardwood", src: "/images/looks/slide-1.jpg" },
  { id: "quartz", src: "/images/looks/slide-2.jpg" },
  { id: "tile", src: "/images/looks/slide-3.jpg" },
];

// 2) Locale-specific alt text
const LABELS = {
  en: {
    hardwood: "Hardwood samples on display rack",
    quartz: "Quartz countertop close-up",
    tile: "Tile layout and color swatches",
  },
  es: {
    hardwood: "Muestras de madera en un exhibidor",
    quartz: "Primer plano de encimera de cuarzo",
    tile: "Diseño de azulejos y muestras de color",
  },
} as const;

// 3) Builder
export function getHomeDisplaySlides(locale: Locale) {
  const dict = locale === "es" ? LABELS.es : LABELS.en;
  return BASE_SLIDES.map(({ id, src }) => ({
    src,
    alt: dict[id],
  }));
}
