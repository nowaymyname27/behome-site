// src/app/(site)/(home)/data/homes.ts

export type Home = {
  id: string;
  state: "FL" | "NC";
  city: string;
  address: string;
  lat: number;
  lng: number;
  price: number;
};

const homes: Home[] = [
  {
    id: "1",
    state: "NC",
    city: "Greensboro",
    address: "521 Kallamdale Rd",
    lat: 36.00139,
    lng: -79.80413,
    price: 389000,
  },
  {
    id: "2",
    state: "FL",
    city: "North Port",
    address: "4530 Boston Terr",
    lat: 27.04007,
    lng: -82.13149,
    price: 449000,
  },
];

export default homes;
