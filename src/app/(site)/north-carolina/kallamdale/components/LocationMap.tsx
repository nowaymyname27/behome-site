// File: src/app/(site)/north-carolina/kallamdale/components/LocationMap.tsx
"use client";

import Map from "@/components/site-wide/Map";

export default function LocationMap() {
  // Example marker (Downtown Greensboro). Replace/add as needed.
  const markers = [
    {
      position: [36.0726, -79.792] as [number, number],
      title: "Kallamdale (Greensboro)",
      subtitle: "Townhome community location",
    },
  ];

  return (
    <section className="w-full bg-background pt-16 pb-0">
      {/* Section header */}
      <h2 className="h2 text-center mb-8">Location</h2>

      {/* Full-bleed map */}
      <Map
        className="rounded-none border-0 shadow-none"
        height={720}
        interactiveMode="click"
        showZoomControlWhenActive={true}
        overlayText="Click to interact with the map"
        center={[36.0726, -79.792]}
        zoom={12}
        markers={markers}
        fitToMarkers={true}
        boundsPadding={80}
      />
    </section>
  );
}
