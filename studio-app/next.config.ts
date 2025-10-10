import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["sanity", "next-sanity"],
};

export default nextConfig;
