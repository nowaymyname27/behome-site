import { notFound } from "next/navigation";
import { sanityClient } from "../../../../sanity/lib/client";
import {
  singleFamilyHouseBySlugQuery,
  singleFamilyHouseSlugsQuery,
} from "../../../../sanity/lib/queries";

import BtrStickyHeader from "../../../../components/property-detail/BtrStickyHeader";
import HeroGallery from "../../../../components/property-detail/HeroGallery";
import FloorplanSection from "../../../../components/property-detail/FloorplanSection";
import VirtualTourSection from "../../../../components/property-detail/VirtualTourSection";
import MapSection from "../../../../components/property-detail/MapSection";
import Footer from "../../../../components/site-wide/Footer";

const HEADER_H = 72;
export const revalidate = 60;

export default async function SingleFamilyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const house = await sanityClient.fetch(singleFamilyHouseBySlugQuery, {
    slug: params.slug,
  });

  if (!house) return notFound();

  return (
    <div className="w-full bg-background text-foreground">
      <BtrStickyHeader
        name={house.title}
        beds={house.beds}
        baths={house.baths}
        cars={house.cars}
        sqft={house.sqft}
        price={house.price}
        height={HEADER_H}
      />

      <main className="space-y-12" style={{ paddingTop: HEADER_H }}>
        <HeroGallery images={house.gallery ?? []} headerHeight={HEADER_H} />

        <FloorplanSection
          plan={house.floorplan}
          name={house.title}
          sqft={house.sqft}
          beds={house.beds}
          baths={house.baths}
          cars={house.cars}
          notes="Open-concept living with split-bedroom layout and covered patio."
        />

        {house.matterportModelId && (
          <VirtualTourSection
            modelId={house.matterportModelId}
            headerHeight={HEADER_H}
            title={`${house.title} — 3D Walkthrough`}
          />
        )}

        {/* Map Section */}
        {house.mapPoint && house.mapPoint.lat && house.mapPoint.lng && (
          <MapSection
            coords={[house.mapPoint.lng, house.mapPoint.lat]}
            address={
              house.mapPoint.address ?? house.mapPoint.title ?? "Location"
            }
            headerHeight={HEADER_H}
            zoom={14}
            theme="light"
            clickToUse
            title="Location"
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(
    singleFamilyHouseSlugsQuery
  );
  return slugs.map((s) => ({ slug: s.slug }));
}
