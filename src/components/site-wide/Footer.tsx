// File: /components/Footer.tsx
"use client";

import { useMemo, useState } from "react";
import { useLocale } from "../../i18n/locale-context";
import { tFooter } from "../../i18n/site-wide/footer";

// --- readonly-friendly types ---
type LegalDoc = Readonly<{
  id: string;
  title: string;
  content: string;
  lastUpdated?: string;
}>;

type FooterI18n = Readonly<{
  brand: string;
  tagline: string;
  contact: Readonly<{
    title: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    phone: string;
    email: string;
    address: string;
  }>;
  legal: Readonly<{
    title: string;
    disclaimer: string;
    rights: string;
    more: string;
    less: string;
    documents?: ReadonlyArray<LegalDoc>;
  }>;
}>;

export default function Footer() {
  const { locale } = useLocale();

  // Cast once to a readonly-compatible shape
  const i = tFooter(locale) as FooterI18n;

  const [expanded, setExpanded] = useState(false);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const legalId = "footer-legal";

  const documents = i.legal.documents; // ReadonlyArray<LegalDoc> | undefined
  const hasDocuments = Boolean(documents?.length);

  const activeDoc = useMemo<LegalDoc | null>(() => {
    if (!documents?.length) return null;
    const id = activeDocId ?? documents[0].id;
    return documents.find((d) => d.id === id) ?? documents[0];
  }, [documents, activeDocId]);

  return (
    <footer className="w-full bg-accent text-accent-foreground">
      {/* ===== Legal (full-width, appears first) ===== */}
      <section className="px-6 lg:px-8 py-10 border-b border-border/50">
        <h3 className="font-semibold text-lg">{i.legal.title}</h3>

        {hasDocuments && (
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {documents!.map((doc) => {
              const active = (activeDoc?.id ?? "") === doc.id;
              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => setActiveDocId(doc.id)}
                  className={`px-2 py-1 rounded border ${
                    active
                      ? "bg-accent-foreground text-accent"
                      : "border-border/60"
                  }`}
                >
                  {doc.title}
                </button>
              );
            })}
          </div>
        )}

        <div className="relative mt-3 text-xs leading-relaxed">
          <div
            id={legalId}
            className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
              expanded ? "max-h-[64rem]" : "max-h-24"
            }`}
            aria-live="polite"
          >
            {hasDocuments ? (
              <>
                {activeDoc?.lastUpdated && (
                  <div className="opacity-70 mb-2">{activeDoc.lastUpdated}</div>
                )}
                <pre className="whitespace-pre-wrap opacity-70 font-sans">
                  {activeDoc?.content}
                </pre>
              </>
            ) : (
              <p className="opacity-70">{i.legal.disclaimer}</p>
            )}
          </div>

          {!expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-accent to-accent/0" />
          )}

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

      {/* ===== Brand + Contact ===== */}
      <section className="px-6 bg-chrome text-chrome-foreground lg:px-8 py-12 grid gap-10 sm:grid-cols-3">
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

        <div />
      </section>

      {/* ===== Bottom bar ===== */}
      <div className="bg-chrome text-chrome-foreground border-t border-border">
        <div className="px-6 lg:px-8 py-6 text-xs opacity-70">
          © {new Date().getFullYear()} {i.brand}. {i.legal.rights}
        </div>
      </div>
    </footer>
  );
}
