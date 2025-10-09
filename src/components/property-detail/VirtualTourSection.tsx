// file: src/components/property-detail/VirtualTourSection.tsx
"use client";

import VirtualTour from "@/components/property-detail/VirtualTour";

export default function VirtualTourSection({
  modelId,
  headerHeight = 72,
  title,
  autoPlay = true,
}: {
  modelId?: string | null;
  headerHeight?: number;
  title?: string;
  autoPlay?: boolean;
}) {
  if (!modelId) return null;

  return (
    <section id="tour" className="w-full border-t border-b border-border">
      <div
        className="w-full"
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        <VirtualTour
          provider="matterport"
          modelId={modelId}
          params={{ play: autoPlay ? 1 : 0, brand: 0 }}
          title={title ?? "3D Walkthrough"}
          className="rounded-none border-0 w-full h-full"
        />
      </div>
    </section>
  );
}
