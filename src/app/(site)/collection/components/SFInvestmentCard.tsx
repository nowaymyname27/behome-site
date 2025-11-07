// src/app/(site)/build-to-rent/components/SFInvestmentCard.tsx
"use client";
import * as React from "react";

export type Money = number; // cents or dollars? We'll assume dollars; format function handles it.

export type Kpi = {
  label: string;
  value: string;
  hint?: string;
};

export type InvestmentCardProps = {
  /** Card title */
  title?: string;
  /** Short one-liner under title */
  subtitle?: string;
  /** Primary numbers to highlight (e.g., Min Investment, Target IRR, Equity Multiple) */
  kpis?: Kpi[];
  /** Bulleted details explaining terms */
  details?: Array<{ label: string; value: string }>; // e.g., [{label:"Hold Period", value:"3–5 years"}]
  /** Price of entry */
  minInvestment?: Money;
  /** Call to action */
  cta?: { label: string; href?: string; onClick?: () => void };
  /** Visual style */
  variant?: "detailed" | "compact";
  /** Optional footnote text */
  footnote?: string;
  /** Class overrides */
  className?: string;
};

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

function formatMoney(value?: Money, opts: Intl.NumberFormatOptions = {}) {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    ...opts,
  }).format(value);
}

export default function InvestmentCard({
  title = "Cluster Home Investment",
  subtitle = "Own a share of a portfolio of new construction homes, professionally managed for stable income.",
  kpis = [
    { label: "Min Investment", value: formatMoney(25000) },
    { label: "Target IRR", value: "12–16%" },
    { label: "Equity Multiple", value: "1.6×–1.9×" },
  ],
  details = [
    { label: "Hold Period", value: "3–5 years" },
    { label: "Distribution", value: "Quarterly once stabilized" },
    { label: "Pref Return", value: "8% non-compounding" },
    { label: "Fees", value: "2% asset mgmt; standard close costs" },
  ],
  minInvestment = 25000,
  cta = { label: "See Offering", href: "/invest/cluster-homes" },
  variant = "detailed",
  footnote = "Targets are illustrative and not guaranteed. This is not an offer to sell securities.",
  className,
}: InvestmentCardProps) {
  return (
    <div
      className={cx(
        "relative max-w-2xl w-full rounded-2xl shadow-2xl border border-white/20",
        "bg-white/10 backdrop-blur-md text-white",
        "p-6 sm:p-8",
        className
      )}
    >
      <header className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/80 text-base sm:text-lg">{subtitle}</p>
        )}
      </header>

      {/* KPI Row */}
      {kpis?.length ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {kpis.map((k, i) => (
            <div
              key={i}
              className={cx(
                "rounded-xl border border-white/15",
                "bg-white/10 px-4 py-3 text-center"
              )}
            >
              <div className="text-sm uppercase tracking-wide text-white/70">
                {k.label}
              </div>
              <div className="text-xl sm:text-2xl font-semibold leading-none mt-1">
                {k.value}
              </div>
              {k.hint && (
                <div className="text-xs text-white/60 mt-1">{k.hint}</div>
              )}
            </div>
          ))}
        </div>
      ) : null}

      {/* Details */}
      {variant === "detailed" && details?.length ? (
        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {details.map((d, i) => (
            <div key={i} className="flex items-start gap-3">
              <dt className="shrink-0 text-white/60 text-sm w-28 sm:w-32">
                {d.label}
              </dt>
              <dd className="text-white text-sm sm:text-base leading-snug">
                {d.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {/* CTA */}
      {cta ? (
        <div className="mt-6">
          {cta.href ? (
            <a
              href={cta.href}
              className={cx(
                "inline-flex items-center justify-center",
                "rounded-xl px-5 py-3 font-medium",
                "bg-white text-black hover:bg-white/90 transition"
              )}
            >
              {cta.label}
            </a>
          ) : (
            <button
              type="button"
              onClick={cta.onClick}
              className={cx(
                "inline-flex items-center justify-center",
                "rounded-xl px-5 py-3 font-medium",
                "bg-white text-black hover:bg-white/90 transition"
              )}
            >
              {cta.label}
            </button>
          )}
        </div>
      ) : null}

      {footnote && (
        <p className="mt-4 text-xs leading-relaxed text-white/60">{footnote}</p>
      )}
    </div>
  );
}

// Optional named export utilities for reuse in pages
export const InvestmentUtils = { formatMoney };
