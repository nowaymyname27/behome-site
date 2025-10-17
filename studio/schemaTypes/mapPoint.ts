// src/sanity/schemaTypes/mapPoint.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "mapPoint",
  title: "Map Point",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Display Name (shown in popup)",
      type: "string",
      description:
        "Use the address you want to show when the marker is clicked.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Address (optional, for reference)",
      type: "string",
    }),
    defineField({
      name: "region",
      title: "Region key",
      type: "string",
      description: 'Example: "florida" — used to filter points per page.',
      validation: (r) => r.required(),
    }),

    // Coordinates (floats)
    defineField({
      name: "lat",
      title: "Latitude (north/south)",
      type: "number",
      description:
        "Paste the SECOND number from Google Maps (north/south). Example Sarasota: 27.3364",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lng",
      title: "Longitude (east/west)",
      type: "number",
      description:
        "Paste the FIRST number from Google Maps (east/west). Example Sarasota: -82.5307",
      validation: (r) => r.required(),
    }),

    // Minimal extras for your popup/linking
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
      description: "Used by the site to determine marker styling/filtering.",
      options: {
        list: [
          { title: "Single-Family", value: "single-family" },
          { title: "Build-to-Rent", value: "btr" },
          { title: "Cluster", value: "cluster" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "blurb",
      title: "Blurb (small line under title)",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "Link (internal path or full URL)",
      type: "string",
      description: 'Example: "/listings/abc-123" or a full URL.',
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "region" },
  },
});
