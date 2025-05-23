import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'speechclinic.b-cdn.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
