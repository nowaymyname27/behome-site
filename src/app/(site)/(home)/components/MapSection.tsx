// File: src/app/(site)/(home)/components/MapSection.tsx
"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import homes from "@/app/(site)/(home)/data/homes";
import { useLocale } from "@/i18n/locale-context";
import { tHome } from "@/app/(site)/(home)/i18n";

// Leaflet default icon fix
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Listens for any map interaction and calls onInteract()
function MapInteractionListener({ onInteract }: { onInteract: () => void }) {
  useMapEvents({
    zoomstart: onInteract,
    movestart: onInteract,
    dragstart: onInteract,
    mousedown: onInteract,
    click: onInteract,
  });
  return null;
}

export default function MapSection() {
  const center: LatLngExpression = [33.5, -81.8];
  const [showOverlay, setShowOverlay] = useState(true);

  const { locale } = useLocale();
  const i = tHome(locale).map;

  return (
    <section className="relative w-full h-[60vh]">
      {/* Map fills the section */}
      <MapContainer
        center={center}
        zoom={5}
        className="absolute inset-0 h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {homes.map((h) => (
          <Marker position={[h.lat, h.lng]} key={h.id} icon={icon}>
            <Popup>
              <div className="font-medium">
                {h.city}, {h.state}
              </div>
              <div className="muted text-sm">{h.address}</div>
            </Popup>
          </Marker>
        ))}

        {/* Hide overlay on any interaction */}
        <MapInteractionListener onInteract={() => setShowOverlay(false)} />
      </MapContainer>

      {/* Centered overlay (dismiss on click or on first interaction) */}
      {showOverlay && (
        <div
          className="absolute inset-0 flex items-center justify-center z-[1100] transition-opacity"
          onClick={() => setShowOverlay(false)}
          role="button"
          aria-label={i.overlay.hint}
        >
          <div className="bg-white/80 backdrop-blur rounded-2xl px-6 py-4 text-center shadow">
            <h2 className="h2">{i.overlay.title}</h2>
            <p className="mt-1 text-sm text-foreground/70">{i.overlay.hint}</p>
          </div>
        </div>
      )}
    </section>
  );
}
