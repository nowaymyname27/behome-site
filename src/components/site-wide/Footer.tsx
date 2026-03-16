// File: /components/Footer.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Instagram, Linkedin } from "lucide-react";

import { getHeaderNav } from "../../i18n/site-wide/header";
import { useLocale } from "../../i18n/locale-context";
import { tFooter } from "../../i18n/site-wide/footer";

export default function Footer() {
  const { locale } = useLocale();
  const i = tFooter(locale);
  const nav = useMemo(
    () => [{ href: "/", label: i.navigation.home }, ...getHeaderNav(locale)],
    [i.navigation.home, locale]
  );

  const [expanded, setExpanded] = useState(false);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const legalId = "footer-legal";

  const documents = i.legal.documents; // ReadonlyArray<LegalDoc> | undefined
  const hasDocuments = Boolean(documents?.length);

  const activeDoc = useMemo(() => {
    if (!documents?.length) return null;
    const id = activeDocId ?? documents[0].id;
    return documents.find((d) => d.id === id) ?? documents[0];
  }, [documents, activeDocId]);

  const socialLinks = [
    {
      id: "instagram",
      href: "#",
      label: i.social.instagram,
      icon: Instagram,
    },
    {
      id: "linkedin",
      href: "#",
      label: i.social.linkedin,
      icon: Linkedin,
    },
  ] as const;

  return (
    <footer className="w-full bg-chrome text-chrome-foreground">
      <section className="px-6 lg:px-24 py-10 grid gap-6 md:grid-cols-[1.15fr_0.9fr_0.95fr] md:gap-5 lg:gap-6">
        <div>
          <div className="font-semibold text-lg">{i.brand}</div>
          <p className="mt-2 text-sm opacity-85 max-w-lg">{i.tagline}</p>
        </div>

        <div>
          <div className="font-semibold text-lg">{i.navigation.title}</div>
          <nav className="mt-1.5 flex flex-col gap-0.5 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit opacity-80 hover:opacity-100 hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="font-semibold text-lg">{i.contact.title}</div>
          <ul className="mt-1.5 text-sm space-y-0.5 opacity-90">
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

          <div className="mt-3 flex items-center gap-3">
            <span className="text-xs opacity-70">{i.social.title}</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 opacity-80 transition hover:opacity-100 hover:border-white"
                >
                  <Icon size={16} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-24 py-6 border-t border-white/20">
        <h3 className="font-semibold text-base">{i.legal.title}</h3>

        {hasDocuments && (
          <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
            {documents.map((doc) => {
              const active = (activeDoc?.id ?? "") === doc.id;
              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => setActiveDocId(doc.id)}
                  className={`px-2 py-0.5 rounded border transition ${
                    active
                      ? "bg-white text-chrome border-white"
                      : "border-white/35 text-chrome-foreground/90 hover:border-white/60"
                  }`}
                >
                  {doc.title}
                </button>
              );
            })}
          </div>
        )}

        <div className="relative mt-1 text-[11px] leading-relaxed text-chrome-foreground/80">
          <div
            id={legalId}
            className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
              expanded ? "max-h-[64rem]" : "max-h-14"
            }`}
            aria-live="polite"
          >
            {hasDocuments ? (
              <>
                {activeDoc?.lastUpdated && (
                  <div className="opacity-80 mb-2">{activeDoc.lastUpdated}</div>
                )}
                <pre className="whitespace-pre-wrap font-sans">
                  {activeDoc?.content}
                </pre>
              </>
            ) : (
              <p>{i.legal.disclaimer}</p>
            )}
          </div>

          {!expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6" />
          )}

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1 text-[11px] underline underline-offset-2 opacity-80 hover:opacity-100"
            aria-expanded={expanded}
            aria-controls={legalId}
          >
            {expanded ? i.legal.less : i.legal.more}
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-80">
          © {new Date().getFullYear()} {i.brand}. {i.legal.rights}
        </div>
      </section>
    </footer>
  );
}
