// sanity/schemaTypes/singleFamilyHouse.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "singleFamilyHouse",
  title: "Single-Family House",
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
      validation: (r) => r.min(0).required(),
    }),
    defineField({
      name: "sqft",
      title: "Square Feet",
      type: "number",
      validation: (r) => r.min(0).required(),
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
      validation: (r) => r.required(),
    }),
    defineField({
      name: "floorplan",
      title: "Floorplan Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt (optional)", type: "string" }],
      validation: (r) => r.required(),
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
    defineField({
      name: "mapPoint",
      title: "Map Point",
      type: "reference",
      to: [{ type: "mapPoint" }],
      description: "Link this single-family house to a map point.",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "sqft", media: "floorplan" },
  },
});
