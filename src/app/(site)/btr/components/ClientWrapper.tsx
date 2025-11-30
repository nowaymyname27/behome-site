"use client";

import SubmenuWrapper from "./SubmenuWrapper";
import HomeShowcase from "../../../../components/site-wide/HomeShowcase";
import MediaCarousel from "../../../../components/site-wide/MediaCarousel";

import useStickyOffsets from "./useStickyOffsets";
import { useLocale } from "../../../../i18n/locale-context";
import { tSite } from "../../../../i18n/site-wide";

import type { MappedHomeSpec } from "../../../../lib/types/styles";

export default function ClientWrapper({ homes }: { homes: MappedHomeSpec[] }) {
  const stickyTop = useStickyOffsets();
  const { locale } = useLocale();
  const site = tSite(locale);

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
        <HomeShowcase
          key={home.id}
          home={home}
          stickyHeader
          stickyTop={stickyTop}
        >
          <MediaCarousel
            media={home.media}
            viewportOffset={stickyTop + SHOWCASE_HEADER_PX}
            showDetailsCard
            detailsLink={home.cta?.href ?? "#"}
            detailsLabel={site.homeShowcase.viewDetailsLabel}
          />
        </HomeShowcase>
      ))}
    </>
  );
}
