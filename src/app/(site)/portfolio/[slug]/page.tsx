import { notFound } from "next/navigation";
import { sanityClient } from "../../../../sanity/lib/client";
import {
  styleBySlugQuery,
  styleSlugsQuery,
} from "../../../../sanity/lib/queries";

import StickyInfoHeader from "../../../../components/property-detail/StickyInfoHeader";
import HeroGallery from "../../../../components/property-detail/HeroGallery";
import FloorplanSection from "../../../../components/property-detail/FloorplanSection";
import VirtualTourSection from "../../../../components/property-detail/VirtualTourSection";
import Footer from "../../../../components/site-wide/Footer";

const HEADER_H = 72;
export const revalidate = 60;

export default async function BuildToRentDetail({
  params,
}: {
  params: { slug: string };
}) {
  const style = await sanityClient.fetch(styleBySlugQuery, {
    slug: params.slug,
  });

  if (!style) return notFound();

  return (
    <div className="w-full bg-background text-foreground">
      <StickyInfoHeader
        name={style.title}
        beds={style.beds}
        baths={style.baths}
        cars={style.cars}
        sqft={style.sqft}
        height={HEADER_H}
      />

      <main className="space-y-12" style={{ paddingTop: HEADER_H }}>
        <HeroGallery images={style.gallery ?? []} headerHeight={HEADER_H} />
        <FloorplanSection
          plan={style.floorplan}
          name={style.title}
          sqft={style.sqft}
          beds={style.beds}
          baths={style.baths}
          cars={style.cars}
          notes="Open-concept living with split-bedroom layout and covered patio."
        />

        {style.matterportModelId && (
          <VirtualTourSection
            modelId={style.matterportModelId}
            headerHeight={HEADER_H}
            title={`${style.title} — 3D Walkthrough`}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(styleSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}
