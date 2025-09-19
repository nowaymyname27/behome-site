// File: /components/site-wide/MapInner.client.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker as LMarker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import type { Map as LeafletMap, LatLngBoundsExpression } from "leaflet";
import type { Marker as MarkerType, InteractiveMode } from "./Map";

/** Click outside helper — type accepts HTMLElement | null to avoid RefObject type mismatch */
function useOutsideClick(
  active: boolean,
  elRef: React.RefObject<HTMLElement | null>,
  onOutside: () => void
) {
  useEffect(() => {
    if (!active) return;
    const onDocPointerDown = (e: PointerEvent) => {
      const el = elRef.current;
      if (el && !el.contains(e.target as Node)) onOutside();
    };
    document.addEventListener("pointerdown", onDocPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onDocPointerDown, true);
  }, [active, onOutside, elRef]);
}

/** Tells Leaflet to enable/disable handlers without using ts-expect-error */
function setInteractivity(map: LeafletMap, enabled: boolean) {
  if (enabled) {
    map.scrollWheelZoom.enable();
    map.dragging.enable();
    map.doubleClickZoom.enable();
    // keyboard exists in Leaflet but may be missing from your TS types; feature-detect safely
    const kb: any = (map as any).keyboard;
    if (kb && typeof kb.enable === "function") kb.enable();
  } else {
    map.scrollWheelZoom.disable();
    map.dragging.disable();
    map.doubleClickZoom.disable();
    const kb: any = (map as any).keyboard;
    if (kb && typeof kb.disable === "function") kb.disable();
  }
}

/** Adds/removes zoom control when interactive */
function useZoomControl(map: LeafletMap | null, show: boolean) {
  const zoomCtrlRef = useRef<L.Control.Zoom | null>(null);
  useEffect(() => {
    if (!map) return;
    if (show) {
      if (!zoomCtrlRef.current) {
        zoomCtrlRef.current = L.control.zoom();
        zoomCtrlRef.current.addTo(map);
      }
    } else if (zoomCtrlRef.current) {
      zoomCtrlRef.current.remove();
      zoomCtrlRef.current = null;
    }
  }, [map, show]);
}

/** Controller to toggle handlers using useMap (avoids whenReady typing issues) */
function InteractivityController({
  interactive,
  showZoomControl,
}: {
  interactive: boolean;
  showZoomControl: boolean;
}) {
  const map = useMap();
  useEffect(() => {
    setInteractivity(map, interactive);
  }, [map, interactive]);
  useZoomControl(interactive ? map : null, showZoomControl);
  return null;
}

/** Fit-to-markers controller — no whenReady; reacts when markers list changes */
function FitToMarkersController({
  markers,
  padding,
}: {
  markers: MarkerType[];
  padding: number;
}) {
  const map = useMap();
  useEffect(() => {
    if (!markers.length) return;
    const b = L.latLngBounds(markers.map((m) => m.position)).pad(0.05);
    map.fitBounds(b, { padding: [padding, padding] });
  }, [map, markers, padding]);
  return null;
}

export default function MapInner({
  center = [36.0726, -79.792], // Greensboro fallback
  zoom = 12,
  height = 600,
  className,

  interactiveMode = "click",
  showZoomControlWhenActive = true,
  overlayText = "Click to interact with map",

  markers = [],
  fitToMarkers = false,
  boundsPadding = 60,

  tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  tileAttribution = "© OpenStreetMap contributors",

  onInteractiveChange,
}: {
  center?: [number, number];
  zoom?: number;
  height?: number;
  className?: string;
  interactiveMode?: InteractiveMode;
  showZoomControlWhenActive?: boolean;
  overlayText?: string;
  markers?: MarkerType[];
  fitToMarkers?: boolean;
  boundsPadding?: number;
  tileUrl?: string;
  tileAttribution?: string;
  onInteractiveChange?: (active: boolean) => void;
}) {
  // Note: generic is HTMLDivElement (not HTMLDivElement | null) to keep RefObject happy
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(interactiveMode === "always");

  // Notify parent when active changes
  useEffect(() => {
    onInteractiveChange?.(active);
  }, [active, onInteractiveChange]);

  const defaultIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    []
  );

  // Click outside → deactivate (only in "click" mode)
  useOutsideClick(
    active && interactiveMode === "click",
    containerRef as React.RefObject<HTMLElement | null>,
    () => setActive(false)
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden border rounded-2xl shadow-sm ${
        className ?? ""
      }`}
      style={{ height }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full"
        // Start with handlers off; InteractivityController flips them on/off
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl
      >
        <InteractivityController
          interactive={interactiveMode === "always" ? true : active}
          showZoomControl={
            showZoomControlWhenActive && interactiveMode !== "off"
          }
        />

        {fitToMarkers && markers.length > 0 && (
          <FitToMarkersController markers={markers} padding={boundsPadding} />
        )}

        <TileLayer url={tileUrl} attribution={tileAttribution} />

        {markers.map((m, i) => {
          const icon = m.iconUrl
            ? new L.Icon({
                iconUrl: m.iconUrl,
                shadowUrl:
                  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
                iconSize: m.iconSize ?? [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41],
              })
            : defaultIcon;

          return (
            <LMarker key={i} position={m.position} icon={icon}>
              {(m.title || m.subtitle) && (
                <Popup>
                  {m.title && <div className="font-medium">{m.title}</div>}
                  {m.subtitle && (
                    <div className="muted text-sm">{m.subtitle}</div>
                  )}
                </Popup>
              )}
            </LMarker>
          );
        })}
      </MapContainer>

      {/* Overlay for click mode (light, non-blurry) */}
      {interactiveMode === "click" && !active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="
            absolute inset-0 z-[1000] flex items-center justify-center
            bg-black/10 hover:bg-black/20 transition
            text-sm font-medium text-white
          "
          aria-label={overlayText}
        >
          {overlayText}
        </button>
      )}
    </div>
  );
}
