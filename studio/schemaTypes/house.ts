// sanity/schemaTypes/house.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "house",
  title: "House",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Used both internally and on the website.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (r) => r.min(0).required(),
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "style",
      title: "Style",
      type: "reference",
      to: [{ type: "style" }],
      description: "Select from the list of available styles.",
      validation: (r) => r.required(),
    }),

    // Optional map reference
    defineField({
      name: "mapPoint",
      title: "Map Point",
      type: "reference",
      to: [{ type: "mapPoint" }],
      description: "Optional: link this house to a map point.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "address", media: "image" },
  },
});
