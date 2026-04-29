"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, Mail, MessageCircle, Minimize2, Phone } from "lucide-react";

import { useLocale } from "../../../../i18n/locale-context";
import { tFooter } from "../../../../i18n/site-wide/footer";

type ContactNumber = {
  display: string;
  language: string;
  telHref: string;
  whatsappHref: string;
};

const MINIMIZED_KEY = "sarahomes-contact-minimized";

function extractNumbers(phoneText: string): ContactNumber[] {
  const matches = [
    ...phoneText.matchAll(/(\+1 \(\d{3}\) \d{3}-\d{4}) \((English|Español)\)/g),
  ];

  const parsed = matches.map((m) => {
    const display = m[1];
    const language = m[2];
    const digits = display.replace(/\D/g, "");

    return {
      display,
      language,
      telHref: `tel:+${digits}`,
      whatsappHref: `https://wa.me/${digits}`,
    };
  });

  if (parsed.length) return parsed;

  return [
    {
      display: "+1 (786) 317-4888",
      language: "English",
      telHref: "tel:+17863174888",
      whatsappHref: "https://wa.me/17863174888",
    },
    {
      display: "+1 (786) 797-8010",
      language: "Español",
      telHref: "tel:+17867978010",
      whatsappHref: "https://wa.me/17867978010",
    },
  ];
}

export default function FloatingContactBox() {
  const { locale } = useLocale();
  const i = tFooter(locale);
  const [hasPassedCollection, setHasPassedCollection] = useState(false);
  const [minimized, setMinimized] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(MINIMIZED_KEY) === "1";
  });

  const numbers = useMemo(() => extractNumbers(i.contact.phone), [i.contact.phone]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = document.getElementById("sarahomes-collection");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const hasReachedCollection =
          entry.isIntersecting || entry.boundingClientRect.top < 0;
        setHasPassedCollection(hasReachedCollection);
      },
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(MINIMIZED_KEY, minimized ? "1" : "0");
    }
  }, [minimized]);

  if (!hasPassedCollection) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={[
        "fixed bottom-[max(0.25rem,env(safe-area-inset-bottom))] right-[max(0.25rem,env(safe-area-inset-right))] z-[1200]",
        minimized ? "w-auto" : "w-[calc(100vw-2rem)] max-w-[25rem]",
      ].join(" ")}
    >
      <AnimatePresence mode="wait" initial={false}>
        {minimized ? (
          <motion.button
            key="minimized"
            type="button"
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={() => setMinimized(false)}
            aria-expanded="false"
            aria-label={locale === "es" ? "Abrir contacto" : "Open contact"}
            className="inline-flex w-auto min-w-[13rem] items-center justify-between rounded-full border border-white/20 bg-[#13202b]/95 px-4 py-3 text-white shadow-2xl backdrop-blur-md sm:min-w-[16rem]"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
              <Phone size={14} />
              {locale === "es" ? "Contacto" : "Contact Us"}
            </span>
            <ChevronUp size={14} className="text-white/80" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="rounded-2xl border border-white/15 bg-[#13202b]/95 p-4 text-white shadow-2xl backdrop-blur-md sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/65">
                  {locale === "es" ? "Contacto" : "Contact"}
                </p>
                <h3 className="mt-1 text-2xl font-serif italic leading-none text-white">
                  {locale === "es" ? "Hablemos" : "Let’s Talk"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setMinimized(true)}
                aria-expanded="true"
                aria-label={locale === "es" ? "Minimizar contacto" : "Minimize contact"}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/85 transition hover:border-white/70 hover:text-white"
              >
                <Minimize2 size={15} />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {numbers.map((number) => (
                <div
                  key={number.display}
                  className="rounded-xl border border-white/15 bg-white/5 p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-white/95">
                      {number.display} ({number.language})
                    </p>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <Link
                      href={number.telHref}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-white/25 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/95 transition hover:border-white/70 hover:bg-white/10"
                    >
                      <Phone size={12} />
                      {locale === "es" ? "Llamar" : "Call"}
                    </Link>
                    <Link
                      href={number.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-[#23b566] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#1fa65d]"
                    >
                      <MessageCircle size={12} />
                      WhatsApp
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`mailto:${i.contact.email}`}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-3 py-2.5 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/15"
            >
              <Mail size={15} />
              {i.contact.email}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
