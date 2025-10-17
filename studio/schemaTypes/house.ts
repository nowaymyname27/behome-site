// sanity/schemaTypes/house.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "house",
  title: "House",
  type: "document",
  fields: [
    defineField({
      name: "productType",
      title: "Product Type",
      type: "string",
      validation: (r) => r.required(),
      options: {
        list: [
          { title: "Single-Family", value: "single" },
          { title: "Build-to-Rent", value: "btr" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),

    // NEW: public-facing name
    defineField({
      name: "name",
      title: "Display Name",
      type: "string",
      description: "Shown on the property detail page.",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "address",
      title: "Address (display)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Starting Price (USD)",
      type: "number",
      validation: (r) => r.min(0).required(),
    }),
    defineField({
      name: "beds",
      title: "Beds",
      type: "number",
      validation: (r) => r.min(0).required(),
    }),
    defineField({
      name: "baths",
      title: "Baths",
      type: "number",
      validation: (r) => r.min(0).required(),
    }),
    defineField({
      name: "cars",
      title: "Cars (garage capacity)",
      type: "number",
      validation: (r) => r.min(0),
    }),
    defineField({
      name: "sqft",
      title: "Square Feet",
      type: "number",
      validation: (r) => r.min(0),
    }),

    // Card image
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt (optional)", type: "string" }],
      validation: (r) => r.required(),
    }),

    // Badge key
    defineField({
      name: "badgeKey",
      title: "Badge (key, not label)",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Move-in Ready", value: "move_in_ready" },
          { title: "Under Contract", value: "under_contract" },
        ],
        layout: "radio",
      },
    }),

    // Gallery
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt (optional)", type: "string" }],
        },
      ],
    }),

    // Floorplan
    defineField({
      name: "floorplan",
      title: "Floorplan Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt (optional)", type: "string" }],
    }),

    // Matterport model ID
    defineField({
      name: "matterportModelId",
      title: "Matterport Model ID",
      type: "string",
      description:
        "Example: 3DWalkThruID — keep just the ID, not the whole URL.",
    }),

    // Optional: Matterport full URL
    defineField({
      name: "matterportUrl",
      title: "Matterport URL",
      type: "url",
    }),

    // --- Updated coordinate fields ---
    defineField({
      name: "lat",
      title: "Latitude (north/south position)",
      type: "number",
      description:
        "Use the second number from Google Maps (the one that changes as you move north/south). Example for Sarasota: 27.3364",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lng",
      title: "Longitude (east/west position)",
      type: "number",
      description:
        "Use the first number from Google Maps (the one that changes as you move east/west). Example for Sarasota: -82.5307",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "address", media: "image" },
  },
});
