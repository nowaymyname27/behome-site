// File: src/app/(site)/(home)/components/Hero.tsx
"use client";

import { useLocale } from "@/i18n/locale-context";
import { tHome } from "@/app/(site)/(home)/i18n";

export default function Hero() {
  const { locale } = useLocale();
  const i = tHome(locale).hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Foreground content */}
      <div className="max-w-2xl bg-white/70 backdrop-blur rounded-2xl p-8 shadow text-center mx-6">
        <h1 className="h1">{i.title}</h1>
        <p className="mt-3 text-lg muted">{i.tagline}</p>
        <div className="mt-6 flex gap-3 justify-center">
          <a className="btn btn-FL" href="/florida">
            {i.ctas.florida}
          </a>
          <a className="btn btn-NC" href="/what-we-do">
            {i.ctas.northCarolina}
          </a>
        </div>
      </div>
    </section>
  );
}
