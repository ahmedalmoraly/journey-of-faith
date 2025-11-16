import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/((?!reasons-to-believe|_next/static|_next/image|favicon.ico).*)',
        destination: '/reasons-to-believe',
        permanent: true, // 308 permanent redirect
      }
    ];
 },
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd6x6me9j41n5u.cloudfront.net', // Replace with your S3 endpoint
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
