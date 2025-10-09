// src/components/site-wide/SiteMap.tsx
"use client";

import { useEffect } from "react";
import type { Config, Point } from "./map/types";
import { MAP_THEMES as THEMES } from "./map/types";
import { useMapLibre } from "./map/useMapLibre";
import {
  useMarkersController,
  type MarkerMode,
} from "./map/useMarkersController";
import { createMarkerButton, swapVariant } from "./map/markerButton";
import { buildPopupHtml } from "./map/popup";
import { useClickToUse } from "./map/useClickToUse";
import ClickToUseOverlay from "./map/ClickToUseOverlay";

export default function SiteMap({
  config,
  mode,
  className = "",
  clickToUse = true,
  onReady, // ✅ new
}: {
  config: Config;
  mode?: MarkerMode<Point>;
  className?: string;
  /** If true, requires clicking overlay to enable map; clicking outside re-locks it. */
  clickToUse?: boolean;
  /** Expose map + markers API upward */
  onReady?: (api: {
    map: maplibregl.Map;
    markers: ReturnType<typeof useMarkersController<Point>>;
  }) => void;
}) {
  // Map init
  const { containerRef: mapRef, map } = useMapLibre({
    style: THEMES[config.theme].style,
    center: config.center,
    zoom: config.zoom,
    navigationControl: true,
    attribution: {
      compact: true,
      customAttribution: "© BeHome",
      position: "bottom-left",
    },
  });

  // Markers
  const markers = useMarkersController<Point>({
    map,
    points: config.points,
    createEl: (variant, p) =>
      createMarkerButton(variant ?? "primary", {
        ariaLabel: p.name ? `Marker: ${p.name}` : "Location marker",
        point: p,
      }),
    applyVariant: (el, next, { prevVariant }) => {
      swapVariant(el, next, prevVariant);
    },
    buildPopupHtml,
  });

  // Apply external mode (optional)
  useEffect(() => {
    if (!map) return;
    if (mode) markers.applyMode(mode);
    else markers.resetMode();
  }, [map, mode, markers]);

  // ✅ Hand back API when ready
  useEffect(() => {
    if (map && onReady) onReady({ map, markers });
  }, [map, markers, onReady]);

  // Click-to-use lock
  const {
    containerRef: wrapperRef,
    locked,
    unlock,
  } = useClickToUse({
    initialLocked: clickToUse,
  });

  return (
    <div
      ref={wrapperRef}
      className={[
        "relative w-full h-full rounded-xl overflow-hidden bg-background border border-border shadow",
        className,
      ].join(" ")}
    >
      {/* Map container (disable pointer events when locked) */}
      <div
        ref={mapRef}
        className={[
          "w-full h-full",
          locked ? "pointer-events-none select-none" : "pointer-events-auto",
        ].join(" ")}
      />

      {/* Click-to-use overlay (you can hide it by passing clickToUse={false}) */}
      {clickToUse && (
        <ClickToUseOverlay
          locked={locked}
          onUnlock={unlock}
          label="Click to use"
        />
      )}
    </div>
  );
}
