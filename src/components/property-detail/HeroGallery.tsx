"use client";

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import ScrollChevron from "../site-wide/primitives/ScrollChevron";

type Img = { src: StaticImageData | string; alt?: string };

export default function HeroGallery({
  images,
  headerHeight = 72,
}: {
  images: Img[];
  headerHeight?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByViewport = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="relative w-full">
      {/* chevron buttons */}
      <ScrollChevron
        dir={-1}
        side="left"
        ariaLabel="Previous image"
        onClick={() => scrollByViewport(-1)}
      />
      <ScrollChevron
        dir={1}
        side="right"
        ariaLabel="Next image"
        onClick={() => scrollByViewport(1)}
      />

      {/* scroller */}
      <div
        ref={scrollerRef}
        className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        <ul className="flex w-full">
          {images.map((img, i) => (
            <li
              key={i}
              className="relative w-full shrink-0 snap-start"
              style={{
                height: `calc(100vh - ${headerHeight}px)`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt ?? `Photo ${i + 1}`}
                fill
                className="object-cover object-bottom"
                sizes="100vw"
                priority={i === 0}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
