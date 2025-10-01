// file: src/components/site-wide/Brochure.tsx
"use client";

import * as React from "react";

type Ctx = {
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
  trackRef: React.RefObject<HTMLDivElement | null>;
  scrollByPanel: (dir: -1 | 1) => void;
};

const BrochureCtx = React.createContext<Ctx | null>(null);
export function useBrochure() {
  const ctx = React.useContext(BrochureCtx);
  if (!ctx) throw new Error("useBrochure must be used inside <Brochure>");
  return ctx;
}

function Root({ children }: { children: React.ReactNode }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  const scrollByPanel = React.useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.firstElementChild as HTMLElement | null;
    const childWidth = child?.clientWidth ?? 0;
    el.scrollBy({ left: dir * (childWidth + 16), behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          scrollByPanel(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          scrollByPanel(-1);
        }
      } else if (e.key === "Escape") {
        setOpenIndex(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, scrollByPanel]);

  const value = React.useMemo(
    () => ({ openIndex, setOpenIndex, trackRef, scrollByPanel }),
    [openIndex, scrollByPanel]
  );

  return (
    <BrochureCtx.Provider value={value}>
      <section className="w-full bg-chrome text-chrome-foreground section-pad">
        {children}
      </section>
    </BrochureCtx.Provider>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
      {children}
    </div>
  );
}

function Left({ children }: { children: React.ReactNode }) {
  return <aside className="md:col-span-1">{children}</aside>;
}

function Right({ children }: { children: React.ReactNode }) {
  return <div className="md:col-span-2 relative">{children}</div>;
}

function Track({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  const { trackRef } = useBrochure();
  return (
    <div
      ref={trackRef}
      className="
        flex gap-4 overflow-x-auto snap-x snap-mandatory
        [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2
        [&::-webkit-scrollbar-track]:bg-chrome/30
        [&::-webkit-scrollbar-thumb]:bg-background/40
        pb-2
      "
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

const Brochure = Object.assign(Root, { Grid, Left, Right, Track });
export default Brochure;
