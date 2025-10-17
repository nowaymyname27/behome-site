// src/components/site-wide/map/popup.ts
"use client";

import type { Point } from "./types";

/**
 * Tiny HTML builder for popups.
 * Keep it string-based for MapLibre's .setHTML, but you can
 * evolve this to a templating util or i18n-aware function later.
 */
export function buildPopupHtml(p: Point): string | null {
  // Debug: log each point passed to the popup builder
  console.log("popup point:", p);

  const hasContent = p.name || p.blurb || p.href || p.image;
  if (!hasContent) return null;

  const name = p.name
    ? `<h3 class="font-semibold text-foreground">${escapeHtml(p.name)}</h3>`
    : "";

  const blurb = p.blurb
    ? `<p class="mt-1 text-sm text-muted-foreground">${escapeHtml(p.blurb)}</p>`
    : "";

  const image = p.image
    ? `<div class="mt-2 overflow-hidden rounded-lg border border-border">
         <img src="${encodeURI(p.image)}" alt="${escapeHtml(
           p.name ?? "Location"
         )}" class="block w-full h-auto" />
       </div>`
    : "";

  const cta = p.href
    ? `<a href="${encodeURI(
        p.href
      )}" class="btn btn-FL mt-3 inline-block">View</a>`
    : "";

  return `
    <div class="min-w-[220px] max-w-[280px]">
      ${name}
      ${blurb}
      ${image}
      ${cta}
    </div>
  `;
}

/** Minimal HTML escaper for text nodes */
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
