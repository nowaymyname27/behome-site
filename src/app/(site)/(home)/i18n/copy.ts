// File: src/app/(site)/(home)/i18n/copy.ts
import type { HomeStrings } from "./types";

const en = {
  hero: {
    title: "Multiply your wealth with peace of mind.",
    subtitle:
      "Build your portfolio of new, build-to-rent properties—just like the major investment funds do.",
    videoAria: "Background video of homes and neighborhoods",
  },
  phrase: {
    text: "The best investment is the one that works for you while you sleep. And if it’s built to rent, even better.",
    attribution: "— RentPortfolio",
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
    title: "How to Invest with Us",
    blurb: "Three models to build your rental portfolio.",
  },
  display: {
    heading: "Key Business Advantages",
    points: [
      {
        title: "No HOA or restrictions",
        body: "Properties without HOA fees or community rules limiting your freedom as an owner.",
      },
      {
        title: "Flexible liquidity",
        body: "You decide when to sell—adjust your strategy as the market evolves.",
      },
      {
        title: "Scheduled income",
        body: "Stable, predictable rental cash flow managed professionally.",
      },
      {
        title: "Tangible asset",
        body: "Your investment is backed by a real, physical property with lasting value.",
      },
      {
        title: "Entry from $250,000",
        body: "Start your real estate portfolio with an attainable investment and growth potential.",
      },
      {
        title: "Full control",
        body: "Monitor and optimize your investment directly, with no intermediaries.",
      },
    ],
    aria: {
      previous: "Previous image",
      next: "Next image",
      goToSlide: (n: number) => `Go to slide ${n}`,
    },
    media: {
      videoAria: "Video showcasing key business highlights",
    },
  },
} satisfies HomeStrings;

const es = {
  hero: {
    title: "Multiplique su riqueza con tranquilidad.",
    subtitle:
      "Cree su portafolio de propiedades nuevas, construidas para rentar, como lo hacen los grandes fondos de inversión.",
    videoAria: "Video de fondo de hogares y vecindarios",
  },
  phrase: {
    text: "La mejor inversión es la que trabaja por usted, mientras usted duerme. Y si está construida para rentar, mucho mejor.",
    attribution: "— RentPortfolio",
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
    title: "Cómo invertir con nosotros",
    blurb: "Tres modelos para construir tu portafolio de renta.",
  },
  display: {
    heading: "Claves del negocio",
    points: [
      {
        title: "Sin HOA ni restricciones",
        body: "Propiedades sin cuotas de HOA ni reglas de comunidad que limiten su libertad como propietario.",
      },
      {
        title: "Liquidez flexible",
        body: "Usted decide cuándo vender, con la libertad de ajustar su estrategia según el mercado.",
      },
      {
        title: "Ingreso programado",
        body: "Flujo de renta estable y predecible con contratos administrados profesionalmente.",
      },
      {
        title: "Activo tangible",
        body: "Su inversión está respaldada por una propiedad física que genera valor real.",
      },
      {
        title: "Acceso desde $250,000",
        body: "Inicie su portafolio inmobiliario con una inversión accesible y potencial de crecimiento.",
      },
      {
        title: "Control total",
        body: "Supervise, decida y optimice cada aspecto de su inversión sin intermediarios.",
      },
    ],
    aria: {
      previous: "Imagen anterior",
      next: "Siguiente imagen",
      goToSlide: (n: number) => `Ir a la diapositiva ${n}`,
    },
    media: {
      videoAria: "Video que muestra los principales beneficios del negocio",
    },
  },
} satisfies HomeStrings;

export const homeCopy = { en, es } as const;
