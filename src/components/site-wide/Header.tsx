// File: /components/Header.tsx
"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { tHeader, getHeaderNav } from "@/i18n/site-wide/header";
import { useLocale, uiLangCode } from "@/i18n/locale-context";

export default function Header() {
  const pathname = usePathname();
  const search = useSearchParams();
  const currentState = search.get("state");

  const { locale, toggleLocale } = useLocale();
  const i = tHeader(locale);
  const nav = getHeaderNav(locale);

  // Determine which site section we're on for theming + active state
  const activeKey: "fl" | "north-carolina" | null = pathname.startsWith(
    "/north-carolina"
  )
    ? "north-carolina"
    : pathname === "/" &&
      (currentState === "fl" || currentState === "north-carolina")
    ? (currentState as "fl" | "north-carolina")
    : null;

  const headerTheme =
    activeKey === "fl"
      ? "bg-FL text-FL-foreground"
      : activeKey === "north-carolina"
      ? "bg-NC text-NC-foreground"
      : "bg-chrome text-chrome-foreground"; // default: Home

  return (
    <header
      className={`sticky top-0 z-[2000] w-full border-border ${headerTheme}`}
    >
      <div className="h-16 flex items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight text-xl">
          {i.brand}
        </Link>

        <nav className="flex items-center gap-6">
          {nav.map((item) => {
            const isActive = item.state === activeKey;
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
            aria-label="Toggle language"
          >
            {uiLangCode(locale)}
          </button>
        </nav>
      </div>
    </header>
  );
}
