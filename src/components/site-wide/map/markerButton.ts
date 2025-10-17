// src/components/site-wide/map/markerButton.ts
"use client";

import type { Variant, Point } from "./types";

/**
 * Centralized Tailwind classes for each marker variant.
 * Keep all visual changes here.
 */
export const MARKER_VARIANTS: Record<Variant, string> = {
  primary: "bg-chrome ring-chrome/40",
  info: "bg-NC ring-NC/40",
  success: "bg-emerald-600 ring-emerald-400/40",
  warning: "bg-amber-500 ring-amber-300/40",
  danger: "bg-red-600 ring-red-400/40",
} as const;

export type CreateMarkerButtonOptions = {
  ariaLabel?: string;
  extraClass?: string; // optional extra Tailwind classes
  /** Allow per-point styling logic if desired */
  point?: Point;
};

/** Build the actual DOM button used as a marker */
export function createMarkerButton(
  variant: Variant = "primary",
  opts: CreateMarkerButtonOptions = {}
): HTMLButtonElement {
  const el = document.createElement("button");
  const base = [
    "group grid place-items-center",
    "h-9 w-9 rounded-full shadow-lg ring-4 border border-border text-white",
    "transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-1",
  ];
  const variantClass = MARKER_VARIANTS[variant];
  el.className = [base.join(" "), variantClass, opts.extraClass ?? ""]
    .join(" ")
    .trim();

  // Inner dot
  const dot = document.createElement("span");
  dot.className = "block h-2.5 w-2.5 rounded-full bg-white/90";
  el.appendChild(dot);

  // Accessibility nicety
  el.setAttribute("aria-label", opts.ariaLabel ?? "Location marker");
  el.tabIndex = 0;

  return el;
}

/**
 * Swap variant classes on an existing marker element.
 * Safe to call repeatedly; it removes the previous variant class (if any)
 * and adds the new one (if provided).
 */
export function swapVariant(
  el: HTMLButtonElement,
  next: Variant | undefined,
  prev?: Variant | undefined
) {
  const split = (s?: string) =>
    s ? s.trim().split(/\s+/).filter(Boolean) : [];

  if (prev && MARKER_VARIANTS[prev]) {
    el.classList.remove(...split(MARKER_VARIANTS[prev]));
  }
  if (next && MARKER_VARIANTS[next]) {
    el.classList.add(...split(MARKER_VARIANTS[next]));
  }
}
