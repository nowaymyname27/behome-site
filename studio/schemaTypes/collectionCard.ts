import { defineType, defineField } from "sanity";

export default defineType({
  name: "collectionCard",
  title: "Collection Card",
  type: "document",

  fields: [
    // --- 1. Address Split ---
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "City, State, Zip",
      type: "string",
      placeholder: "e.g. Cape Coral, FL 33914",
      validation: (Rule) => Rule.required(),
    }),

    // --- 2. New Status Field ---
    defineField({
      name: "status",
      title: "Property Status",
      type: "string",
      options: {
        list: [
          { title: "For Sale", value: "forSale" },
          { title: "Sold", value: "sold" },
          { title: "Rented", value: "rented" },
          { title: "Under Construction", value: "underConstruction" },
        ],
        layout: "radio", // Makes it easier to click than a dropdown
      },
      initialValue: "available",
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
      type: "string",
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
      subtitle: "location",
      media: "image",
      status: "status",
      price: "price",
    },
    prepare(selection) {
      const { title, subtitle, media, status, price } = selection;

      // Helper to format the status text
      const statusMap: Record<string, string> = {
        available: "For Sale",
        sold: "SOLD",
        rented: "RENTED",
        underConstruction: "Under Construction",
      };

      const statusText = statusMap[status] || "For Sale";
      const priceText = price ? ` · $${price.toLocaleString()}` : "";

      return {
        title: title,
        subtitle: `${subtitle} | ${statusText}${status === "available" ? priceText : ""}`,
        media,
      };
    },
  },
});
