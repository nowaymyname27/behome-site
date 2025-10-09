// src/components/site-wide/MapCard.tsx
"use client";

import * as React from "react";

/**
 * MapCard: a composable card primitive tuned for map-side selectors.
 * - No required props; edit content directly inside.
 * - Use `data-active="true"` on <MapCard.Root> to apply selected styling.
 * - Add sizing/aspect in the wrapper (e.g., `aspect-square` or `aspect-[5/4]`).
 */

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;
type H3Props = React.HTMLAttributes<HTMLHeadingElement>;

function Root({ className = "", ...props }: DivProps) {
  return (
    <div
      className={[
        // frame
        "relative overflow-hidden rounded-xl border border-border bg-background",
        // default depth + hover
        "shadow transition hover:shadow-md",
        // selected state (toggle via data-active on the element)
        "data-[active=true]:ring-2 data-[active=true]:ring-accent data-[active=true]:border-transparent",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

function Content({ className = "", ...props }: DivProps) {
  return (
    <div
      className={["p-4 sm:p-5 flex flex-col h-full", className].join(" ")}
      {...props}
    />
  );
}

function Header({ className = "", ...props }: DivProps) {
  return (
    <div
      className={["flex items-start justify-between gap-3", className].join(
        " "
      )}
      {...props}
    />
  );
}

function Title({ className = "", ...props }: H3Props) {
  return (
    <h3
      className={[
        "text-base sm:text-lg font-semibold tracking-tight",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

function Badge({ className = "", ...props }: SpanProps) {
  return (
    <span
      className={[
        "rounded-full text-[11px] sm:text-xs px-2 py-0.5 leading-5 border",
        "bg-chrome/60 text-foreground border-border",
        // when parent is active, invert badge to match accent ring
        "group-data-[active=true]:bg-accent group-data-[active=true]:text-accent-foreground group-data-[active=true]:border-transparent",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

function Body({ className = "", ...props }: DivProps) {
  return <div className={["mt-1.5 muted", className].join(" ")} {...props} />;
}

function Actions({ className = "", ...props }: DivProps) {
  return (
    <div
      className={["mt-auto pt-3 flex items-center gap-2.5", className].join(
        " "
      )}
      {...props}
    />
  );
}

const MapCard = Object.assign(Root, {
  Content,
  Header,
  Title,
  Badge,
  Body,
  Actions,
});

export default MapCard;
