type Company = {
  name: string;
  logo?: string;
  homes?: string;
  markets?: string;
  value?: string;
  groupId?: string;
  groupValue?: string;
};

export const COMPANIES: Company[] = [
  {
    name: "Invitation Homes",
    homes: "81,716 homes",
    markets: "16 markets",
    value: "$30 – $35 Bn",
    logo: "/logos/invitation-homes.svg",
  },
  {
    name: "Pretium Partners",
    homes: "83,502 homes",
    value: "$27 – $33 Bn",
    logo: "/logos/pretium-logo.svg",
  },
  {
    name: "Blackstone",
    homes: "61,964 homes",
    value: "$20 – $25 Bn",
    logo: "/logos/blackstone.png",
  },
  {
    name: "American Homes 4 Rent",
    homes: "61,000 homes",
    value: "$21 – $24 Bn",
    logo: "/logos/amh-logo.png",
  },
  {
    name: "Tricon Residential",
    homes: "35k – 40k homes",
    value: "$12 – $15 Bn",
    logo: "/logos/tricon-logo.svg",
  },
  {
    name: "AXA IM Alts",
    homes: "€82Bn real estate equity AUM",
    value: "$2 – $6 Bn",
    logo: "/logos/axaim-logo.svg",
  },
  {
    name: "Maymont Homes",
    homes: "19,000 homes",
    value: "$6.7 – $7.6 Bn",
    logo: "/logos/maymont.png",
  },

  // --- grouped blocks ---
  {
    name: "CPP Investments",
    logo: "/logos/cpp-logo.svg",
    groupId: "cpp-greystar",
    groupValue: "$2.5 – $3.5 Bn (est)",
  },
  {
    name: "Greystar US",
    logo: "/logos/greystar.png",
    groupId: "cpp-greystar",
    groupValue: "$2.5 – $3.5 Bn (est)",
  },

  {
    name: "PSP Investments",
    logo: "/logos/logo-psp.svg",
    groupId: "psp-cf-lh",
    groupValue: "$1.9 Bn (est)",
  },
  {
    name: "Cadillac Fairview",
    logo: "/logos/cf-logo.png",
    groupId: "psp-cf-lh",
    groupValue: "$1.9 Bn (est)",
  },
  {
    name: "Long Harbour (UK)",
    logo: "/logos/lh-logo.png",
    groupId: "psp-cf-lh",
    groupValue: "$1.9 Bn (est)",
  },

  {
    name: "Lloyds Banking Group",
    logo: "/logos/lloyds-logo.png",
    value: "$2.5 Bn (est)",
  },
  {
    name: "Legal & General (L&G)",
    homes: "1000 homes",
    value: "$1.8 Bn (est)",
    logo: "/logos/lg-logo.svg",
  },
  {
    name: "Nomura",
    value: "$1.8 Bn (est)",
    groupId: "lg-nomura",
    groupValue: "$1.8 Bn (est)",
    logo: "/logos/nomura-logo.svg",
  },
  {
    name: "Ares Management",
    value: "$1.25 Bn (est)",
    groupId: "ares-moda",
    groupValue: "$1.25 Bn (est)",
    logo: "/logos/ares-logo.png",
  },
  {
    name: "Moda Living (UK)",
    homes: "5000 homes (target)",
    groupId: "ares-moda",
    groupValue: "$1.25 Bn (est)",
    logo: "/logos/moda.png",
  },
  {
    name: "KKR",
    value: "$2.5 Bn (target)",
    groupId: "kkr-moda-apache",
    groupValue: "$2.5 Bn (target)",
    logo: "/logos/kkr.png",
  },
  {
    name: "Apache",
    value: "$2.5 Bn (target)",
    groupId: "kkr-moda-apache",
    groupValue: "$2.5 Bn (target)",
    logo: "/logos/apache-logo.svg",
  },
  {
    name: "Carlyle",
    value: "$1 – $4 Bn (est)",
    logo: "/logos/carlyle.png",
  },
  {
    name: "JP Morgan Asset Management",
    homes: "6,000 homes",
    markets: "65 communities",
    value: "$2.1 Bn",
    logo: "/logos/jpmorgan.svg",
  },
];
