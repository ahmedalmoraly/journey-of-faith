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
};

export default nextConfig;
