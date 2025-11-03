// Florida/i18n/brochure.ts
export const brochure = {
  en: {
    left: {
      title: "Sarasota at a Glance",
      leadEm: "Sunlit beaches, arts & dining,",
      leadRest: " and connected neighborhoods—see why Sarasota stands out.",
      tip: "Tip: tap a card to read more.",
    },
    aria: { panels: "Sarasota highlights", previous: "Previous", next: "Next" },
    slides: [
      {
        src: "/images/florida/sarasota/beach.jpg",
        title: "Beaches & Outdoors",
        caption:
          "Siesta Key’s powder-soft sand, bayfront trails, and Gulf sunsets.",
        body: "Miles of coastline, boat launches, and nature preserves make Sarasota an everyday escape.",
      },
      {
        src: "/images/florida/sarasota/neighborhoods.jpg",
        title: "Connected Neighborhoods",
        caption:
          "Walkable streets, pocket parks, and daily essentials within reach.",
        body: "From downtown to Palmer Ranch, neighborhoods balance calm streets with quick access.",
      },
      {
        src: "/images/florida/sarasota/culture.jpg",
        title: "Arts, Culture & Dining",
        caption: "The Ringling, Sarasota Opera, galleries—and coastal dining.",
        body: "A year-round calendar of performances, festivals, and local restaurants fuels a vibrant scene.",
      },
      {
        src: "/images/florida/sarasota/education.jpg",
        title: "Education & Work",
        caption:
          "Strong schools, healthcare and tech growth, easy regional access.",
        body: "Proximity to I-75 and Tampa Bay expands options for careers, colleges, and commutes.",
      },
      {
        src: "/images/florida/sarasota/homes.jpg",
        title: "Homes & Communities",
        caption:
          "Build-to-rent, single-family, and cluster communities—thoughtfully planned.",
        body: "Flexible floor plans, durable finishes, and shared green spaces designed for real life.",
      },
    ],
  },
  es: {
    left: {
      title: "Sarasota de un vistazo",
      leadEm: "Playas bañadas por el sol, arte y gastronomía,",
      leadRest: " barrios conectados — descubre por qué destaca Sarasota.",
      tip: "Consejo: toca una tarjeta para leer más.",
    },
    aria: {
      panels: "Aspectos destacados de Sarasota",
      previous: "Anterior",
      next: "Siguiente",
    },
    slides: [
      {
        src: "/images/florida/sarasota/beach.jpg",
        title: "Playas y Naturaleza",
        caption:
          "Arena suave de Siesta Key, senderos junto a la bahía y atardeceres.",
        body: "Kilómetros de costa, rampas para botes y reservas naturales para disfrutar cada día.",
      },
      {
        src: "/images/florida/sarasota/neighborhoods.jpg",
        title: "Barrios Conectados",
        caption:
          "Calles caminables, parques de bolsillo y servicios cotidianos cerca.",
        body: "Del centro a Palmer Ranch, los barrios combinan calma con acceso rápido.",
      },
      {
        src: "/images/florida/sarasota/culture.jpg",
        title: "Arte, Cultura y Gastronomía",
        caption: "The Ringling, Ópera de Sarasota, galerías y cocina costera.",
        body: "Una agenda activa de espectáculos, festivales y restaurantes locales.",
      },
      {
        src: "/images/florida/sarasota/education.jpg",
        title: "Educación y Trabajo",
        caption:
          "Buenas escuelas, crecimiento en salud y tecnología, acceso regional.",
        body: "La cercanía a la I-75 y Tampa Bay amplía opciones de estudio y empleo.",
      },
      {
        src: "/images/florida/sarasota/homes.jpg",
        title: "Viviendas y Comunidades",
        caption:
          "Build-to-rent, casas unifamiliares y clústeres bien planificados.",
        body: "Planos flexibles, acabados duraderos y áreas verdes compartidas.",
      },
    ],
  },
} as const;
