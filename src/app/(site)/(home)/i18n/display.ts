// File: src/app/(site)/(home)/i18n/display.ts
import type { HomeDisplayStrings } from "./types";

const en: HomeDisplayStrings = {
  heading: "The Smarter Way to Invest in Real Estate",
  description: [
    "At our core, we believe residential real estate should perform like a business — delivering steady income, low risk, and long-term value.",
    "Our Build-to-Rent model allows investors to own brand-new homes purpose-built for rental performance. Whether you choose to purchase an already leased property or hire us to develop a new one for you, each home is designed from the ground up to maximize yield, durability, and tenant demand.",
    "Here’s why this asset class is redefining how investors grow wealth through real estate:",
  ],
  points: [
    {
      title: "Location, Location, Location",
      body: "Invest where returns are strongest — we build in high-growth markets with proven rental performance.",
    },
    {
      title: "Size Doesn’t Matter",
      body: "Start small, think big. Build your portfolio one home at a time and scale at your own pace.",
    },
    {
      title: "Yield Over Appreciation",
      body: "Earn money today. Each property is designed to generate strong rental income while still offering long-term upside.",
    },
    {
      title: "Low Carrying Costs",
      body: "No HOA fees and easy to rent — a simple, efficient model for sustainable performance.",
    },
    {
      title: "Liquidity",
      body: "Need access to cash? Sell one home without disrupting your entire portfolio.",
    },
    {
      title: "Direct Control",
      body: "No intermediaries, no funds — you own the property directly and control your investment.",
    },
  ],
  aria: {
    previous: "Previous image",
    next: "Next image",
    goToSlide: (n: number) => `Go to slide ${n}`,
  },
  media: {
    videoAria: "Video showcasing our Build-to-Rent investment model",
  },
};

const es: HomeDisplayStrings = {
  heading: "La forma más inteligente de invertir en bienes raíces",
  description: [
    "En esencia, creemos que el sector residencial debe funcionar como un negocio: generar ingresos estables, bajo riesgo y valor a largo plazo.",
    "Nuestro modelo Build-to-Rent permite a los inversionistas ser dueños de casas nuevas diseñadas específicamente para el rendimiento en renta. Ya sea que elija adquirir una propiedad arrendada o contratar el desarrollo de una nueva, cada casa está construida para maximizar rentabilidad, durabilidad y demanda.",
    "Así es como esta clase de activo está redefiniendo la forma en que los inversionistas generan riqueza a través de bienes raíces:",
  ],
  points: [
    {
      title: "Ubicación, Ubicación, Ubicación",
      body: "Invierta donde los rendimientos son más fuertes: construimos en mercados de alto crecimiento con desempeño comprobado en renta.",
    },
    {
      title: "El tamaño no importa",
      body: "Empiece pequeño, piense en grande. Construya su portafolio una casa a la vez y escale a su propio ritmo.",
    },
    {
      title: "Rendimiento sobre apreciación",
      body: "Gane dinero hoy. Cada propiedad está diseñada para generar ingresos sólidos por renta y aún ofrecer apreciación a largo plazo.",
    },
    {
      title: "Bajos costos de mantenimiento",
      body: "Sin cuotas HOA y fácil de rentar: un modelo simple y eficiente para un desempeño sostenible.",
    },
    {
      title: "Liquidez",
      body: "¿Necesita efectivo? Venda una casa sin afectar todo su portafolio.",
    },
    {
      title: "Control directo",
      body: "Sin intermediarios ni fondos: usted es dueño directo de la propiedad y controla su inversión.",
    },
  ],
  aria: {
    previous: "Imagen anterior",
    next: "Siguiente imagen",
    goToSlide: (n: number) => `Ir a la diapositiva ${n}`,
  },
  media: {
    videoAria: "Video que muestra nuestro modelo de inversión Build-to-Rent",
  },
};

export const homeDisplayCopy = { en, es } as const;
