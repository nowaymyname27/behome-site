// File: sanity/schemas/documents/collection.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "photo",
      title: "House Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
      validation: (Rule) => Rule.required(),
    }),

    // ✅ replaced this section
    defineField({
      name: "style",
      title: "Style",
      type: "reference",
      to: [{ type: "style" }],
      description:
        "Select the home style for this property (e.g., Verona, Cambridge).",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Status Badge",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold", value: "sold" },
        ],
        layout: "radio",
      },
      initialValue: "available",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "price",
      title: "Price (Sold / Asking)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),

    defineField({
      name: "returnRate",
      title: "Return (%)",
      type: "number",
      description: "Expected annual return from renting this property",
      validation: (Rule) => Rule.min(0),
    }),
  ],

  preview: {
    select: {
      title: "address",
      subtitle: "style->title",
      media: "photo",
    },
  },
});
