// File: src/components/site-wide/Header.tsx
"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { tHeader, getHeaderNav } from "@/i18n/site-wide/header";
import { useLocale, uiLangCode } from "@/i18n/locale-context";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const currentState = search.get("state");

  const { locale, toggleLocale } = useLocale();
  const i = tHeader(locale);
  const nav = getHeaderNav(locale);

  // Determine which site section we're on for theming + active state
  const activeKey: "florida" | "partner-with-us" | null = pathname.startsWith(
    "/florida"
  )
    ? "florida"
    : pathname.startsWith("/partner-with-us")
    ? "partner-with-us"
    : pathname === "/" &&
      (currentState === "florida" || currentState === "partner-with-us")
    ? (currentState as "florida" | "partner-with-us")
    : null;

  const headerTheme =
    activeKey === "florida"
      ? "bg-FL text-FL-foreground"
      : activeKey === "partner-with-us"
      ? "bg-NC text-NC-foreground"
      : "bg-chrome text-chrome-foreground"; // default: Home / What we do

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <header
      className={`sticky top-0 z-[2000] w-full border-border ${headerTheme}`}
    >
      <div className="h-16 flex items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight text-xl">
          {i.brand}
        </Link>

        <nav className="flex items-center gap-6">
          {nav.map((item, idx) => {
            const isSectionActive =
              item.state &&
              ((item.state === "florida" && pathname.startsWith("/florida")) ||
                (item.state === "partner-with-us" &&
                  pathname.startsWith("/partner-with-us")));

            const hasChildren =
              Array.isArray(item.children) && item.children.length > 0;
            const isOpen = openIndex === idx;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isSectionActive ? "page" : undefined}
                  className={`text-sm transition ${
                    isSectionActive
                      ? "text-accent"
                      : "opacity-80 hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            // Parent with dropdown (menu anchors to the right, extending left)
            return (
              <div
                key={item.href}
                className="relative"
                onPointerEnter={() => setOpenIndex(idx)}
                onPointerLeave={() =>
                  setOpenIndex((cur) => (cur === idx ? null : cur))
                }
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={item.href}
                    aria-current={isSectionActive ? "page" : undefined}
                    className={`text-sm transition ${
                      isSectionActive
                        ? "text-accent"
                        : "opacity-80 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>

                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-label={`${item.label} menu`}
                    className="text-sm opacity-70 hover:opacity-100"
                    onClick={() =>
                      setOpenIndex((cur) => (cur === idx ? null : idx))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setOpenIndex(null);
                    }}
                  >
                    ▾
                  </button>
                </div>

                {isOpen && (
                  <div
                    role="menu"
                    className={`absolute right-0 top-full w-56 overflow-hidden rounded-md border shadow-lg
                      ${
                        activeKey === "florida"
                          ? "bg-FL text-FL-foreground border-border"
                          : activeKey === "partner-with-us"
                          ? "bg-NC text-NC-foreground border-border"
                          : "bg-chrome text-chrome-foreground border-border"
                      }`}
                  >
                    <ul className="py-1">
                      {item.children!.map((child) => {
                        const childActive =
                          child.href !== "/" && pathname.startsWith(child.href);
                        return (
                          <li key={child.href}>
                            <Link
                              role="menuitem"
                              href={child.href}
                              className={`block px-3 py-2 text-sm transition ${
                                childActive
                                  ? "bg-accent/20"
                                  : "hover:bg-foreground/10"
                              }`}
                              onClick={() => setOpenIndex(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

          <button
            onClick={toggleLocale}
            className="text-sm font-semibold transition opacity-80 hover:text-accent"
            aria-label="Toggle language"
          >
            {uiLangCode(locale)}
          </button>
        </nav>
      </div>
    </header>
  );
}
