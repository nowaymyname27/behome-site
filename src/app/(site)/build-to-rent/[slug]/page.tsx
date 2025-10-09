import { notFound } from "next/navigation";
import { getHouseBySlug, type House } from "../data";
import StickyInfoHeader from "@/components/property-detail/StickyInfoHeader";
import HeroGallery from "@/components/property-detail/HeroGallery";
import FloorplanSection from "@/components/property-detail/FloorplanSection";
import VirtualTourSection from "@/components/property-detail/VirtualTourSection";
import MapSection from "@/components/property-detail/MapSection";

const HEADER_H = 72;

export default function SingleFamilyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const house = getHouseBySlug(params.slug);
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
        <HeroGallery images={house.images} headerHeight={HEADER_H} />

        <FloorplanSection
          plan={house.floorplan}
          name={house.name}
          sqft={house.sqft}
          beds={house.beds}
          baths={house.baths}
          cars={house.cars}
          notes="Open-concept living with split-bedroom layout and covered patio."
        />

        {/* Remove bottom spacing on VirtualTour so it touches the map */}
        <div className="space-y-0">
          <VirtualTourSection
            modelId={house.matterportModelId}
            headerHeight={HEADER_H}
            title={`${house.name} — 3D Walkthrough`}
          />
          <MapSection
            coords={house.coords}
            address={house.address}
            headerHeight={HEADER_H}
            zoom={15}
            theme="light"
            clickToUse={true}
          />
        </div>
      </main>
    </div>
  );
}

export function generateStaticParams(): { slug: House["slug"] }[] {
  return [{ slug: "oakridge" }];
}
