// File: /components/Footer.tsx
"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/locale-context";
import { tFooter } from "@/i18n/site-wide/footer";

export default function Footer() {
  const { locale } = useLocale();
  const i = tFooter(locale);
  const [expanded, setExpanded] = useState(false);
  const legalId = "footer-legal";

  return (
    <footer className="w-full bg-accent text-accent-foreground">
      {/* ===== Legal (full-width, appears first) ===== */}
      <section className="px-6 lg:px-8 py-10 border-b border-border/50">
        <h3 className="font-semibold text-lg">{i.legal.title}</h3>

        <div className="relative mt-2 text-xs leading-relaxed">
          {/* Collapsible area */}
          <div
            id={legalId}
            className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
              expanded ? "max-h-[48rem]" : "max-h-24"
            }`}
            aria-live="polite"
          >
            <p className="opacity-70">{i.legal.disclaimer}</p>
          </div>

          {/* Fade when collapsed */}
          {!expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-accent to-accent/0" />
          )}

          {/* Toggle */}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-xs underline underline-offset-2 hover:opacity-90"
            aria-expanded={expanded}
            aria-controls={legalId}
          >
            {expanded ? i.legal.less : i.legal.more}
          </button>
        </div>
      </section>

      {/* ===== Brand + Contact (below, separate block) ===== */}
      <section className="px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="font-semibold text-lg">{i.brand}</div>
          <p className="mt-2 text-sm opacity-80">{i.tagline}</p>
        </div>

        <div>
          <div className="font-semibold text-lg">{i.contact.title}</div>
          <ul className="mt-2 text-sm space-y-1 opacity-90">
            <li>
              {i.contact.phoneLabel}: {i.contact.phone}
            </li>
            <li>
              {i.contact.emailLabel}: {i.contact.email}
            </li>
            <li>
              {i.contact.addressLabel}: {i.contact.address}
            </li>
          </ul>
        </div>

        {/* (Optional third column reserved for later content) */}
        <div />
      </section>

      {/* ===== Bottom bar ===== */}
      <div className="bg-accent border-t border-border">
        <div className="px-6 lg:px-8 py-6 text-xs opacity-70">
          © {new Date().getFullYear()} {i.brand}. {i.legal.rights}
        </div>
      </div>
    </footer>
  );
}
