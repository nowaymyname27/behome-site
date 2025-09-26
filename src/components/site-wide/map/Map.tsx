// File: /components/site-wide/map/Map.tsx
"use client";

import dynamic from "next/dynamic";

/**
 * SSR-safe Map component. Forwards all props to the client-side inner map.
 * See MapInner.client.tsx for prop docs.
 */
const MapInner = dynamic(() => import("./MapInner.client"), { ssr: false });

export type Marker = {
  position: [number, number];
  title?: string;
  subtitle?: string;
  iconUrl?: string;
  iconSize?: [number, number];
};

export type InteractiveMode = "click" | "always" | "off";

export default function Map(props: {
  center?: [number, number];
  zoom?: number;
  height?: number;
  className?: string;

  /** Interaction behavior: "click" (enable on click, disable when clicking outside),
   *  "always" (interactive from start), or "off" (never interactive). Default "click". */
  interactiveMode?: InteractiveMode;

  /** Show Leaflet zoom control when interactiveMode !== "off" and active */
  showZoomControlWhenActive?: boolean;

  /** Overlay label when interactiveMode === "click" and inactive */
  overlayText?: string;

  /** Markers (optional) */
  markers?: Marker[];

  /** Fit view to markers on mount (overrides center/zoom) */
  fitToMarkers?: boolean;
  boundsPadding?: number;

  /** Tile layer customization (optional) */
  tileUrl?: string;
  tileAttribution?: string;

  /** Callback when interactive state changes (only for interactiveMode==="click") */
  onInteractiveChange?: (active: boolean) => void;
}) {
  return <MapInner {...props} />;
}
