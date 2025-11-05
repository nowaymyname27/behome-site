// File: src/app/(site)/florida/i18n/brochure.ts
export const brochure = {
  en: {
    left: {
      title: "Sarasota At A glance",
      leadEm: "In Sarasota County —",
      leadRest:
        " a vibrant, family-oriented community where quality of life meets opportunity. Its growing economy, excellent schools, modern hospitals, and abundant parks make it one of Florida’s most desirable places to live. Surrounded by natural beauty and just minutes from Venice and Siesta Key, two of Florida’s best beaches, North Port offers a relaxed lifestyle, year-round sunshine, and a welcoming atmosphere for residents and visitors alike.",
      tip: "Tip: tap a card to read more.",
    },
    aria: {
      panels: "North Port highlights",
      previous: "Previous",
      next: "Next",
    },
    slides: [
      {
        src: "/images/florida/northport/beaches.jpg",
        title: "Best Beaches in Florida",
        caption:
          "Minutes from Venice Beach and Siesta Key—sun, surf, and Gulf sunsets await.",
        body: "Only a short drive from the white sands of Venice Beach and Siesta Key, North Port residents enjoy easy access to some of Florida’s most beautiful Gulf Coast beaches — perfect for swimming, boating, and unforgettable sunsets.",
      },
      {
        src: "/images/florida/northport/neighborhoods.jpg",
        title: "Livable Neighborhoods",
        caption:
          "Safe, modern communities with new homes and top-rated schools.",
        body: "Thoughtfully planned communities with new homes, safe streets, and excellent schools make North Port ideal for families and professionals seeking comfort, value, and long-term stability.",
      },
      {
        src: "/images/florida/northport/culture.jpg",
        title: "Parks, Culture & Dining",
        caption:
          "Outdoor recreation meets art, dining, and community all year long.",
        body: "From miles of greenways and natural springs to local art venues and diverse restaurants, North Port offers a rich lifestyle where outdoor recreation, culture, and cuisine come together year-round.",
      },
      {
        src: "/images/florida/northport/golf.jpg",
        title: "Golf & Recreation",
        caption:
          "Dozens of golf courses and outdoor escapes within easy reach.",
        body: "With dozens of golf courses nearby — from championship layouts to relaxed local clubs — North Port is a haven for golf enthusiasts who enjoy the game year-round amid Florida’s beautiful natural surroundings.",
      },
    ],
  },

  es: {
    left: {
      title: "Sarasota de un vistazo",
      leadEm: "En el condado de Sarasota —",
      leadRest:
        " una comunidad vibrante y familiar donde la calidad de vida se une con la oportunidad. Su economía en crecimiento, excelentes escuelas, hospitales modernos y abundantes parques la convierten en uno de los lugares más deseables para vivir en Florida. Rodeada de belleza natural y a solo minutos de Venice y Siesta Key, dos de las mejores playas del estado, North Port ofrece un estilo de vida relajado, sol todo el año y un ambiente acogedor para residentes y visitantes.",
      tip: "Consejo: toca una tarjeta para leer más.",
    },
    aria: {
      panels: "Aspectos destacados de North Port",
      previous: "Anterior",
      next: "Siguiente",
    },
    slides: [
      {
        src: "/images/florida/northport/beaches.jpg",
        title: "Las Mejores Playas de Florida",
        caption:
          "A minutos de Venice Beach y Siesta Key: sol, mar y atardeceres del Golfo.",
        body: "A poca distancia de las arenas blancas de Venice Beach y Siesta Key, los residentes de North Port disfrutan fácil acceso a algunas de las playas más hermosas de la costa oeste de Florida — perfectas para nadar, navegar y disfrutar de atardeceres inolvidables.",
      },
      {
        src: "/images/florida/northport/neighborhoods.jpg",
        title: "Barrios Habitables",
        caption:
          "Comunidades seguras y modernas con viviendas nuevas y excelentes escuelas.",
        body: "Comunidades cuidadosamente planificadas con calles seguras y escuelas de calidad hacen de North Port un lugar ideal para familias y profesionales que buscan comodidad, valor y estabilidad a largo plazo.",
      },
      {
        src: "/images/florida/northport/culture.jpg",
        title: "Parques, Cultura y Gastronomía",
        caption:
          "Naturaleza, arte y buena comida: un estilo de vida activo todo el año.",
        body: "Desde kilómetros de senderos y manantiales naturales hasta galerías locales y restaurantes diversos, North Port ofrece un estilo de vida rico donde la recreación al aire libre, la cultura y la gastronomía se unen durante todo el año.",
      },
      {
        src: "/images/florida/northport/golf.jpg",
        title: "Golf y Recreación",
        caption:
          "Docenas de campos de golf y espacios naturales a pocos minutos.",
        body: "Con docenas de campos de golf cercanos — desde diseños de campeonato hasta clubes locales — North Port es un paraíso para los amantes del golf que disfrutan del deporte todo el año entre la belleza natural de Florida.",
      },
    ],
  },
} as const;
