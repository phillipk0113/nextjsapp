import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    DATABASE_URL: process.env.DATABASE_URL
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
