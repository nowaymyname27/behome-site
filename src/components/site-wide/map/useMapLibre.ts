// src/components/site-wide/map/useMapLibre.ts
"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import maplibregl, { Map } from "maplibre-gl";

type UseMapLibreOptions = {
  style: string; // Map style URL
  center: [number, number]; // [lng, lat]
  zoom: number;
  navigationControl?: boolean; // default: true
  attribution?:
    | false
    | {
        compact?: boolean;
        customAttribution?: string | string[];
        position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
      };
};

type UseMapLibreReturn = {
  containerRef: RefObject<HTMLDivElement | null>;
  map: Map | null;
  ready: boolean;
};

/**
 * Initializes MapLibre once and cleans up on unmount. Also observes the container
 * for size changes and calls map.resize() so the canvas always fills the space.
 *
 * Notes:
 * - We disable the built-in attribution control and add our own non-compact one.
 *   This avoids duplicate controls and removes the floating “i” buttons.
 */
export function useMapLibre(opts: UseMapLibreOptions): UseMapLibreReturn {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const [ready, setReady] = useState(false);

  // Freeze init options (this hook is "init-only")
  const initOpts = useMemo(
    () => ({
      style: opts.style,
      center: opts.center,
      zoom: opts.zoom,
      navigationControl: opts.navigationControl ?? true,
      attribution:
        opts.attribution === undefined
          ? {
              compact: false, // <— non-compact = no “i” icon
              customAttribution: undefined as string | string[] | undefined,
              position: "bottom-left" as const,
            }
          : opts.attribution,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    const map = new maplibregl.Map({
      container,
      style: initOpts.style,
      center: initOpts.center,
      zoom: initOpts.zoom,
      // Disable default control to prevent a second attribution (and its “i” icon)
      attributionControl: false,
    });

    if (initOpts.navigationControl) {
      map.addControl(new maplibregl.NavigationControl(), "top-right");
    }
    if (initOpts.attribution) {
      const { position = "bottom-left", ...rest } = initOpts.attribution;
      map.addControl(new maplibregl.AttributionControl(rest), position);
    }

    mapRef.current = map;

    const handleLoad = () => {
      setReady(true);
      map.resize(); // ensure correct initial canvas size
    };
    map.on("load", handleLoad);

    // 🔧 Observe container size and keep canvas in sync
    const ro = new ResizeObserver(() => map.resize());
    ro.observe(container);

    return () => {
      map.off("load", handleLoad);
      ro.disconnect();
      map.remove();
      mapRef.current = null;
      setReady(false);
    };
  }, [initOpts]);

  return { containerRef, map: mapRef.current, ready };
}
