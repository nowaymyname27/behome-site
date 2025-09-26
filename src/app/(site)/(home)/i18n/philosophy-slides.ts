// File: src/app/(site)/(home)/i18n/philosophy-slides.ts
import type { Locale } from "@/i18n/locale-context";
import type { StaticImageData } from "next/image";

// Import images (non-public) – Next will bundle/optimize these
import slide1 from "../images/philosophy/slide-1.jpg";
import slide2 from "../images/philosophy/slide-2.jpg";
import slide3 from "../images/philosophy/slide-3.jpg";
import slide4 from "../images/philosophy/slide-4.jpg";

export type Slide = {
  src: StaticImageData | string; // works with next/image & your Panel
  title: string;
  caption: string;
  body: string;
};

// EN is source of truth for shape/length
const en = [
  {
    src: slide1,
    title: "Light-filled spaces",
    caption: "Light-filled spaces",
    body: "We orient rooms and windows to maximize natural light throughout the day, improving mood and reducing energy use.",
  },
  {
    src: slide2,
    title: "Durable materials",
    caption: "Durable materials",
    body: "Materials are selected for longevity and easy maintenance—finishes that age well and stand up to real life.",
  },
  {
    src: slide3,
    title: "Thoughtful layouts",
    caption: "Thoughtful layouts",
    body: "Floor plans are optimized for flow, storage, and everyday routines—space where it matters, not wasted square footage.",
  },
  {
    src: slide4,
    title: "Connected communities",
    caption: "Connected communities",
    body: "Neighborhoods planned for walkability, social connection, and easy access to daily essentials.",
  },
] as const;

// Keep ES aligned to EN (same length/order)
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };

type SlidesSchema = DeepString<typeof en>;

const es: SlidesSchema = [
  {
    src: slide1,
    title: "Espacios llenos de luz",
    caption: "Espacios llenos de luz",
    body: "Orientamos habitaciones y ventanas para maximizar la luz natural durante el día, mejorando el ánimo y reduciendo el consumo de energía.",
  },
  {
    src: slide2,
    title: "Materiales duraderos",
    caption: "Materiales duraderos",
    body: "Seleccionamos materiales por su longevidad y fácil mantenimiento—acabados que envejecen bien y soportan la vida real.",
  },
  {
    src: slide3,
    title: "Distribuciones pensadas",
    caption: "Distribuciones pensadas",
    body: "Planos optimizados para el flujo, el almacenamiento y las rutinas diarias—espacio donde importa, sin metros desperdiciados.",
  },
  {
    src: slide4,
    title: "Comunidades conectadas",
    caption: "Comunidades conectadas",
    body: "Barrios planificados para la caminabilidad, la conexión social y el acceso fácil a lo esencial de cada día.",
  },
];

export const dict = { en: en as SlidesSchema, es } as const;
export type HomePhilosophySlidesI18n = typeof dict.en;

export const tHomePhilosophySlides = (locale: Locale) => dict[locale];

export function getHomePhilosophySlides(locale: Locale): Slide[] {
  return dict[locale] as unknown as Slide[];
}
