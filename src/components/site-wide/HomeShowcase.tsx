"use client";

import * as React from "react";
import { useLocale } from "../../i18n/locale-context";
import { tSite } from "../../i18n/site-wide";

export type HomeSpec = {
  id: string;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  cars: number;
  cta?: { href: string }; // label removed
};

export type HomeShowcaseProps = {
  home: HomeSpec;
  children?: React.ReactNode;
  className?: string;
  stickyHeader?: boolean;
  stickyTop?: number;
};

function formatNumber(v: number, locale: "en" | "es" = "en") {
  return new Intl.NumberFormat(locale === "es" ? "es-US" : "en-US").format(v);
}

export default function HomeShowcase({
  home,
  children,
  className,
  stickyHeader = true,
  stickyTop = 128,
}: HomeShowcaseProps) {
  const { locale } = useLocale();
  const i18n = tSite(locale).homeShowcase;

  return (
    <section
      id={home.id}
      style={{ scrollMarginTop: stickyHeader ? stickyTop : undefined }}
      className={`w-full bg-background text-foreground ${className ?? ""}`}
    >
      <div
        className={[
          "w-full px-6 sm:px-12 lg:px-20",
          stickyHeader
            ? "sticky z-20 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
            : "",
        ].join(" ")}
        style={stickyHeader ? { top: stickyTop } : undefined}
      >
        <header className="py-3 lg:py-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">
            <div>
              <h2 className="h2 leading-tight">{home.name}</h2>

              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5 text-sm sm:text-[15px] text-foreground/80">
                <span>
                  {formatNumber(home.sqft, locale)} {i18n.sqftUnit}
                </span>
                <span>
                  {home.beds} {i18n.bedsLabel}
                </span>
                <span>
                  {home.baths} {i18n.bathsLabel}
                </span>
                <span>
                  {home.cars} {i18n.carsLabel}
                </span>
              </div>
            </div>
          </div>

          {home.cta && (
            <div className="mt-2">
              <a
                href={home.cta.href}
                className="text-sm underline-offset-2 hover:underline focus:underline outline-none"
                style={{ color: "var(--color-NC)" }}
              >
                {/* Always use i18n label */}
                {i18n.viewDetailsLabel}
              </a>
            </div>
          )}
        </header>
      </div>

      <div className="w-full">{children}</div>
    </section>
  );
}
