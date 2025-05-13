import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'www.microskills.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: ''
      },
      {
        hostname: 'www.google.com',
        protocol: 'https',
        port: ''
      }
    ]
  }
};

export default nextConfig;
