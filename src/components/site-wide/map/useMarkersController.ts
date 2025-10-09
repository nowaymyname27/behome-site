// src/components/site-wide/map/useMarkersController.ts
"use client";

import { useEffect, useMemo, useRef } from "react";
import maplibregl from "maplibre-gl";

/** Generic "variant" and point shape; tweak to your app types if desired */
import type { Variant, Point } from "./types";

export type MarkerMode<P extends Point = Point> = {
  /** If provided, only points passing this filter remain visible */
  filter?: (p: P) => boolean;
  /** If provided, compute the new variant (color) per point */
  variantFor?: (p: P) => Variant | undefined;
};

type RegistryEntry<P extends Point = Point> = {
  point: P;
  marker: maplibregl.Marker;
  el: HTMLButtonElement;
  /** Track current variant so we can avoid redundant class swaps */
  currentVariant: Variant | undefined;
};

export type UseMarkersControllerOptions<P extends Point = Point> = {
  map: maplibregl.Map | null;
  points: P[];

  /**
   * Create the HTML button element for a marker (your styled Tailwind button).
   * You can read from `p` if you want per-point styling. Set initial variant with `p.variant`.
   */
  createEl: (variant: Variant | undefined, p: P) => HTMLButtonElement;

  /**
   * Apply a new variant to an existing element. This lets you control how Tailwind
   * classes are swapped (e.g., remove old variant classes, add new).
   * If omitted, no recoloring occurs on mode changes.
   */
  applyVariant?: (
    el: HTMLButtonElement,
    nextVariant: Variant | undefined,
    ctx: { prevVariant: Variant | undefined; point: P }
  ) => void;

  /**
   * Optional popup HTML builder. Return `null`/`undefined` to skip a popup.
   */
  buildPopupHtml?: (p: P) => string | null | undefined;

  /**
   * Optional click behavior override. If omitted and `buildPopupHtml` exists,
   * the controller will show a Popup on click.
   */
  onClickMarker?: (ctx: {
    point: P;
    el: HTMLButtonElement;
    marker: maplibregl.Marker;
    map: maplibregl.Map;
  }) => void;
};

/**
 * Adds DOM markers for `points` and returns imperative helpers to:
 *  - applyMode({ filter, variantFor }) → hide/show + recolor without recreating markers
 *  - resetMode() → show all + restore original variants
 *
 * Markers are recreated when `points` array identity changes; the map itself is never rebuilt.
 */
export function useMarkersController<P extends Point = Point>(
  opts: UseMarkersControllerOptions<P>
) {
  const { map, points, createEl, applyVariant, buildPopupHtml, onClickMarker } =
    opts;

  const registryRef = useRef<Map<string, RegistryEntry<P>>>(new Map());
  const originalVariantsRef = useRef<Map<string, Variant | undefined>>(
    new Map()
  );

  // Stable helpers
  const showEl = (el: HTMLElement) => {
    el.style.display = "";
    el.style.visibility = "";
  };
  const hideEl = (el: HTMLElement) => {
    el.style.display = "none";
  };

  // Create / destroy markers when points change
  useEffect(() => {
    if (!map) return;

    // Cleanup any existing markers
    for (const { marker } of registryRef.current.values()) {
      marker.remove();
    }
    registryRef.current.clear();
    originalVariantsRef.current.clear();

    // Rebuild all markers
    for (const p of points) {
      const el = createEl(p.variant, p);

      // Accessibility nicety
      if (!el.getAttribute("aria-label")) {
        el.setAttribute(
          "aria-label",
          p.name ? `Marker: ${p.name}` : "Location marker"
        );
      }

      // Cursor hint for interactivity
      el.style.cursor = "pointer";

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(p.coords)
        .addTo(map);

      // Prepare optional popup (only built if builder returns HTML)
      let popup: maplibregl.Popup | null = null;
      if (buildPopupHtml) {
        const html = buildPopupHtml(p);
        if (html) {
          popup = new maplibregl.Popup({ offset: 16 }).setHTML(html);
        }
      }

      // Unified click pipeline:
      // 1) point.onClick? (React-side selection, etc.)
      // 2) onClickMarker? (custom override)
      // 3) fallback popup if present
      type ClickablePoint = P & { onClick?: () => void };
      const cp = p as ClickablePoint;

      el.addEventListener("click", () => {
        // 1) Notify React via optional point-level handler
        cp.onClick?.();

        // 2) Custom override
        if (onClickMarker) {
          onClickMarker({ point: p, el, marker, map });
          return;
        }

        // 3) Default popup behavior
        if (popup) {
          popup.addTo(map).setLngLat(p.coords);
        }
      });

      registryRef.current.set(p.id, {
        point: p,
        marker,
        el,
        currentVariant: p.variant,
      });
      originalVariantsRef.current.set(p.id, p.variant);
    }

    return () => {
      for (const { marker } of registryRef.current.values()) marker.remove();
      registryRef.current.clear();
      originalVariantsRef.current.clear();
    };
  }, [map, points, createEl, buildPopupHtml, onClickMarker]);

  /** Imperatively hide/show + recolor markers without recreating them */
  const applyMode = (mode: MarkerMode<P>) => {
    const { filter, variantFor } = mode;
    for (const [id, entry] of registryRef.current) {
      const { el, point } = entry;

      // Visibility
      const visible = filter ? !!filter(point) : true;
      if (visible) showEl(el);
      else hideEl(el);

      // Variant recolor
      if (applyVariant) {
        const next = variantFor
          ? variantFor(point)
          : originalVariantsRef.current.get(id);
        if (next !== entry.currentVariant) {
          applyVariant(el, next, { prevVariant: entry.currentVariant, point });
          entry.currentVariant = next;
        }
      }
    }
  };

  /** Restore original visibility + original variants */
  const resetMode = () => {
    for (const [id, entry] of registryRef.current) {
      const { el } = entry;
      showEl(el);
      if (applyVariant) {
        const orig = originalVariantsRef.current.get(id);
        if (orig !== entry.currentVariant) {
          applyVariant(el, orig, {
            prevVariant: entry.currentVariant,
            point: entry.point,
          });
          entry.currentVariant = orig;
        }
      }
    }
  };

  /** Optionally expose direct helpers if you need one-off tweaks */
  const api = useMemo(
    () => ({
      applyMode,
      resetMode,
      /** Get underlying registry for advanced cases (read-only) */
      get entries(): ReadonlyMap<string, RegistryEntry<P>> {
        return registryRef.current;
      },
      /** Quick helpers */
      hideById(id: string) {
        const e = registryRef.current.get(id);
        if (e) hideEl(e.el);
      },
      showById(id: string) {
        const e = registryRef.current.get(id);
        if (e) showEl(e.el);
      },
      recolorById(id: string, v: Variant | undefined) {
        const e = registryRef.current.get(id);
        if (e && applyVariant && v !== e.currentVariant) {
          applyVariant(e.el, v, {
            prevVariant: e.currentVariant,
            point: e.point,
          });
          e.currentVariant = v;
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [applyVariant]
  );

  return api;
}
