// file: src/components/site-wide/InvestmentDescription.tsx
"use client";

import * as React from "react";

export type InvestmentPoint = {
  title: string;
  description?: string;
  href?: string;
};

export type InvestmentDescriptionProps = {
  id?: string;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  items: InvestmentPoint[];
  align?: "top" | "center";
  rightWidth?: string;
  className?: string;
};

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

export default function InvestmentDescription({
  id,
  heading,
  body,
  items,
  align = "top",
  rightWidth = "480px",
  className,
}: InvestmentDescriptionProps) {
  return (
    <section
      id={id}
      className={cx(
        "w-full py-24 lg:py-32",
        "bg-accent text-accent-foreground overflow-hidden",
        className
      )}
    >
      <div
        className={cx(
          // full width container
          "w-full px-6 sm:px-12 lg:px-20",
          "grid gap-10 lg:gap-24",
          "lg:grid-cols-[1fr_var(--right-w)]",
          align === "center" && "items-center"
        )}
        style={{ "--right-w": rightWidth } as React.CSSProperties}
      >
        {/* Left column */}
        <div className="max-w-3xl">
          {heading && (
            <div className="space-y-5">
              <div className="text-accent-foreground">{heading}</div>
              {body && (
                <div className="text-lg text-accent-foreground/90 leading-relaxed">
                  {body}
                </div>
              )}
            </div>
          )}
          {!heading && body}
        </div>

        {/* Right column */}
        <div className="lg:ps-16">
          <ul className="space-y-6">
            {items.map((it, idx) => (
              <li key={idx}>
                {it.href ? (
                  <a href={it.href} className="group inline-block">
                    <div className="text-lg font-semibold leading-tight group-hover:underline">
                      {it.title}
                    </div>
                    {it.description && (
                      <p className="mt-1 text-accent-foreground/80 text-sm leading-relaxed">
                        {it.description}
                      </p>
                    )}
                  </a>
                ) : (
                  <div>
                    <div className="text-lg font-semibold leading-tight">
                      {it.title}
                    </div>
                    {it.description && (
                      <p className="mt-1 text-accent-foreground/80 text-sm leading-relaxed">
                        {it.description}
                      </p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
