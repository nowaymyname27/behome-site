"use client";

import HomeShowcase from "../../../../components/site-wide/HomeShowcase";
import MediaCarousel from "../../../../components/site-wide/MediaCarousel";

import SubmenuWrapper from "./SubmenuWrapper";
import useStickyOffsets from "./useStickyOffsets";

import type { MappedHomeSpec } from "../../../../lib/types/styles";

export default function ClientWrapper({ homes }: { homes: MappedHomeSpec[] }) {
  const stickyTop = useStickyOffsets();
  const SHOWCASE_HEADER_PX = 64;

  return (
    <>
      <SubmenuWrapper
        items={homes.map((h) => ({
          id: h.id,
          label: h.name,
        }))}
      />

      {homes.map((home) => (
        <HomeShowcase key={home.id} home={home} stickyHeader stickyTop={stickyTop}>
          <MediaCarousel
            media={home.media}
            viewportOffset={stickyTop + SHOWCASE_HEADER_PX}
          />
        </HomeShowcase>
      ))}
    </>
  );
}
