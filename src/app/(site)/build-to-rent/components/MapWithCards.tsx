// file: src/app/(site)/single-family/components/MapWithCards.tsx
/*
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SiteMap from "@/components/site-wide/SiteMap";
import type { Config, Point } from "@/components/site-wide/map/types";
import CardsPanel, {
  type CardsPanelHandle,
  type House as BaseHouse,
} from "./CardsPanel";

import SF1 from "../images/SF1.jpg";
import SF2 from "../images/SF2.jpg";
import SF3 from "../images/SF3.jpg";

type House = BaseHouse & { coords: [number, number] };

type MapApi = {
  map: any;
  markers: {
    entries: ReadonlyMap<string, { el: HTMLButtonElement; point: Point }>;
    applyMode: (mode: any) => void;
    resetMode: () => void;
  };
};

export default function MapWithCards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const cardsRef = useRef<CardsPanelHandle | null>(null);
  const mapApiRef = useRef<MapApi | null>(null);

  const houses: House[] = useMemo(
    () => [
      {
        id: "oakridge",
        image: { src: SF1.src, alt: "Exterior of The Oakridge" },
        address: "The Oakridge – 220 Lakeview Dr.",
        price: 459_995,
        beds: 4,
        baths: 3,
        cars: 2,
        sqft: 2050,
        coords: [-81.3792, 28.5383],
        href: "/homes/oakridge",
        badge: "Move-in Ready",
      },
      {
        id: "willow",
        image: { src: SF2.src, alt: "Exterior of The Willow" },
        address: "The Willow – 315 Meadow Ln.",
        price: 499_995,
        beds: 5,
        baths: 3,
        cars: 2,
        sqft: 2250,
        coords: [-82.4584, 27.9506],
        href: "/homes/willow",
      },
      {
        id: "cypress",
        image: { src: SF3.src, alt: "Exterior of The Cypress" },
        address: "The Cypress – 412 Evergreen Ct.",
        price: 534_995,
        beds: 5,
        baths: 4,
        cars: 3,
        sqft: 2475,
        coords: [-80.1918, 25.7617],
        href: "/homes/cypress",
      },
    ],
    []
  );

  // Map markers with click → select + scroll
  const pointsWithHandlers = useMemo(
    () =>
      houses.map((h) => ({
        id: h.id,
        name: h.address,
        coords: h.coords,
        variant: "primary" as const,
        onClick: () => {
          setSelectedId(h.id);
          cardsRef.current?.scrollToId(h.id);
        },
      })),
    [houses]
  );

  const config: Config = useMemo(
    () => ({
      theme: "light" as const,
      center: [-81.5, 27.8],
      zoom: 6,
      points: pointsWithHandlers as unknown as Point[],
    }),
    [pointsWithHandlers]
  );

  // 🔆 Robust marker highlighting: toggle classes on the DOM element
  useEffect(() => {
    const api = mapApiRef.current;
    if (!api) return;

    // Clear previous highlights
    for (const [, entry] of api.markers.entries) {
      entry.el.classList.remove(
        "behome-marker-active",
        "ring-2",
        "ring-primary",
        "scale-110",
        "shadow-lg",
        "z-10"
      );
      entry.el.setAttribute("aria-pressed", "false");
    }

    if (selectedId) {
      const active = api.markers.entries.get(selectedId);
      if (active) {
        active.el.classList.add(
          "behome-marker-active",
          "ring-2",
          "ring-primary",
          "scale-110",
          "shadow-lg",
          "z-10"
        );
        active.el.setAttribute("aria-pressed", "true");
      }
    }
  }, [selectedId]);

  return (
    <div className="w-full">
      <h3 className="h3 mb-4">Explore Homes</h3>

      <div
        className="
          grid gap-6
          lg:grid-cols-[420px_1fr]
          items-start
        "
      >
        
        <CardsPanel
          ref={cardsRef}
          houses={houses}
          selectedId={selectedId}
          onSelect={(id) => {
            if (id !== selectedId) setSelectedId(id);
          }}
          className="h-[600px]"
        />


        <div className="relative w-full h-[600px] overflow-hidden rounded-xl border border-border shadow">
          <SiteMap
            config={config}
            // overlay is ON by default; we do not pass clickToUse={false}
            onReady={(api) => {
              mapApiRef.current = api as unknown as MapApi;
            }}
          />
        </div>
      </div>
    </div>
  );
}
*/
