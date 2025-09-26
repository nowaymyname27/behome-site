// File: src/app/(site)/florida/i18n/brochure-slides.ts
import type { StaticImageData } from "next/image";

// Import local images (non-public)
import plane from "../images/brochure/plane.jpg";
import industry from "../images/brochure/industry.jpg";
import biomedicine from "../images/brochure/biomedicine.jpg";
import tech from "../images/brochure/tech.jpg";

export type BrochureSlide = {
  src: StaticImageData | string; // supports both imports and URLs
  title: string;
  caption: string;
  body: string;
};

export const slides: Record<"en" | "es", BrochureSlide[]> = {
  en: [
    {
      src: plane,
      title: "Aerospace & Aviation",
      caption: "Aerospace & Aviation",
      body: "North Carolina’s aerospace corridor supports manufacturing, MRO, avionics, and R&D with a skilled workforce and competitive costs.",
    },
    {
      src: industry,
      title: "Automotive Industry",
      caption: "Automotive Industry",
      body: "From EV supply chains to precision parts, the state’s automotive sector blends innovation, logistics, and advanced manufacturing.",
    },
    {
      src: biomedicine,
      title: "Biomedical & Life Sciences",
      caption: "Biomedical & Life Sciences",
      body: "Anchored by world-class universities and the Research Triangle, NC drives breakthroughs in biotech, pharma, and medical devices.",
    },
    {
      src: tech,
      title: "Tech & Entrepreneurship",
      caption: "Tech & Entrepreneurship",
      body: "A vibrant startup scene and enterprise tech hub powered by talent, accelerators, and supportive public–private partnerships.",
    },
  ],
  es: [
    {
      src: plane,
      title: "Aeroespacial y Aviación",
      caption: "Aeroespacial y Aviación",
      body: "El corredor aeroespacial de Carolina del Norte impulsa fabricación, MRO, aviónica e I+D con talento calificado y costos competitivos.",
    },
    {
      src: industry,
      title: "Industria Automotriz",
      caption: "Industria Automotriz",
      body: "De cadenas de suministro de vehículos eléctricos a piezas de precisión, el sector integra innovación, logística y manufactura avanzada.",
    },
    {
      src: biomedicine,
      title: "Biomedicina y Ciencias de la Vida",
      caption: "Biomedicina y Ciencias de la Vida",
      body: "Con universidades de primer nivel y el Research Triangle, NC lidera avances en biotecnología, farma y dispositivos médicos.",
    },
    {
      src: tech,
      title: "Tecnología y Emprendimiento",
      caption: "Tecnología y Emprendimiento",
      body: "Un ecosistema dinámico de startups y tecnología empresarial, impulsado por talento, aceleradoras y alianzas público-privadas.",
    },
  ],
};
