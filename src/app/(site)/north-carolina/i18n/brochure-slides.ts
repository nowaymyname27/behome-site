// File: src/app/(site)/north-carolina/i18n/brochure-slides.ts
export type BrochureSlide = {
  src: string;
  title: string;
  caption: string;
  body: string;
};

export const slides: Record<"en" | "es", BrochureSlide[]> = {
  en: [
    {
      src: "/north-carolina/brochure/plane.jpg",
      title: "Aerospace & Aviation",
      caption: "Aerospace & Aviation",
      body: "North Carolina’s aerospace corridor supports manufacturing, MRO, avionics, and R&D with a skilled workforce and competitive costs.",
    },
    {
      src: "/north-carolina/brochure/industry.jpg",
      title: "Automotive Industry",
      caption: "Automotive Industry",
      body: "From EV supply chains to precision parts, the state’s automotive sector blends innovation, logistics, and advanced manufacturing.",
    },
    {
      src: "/north-carolina/brochure/biomedicine.jpg",
      title: "Biomedical & Life Sciences",
      caption: "Biomedical & Life Sciences",
      body: "Anchored by world-class universities and the Research Triangle, NC drives breakthroughs in biotech, pharma, and medical devices.",
    },
    {
      src: "/north-carolina/brochure/tech.jpg",
      title: "Tech & Entrepreneurship",
      caption: "Tech & Entrepreneurship",
      body: "A vibrant startup scene and enterprise tech hub powered by talent, accelerators, and supportive public–private partnerships.",
    },
  ],
  es: [
    {
      src: "/north-carolina/brochure/plane.jpg",
      title: "Aeroespacial y Aviación",
      caption: "Aeroespacial y Aviación",
      body: "El corredor aeroespacial de Carolina del Norte impulsa fabricación, MRO, aviónica e I+D con talento calificado y costos competitivos.",
    },
    {
      src: "/north-carolina/brochure/industry.jpg",
      title: "Industria Automotriz",
      caption: "Industria Automotriz",
      body: "De cadenas de suministro de vehículos eléctricos a piezas de precisión, el sector integra innovación, logística y manufactura avanzada.",
    },
    {
      src: "/north-carolina/brochure/biomedicine.jpg",
      title: "Biomedicina y Ciencias de la Vida",
      caption: "Biomedicina y Ciencias de la Vida",
      body: "Con universidades de primer nivel y el Research Triangle, NC lidera avances en biotecnología, farma y dispositivos médicos.",
    },
    {
      src: "/north-carolina/brochure/tech.jpg",
      title: "Tecnología y Emprendimiento",
      caption: "Tecnología y Emprendimiento",
      body: "Un ecosistema dinámico de startups y tecnología empresarial, impulsado por talento, aceleradoras y alianzas público-privadas.",
    },
  ],
};
