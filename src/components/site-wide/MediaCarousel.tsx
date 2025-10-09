// file: src/components/site-wide/MediaCarousel.tsx
"use client";

import * as React from "react";

export type MediaItem =
  | { type?: "image"; src: string; alt: string; caption?: string }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt: string;
      caption?: string;
      muted?: boolean;
      loop?: boolean;
      autoplay?: boolean;
    };

export type MediaCarouselProps = {
  media: MediaItem[];
  aspect?: string;
  initial?: number;
  label?: string;
  className?: string;
  showDetailsCard?: boolean;
  detailsLink?: string;
  detailsLabel?: string;
  /** Total px occupied by sticky headers above the viewport */
  viewportOffset?: number; // e.g. 192
};

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function MediaCarousel({
  media,
  aspect = "16/9",
  initial = 0,
  label = "Home media",
  className,
  showDetailsCard = false,
  detailsLink = "#",
  detailsLabel = "See Details",
  viewportOffset = 0,
}: MediaCarouselProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const slidesRef = React.useRef<HTMLDivElement>(null);
  const [idx, setIdx] = React.useState(
    Math.max(0, Math.min(initial, media.length - 1))
  );

  const total = media.length + (showDetailsCard ? 1 : 0);

  const getSlideEl = (i: number) => {
    const slides = slidesRef.current;
    if (!slides) return null;
    return slides.children[i] as HTMLElement | null;
  };

  const scrollToIndex = (i: number, behavior: ScrollBehavior = "smooth") => {
    const viewport = viewportRef.current;
    const slide = getSlideEl(i);
    if (!viewport || !slide) return;
    viewport.scrollTo({ left: slide.offsetLeft, behavior });
    setIdx(i);
  };

  const prev = () => scrollToIndex((idx - 1 + total) % total);
  const next = () => scrollToIndex((idx + 1) % total);

  React.useEffect(() => {
    const viewport = viewportRef.current;
    const slides = slidesRef.current;
    if (!viewport || !slides) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.left) -
              Math.abs(b.boundingClientRect.left)
          );
        const top = visible[0];
        if (!top) return;
        const i = Array.from(slides.children).indexOf(top.target as Element);
        if (i >= 0) setIdx(i);
      },
      { root: viewport, threshold: 0.6 }
    );

    Array.from(slides.children).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [total]);

  React.useEffect(() => {
    const id = requestAnimationFrame(() => scrollToIndex(idx, "auto"));
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // ---- HEIGHT CONTROL VIA WRAPPER ----
  // If viewportOffset > 0, cap height to the visible area.
  const heightVar =
    viewportOffset > 0
      ? (`calc(100svh - ${viewportOffset}px)` as const)
      : undefined;

  return (
    <div
      className={cx("relative group", className)}
      aria-label={label}
      style={
        heightVar
          ? ({ ["--carousel-h" as any]: heightVar } as React.CSSProperties)
          : undefined
      }
    >
      {/* Scroll viewport */}
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={cx(
          "w-full overflow-x-auto no-scrollbar",
          "scroll-smooth snap-x snap-mandatory",
          heightVar && "h-[var(--carousel-h)]"
        )}
      >
        {/* Slides wrapper */}
        <div ref={slidesRef} className="flex w-full items-stretch">
          {media.map((m, i) => (
            <figure
              key={i}
              className="relative shrink-0 basis-full snap-center bg-surface"
              style={
                heightVar
                  ? { height: "var(--carousel-h)" } // fixed to visible viewport area
                  : { aspectRatio: aspect } // default behavior
              }
            >
              {m.type === "video" ? (
                <video
                  className="h-full w-full object-cover"
                  src={m.src}
                  poster={m.poster}
                  muted={(m as any).muted ?? true}
                  loop={(m as any).loop ?? true}
                  autoPlay={(m as any).autoplay ?? false}
                  playsInline
                  aria-label={m.alt}
                />
              ) : (
                <img
                  className="h-full w-full object-cover"
                  src={m.src}
                  alt={m.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              )}
              {m.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm px-3 py-2">
                  {m.caption}
                </figcaption>
              )}
            </figure>
          ))}

          {/* Final CTA slide */}
          {showDetailsCard && (
            <div
              className="relative shrink-0 basis-full snap-center flex items-center justify-center bg-accent text-accent-foreground"
              style={
                heightVar
                  ? { height: "var(--carousel-h)" }
                  : { aspectRatio: aspect }
              }
            >
              <div className="card p-8 text-center max-w-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Want to learn more?
                </h3>
                <p className="text-sm mb-5">
                  Explore detailed floor plans, materials, and neighborhood
                  insights.
                </p>
                <a href={detailsLink} className="btn btn-primary">
                  {detailsLabel}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Prev/Next buttons */}
      {total > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-chrome/70 text-chrome-foreground p-2 shadow-sm hover:bg-chrome transition focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-chrome/70 text-chrome-foreground p-2 shadow-sm hover:bg-chrome transition focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={cx(
                "h-1.5 rounded-full transition-all",
                i === idx
                  ? "w-6 bg-accent"
                  : "w-3 bg-foreground/40 hover:bg-foreground/60"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
