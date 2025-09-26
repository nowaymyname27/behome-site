// File: src/app/(site)/florida/components/Project/ProjectMapInner.client.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { Map as LeafletMap } from "leaflet";

type MarkerInfo = {
  position: [number, number];
  title?: string;
  subtitle?: string;
};

function InteractivityController({
  interactive,
  onMapReady,
}: {
  interactive: boolean;
  onMapReady?: (map: LeafletMap) => void;
}) {
  const map = useMap();
  const zoomCtrlRef = useRef<L.Control.Zoom | null>(null);

  // Notify parent once (optional)
  useEffect(() => {
    onMapReady?.(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!map) return;

    if (interactive) {
      map.scrollWheelZoom.enable();
      map.dragging.enable();
      map.doubleClickZoom.enable();
      map.keyboard?.enable?.();

      if (!zoomCtrlRef.current) {
        zoomCtrlRef.current = L.control.zoom();
        zoomCtrlRef.current.addTo(map);
      }
    } else {
      map.scrollWheelZoom.disable();
      map.dragging.disable();
      map.doubleClickZoom.disable();
      map.keyboard?.disable?.();

      if (zoomCtrlRef.current) {
        zoomCtrlRef.current.remove();
        zoomCtrlRef.current = null;
      }
    }
  }, [interactive, map]);

  return null;
}

export default function ProjectMapInner({
  center,
  zoom = 12,
  height = 600,
  marker,
}: {
  center: [number, number];
  zoom?: number;
  height?: number;
  marker?: MarkerInfo;
}) {
  const [interactive, setInteractive] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Click outside → deactivate
  useEffect(() => {
    function onDocPointerDown(e: PointerEvent) {
      if (!interactive) return;
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) setInteractive(false);
    }
    document.addEventListener("pointerdown", onDocPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onDocPointerDown, true);
  }, [interactive]);

  const icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden border rounded-2xl shadow-sm"
      style={{ height }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full"
        // Start non-interactive; we toggle via InteractivityController
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl
      >
        <InteractivityController interactive={interactive} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {marker && (
          <Marker position={marker.position} icon={icon}>
            <Popup>
              {marker.title && (
                <div className="font-medium">{marker.title}</div>
              )}
              {marker.subtitle && (
                <div className="muted text-sm">{marker.subtitle}</div>
              )}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {!interactive && (
        <button
          type="button"
          onClick={() => setInteractive(true)}
          className="
            absolute inset-0 z-[1000] flex items-center justify-center
            bg-black/10 hover:bg-black/20 transition
            text-sm font-medium text-white
          "
          aria-label="Click to interact with map"
        >
          Click to interact with map
        </button>
      )}
    </div>
  );
}
