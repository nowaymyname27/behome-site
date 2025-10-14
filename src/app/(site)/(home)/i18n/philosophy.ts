// File: src/app/(site)/(home)/i18n/philosophy.ts
import type { Locale } from "../../../../i18n/locale-context";

// EN is the source of truth for keys/shape
const en = {
  left: {
    title: "Our philosophy",
    leadEm: "Built for real life.",
    leadRest:
      "Spaces, materials, and layouts that make daily routines easier and more joyful.",
  },
  aria: {
    panels: "Philosophy panels",
    previous: "Previous",
    next: "Next",
    close: "Close",
    closeDialogTitle: "Close dialog",
  },
} as const;

// Widen leaves to string while preserving structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type HomePhilosophySchema = DeepString<typeof en>;

const es: HomePhilosophySchema = {
  left: {
    title: "Nuestra filosofía",
    leadEm: "Hechas para la vida real.",
    leadRest:
      "Espacios, materiales y distribuciones que facilitan las rutinas diarias y las hacen más agradables.",
  },
  aria: {
    panels: "Paneles de filosofía",
    previous: "Anterior",
    next: "Siguiente",
    close: "Cerrar",
    closeDialogTitle: "Cerrar diálogo",
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as HomePhilosophySchema, es } as const;
export type HomePhilosophyI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tHomePhilosophy = (locale: Locale) => dict[locale];
