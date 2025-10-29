// sanity/schemaTypes/style.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "style",
  title: "Style",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
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
    defineField({
      name: "floorplan",
      title: "Floorplan Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt (optional)", type: "string" }],
    }),
    defineField({
      name: "matterportModelId",
      title: "Matterport Model ID",
      type: "string",
      description:
        "Example: 3DWalkThruID — keep just the ID, not the whole URL.",
    }),
    defineField({
      name: "matterportUrl",
      title: "Matterport URL (optional)",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "sqft", media: "floorplan" },
  },
});
