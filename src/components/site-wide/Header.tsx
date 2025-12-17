"use client";

import Link from "next/link";
import Image from "next/image"; // 1. Import Image
import { usePathname } from "next/navigation";
import { tHeader, getHeaderNav } from "../../i18n/site-wide/header";
import { useLocale, uiLangCode } from "../../i18n/locale-context";
import { useMemo, useState } from "react";

export default function Header() {
  const pathname = usePathname() || "/";
  const { locale, toggleLocale } = useLocale();
  const i = tHeader(locale);
  const nav = useMemo(() => getHeaderNav(locale), [locale]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="site-header"
      className="sticky top-0 z-[2000] w-full border-b border-border bg-chrome text-chrome-foreground"
    >
      <div className="flex h-16 items-center justify-between px-6 lg:px-24">
        {/* Brand - Now using Logo Image */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="/RP_bluebg_logo.png" // ⚠️ Ensure this file exists in /public folder
            alt={i.brand}
            width={160} // Max width (adjust based on your logo's aspect ratio)
            height={40} // Max height
            priority // Loads immediately since it's above the fold
            className="h-8 w-auto object-contain" // Keeps it constrained to header height
          />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => {
              const isActive =
                item.href !== "/" && pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition ${
                    isActive ? "text-accent" : "opacity-80 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Language toggle (always visible) */}
          <button
            onClick={toggleLocale}
            className="text-sm font-semibold transition opacity-80 hover:text-accent"
            aria-label={i.langToggleAria}
            title={i.langToggleAria}
          >
            {uiLangCode(locale)}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden"
          >
            <span className="block h-0.5 w-6 bg-current mb-1" />
            <span className="block h-0.5 w-6 bg-current mb-1" />
            <span className="block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown (links only) */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-chrome">
          <nav className="flex flex-col items-center px-6 py-6 gap-6">
            {nav.map((item) => {
              const isActive =
                item.href !== "/" && pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "text-center",
                    "text-lg font-medium",
                    "transition",
                    "px-4 py-2",
                    isActive ? "text-accent" : "opacity-80 hover:text-accent",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
