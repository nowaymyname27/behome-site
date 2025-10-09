// file: src/components/florida/FloridaBrochure.tsx
"use client";

import { useLocale } from "@/i18n/locale-context";
import Brochure, { useBrochure } from "@/components/site-wide/Brochure";
import Panel from "@/components/site-wide/Panel";
import ScrollChevron from "@/components/site-wide/primitives/ScrollChevron";

export default function FloridaBrochure() {
  const { locale } = useLocale();

  const i =
    locale === "es"
      ? {
          left: {
            title: "Sarasota de un vistazo",
            leadEm: "Playas bañadas por el sol, arte y gastronomía,",
            leadRest:
              " barrios conectados — descubre por qué destaca Sarasota.",
          },
          aria: {
            panels: "Aspectos destacados de Sarasota",
            previous: "Anterior",
            next: "Siguiente",
          },
        }
      : {
          left: {
            title: "Sarasota at a Glance",
            leadEm: "Sunlit beaches, arts & dining,",
            leadRest:
              " and connected neighborhoods—see why Sarasota stands out.",
          },
          aria: {
            panels: "Sarasota highlights",
            previous: "Previous",
            next: "Next",
          },
        };

  const slides =
    locale === "es" ? getSarasotaSlidesES() : getSarasotaSlidesEN(); // ensure each slide has {src, title, caption, body?}

  return (
    <Brochure>
      <Brochure.Grid>
        <Brochure.Left>
          <h2 className="h2">{i.left.title}</h2>
          <p className="mt-3 text-lg max-w-sm">
            <span className="text-accent font-semibold">{i.left.leadEm}</span>{" "}
            {i.left.leadRest}
          </p>
          <p className="mt-3 text-sm opacity-80">
            Tip: tap a card to read more.
          </p>
        </Brochure.Left>

        <Brochure.Right>
          <Brochure.Track ariaLabel={i.aria.panels}>
            <PanelsList slides={slides} />
          </Brochure.Track>

          <Chevrons prevLabel={i.aria.previous} nextLabel={i.aria.next} />
        </Brochure.Right>
      </Brochure.Grid>
    </Brochure>
  );
}

/* --- helpers (inside provider) --- */

function PanelsList({
  slides,
}: {
  slides: Array<{ src: string; title: string; caption: string; body?: string }>;
}) {
  const { openIndex, setOpenIndex } = useBrochure();

  return (
    <>
      {slides.map((s, idx) => {
        const flipped = openIndex === idx;
        return (
          <Panel
            key={idx}
            src={s.src}
            title={s.title}
            caption={s.caption}
            body={s.body}
            isFlipped={flipped}
            onOpen={() => setOpenIndex(flipped ? null : idx)}
            className="
              relative snap-start shrink-0
              w-[80%] sm:w-[60%] lg:w-[42%] xl:w-[32%]
              aspect-[2/3]
            "
          />
        );
      })}
    </>
  );
}

function Chevrons({
  prevLabel,
  nextLabel,
}: {
  prevLabel: string;
  nextLabel: string;
}) {
  const { scrollByPanel } = useBrochure();
  return (
    <>
      <ScrollChevron
        dir={-1}
        side="left"
        ariaLabel={prevLabel}
        onClick={() => scrollByPanel(-1)}
      />
      <ScrollChevron
        dir={1}
        side="right"
        ariaLabel={nextLabel}
        onClick={() => scrollByPanel(1)}
      />
    </>
  );
}

/* --- slide data (public/ images; adjust paths as needed) --- */

function getSarasotaSlidesEN() {
  return [
    {
      src: "/images/florida/sarasota/beach.jpg",
      title: "Beaches & Outdoors",
      caption:
        "Siesta Key’s powder-soft sand, bayfront trails, and Gulf sunsets.",
      body: "Miles of coastline, boat launches, and nature preserves make Sarasota an everyday escape.",
    },
    {
      src: "/images/florida/sarasota/neighborhoods.jpg",
      title: "Connected Neighborhoods",
      caption:
        "Walkable streets, pocket parks, and daily essentials within reach.",
      body: "From downtown to Palmer Ranch, neighborhoods balance calm streets with quick access.",
    },
    {
      src: "/images/florida/sarasota/culture.jpg",
      title: "Arts, Culture & Dining",
      caption: "The Ringling, Sarasota Opera, galleries—and coastal dining.",
      body: "A year-round calendar of performances, festivals, and local restaurants fuels a vibrant scene.",
    },
    {
      src: "/images/florida/sarasota/education.jpg",
      title: "Education & Work",
      caption:
        "Strong schools, healthcare and tech growth, easy regional access.",
      body: "Proximity to I-75 and Tampa Bay expands options for careers, colleges, and commutes.",
    },
    {
      src: "/images/florida/sarasota/homes.jpg",
      title: "Homes & Communities",
      caption:
        "Build-to-rent, single-family, and cluster communities—thoughtfully planned.",
      body: "Flexible floor plans, durable finishes, and shared green spaces designed for real life.",
    },
  ];
}

function getSarasotaSlidesES() {
  return [
    {
      src: "/images/florida/sarasota/beach.jpg",
      title: "Playas y Naturaleza",
      caption:
        "Arena suave de Siesta Key, senderos junto a la bahía y atardeceres.",
      body: "Kilómetros de costa, rampas para botes y reservas naturales para disfrutar cada día.",
    },
    {
      src: "/images/florida/sarasota/neighborhoods.jpg",
      title: "Barrios Conectados",
      caption:
        "Calles caminables, parques de bolsillo y servicios cotidianos cerca.",
      body: "Del centro a Palmer Ranch, los barrios combinan calma con acceso rápido.",
    },
    {
      src: "/images/florida/sarasota/culture.jpg",
      title: "Arte, Cultura y Gastronomía",
      caption: "The Ringling, Ópera de Sarasota, galerías y cocina costera.",
      body: "Una agenda activa de espectáculos, festivales y restaurantes locales.",
    },
    {
      src: "/images/florida/sarasota/education.jpg",
      title: "Educación y Trabajo",
      caption:
        "Buenas escuelas, crecimiento en salud y tecnología, acceso regional.",
      body: "La cercanía a la I-75 y Tampa Bay amplía opciones de estudio y empleo.",
    },
    {
      src: "/images/florida/sarasota/homes.jpg",
      title: "Viviendas y Comunidades",
      caption:
        "Build-to-rent, casas unifamiliares y clústeres bien planificados.",
      body: "Planos flexibles, acabados duraderos y áreas verdes compartidas.",
    },
  ];
}
