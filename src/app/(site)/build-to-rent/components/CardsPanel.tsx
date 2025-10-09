"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import HouseCard from "@/components/site-wide/HouseCard";

export type House = {
  id: string;
  image: { src: string; alt: string };
  address: string;
  price: number;
  beds: number;
  baths: number;
  cars: number;
  sqft: number;
  href: string;
  badge?: string;
};

export type CardsPanelHandle = {
  scrollToId: (id: string) => void;
};

export default forwardRef(function CardsPanel(
  {
    houses,
    selectedId,
    onSelect,
    className = "",
  }: {
    houses: House[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    className?: string;
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const programmaticRef = useRef(false);
  const [ioReady, setIoReady] = useState(false);

  // Expose scrollToId to parent
  useImperativeHandle(
    ref,
    () => ({
      scrollToId: (id: string) => {
        const node = itemRefs.current.get(id);
        const wrap = containerRef.current;
        if (!node || !wrap) return;
        programmaticRef.current = true;
        // Smooth scroll: center-ish position
        const wrapRect = wrap.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const delta =
          nodeRect.top -
          wrapRect.top -
          wrap.clientHeight / 2 +
          node.clientHeight / 2;
        wrap.scrollBy({ top: delta, behavior: "smooth" });
        // Clear guard after the scroll has time to settle
        window.setTimeout(() => {
          programmaticRef.current = false;
        }, 350);
      },
    }),
    []
  );

  // Track which card is most centered via IntersectionObserver
  useEffect(() => {
    const wrap = containerRef.current;
    if (!wrap) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (programmaticRef.current) return; // ignore programmatic scrolls
        // Find the entry with largest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        const id = best?.target.getAttribute("data-id");
        if (id) onSelect(id);
      },
      {
        root: wrap,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    // Observe all items
    for (const [, node] of itemRefs.current.entries()) {
      observer.observe(node);
    }
    setIoReady(true);

    return () => observer.disconnect();
  }, [houses, onSelect]);

  // Keep map with refs in sync
  const setItemRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) itemRefs.current.set(id, el);
    else itemRefs.current.delete(id);
  };

  // Optional: ensure the current selected is in view on mount
  useEffect(() => {
    if (!ioReady || !selectedId) return;
    const node = itemRefs.current.get(selectedId);
    if (!node) return;
    node.scrollIntoView({ block: "nearest" });
  }, [ioReady, selectedId]);

  return (
    <div
      ref={containerRef}
      className={[
        "relative w-full",
        "h-[420px] overflow-auto",
        "snap-y snap-mandatory",
        "rounded-xl border border-border bg-background/60 shadow-sm",
        className,
      ].join(" ")}
    >
      <div className="p-4 space-y-4">
        {houses.map((h) => {
          const active = selectedId === h.id;
          return (
            <div
              key={h.id}
              ref={setItemRef(h.id)}
              data-id={h.id}
              className={[
                "snap-start",
                "transition-transform duration-200",
                active ? "scale-[1.01]" : "scale-100",
              ].join(" ")}
            >
              <HouseCard
                id={h.id}
                image={h.image}
                address={h.address}
                price={h.price}
                beds={h.beds}
                baths={h.baths}
                cars={h.cars}
                sqft={h.sqft}
                href={h.href}
                badge={h.badge}
                className={[
                  "!m-0",
                  active
                    ? "ring-2 ring-primary shadow-lg"
                    : "ring-1 ring-transparent",
                ].join(" ")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
