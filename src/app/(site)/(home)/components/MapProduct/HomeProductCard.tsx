// File: src/app/(site)/(home)/components/MapProduct/HomeProductCard.tsx
"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/locale-context";
import { tHome } from "@/app/(site)/(home)/i18n";
import type { HomeProductSectionI18n } from "@/app/(site)/(home)/i18n/product-section";

type ProductId = HomeProductSectionI18n["products"][number]["id"];
type ThemeKey = "FL" | "NC" | "chrome";

export default function HomeProductCard({
  productId,
  className,
  imageSrc,
  theme, // <- choose card theme: "FL" | "NC" | "chrome"
}: {
  productId: ProductId;
  className?: string;
  imageSrc?: string;
  theme?: ThemeKey;
}) {
  const { locale } = useLocale();
  const i = tHome(locale).productSection;
  const p = i.products.find((x) => x.id === productId);
  if (!p) return null;

  // Default theme based on product region if not provided
  const themeKey: ThemeKey = theme ?? (p.region === "FL" ? "FL" : "NC");

  const btnTheme =
    themeKey === "FL"
      ? "bg-FL text-FL-foreground hover:opacity-90 focus:ring-FL/40"
      : themeKey === "NC"
      ? "bg-NC text-NC-foreground hover:opacity-90 focus:ring-NC/40"
      : "bg-chrome text-chrome-foreground hover:opacity-90 focus:ring-chrome/40";

  const stripBg =
    themeKey === "FL" ? "bg-FL" : themeKey === "NC" ? "bg-NC" : "bg-chrome";

  return (
    <article
      className={[
        "relative h-full w-full rounded-2xl border border-border bg-white shadow-xl shadow-black/5",
        "overflow-hidden grid grid-rows-[minmax(140px,1fr)_auto_auto]",
        className ?? "",
      ].join(" ")}
    >
      {/* Theme strip */}
      <div className={`absolute inset-x-0 top-0 h-1 ${stripBg}`} />

      {/* Media */}
      <div className="relative flex items-center justify-center bg-surface">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={p.title}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="text-sm text-foreground/50">{p.title}</div>
        )}
      </div>

      {/* Copy */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-foreground/70">{p.summary}</p>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <Link
          href={p.href}
          aria-label={`${p.cta}: ${p.title}`}
          className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 ${btnTheme}`}
        >
          {p.cta}
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="shrink-0"
          >
            <path
              d="M5 12h12M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
