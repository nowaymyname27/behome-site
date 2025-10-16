// File: src/app/(site)/(home)/i18n/display.ts
import type { HomeDisplayStrings } from "./types";

const en: HomeDisplayStrings = {
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
};

const es: HomeDisplayStrings = {
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
};

export const homeDisplayCopy = { en, es } as const;
