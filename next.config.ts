import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["sanity", "next-sanity", "@sanity/vision"],
  experimental: { externalDir: true }, // allows ../ imports
  async redirects() {
    return [
      {
        source: "/sarahomes",
        destination: "/",
        permanent: true,
      },
      {
        source: "/collection",
        destination: "/",
        permanent: true,
      },
      {
        source: "/collections",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
