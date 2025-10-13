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

    // NEW: public-facing name (what you show on detail pages)
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

    // Card image (keep)
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt (optional)", type: "string" }],
      validation: (r) => r.required(),
    }),

    // Badge key (keep)
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

    // NEW: Gallery for Hero
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

    // NEW: Floorplan
    defineField({
      name: "floorplan",
      title: "Floorplan Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt (optional)", type: "string" }],
    }),

    // NEW: Matterport model ID (store ID, not the whole URL to keep it simple)
    defineField({
      name: "matterportModelId",
      title: "Matterport Model ID",
      type: "string",
      description:
        "Example: 3DWalkThruID — keep just the ID, not the whole URL.",
    }),
    // (Optional, if you want to also store URL)
    defineField({
      name: "matterportUrl",
      title: "Matterport URL",
      type: "url",
    }),

    // Map coords (we’ll map to [lng, lat] in the query)
    defineField({ name: "lat", title: "Latitude", type: "number" }),
    defineField({ name: "lng", title: "Longitude", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "address", media: "image" },
  },
});
