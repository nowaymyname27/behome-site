// file: src/components/site-wide/HomeShowcase.tsx
"use client";

import * as React from "react";

export type HomeSpec = {
  id: string;
  name: string;
  sqft: number;
  stories: string;
  beds: number;
  baths: number;
  cars: number;
  price: number;
  estPayment?: number;
  cta?: { label: string; href: string };
};

export type HomeShowcaseProps = {
  home: HomeSpec;
  children?: React.ReactNode;
  className?: string;
  stickyHeader?: boolean;
  stickyTop?: number; // combined header+submenu from hook
};

function formatMoney(v: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v);
}

export default function HomeShowcase({
  home,
  children,
  className,
  stickyHeader = true,
  stickyTop = 128,
}: HomeShowcaseProps) {
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
        {/* tighter header */}
        <header className="py-3 lg:py-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">
            <div>
              <h2 className="h2 leading-tight">{home.name}</h2>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5 text-sm sm:text-[15px] text-foreground/80">
                <span>{home.sqft.toLocaleString()} Sq ft</span>
                <span>{home.stories}</span>
                <span>{home.beds} Beds</span>
                <span>{home.baths} Baths</span>
                <span>{home.cars} Cars</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
              <div>
                <div className="text-xs sm:text-sm text-foreground/70">
                  Estimated payment
                </div>
                {home.estPayment ? (
                  <div className="text-lg sm:text-xl font-semibold leading-none">
                    {formatMoney(home.estPayment)}
                    <span className="text-sm font-normal">/mo.</span>
                  </div>
                ) : (
                  <div className="text-base font-semibold">—</div>
                )}
              </div>

              <div>
                <div className="text-xs sm:text-sm text-foreground/70">
                  Starting price
                </div>
                <div className="text-lg sm:text-xl font-semibold leading-none">
                  {formatMoney(home.price)}
                </div>
                <div className="text-[11px] sm:text-xs text-foreground/60 mt-1">
                  Starting price may include lot premium
                </div>
              </div>
            </div>
          </div>

          {home.cta && (
            <div className="mt-2">
              <a
                href={home.cta.href}
                className="text-sm underline-offset-2 hover:underline focus:underline outline-none"
                // use theme var
                style={{ color: "var(--color-NC)" }}
              >
                {home.cta.label}
              </a>
            </div>
          )}
        </header>
      </div>

      <div className="w-full">{children}</div>
    </section>
  );
}
