"use client";

import * as React from "react";
import Link from "next/link";
import type { Locale } from "../../../../i18n/locale-context";
import { tFlorida } from "../i18n";

export type MapCardProps = {
  id: string;
  title: string;
  description: string;
  href: string;
  active: boolean;
  onToggle: (id: string, nextActive: boolean) => void;
  swatchClass?: string;
  className?: string;
  locale: Locale;
};

export default function MapCard({
  id,
  title,
  description,
  href,
  active,
  onToggle,
  swatchClass = "bg-accent ring-accent/40",
  className = "",
  locale,
}: MapCardProps) {
  const i = tFlorida(locale).map.card;

  return (
    <div
      className={[
        "group relative rounded-2xl border border-border bg-background p-4 shadow transition",
        "hover:shadow-md",
        className,
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        {/* Color swatch */}
        <div
          className={[
            "mt-1 h-4 w-4 rounded-full ring-4 border border-border",
            swatchClass,
          ].join(" ")}
          aria-hidden
        />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-foreground">{title}</h3>

            <Toggle
              checked={active}
              onChange={(next) => onToggle(id, next)}
              ariaLabel={i.toggleAria.replace("{title}", title)}
              accentClass={swatchClass}
            />
          </div>

          <p className="mt-1 text-sm text-muted-foreground">{description}</p>

          <div className="mt-3">
            <Link href={href} className="btn btn-FL">
              {i.explore}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Accessible toggle with persistent accent color (off + on) and depth */
function Toggle({
  checked,
  onChange,
  ariaLabel,
  accentClass = "bg-accent ring-accent/40",
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  ariaLabel?: string;
  accentClass?: string;
}) {
  const tokens = accentClass.trim().split(/\s+/).filter(Boolean);
  const bgToken = tokens.find((t) => t.startsWith("bg-")) ?? "bg-accent";
  const ringToken =
    tokens.find((t) => t.startsWith("ring-")) ?? "ring-accent/40";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
      className={[
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent",
        checked
          ? `${bgToken} shadow-inner`
          : `bg-background border border-border ${ringToken} ring-2 ring-offset-2 ring-offset-background`,
      ].join(" ")}
    >
      <span
        className={[
          "pointer-events-none absolute top-0.5 left-0.5 inline-flex h-5 w-5 transform items-center justify-center rounded-full",
          "bg-background shadow-md ring-1 ring-black/5 transition-transform",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      >
        <span
          className={[
            "h-2.5 w-2.5 rounded-full transition-opacity",
            checked ? "opacity-0" : bgToken,
          ].join(" ")}
        />
      </span>
    </button>
  );
}
