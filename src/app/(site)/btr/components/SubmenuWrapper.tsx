"use client";

import * as React from "react";
import SectionSubmenu from "../../../../components/site-wide/SectionSubmenu";

type Item = { id: string; label: string };

export type SubmenuWrapperProps = {
  items: Item[];
  headerOffset?: number;
  className?: string;
};

const OVERLAP = 1;

export default function SubmenuWrapper({
  items,
  headerOffset,
  className,
}: SubmenuWrapperProps) {
  const [visible, setVisible] = React.useState(false);
  const [measuredTop, setMeasuredTop] = React.useState<number | null>(null);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  // Measure header height
  React.useEffect(() => {
    if (typeof headerOffset === "number") {
      setMeasuredTop(headerOffset);
      return;
    }

    const header =
      document.getElementById("site-header") ||
      document.querySelector<HTMLElement>('header[role="banner"]');

    if (!header) {
      setMeasuredTop(80);
      return;
    }

    const apply = () =>
      setMeasuredTop(Math.round(header.getBoundingClientRect().height));

    apply();

    const ro = new ResizeObserver(apply);
    ro.observe(header);

    return () => ro.disconnect();
  }, [headerOffset]);

  // Sticky appear/disappear
  React.useEffect(() => {
    if (!sentinelRef.current || measuredTop == null) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      {
        root: null,
        rootMargin: `-${Math.max(0, measuredTop - OVERLAP)}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [measuredTop]);

  const stickyTop = Math.max(0, (measuredTop ?? 0) - OVERLAP);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px w-full" />

      <SectionSubmenu
        id="cluster-submenu"
        items={items}
        stickyTop={stickyTop}
        className={[
          "will-change-transform transition-all duration-300",
          "border-b border-border",
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
          "bg-background",
          "-mt-px",
          className || "",
        ].join(" ")}
      />
    </>
  );
}
