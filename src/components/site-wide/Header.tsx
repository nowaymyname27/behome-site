"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { tHeader, getHeaderNav } from "@/i18n/site-wide/header";
import { useLocale, uiLangCode } from "@/i18n/locale-context";
import { useMemo, useState } from "react";

// strip a leading "/florida" so "/florida/cluster" -> "/cluster", "/florida" -> "/"
function rewriteFloridaPath(href: string | undefined) {
  if (!href) return href;
  const out = href.replace(/^\/florida(?=\/|$)/, "");
  return out === "" ? "/" : out;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const { locale, toggleLocale } = useLocale();

  const i = tHeader(locale);

  // Build nav:
  // 1) filter out partner-with-us
  // 2) rewrite any "/florida/..." hrefs to root-level ("/...")
  const nav = useMemo(() => {
    const raw = getHeaderNav(locale);
    return raw
      .filter(
        (item) =>
          item.state !== "partner-with-us" &&
          !item.href?.startsWith("/partner-with-us")
      )
      .map((item) => {
        const rewrittenHref = rewriteFloridaPath(item.href);
        const children = Array.isArray(item.children)
          ? item.children
              .filter((c) => !c.href?.startsWith("/partner-with-us"))
              .map((c) => ({ ...c, href: rewriteFloridaPath(c.href) }))
          : undefined;
        return { ...item, href: rewrittenHref, children };
      });
  }, [locale]);

  // Theming (kept simple now that pages are root-level)
  const headerTheme = "bg-chrome text-chrome-foreground";

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-[2000] w-full border-border ${headerTheme}`}
    >
      <div className="h-16 flex items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight text-xl">
          {i.brand}
        </Link>

        <nav className="flex items-center gap-6">
          {nav.map((item, idx) => {
            const hasChildren =
              Array.isArray(item.children) && item.children.length > 0;
            const isOpen = openIndex === idx;

            // Parent is considered active if any child href matches current path
            const anyChildActive =
              hasChildren &&
              item.children!.some(
                (c) => c.href !== "/" && pathname.startsWith(c.href!)
              );
            const isSectionActive =
              anyChildActive ||
              (!!item.href &&
                item.href !== "/" &&
                pathname.startsWith(item.href));

            if (!hasChildren) {
              return (
                <Link
                  key={item.href ?? idx}
                  href={item.href ?? "/"}
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

            // Parent with dropdown
            return (
              <div
                key={item.href ?? idx}
                className="relative"
                onPointerEnter={() => setOpenIndex(idx)}
                onPointerLeave={() =>
                  setOpenIndex((cur) => (cur === idx ? null : cur))
                }
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={item.href ?? item.children![0]?.href ?? "/"}
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
                    className={`absolute right-0 top-full w-56 overflow-hidden rounded-md border shadow-lg bg-chrome text-chrome-foreground border-border`}
                  >
                    <ul className="py-1">
                      {item.children!.map((child) => {
                        const childActive =
                          child.href !== "/" &&
                          !!child.href &&
                          pathname.startsWith(child.href);
                        return (
                          <li key={child.href}>
                            <Link
                              role="menuitem"
                              href={child.href ?? "/"}
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
            onClick={() => {
              // preserve ?state param across toggles if you need it:
              // const currentState = search.get("state");
              // (no-op for now)
              const { toggleLocale } = useLocale();
              toggleLocale();
            }}
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
