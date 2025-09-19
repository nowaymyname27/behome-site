// File: /components/north-carolina/ProjectMap.tsx
"use client";
import Map, { Marker } from "@/components/site-wide/Map";
import { useLocale } from "@/i18n/locale-context";
import { tNorthCarolina } from "@/app/(site)/north-carolina/i18n";

export default function ProjectMap({
  center = [36.00169, -79.80541], // Kallamdale default
  zoom = 12,
  height = 680,
  marker,
}: {
  center?: [number, number];
  zoom?: number;
  height?: number;
  marker?: { position: [number, number]; title?: string; subtitle?: string };
}) {
  const { locale } = useLocale();
  const i = tNorthCarolina(locale).projectMap;

  const markers: Marker[] = marker
    ? [marker]
    : [
        {
          position: [36.00169, -79.80541],
          title: i.projectMap.address.street,
          subtitle: i.projectMap.address.city,
        },
      ];

  return (
    <Map
      center={center}
      zoom={zoom}
      height={height}
      markers={markers}
      interactiveMode="click"
      showZoomControlWhenActive
      overlayText={i.projectMap.overlay.hint}
      fitToMarkers={markers.length > 0}
      boundsPadding={60}
    />
  );
}
