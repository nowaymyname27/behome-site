// file: src/app/(site)/cluster/page.tsx
"use client";

import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";
import ClusterHero from "./components/ClusterHero";
import ClusterDescription from "./components/ClusterDescription";
import ClusterSubmenuWrapper from "./components/ClusterSubmenuWrapper";
import HomeShowcase from "@/components/site-wide/HomeShowcase";
import MediaCarousel from "@/components/site-wide/MediaCarousel";
import useStickyOffsets from "./components/useStickyOffsets";

// Import local images
import K1 from "./images/townhomes/K1.png";
import K2 from "./images/townhomes/K2.png";
import K3 from "./images/townhomes/K3.png";
import K4 from "./images/townhomes/K4.png";
import K6 from "./images/townhomes/K6.png";
import K7 from "./images/townhomes/K7.png";

export default function Page() {
  const stickyTop = useStickyOffsets(); // Header + submenu combined
  const SHOWCASE_HEADER_PX = 64; // tight HomeShowcase header height (adjust if needed)

  const mediaFrom = (imgs: Array<{ src: string }>) =>
    imgs.map((img, i) => ({ src: img.src, alt: `Townhome image ${i + 1}` }));

  const homes = [
    {
      id: "clyde-ii",
      label: "Clyde II",
      name: "Clyde II",
      sqft: 1452,
      stories: "1 Story",
      beds: 3,
      baths: 2,
      cars: 2,
      price: 334995,
      estPayment: 2855,
      cta: { label: "View Home Details", href: "/homes/clyde-ii" },
      media: mediaFrom([K1, K2, K3, K4]),
    },
    {
      id: "finlay-ii",
      label: "Finlay II",
      name: "Finlay II",
      sqft: 1608,
      stories: "1 Story",
      beds: 4,
      baths: 2,
      cars: 2,
      price: 349995,
      estPayment: 2995,
      cta: { label: "View Home Details", href: "/homes/finlay-ii" },
      media: mediaFrom([K2, K3, K4, K6]),
    },
    {
      id: "magdalena",
      label: "Magdalena",
      name: "Magdalena",
      sqft: 1750,
      stories: "1 Story",
      beds: 4,
      baths: 3,
      cars: 2,
      price: 364995,
      estPayment: 3120,
      cta: { label: "View Home Details", href: "/homes/magdalena" },
      media: mediaFrom([K3, K4, K6, K7]),
    },
    {
      id: "model-4",
      label: "Model 4",
      name: "Model 4",
      sqft: 1890,
      stories: "1 Story",
      beds: 4,
      baths: 3,
      cars: 2,
      price: 379995,
      estPayment: 3280,
      cta: { label: "View Home Details", href: "/homes/model-4" },
      media: mediaFrom([K4, K6, K7, K1]),
    },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ClusterHero />
        <ClusterDescription />
        <ClusterSubmenuWrapper
          items={homes.map((h) => ({ id: h.id, label: h.label }))}
        />

        {homes.map((home) => (
          <HomeShowcase
            key={home.id}
            home={home}
            stickyHeader
            stickyTop={stickyTop} // pins showcase header just under submenu
          >
            <MediaCarousel
              media={home.media}
              // aspect is ignored when viewportOffset is set
              viewportOffset={stickyTop + SHOWCASE_HEADER_PX} // Header + submenu + showcase header
              showDetailsCard
              detailsLink={home.cta?.href ?? "#"}
              detailsLabel={home.cta?.label ?? "See Details"}
            />
          </HomeShowcase>
        ))}
      </main>
      <Footer />
    </div>
  );
}
