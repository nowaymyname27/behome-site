// file: src/app/(site)/florida/single-family/components/SitePlan.tsx
"use client";

import Image from "next/image";

export default function SitePlan() {
  return (
    <section className="w-full bg-background py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 px-4 sm:px-6 lg:px-8">
        {/* Map / Overhead image */}
        <div className="card overflow-hidden relative min-h-[400px]">
          <Image
            src="/images/kallamdale-siteplan.jpg"
            alt="Overhead site plan of the Kallamdale community"
            fill
            className="object-cover"
          />
        </div>

        {/* Sidebar blueprints */}
        <div className="flex flex-col gap-6">
          {/* Quarter Unit */}
          <div className="card-surface p-6">
            <h3 className="text-lg font-semibold">Quarter Unit</h3>
            <p className="mt-2 muted">
              Spacious end layout with extra windows and natural light.
            </p>
            <div className="mt-4 relative h-40 w-full rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/blueprints/quarter-unit.jpg"
                alt="Quarter Unit blueprint"
                fill
                className="object-contain bg-surface"
              />
            </div>
          </div>

          {/* Center Unit */}
          <div className="card-surface p-6">
            <h3 className="text-lg font-semibold">Center Unit</h3>
            <p className="mt-2 muted">
              Efficient design that maximizes shared walls and living space.
            </p>
            <div className="mt-4 relative h-40 w-full rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/blueprints/center-unit.jpg"
                alt="Center Unit blueprint"
                fill
                className="object-contain bg-surface"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
