// File: src/app/(site)/florida/single-family/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import VirtualTour from "@/components/site-wide/VirtualTour";
import {
  floorplans,
  getFloorplanBySlug,
  type Floorplan,
} from "@/app/(site)/florida/single-family/data/floorplans";

/**
 * Full-width detail page:
 * - Fixed translucent header with unit info
 * - Full-width Matterport tour
 * - Full-width image gallery
 */
export default function FloorplanDetail({
  params,
}: {
  params: { slug: string };
}) {
  const fp = getFloorplanBySlug(params.slug);
  if (!fp) return notFound();

  // Fixed header height (keep main content padded so it doesn't hide under header)
  const HEADER_H = 72; // px

  return (
    <div className="w-full bg-[--color-background] text-[--color-foreground]">
      {/* Translucent fixed header */}
      <header
        className="fixed top-0 inset-x-0 z-50 border-b border-border bg-white/70 backdrop-blur"
        style={{ height: HEADER_H }}
      >
        <div className="h-full w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold truncate">
              {fp.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {fp.beds} Beds • {fp.baths} Baths • {fp.sqFt.toLocaleString()} sq
              ft
            </p>
          </div>
          <div className="text-right">
            <div className="text-base sm:text-lg font-semibold">{fp.price}</div>
          </div>
        </div>
      </header>

      {/* Main content (offset for fixed header) */}
      <main
        className="w-full"
        style={{
          paddingTop: HEADER_H,
        }}
      >
        {/* Matterport: full browser width */}
        <section className="w-full">
          <VirtualTour
            provider="matterport"
            modelId={fp.matterportModelId}
            params={{ play: 1, brand: 0 }}
            title={`${fp.name} - 3D Walkthrough`}
            className="rounded-none border-0"
          />
        </section>

        {/* Gallery: full width, edge-to-edge images stacked */}
        <section className="w-full">
          {fp.gallery.map((src, idx) => (
            <div
              key={src}
              className="relative w-full"
              // 56.25% (16:9) default; adjust as you like or store per-image aspect in data
              style={{ aspectRatio: "16 / 9" }}
            >
              <Image
                src={src}
                alt={`${fp.name} photo ${idx + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

// Optional SSG (build-time paths)
export function generateStaticParams(): { slug: Floorplan["slug"] }[] {
  return floorplans.map((f) => ({ slug: f.slug }));
}
