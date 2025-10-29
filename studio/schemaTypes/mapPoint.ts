// sanity/schemaTypes/mapPoint.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "mapPoint",
  title: "Map Point",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lat",
      title: "Latitude",
      type: "number",
      description: "Second coordinate from Google Maps (north/south).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lng",
      title: "Longitude",
      type: "number",
      description: "First coordinate from Google Maps (east/west).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
      options: {
        list: [
          { title: "Single-Family", value: "single" },
          { title: "Build-to-Rent", value: "btr" },
          { title: "Cluster", value: "cluster" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "address" },
  },
});
