// file: src/app/(site)/cluster/components/useStickyOffsets.ts
"use client";
import * as React from "react";

const OVERLAP = 2; // subtract a hair to avoid seams/rounding issues

export default function useStickyOffsets() {
  const [top, setTop] = React.useState(0);

  React.useEffect(() => {
    const header = document.getElementById("site-header");
    const submenu = document.getElementById("cluster-submenu");

    const measure = () => {
      const hh = header ? header.getBoundingClientRect().height : 0;
      const sh = submenu ? submenu.getBoundingClientRect().height : 0;
      setTop(Math.max(0, Math.floor(hh + sh) - OVERLAP));
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (header) ro.observe(header);
    if (submenu) ro.observe(submenu);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return top;
}
