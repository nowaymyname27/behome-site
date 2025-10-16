// File: src/app/(site)/(home)/i18n/philosophy.ts
import type { Locale, HomePhilosophySlide } from "./types";

type SlideId =
  | "experience"
  | "returns"
  | "transparency"
  | "security"
  | "liquidity"
  | "timeline";

type BaseSlide = {
  id: SlideId;
  src: string;
};

// ------------------------------
// Slides (images + per-card copy)
// ------------------------------
const BASE_SLIDES: BaseSlide[] = [
  { id: "experience", src: "/images/philosophy/experience.jpg" },
  { id: "returns", src: "/images/philosophy/returns.jpg" },
  { id: "transparency", src: "/images/philosophy/transparency.jpg" },
  { id: "security", src: "/images/philosophy/security.jpg" },
  { id: "liquidity", src: "/images/philosophy/liquidity.jpg" },
  { id: "timeline", src: "/images/philosophy/timeline.jpg" },
];

const LABELS = {
  es: {
    experience: {
      title: "Trayectoria y Experiencia",
      caption: "Más de 25 años en desarrollo inmobiliario",
      body: "Contamos con una sólida trayectoria en proyectos residenciales, comerciales y de capital. En la Costa Oeste de Florida hemos entregado más de 60 viviendas solo en el último año. Construimos viviendas unifamiliares, casas built-to-rent y dúplex, con capacidad de entrega de hasta 120 casas anuales.",
    },
    returns: {
      title: "Altos Retornos y Potencial de Inversión",
      caption: "Ingresos pasivos, modelo probado",
      body: "Nuestro modelo está diseñado para ofrecer retornos constantes y atractivos. Desde $250,000 puedes iniciar tu inversión. Cada casa genera ingresos desde el mes 16 y puede venderse luego de 36 meses con un retorno anual estimado de hasta 22%. Administramos todo el proceso: construcción, permisos, renta y refinanciación.",
    },
    transparency: {
      title: "Transparencia y Seguimiento en Tiempo Real",
      caption: "Seguimiento digital total de tu inversión",
      body: "Utilizamos una plataforma de construcción que documenta cada etapa de tu casa: cronograma, fotografías diarias, costos, pagos, contratos y avances financieros. Así puedes monitorear tu inversión de forma clara y segura, desde cualquier lugar del mundo.",
    },
    security: {
      title: "Seguridad y Control",
      caption: "Propiedad a tu nombre desde el inicio",
      body: "Cada casa está respaldada por un activo real. Firmas el contrato, compras el terreno a través de una casa de títulos y eres el dueño desde el primer día. El capital se desembolsa por etapas, con total control sobre tu inversión y sin intermediarios innecesarios.",
    },
    liquidity: {
      title: "Liquidez Inteligente",
      caption: "Flexibilidad para vender cuando lo necesites",
      body: "Puedes vender tu propiedad al finalizar la construcción, después de 2 años de renta, o en el momento que el mercado esté a tu favor. Tú eliges. Además, te ayudamos a refinanciar tu capital inicial, generando ingresos sin necesidad de vender.",
    },
    timeline: {
      title: "Tiempo de Obra y Acompañamiento Total",
      caption: "15 meses para construir y rentar, 36 para vender",
      body: "Desde la firma te acompañamos: creamos tu corporación, buscamos el terreno, gestionamos permisos, préstamos y construcción. En 15 meses tienes una casa terminada y rentada. A los 3 meses de renta se inicia la refinanciación y comienzas a recibir ingresos pasivos por 2 años.",
    },
  },
  en: {
    experience: {
      title: "Track Record and Experience",
      caption: "Over 25 years in real estate development",
      body: "We have a solid background in residential, commercial, and capital projects. On Florida’s West Coast alone, we’ve delivered over 60 homes in the past year. We build single-family homes, build-to-rent units, and duplexes, with a delivery capacity of up to 120 homes annually.",
    },
    returns: {
      title: "High Returns and Investment Potential",
      caption: "Passive income, proven model",
      body: "Our model is designed to deliver consistent, attractive returns. You can start investing from $250,000. Each home generates income from month 16 and can be sold after 36 months, with an estimated annual return of up to 22%. We manage the entire process—construction, permits, leasing, and refinancing.",
    },
    transparency: {
      title: "Transparency and Real-Time Tracking",
      caption: "Full digital tracking of your investment",
      body: "We use a construction platform that documents every stage of your home: schedule, daily photos, costs, payments, contracts, and financial updates. You can monitor your investment clearly and securely from anywhere in the world.",
    },
    security: {
      title: "Security and Control",
      caption: "Property in your name from day one",
      body: "Each home is backed by a tangible asset. You sign the contract, purchase the lot through a title company, and own it from day one. Funds are disbursed in stages, giving you full control over your investment with no unnecessary intermediaries.",
    },
    liquidity: {
      title: "Smart Liquidity",
      caption: "Flexibility to sell when you need to",
      body: "You can sell your property after construction, after two years of rental income, or whenever market conditions are favorable. You decide. We also assist you in refinancing your initial capital, generating income without selling.",
    },
    timeline: {
      title: "Construction Timeline and Full Support",
      caption: "15 months to build and rent, 36 to sell",
      body: "From day one, we guide you through the process: forming your corporation, finding the land, handling permits, financing, and construction. In 15 months, your home is built and rented. After three months of rental income, refinancing begins and you start earning passive income for two years.",
    },
  },
} as const;

export function getHomePhilosophySlides(
  locale: Locale
): ReadonlyArray<HomePhilosophySlide> {
  const dict = locale === "es" ? LABELS.es : LABELS.en;
  return BASE_SLIDES.map(({ id, src }) => ({
    src,
    title: dict[id].title,
    caption: dict[id].caption,
    body: dict[id].body,
  }));
}

// ------------------------------
// Section header / aria strings
// ------------------------------
const PHILOSOPHY = {
  en: {
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
  es: {
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
} as const;

export function tHomePhilosophy(locale: Locale) {
  return locale === "es" ? PHILOSOPHY.es : PHILOSOPHY.en;
}
