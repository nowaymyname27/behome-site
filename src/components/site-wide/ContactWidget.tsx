"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ChevronUp,
  Mail,
  MessageCircle,
  Minimize2,
  Phone,
} from "lucide-react";

import { useLocale } from "../../i18n/locale-context";
import { tFooter } from "../../i18n/site-wide/footer";

type ContactNumber = {
  display: string;
  language: string;
  telHref: string;
  whatsappHref: string;
};

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

export default function ContactWidget() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const i = tFooter(locale);
  const [atPageBottom, setAtPageBottom] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const numbers = useMemo(() => extractNumbers(i.contact.phone), [i.contact.phone]);

  useEffect(() => {
    let frame = 0;
    const syncPageBottom = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const { scrollHeight } = document.documentElement;
        const reachedBottom =
          window.scrollY + window.innerHeight >= scrollHeight - 400;
        setAtPageBottom(reachedBottom);
      });
    };

    syncPageBottom();
    window.addEventListener("scroll", syncPageBottom, { passive: true });
    window.addEventListener("resize", syncPageBottom);

    const resizeObserver = new ResizeObserver(syncPageBottom);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", syncPageBottom);
      window.removeEventListener("resize", syncPageBottom);
      resizeObserver.disconnect();
    };
  }, [pathname]);

  return (
    <motion.aside
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[1200]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.div
            key="expanded"
            id="contact-widget-panel"
            initial={{ opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="w-[calc(100vw-2rem)] max-w-[25rem] rounded-2xl border border-white/15 bg-[#13202b]/95 p-4 text-white shadow-2xl backdrop-blur-md sm:p-5"
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
                onClick={() => setIsOpen(false)}
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
                  <p className="text-sm font-medium text-white/95">
                    {number.display} ({number.language})
                  </p>
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
        ) : atPageBottom ? (
          <motion.button
            key="contact-prompt"
            type="button"
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            aria-expanded="false"
            aria-controls="contact-widget-panel"
            className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/25 bg-chrome/85 px-5 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition hover:bg-chrome focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-FL"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
              <Phone size={14} />
              {locale === "es" ? "Contacto" : "Contact Us"}
            </span>
            <ChevronUp size={14} className="text-white/80" />
          </motion.button>
        ) : (
          <motion.button
            key="contact-circle"
            type="button"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            aria-expanded="false"
            aria-controls="contact-widget-panel"
            aria-label={locale === "es" ? "Abrir contacto" : "Open contact"}
            title={locale === "es" ? "Abrir contacto" : "Open contact"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-chrome/35 text-white/90 shadow-lg backdrop-blur-sm transition-colors hover:bg-chrome/75 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-FL"
          >
            <Phone size={20} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
