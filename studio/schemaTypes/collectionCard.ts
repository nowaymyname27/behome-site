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

    defineField({
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      description: "Used for map pin placement on the SaraHomes page.",
      fields: [
        defineField({
          name: "lat",
          title: "Latitude",
          type: "number",
          validation: (Rule) => Rule.min(-90).max(90),
        }),
        defineField({
          name: "lng",
          title: "Longitude",
          type: "number",
          validation: (Rule) => Rule.min(-180).max(180),
        }),
      ],
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
      description: "Leave blank to hide the price on the card.",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "rent",
      title: "Monthly Rent",
      type: "number",
      description: "Leave blank to hide monthly rent on the card.",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "renewalDate",
      title: "Lease Renewal Date",
      type: "string",
      description: "Leave blank to hide the renewal date on the card.",
    }),

    defineField({
      name: "cap",
      title: "CAP Rate",
      type: "number",
      description: "Enter as a number, e.g. 6.5 for 6.5%. Leave blank to hide the CAP badge.",
    }),

    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      description: "Leave blank to hide bedrooms on the card.",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      description: "Leave blank to hide bathrooms on the card.",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "sqft",
      title: "Square Footage",
      type: "object",
      description: "Leave any measurement blank to hide it. Leave all details blank to hide the details toggle.",
      fields: [
        defineField({
          name: "ac",
          title: "A/C Area",
          type: "number",
          validation: (Rule) => Rule.min(0),
        }),
        defineField({
          name: "garage",
          title: "Garage",
          type: "number",
          validation: (Rule) => Rule.min(0),
        }),
        defineField({
          name: "lanai",
          title: "Lanai",
          type: "number",
          validation: (Rule) => Rule.min(0),
        }),
        defineField({
          name: "entry",
          title: "Entry",
          type: "number",
          validation: (Rule) => Rule.min(0),
        }),
        defineField({
          name: "total",
          title: "Total Area",
          type: "number",
          validation: (Rule) => Rule.min(0),
        }),
        defineField({
          name: "lot",
          title: "Lot Size",
          type: "number",
          validation: (Rule) => Rule.min(0),
        }),
      ],
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
