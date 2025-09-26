// File: src/app/(site)/(home)/components/MapProduct/HomeMap.tsx
"use client";

import Map, {
  type Marker as MarkerType,
  type InteractiveMode,
} from "@/components/site-wide/map/Map";
import homes from "@/app/(site)/(home)/data/homes";
import { useLocale } from "@/i18n/locale-context";
import { tHome } from "@/app/(site)/(home)/i18n";

const ICONS = {
  FL: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  NC: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  DEFAULT: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
} as const;

export default function HomeMap({
  height,
  className,
  interactiveMode = "click",
  showZoomControlWhenActive = true,
  boundsPadding = 60,
}: {
  height: number; // match your grid
  className?: string;
  interactiveMode?: InteractiveMode;
  showZoomControlWhenActive?: boolean;
  boundsPadding?: number;
}) {
  const { locale } = useLocale();
  const i = tHome(locale).map;

  // Build markers from data with state-based icon colors
  const markers: MarkerType[] = homes.map((h) => {
    const state = (h.state || "").toUpperCase();
    const iconUrl =
      state === "FL" ? ICONS.FL : state === "NC" ? ICONS.NC : ICONS.DEFAULT;

    return {
      position: [h.lat, h.lng],
      title: `${h.city}, ${h.state}`,
      subtitle: h.address,
      iconUrl,
      iconSize: [25, 41], // match default Leaflet size
    };
  });

  // If exactly one home and it has its own zoom, use it; else fit to markers
  const single = homes.length === 1 ? homes[0] : null;
  const center = single
    ? ([single.lat, single.lng] as [number, number])
    : undefined;
  const zoom =
    single && typeof (single as any).zoom === "number"
      ? (single as any).zoom
      : undefined;
  const fitToMarkers = !single || zoom === undefined;

  return (
    <Map
      height={height}
      className={className}
      interactiveMode={interactiveMode}
      showZoomControlWhenActive={showZoomControlWhenActive}
      overlayText={i.overlay.hint}
      markers={markers}
      fitToMarkers={fitToMarkers}
      boundsPadding={boundsPadding}
      tileUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      tileAttribution="© OpenStreetMap contributors"
      {...(center && zoom !== undefined ? { center, zoom } : {})}
    />
  );
}
