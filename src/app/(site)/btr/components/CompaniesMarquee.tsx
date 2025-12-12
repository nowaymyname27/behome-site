"use client";

import Image from "next/image";
import { COMPANIES } from "../data/companies";
import { useLocale } from "../../../../i18n/locale-context";
import { tCompaniesMarquee } from "../i18n"; // We will create this next

// Derive the exact type of a Company from the COMPANIES array
type Company = (typeof COMPANIES)[number];

export default function CompaniesMarquee() {
  const { locale } = useLocale();
  const t = tCompaniesMarquee(locale);

  const midpoint = Math.ceil(COMPANIES.length / 2);
  const topRow = COMPANIES.slice(0, midpoint);
  const bottomRow = COMPANIES.slice(midpoint);

  // duplicate arrays for smooth infinite scroll
  const row1 = [...topRow, ...topRow];
  const row2 = [...bottomRow, ...bottomRow];

  return (
    <section className="w-full py-24 bg-accent text-accent-foreground overflow-hidden">
      <h2 className="text-center text-3xl text-accent-foreground font-semibold mb-12">
        {t.title}
      </h2>

      <div className="relative w-full space-y-8 overflow-visible">
        {/* TOP ROW — leftward */}
        <div
          className="flex gap-6 whitespace-nowrap"
          style={{ animation: "marquee-left 95s linear infinite" }}
        >
          {row1.map((c, idx) => (
            <CompanyCard key={`row1-${idx}`} c={c} t={t} />
          ))}
        </div>

        {/* BOTTOM ROW — rightward */}
        <div
          className="flex gap-6 whitespace-nowrap"
          style={{ animation: "marquee-right 90s linear infinite" }}
        >
          {row2.map((c, idx) => (
            <CompanyCard key={`row2-${idx}`} c={c} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Pass translations (t) down to the card
function CompanyCard({
  c,
  t,
}: {
  c: Company;
  t: ReturnType<typeof tCompaniesMarquee>;
}) {
  return (
    <div className="relative group">
      {/* Tooltip */}
      <div
        className="
          absolute -top-10 left-1/2 -translate-x-1/2
          px-3 py-1 rounded-md bg-black/80 text-white text-xs
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
          whitespace-nowrap
          z-50
        "
      >
        {c.name}
      </div>

      <div
        className="
          shrink-0 px-6 py-6 rounded-xl 
          bg-NC/10 border border-FL/40 backdrop-blur-sm
          w-[260px] h-[200px]
          hover:bg-white/20 transition-all duration-300
          flex flex-col items-center
        "
      >
        {/* LARGE CENTERED LOGO */}
        {c.logo && (
          <div className="flex items-center justify-center flex-grow">
            <div className="relative w-[150px] h-[60px]">
              <Image
                src={c.logo}
                alt={`${c.name} ${t.logoAlt}`}
                fill
                className="object-contain opacity-90"
              />
            </div>
          </div>
        )}

        {/* BOTTOM TEXT */}
        <div className="w-full mt-auto pt-4">
          {c.homes && (
            <div className="text-black/70 text-[11px] text-center">
              {c.homes}
            </div>
          )}

          {c.markets && (
            <div className="text-black/70 text-[11px] text-center">
              {c.markets}
            </div>
          )}

          {c.value && !c.groupValue && (
            <div className="text-black/80 text-xs font-medium text-center mt-1">
              {c.value}
            </div>
          )}

          {c.groupValue && (
            <div className="text-black/60 text-[11px] text-center pt-2 border-t border-black/10">
              {t.groupValuedAt} {c.groupValue}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
