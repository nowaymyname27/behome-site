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
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description:
        "Lower numbers appear first in the SaraHomes style nav and carousel. Keep values unique for predictable ordering.",
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
          fields: [
            {
              name: "alt",
              title: "Alt (optional)",
              type: "string",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "floorplan",
      title: "Floorplan Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt (optional)",
          type: "string",
        },
      ],
    }),

    // ✅ Keep only this
    defineField({
      name: "matterportUrl",
      title: "Matterport URL",
      type: "url",
      description:
        "Full link to the 3D tour (e.g. https://my.matterport.com/show/?m=XXXXX)",
    }),
  ],

  preview: {
    select: {
      title: "title",
      order: "displayOrder",
      subtitle: "sqft",
      media: "floorplan",
    },
    prepare({ title, order, subtitle, media }) {
      const orderText = typeof order === "number" ? `Order ${order}` : "No order";
      const sqftText = typeof subtitle === "number" ? `${subtitle} sqft` : subtitle;

      return {
        title,
        subtitle: `${orderText} • ${sqftText}`,
        media,
      };
    },
  },
});
