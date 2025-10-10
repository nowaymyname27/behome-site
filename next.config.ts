import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["sanity", "next-sanity", "@sanity/vision"],
  experimental: { externalDir: true }, // allows ../ imports
};
export default nextConfig;
