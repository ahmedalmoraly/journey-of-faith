import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/reasons-to-believe',
        permanent: true,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd6x6me9j41n5u.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
