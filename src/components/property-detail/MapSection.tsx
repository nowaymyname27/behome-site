"use client";

import SiteMap from "../site-wide/SiteMap";
import type { Config, Point } from "../site-wide/map/types";
import type { LngLat } from "../../app/(site)/collection/data/types";

export default function MapSection({
  coords,
  address,
  headerHeight = 72,
  zoom = 14,
  theme = "light",
  clickToUse = true,
  title = "Location",
}: {
  coords: LngLat;
  address: string;
  headerHeight?: number;
  zoom?: number;
  theme?: Config["theme"];
  clickToUse?: boolean;
  title?: string;
}) {
  const points: Point[] = [
    {
      id: "home",
      name: address,
      coords,
    },
  ];

  const config: Config = {
    theme,
    center: coords,
    zoom,
    points,
  };

  return (
    <section id="location" className="w-full border-t border-b border-border">
      {/* Section heading */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{address}</p>
      </div>

      {/* Full viewport minus sticky header */}
      <div style={{ height: `calc(100vh - ${headerHeight}px)` }}>
        <SiteMap
          config={config}
          className="rounded-none border-0"
          clickToUse={clickToUse}
        />
      </div>
    </section>
  );
}
