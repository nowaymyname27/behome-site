// src/components/site-wide/map/types.ts
"use client";

/**
 * Shared map types and (optionally) theme registry.
 * If you want multiple themes, add them here and `Config['theme']`
 * will stay in sync automatically.
 */

export const MAP_THEMES = {
  light: {
    // TIP: move the key to an env var if needed (client-safe public key)
    style:
      "https://api.maptiler.com/maps/streets-v2/style.json?key=va9upoBmmfcircn54Aqf",
  },
} as const;

export type ThemeKey = keyof typeof MAP_THEMES;

/** Marker variants your design system supports */
export type Variant = "primary" | "info" | "success" | "warning" | "danger";

export type Point = {
  id: string;
  coords: [lng: number, lat: number];
  name?: string;
  blurb?: string;
  href?: string;
  image?: string;
  /** Initial color/style */
  variant?: Variant;
  /** Optional tags to drive filtering */
  tags?: string[];
  /** Room for app-specific fields */
  [key: string]: unknown;
};

export type Config = {
  theme: ThemeKey; // e.g., "light"
  center: [number, number];
  zoom: number;
  points: Point[];
};
