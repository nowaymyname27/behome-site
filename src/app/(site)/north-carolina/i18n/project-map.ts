// File: src/app/(site)/north-carolina/i18n/project-map.ts
import type { Locale } from "@/i18n/locale-context";

// EN = source of truth
const en = {
  projectMap: {
    address: {
      street: "Kallamdale Rd",
      city: "Greensboro, NC 27406",
      country: "United States",
      full: "Kallamdale Rd, Greensboro, NC 27406, United States",
    },
    coordinates: {
      lat: "36.00169° N",
      lng: "79.80541° W",
    },
    overlay: {
      hint: "Click to interact with map",
    },
  },
} as const;

// Widen leaves to string, keep structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type NcProjectMapSchema = DeepString<typeof en>;

const es: NcProjectMapSchema = {
  projectMap: {
    address: {
      street: "Kallamdale Rd",
      city: "Greensboro, NC 27406",
      country: "Estados Unidos",
      full: "Kallamdale Rd, Greensboro, NC 27406, Estados Unidos",
    },
    coordinates: {
      lat: "36.00169° N",
      lng: "79.80541° O", // "O" for Oeste in Spanish
    },
    overlay: {
      hint: "Haz clic para interactuar con el mapa",
    },
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as NcProjectMapSchema, es } as const;
export type NcProjectMapI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tNcProjectMap = (locale: Locale) => dict[locale];
