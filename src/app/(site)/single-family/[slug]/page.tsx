// app/(site)/single-family/[slug]/page.tsx
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import {
  houseBySlugAndTypeQuery,
  houseSlugsByTypeQuery,
} from "@/sanity/lib/queries";

import StickyInfoHeader from "@/components/property-detail/StickyInfoHeader";
import HeroGallery from "@/components/property-detail/HeroGallery";
import FloorplanSection from "@/components/property-detail/FloorplanSection";
import VirtualTourSection from "@/components/property-detail/VirtualTourSection";
import MapSection from "@/components/property-detail/MapSection";
import Footer from "@/components/site-wide/Footer";

const HEADER_H = 72;
export const revalidate = 60;

export default async function SingleFamilyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const house = await client.fetch(houseBySlugAndTypeQuery, {
    slug: params.slug,
    type: "single",
  });

  if (!house) return notFound();

  return (
    <div className="w-full bg-background text-foreground">
      <StickyInfoHeader
        name={house.name}
        beds={house.beds}
        baths={house.baths}
        cars={house.cars}
        sqft={house.sqft}
        price={house.price}
        height={HEADER_H}
      />

      <main className="space-y-12" style={{ paddingTop: HEADER_H }}>
        <HeroGallery images={house.images ?? []} headerHeight={HEADER_H} />

        <FloorplanSection
          plan={house.floorplan}
          name={house.name}
          sqft={house.sqft}
          beds={house.beds}
          baths={house.baths}
          cars={house.cars}
          notes="Open-concept living with split-bedroom layout and covered patio."
        />

        <div className="space-y-0">
          {house.matterportModelId && (
            <VirtualTourSection
              modelId={house.matterportModelId}
              headerHeight={HEADER_H}
              title={`${house.name} — 3D Walkthrough`}
            />
          )}
          {house.coords && (
            <MapSection
              coords={house.coords}
              address={house.address}
              headerHeight={HEADER_H}
              zoom={15}
              theme="light"
              clickToUse
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(houseSlugsByTypeQuery, {
    type: "single",
  });
  return slugs.map((s) => ({ slug: s.slug }));
}
