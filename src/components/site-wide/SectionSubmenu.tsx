// file: src/components/site-wide/SectionSubmenu.tsx
"use client";

import * as React from "react";

type Item = {
  id: string; // anchor target id on the page (e.g., "clyde-ii")
  label: string; // visible label (e.g., "Clyde II")
};

export type SectionSubmenuProps = {
  /** Optional DOM id so other code (e.g., sticky offset hook) can measure this bar */
  id?: string;
  items: Item[];
  /** Pixels to offset when scrolling (e.g., fixed header height).
   * If not provided, it reads from CSS var --header-h (fallback 80). */
  scrollOffset?: number;
  /** Optional controlled active id. If omitted, IntersectionObserver sets it for you. */
  activeId?: string;
  /** Notify when active item changes (from scroll or keyboard). */
  onActiveChange?: (id: string) => void;
  /** Sticky top offset (usually header height, or header+submenu when nested). */
  stickyTop?: number;
  className?: string;
};

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

export default function SectionSubmenu({
  id,
  items,
  scrollOffset,
  activeId: controlledActive,
  onActiveChange,
  stickyTop = 0,
  className,
}: SectionSubmenuProps) {
  const [activeId, setActiveId] = React.useState<string>(
    controlledActive ?? items[0]?.id
  );

  // Keep internal state in sync if controlled
  React.useEffect(() => {
    if (controlledActive) setActiveId(controlledActive);
  }, [controlledActive]);

  // Scroll-spy to update active tab
  React.useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );
        const topMost = visible[0];
        const id = topMost?.target.getAttribute("id") || undefined;
        if (id && !controlledActive) {
          setActiveId(id);
          onActiveChange?.(id);
        }
      },
      {
        root: null,
        rootMargin: `-${getOffset(scrollOffset)}px 0px -70% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const targets = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, controlledActive, scrollOffset]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - getOffset(scrollOffset);
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
    if (!controlledActive) setActiveId(id);
    onActiveChange?.(id);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const idx = Math.max(
      0,
      items.findIndex((i) => i.id === activeId)
    );
    const nextIdx =
      e.key === "ArrowLeft"
        ? (idx - 1 + items.length) % items.length
        : (idx + 1) % items.length;
    handleClick(items[nextIdx].id);
  };

  return (
    <nav
      id={id} // <-- now accepted
      aria-label="Homes"
      className={cx(
        "sticky z-30 border-b border-border bg-background",
        className
      )}
      style={{ top: stickyTop }}
    >
      <div className="w-full px-6 lg:px-21">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar"
          onKeyDown={onKeyDown}
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={item.id}
                onClick={() => handleClick(item.id)}
                className={cx(
                  "relative shrink-0 px-3 py-3 text-sm sm:text-base font-medium",
                  "text-foreground/80 hover:text-foreground transition-colors"
                )}
              >
                <span className="whitespace-nowrap">{item.label}</span>
                <span
                  className={cx(
                    "pointer-events-none absolute left-2 right-2 -bottom-px h-0.5 rounded",
                    isActive ? "bg-accent" : "bg-transparent"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function getOffset(explicit?: number) {
  if (typeof explicit === "number") return explicit;
  if (typeof window !== "undefined") {
    const root = getComputedStyle(document.documentElement);
    const varVal = root.getPropertyValue("--header-h").trim();
    const n = Number.parseInt(varVal || "", 10);
    if (!Number.isNaN(n)) return n;
  }
  return 80;
}
