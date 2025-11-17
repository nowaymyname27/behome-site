import { defineType, defineField } from "sanity";

export default defineType({
  name: "collectionCard",
  title: "Collection Card",
  type: "document",

  fields: [
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sold",
      title: "Sold?",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "rent",
      title: "Monthly Rent",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "renewalDate",
      title: "Lease Renewal Date",
      type: "string", // easiest formatting for display
    }),

    defineField({
      name: "cap",
      title: "CAP Rate",
      type: "number",
      description: "Enter as a number, e.g. 6.5 for 6.5%",
    }),

    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "sqft",
      title: "Square Footage",
      type: "object",
      fields: [
        defineField({
          name: "ac",
          title: "A/C Area",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "garage",
          title: "Garage",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "lanai",
          title: "Lanai",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "entry",
          title: "Entry",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "total",
          title: "Total Area",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "lot",
          title: "Lot Size",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "address",
      media: "image",
      sold: "sold",
      price: "price",
    },
    prepare(selection) {
      const { title, media, sold, price } = selection;
      return {
        title,
        media,
        subtitle: sold
          ? "SOLD"
          : `For Sale · $${price?.toLocaleString() ?? ""}`,
      };
    },
  },
});
