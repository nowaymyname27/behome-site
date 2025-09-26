// File: src/app/(site)/florida/single-family/components/SitePlanSection.tsx
"use client";

import SitePlanMap from "./SitePlanMap";
import Floorplans from "./Floorplans";

export default function SitePlanSection() {
  return (
    <section className="w-full bg-background pt-16 pb-0">
      {/* Heading */}
      <h2 className="h2 text-center mb-8">Site Plan & Floorplans</h2>

      {/* Full-bleed grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 px-4 sm:px-6 lg:px-8">
        <SitePlanMap />
        <Floorplans />
      </div>
    </section>
  );
}
