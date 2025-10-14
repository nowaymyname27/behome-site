// File: src/app/(site)/(home)/i18n/philosophy-slides.ts
import type { Locale } from "./index";

type SlideId = "quality" | "community" | "locations";

type BaseSlide = {
  id: SlideId;
  src: string; // keep paths stable; labels translate separately
};

// 1) Define once (only src & id)
const BASE_SLIDES: BaseSlide[] = [
  { id: "quality", src: "/images/philosophy/quality.jpg" },
  { id: "community", src: "/images/philosophy/community.jpg" },
  { id: "locations", src: "/images/philosophy/locations.jpg" },
];

// 2) Labels per locale (title, caption, optional body)
const LABELS = {
  en: {
    quality: {
      title: "Quality you can feel",
      caption: "Thoughtful finishes, durable materials",
      body: "From floorplans to fixtures, every detail is selected to make daily living effortless.",
    },
    community: {
      title: "Community-first living",
      caption: "Spaces that bring people together",
      body: "Parks, paths, and shared amenities encourage connection without sacrificing privacy.",
    },
    locations: {
      title: "Locations that work",
      caption: "Close to what matters",
      body: "Schools, services, and commute routes—chosen to save time and reduce stress.",
    },
  },
  es: {
    quality: {
      title: "Calidad que se siente",
      caption: "Acabados cuidados, materiales duraderos",
      body: "Desde planos hasta grifería, cada detalle facilita la vida diaria.",
    },
    community: {
      title: "Vida centrada en la comunidad",
      caption: "Espacios que unen a las personas",
      body: "Parques, senderos y amenidades compartidas fomentan la conexión sin perder privacidad.",
    },
    locations: {
      title: "Ubicaciones que funcionan",
      caption: "Cerca de lo importante",
      body: "Escuelas, servicios y rutas—elegidas para ahorrar tiempo y reducir el estrés.",
    },
  },
} as const;

// 3) Builder
export function getHomePhilosophySlides(locale: Locale) {
  const dict = locale === "es" ? LABELS.es : LABELS.en;
  return BASE_SLIDES.map(({ id, src }) => ({
    src,
    title: dict[id].title,
    caption: dict[id].caption,
    body: dict[id].body,
  }));
}
