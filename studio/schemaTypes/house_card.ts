import { defineType, defineField } from "sanity";

export default defineType({
  name: "house_card",
  title: "House Card",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    }),
    defineField({
      name: "style",
      title: "Style",
      type: "reference",
      to: [{ type: "style" }],
      description:
        "Select the architectural style — details like beds and sqft will pull automatically.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "status",
      title: "Availability Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold", value: "sold" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Price (Asking or Sold)",
      type: "number",
      validation: (r) => r.min(0).required(),
    }),
    defineField({
      name: "returnRate",
      title: "Return Rate (%)",
      type: "number",
      description: "Estimated return from renting this property.",
    }),
  ],
  preview: {
    select: {
      title: "address",
      subtitle: "style.title",
      media: "image",
    },
  },
});
