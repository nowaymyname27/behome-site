"use client";

import HomeShowcase from "../../../../components/site-wide/HomeShowcase";
import MediaCarousel from "../../../../components/site-wide/MediaCarousel";

import SubmenuWrapper from "./SubmenuWrapper";
import useStickyOffsets from "./useStickyOffsets";

import type { MappedHomeSpec } from "../../../../lib/types/styles";

export default function ClientWrapper({ homes }: { homes: MappedHomeSpec[] }) {
  const stickyTop = useStickyOffsets();
  const SHOWCASE_HEADER_PX = 64;
  const statusOrder = {
    forSale: 0,
    sold: 1,
    underConstruction: 2,
  } as const;
  const getStatusOrder = (status: MappedHomeSpec["status"]) =>
    status ? statusOrder[status] : 3;
  const orderedHomes = [...homes].sort(
    (a, b) => getStatusOrder(a.status) - getStatusOrder(b.status),
  );

  return (
    <>
      <SubmenuWrapper
        items={orderedHomes.map((h) => ({
          id: h.id,
          label: h.name,
        }))}
      />

      {orderedHomes.map((home) => (
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
