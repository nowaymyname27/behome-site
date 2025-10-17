// src/components/site-wide/map/useMarkersController.ts
"use client";

import { useEffect, useMemo, useRef } from "react";
import maplibregl from "maplibre-gl";
import type { Variant, Point } from "./types";

export type MarkerMode<P extends Point = Point> = {
  filter?: (p: P) => boolean;
  variantFor?: (p: P) => Variant | undefined;
};

type RegistryEntry<P extends Point = Point> = {
  point: P;
  marker: maplibregl.Marker;
  el: HTMLButtonElement;
  currentVariant: Variant | undefined;
};

export type UseMarkersControllerOptions<P extends Point = Point> = {
  map: maplibregl.Map | null;
  points: P[];
  createEl: (variant: Variant | undefined, p: P) => HTMLButtonElement;
  applyVariant?: (
    el: HTMLButtonElement,
    nextVariant: Variant | undefined,
    ctx: { prevVariant: Variant | undefined; point: P }
  ) => void;
  buildPopupHtml?: (p: P) => string | null | undefined;
  onClickMarker?: (ctx: {
    point: P;
    el: HTMLButtonElement;
    marker: maplibregl.Marker;
    map: maplibregl.Map;
  }) => void;
};

export function useMarkersController<P extends Point = Point>(
  opts: UseMarkersControllerOptions<P>
) {
  const { map, points, createEl, applyVariant, buildPopupHtml, onClickMarker } =
    opts;

  const registryRef = useRef<Map<string, RegistryEntry<P>>>(new Map());
  const originalVariantsRef = useRef<Map<string, Variant | undefined>>(
    new Map()
  );
  const currentPopupRef = useRef<maplibregl.Popup | null>(null);

  const showEl = (el: HTMLElement) => {
    el.style.display = "";
    el.style.visibility = "";
  };
  const hideEl = (el: HTMLElement) => {
    el.style.display = "none";
  };

  useEffect(() => {
    if (!map) return;

    for (const { marker } of registryRef.current.values()) marker.remove();
    registryRef.current.clear();
    originalVariantsRef.current.clear();

    for (const p of points) {
      const el = createEl(p.variant, p);

      if (!el.getAttribute("aria-label")) {
        el.setAttribute(
          "aria-label",
          p.name ? `Marker: ${p.name}` : "Location marker"
        );
      }

      el.style.cursor = "pointer";

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(p.coords)
        .addTo(map);

      type ClickablePoint = P & { onClick?: () => void };
      const cp = p as ClickablePoint;

      el.addEventListener("click", () => {
        cp.onClick?.();

        if (onClickMarker) {
          onClickMarker({ point: p, el, marker, map });
          return;
        }

        if (buildPopupHtml) {
          const html = buildPopupHtml(p);
          if (html) {
            // Close any open popup before opening a new one
            if (currentPopupRef.current) {
              currentPopupRef.current.remove();
            }

            const popup = new maplibregl.Popup({
              offset: 16,
              closeOnClick: false,
              closeButton: true,
              className: "custom-popup",
            })
              .setLngLat(p.coords)
              .setHTML(html)
              .addTo(map);

            // Keep reference
            currentPopupRef.current = popup;
          }
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
      if (currentPopupRef.current) {
        currentPopupRef.current.remove();
        currentPopupRef.current = null;
      }
    };
  }, [map, points, createEl, buildPopupHtml, onClickMarker]);

  const applyMode = (mode: MarkerMode<P>) => {
    const { filter, variantFor } = mode;
    for (const [id, entry] of registryRef.current) {
      const { el, point } = entry;
      const visible = filter ? !!filter(point) : true;
      if (visible) showEl(el);
      else hideEl(el);

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

  const api = useMemo(
    () => ({
      applyMode,
      resetMode,
      get entries(): ReadonlyMap<string, RegistryEntry<P>> {
        return registryRef.current;
      },
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
