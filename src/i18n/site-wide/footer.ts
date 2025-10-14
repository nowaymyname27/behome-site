// File: /i18n/site-wide/footer.ts
import type { Locale } from "../locale-context";

// EN is the source of truth for keys/shape
const en = {
  brand: "Your Company",
  tagline: "Building homes people love.",
  contact: {
    title: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    phone: "(555) 555-5555",
    email: "info@yourcompany.com",
    address: "123 Main St, Jacksonville, FL",
  },
  legal: {
    title: "Legal",
    disclaimer:
      "ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING THE REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE TO THIS BROCHURE AND TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE. These materials are not intended to be an offer to sell, or solicitation to buy a home. Such an offering shall only be made pursuant to the prospectus (offering circular) for the home and no statements should be relied upon unless made in the prospectus or in the applicable purchase agreement. In no event shall any solicitation, offer or sale of a home be made in, or to residents of, any state or country in which such activity would be unlawful.Room dimensions may vary. Prices, availability, and specifications may change without notice. Some photography may be used for illustrative purposes and contain structural options or designer features that are not included as standard. Certain materials may be discontinued or substituted.",
    rights: "All rights reserved.",
    more: "Read more",
    less: "Show less",
  },
} as const;

// Widen leaves to string but keep structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type FooterSchema = DeepString<typeof en>;

const es: FooterSchema = {
  brand: "Tu Empresa",
  tagline: "Construyendo hogares que la gente ama.",
  contact: {
    title: "Contacto",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    addressLabel: "Dirección",
    phone: "(555) 555-5555",
    email: "info@yourcompany.com",
    address: "123 Main St, Jacksonville, FL",
  },
  legal: {
    title: "Legal",
    disclaimer:
      "Toda la información está sujeta a cambios. Igualdad de Oportunidades de Vivienda. Este sitio web y la información aquí contenida se proporcionan sin garantías de ningún tipo.",
    rights: "Todos los derechos reservados.",
    more: "Ver más",
    less: "Ver menos",
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as FooterSchema, es } as const;
export type FooterI18n = typeof dict.en;

// Optional helper for direct access
export const tFooter = (locale: Locale) => dict[locale];
