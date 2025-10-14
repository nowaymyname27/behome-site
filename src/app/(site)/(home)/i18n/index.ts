// File: src/app/(site)/(home)/i18n/index.ts
export type Locale = "en" | "es";

type HomeStrings = {
  hero: { title: string; videoAria: string };
  phrase: { text: string; attribution: string };
  philosophy: {
    left: { title: string; leadEm: string; leadRest: string };
    tip: string;
    aria: { panels: string; previous: string; next: string };
  };
  featureCards: { showHeader: boolean; title: string; blurb: string };
  display: {
    heading: string;
    points: { title: string; body: string }[];
    aria: {
      previous: string;
      next: string;
      goToSlide: (n: number) => string;
    };
    media: { videoAria: string };
  };
};

const en: HomeStrings = {
  hero: {
    title: "Find your next home",
    videoAria: "Background video of homes and neighborhoods",
  },
  phrase: {
    text: "Where comfort meets community.",
    attribution: "— BeHome Living",
  },
  philosophy: {
    left: {
      title: "Our philosophy",
      leadEm: "Built for living,",
      leadRest: "designed for life.",
    },
    tip: "Tip: tap a card to read more.",
    aria: {
      panels: "Philosophy panels",
      previous: "Previous card",
      next: "Next card",
    },
  },
  featureCards: {
    showHeader: true,
    title: "Built for How You Live",
    blurb:
      "From flexible floor plans to energy-smart features, explore what makes our homes stand out.",
  },
  display: {
    heading: "Looks that make life easier",
    points: [
      {
        title: "Beautiful designs",
        body: "Curated styles where every color, material and detail is coordinated for you.",
      },
      {
        title: "Simple choices",
        body: "A few decisions to express your taste—applied consistently throughout the home.",
      },
      {
        title: "Honest pricing",
        body: "Clear, transparent pricing—no hidden costs or fees along the way.",
      },
    ],
    aria: {
      previous: "Previous image",
      next: "Next image",
      goToSlide: (n) => `Go to slide ${n}`,
    },
    media: {
      videoAria: "Lifestyle video showcasing finishes and materials",
    },
  },
};

const es: HomeStrings = {
  hero: {
    title: "Encuentra tu próximo hogar",
    videoAria: "Video de fondo de hogares y vecindarios",
  },
  phrase: {
    text: "Donde la comodidad se une con la comunidad.",
    attribution: "— BeHome Living",
  },
  philosophy: {
    left: {
      title: "Nuestra filosofía",
      leadEm: "Hecho para vivir,",
      leadRest: "diseñado para la vida.",
    },
    tip: "Consejo: toca una tarjeta para leer más.",
    aria: {
      panels: "Paneles de filosofía",
      previous: "Tarjeta anterior",
      next: "Siguiente tarjeta",
    },
  },
  featureCards: {
    showHeader: true,
    title: "Diseñadas para tu forma de vivir",
    blurb:
      "Desde planos flexibles hasta eficiencia energética, explora lo que distingue a nuestros hogares.",
  },
  display: {
    heading: "Estilos que facilitan la vida",
    points: [
      {
        title: "Diseños hermosos",
        body: "Estilos curados donde cada color, material y detalle está coordinado para ti.",
      },
      {
        title: "Decisiones sencillas",
        body: "Pocas elecciones para expresar tu gusto—aplicadas de forma consistente en todo el hogar.",
      },
      {
        title: "Precios honestos",
        body: "Precios claros y transparentes—sin costos ocultos ni cargos inesperados.",
      },
    ],
    aria: {
      previous: "Imagen anterior",
      next: "Siguiente imagen",
      goToSlide: (n) => `Ir a la diapositiva ${n}`,
    },
    media: {
      videoAria: "Video de estilo de vida que muestra acabados y materiales",
    },
  },
};

export function tHome(locale: Locale): HomeStrings {
  return locale === "es" ? es : en;
}
