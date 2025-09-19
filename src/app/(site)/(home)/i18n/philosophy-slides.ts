// File: /i18n/home/philosophy-slides.ts
import type { Locale } from "@/i18n/locale-context";

// EN is the source of truth for shape/length
const en = [
  {
    src: "/philosophy/slide-1.jpg",
    title: "Light-filled spaces",
    caption: "Light-filled spaces",
    body: "We orient rooms and windows to maximize natural light throughout the day, improving mood and reducing energy use.",
  },
  {
    src: "/philosophy/slide-2.jpg",
    title: "Durable materials",
    caption: "Durable materials",
    body: "Materials are selected for longevity and easy maintenance—finishes that age well and stand up to real life.",
  },
  {
    src: "/philosophy/slide-3.jpg",
    title: "Thoughtful layouts",
    caption: "Thoughtful layouts",
    body: "Floor plans are optimized for flow, storage, and everyday routines—space where it matters, not wasted square footage.",
  },
  {
    src: "/philosophy/slide-4.jpg",
    title: "Connected communities",
    caption: "Connected communities",
    body: "Neighborhoods planned for walkability, social connection, and easy access to daily essentials.",
  },
] as const;

// Widen leaves to `string` while keeping array shape/length
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };

type SlidesSchema = DeepString<typeof en>;

const es: SlidesSchema = [
  {
    src: "/philosophy/slide-1.jpg",
    title: "Espacios llenos de luz",
    caption: "Espacios llenos de luz",
    body: "Orientamos habitaciones y ventanas para maximizar la luz natural durante el día, mejorando el ánimo y reduciendo el consumo de energía.",
  },
  {
    src: "/philosophy/slide-2.jpg",
    title: "Materiales duraderos",
    caption: "Materiales duraderos",
    body: "Seleccionamos materiales por su longevidad y fácil mantenimiento—acabados que envejecen bien y soportan la vida real.",
  },
  {
    src: "/philosophy/slide-3.jpg",
    title: "Distribuciones pensadas",
    caption: "Distribuciones pensadas",
    body: "Planos optimizados para el flujo, el almacenamiento y las rutinas diarias—espacio donde importa, sin metros desperdiciados.",
  },
  {
    src: "/philosophy/slide-4.jpg",
    title: "Comunidades conectadas",
    caption: "Comunidades conectadas",
    body: "Barrios planificados para la caminabilidad, la conexión social y el acceso fácil a lo esencial de cada día.",
  },
];

export type Slide = {
  src: string;
  title: string;
  caption: string;
  body: string;
};

// Export a single dict for the aggregator
export const dict = { en: en as SlidesSchema, es } as const;
export type HomePhilosophySlidesI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tHomePhilosophySlides = (locale: Locale) => dict[locale];

export function getHomePhilosophySlides(locale: Locale): Slide[] {
  // Type-cast back to the widened Slide[] shape
  return dict[locale] as unknown as Slide[];
}
