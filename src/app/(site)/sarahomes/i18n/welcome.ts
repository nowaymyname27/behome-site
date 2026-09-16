import type { Locale } from "./types";

const en = {
  heading: "Welcome to SaraHomes Residences",
  accentPhrases: ["long-term investment potential", "both investors and future homeowners"],
  paragraphs: [
    "Because Built-to-Rent properties require thoughtful design, every detail matters - from abundant natural light and a modern kitchen to quality finishes, hard-surface flooring and impact-resistant windows - all supporting renter appeal, durability and long-term investment potential.",
    "And when the time comes to sell, a documented rental history, standout design, generous layout and location in a growing community can broaden its appeal to both investors and future homeowners.",
  ],
};

const es = {
  heading: "Bienvenido a las Residencias SaraHomes",
  accentPhrases: ["potencial de inversión a largo plazo", "tanto para los inversores como para los futuros propietarios"],
  paragraphs: [
    "Las propiedades construidas para alquilar requieren un diseño cuidadoso, por eso cada detalle importa: desde la abundante luz natural y una cocina moderna hasta los acabados de calidad, los pisos de superficie dura y las ventanas resistentes a impactos. Todo contribuye al atractivo para los inquilinos, la durabilidad y el potencial de inversión a largo plazo.",
    "Y cuando llega el momento de vender, un historial de alquiler documentado, un diseño distintivo, una distribución amplia y una ubicación en una comunidad en crecimiento pueden aumentar su atractivo tanto para los inversores como para los futuros propietarios.",
  ],
};

export function tSaraHomesWelcome(locale: Locale) {
  return locale === "es" ? es : en;
}
