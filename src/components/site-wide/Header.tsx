// File: src/components/site-wide/Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tHeader, getHeaderNav } from "../../i18n/site-wide/header";
import { useLocale, uiLangCode } from "../../i18n/locale-context";
import { useMemo } from "react";

export default function Header() {
  const pathname = usePathname() || "/";
  const { locale, toggleLocale } = useLocale();
  const i = tHeader(locale);

  // Products + Explore Florida (no "Home" item; brand acts as home)
  const nav = useMemo(() => getHeaderNav(locale), [locale]);

  return (
    <header
      id="site-header"
      className="sticky top-0 z-[2000] w-full border-b border-border bg-chrome text-chrome-foreground"
    >
      <div className="h-16 flex items-center justify-between px-6 lg:px-24">
        <Link href="/" className="font-semibold tracking-tight text-xl">
          {i.brand}
        </Link>

        <nav className="flex items-center gap-6">
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

          <button
            onClick={toggleLocale}
            className="text-sm font-semibold transition opacity-80 hover:text-accent"
            aria-label={i.langToggleAria}
            title={i.langToggleAria}
          >
            {uiLangCode(locale)}
          </button>
        </nav>
      </div>
    </header>
  );
}
