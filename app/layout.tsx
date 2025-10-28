import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Layout from '@/components/Layout';  // Your shared Layout component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Journey of Faith',
  description: 'Explore the signs of Allah through science and faith.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://d6x6me9j41n5u.cloudfront.net/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://d6x6me9j41n5u.cloudfront.net/favicon-192x192.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="https://d6x6me9j41n5u.cloudfront.net/apple-icon-180x180.png" type="image/png" sizes="180x180"/>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/amsipro-regular"/>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/amsipro-bold"/>
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
        <meta name="msapplication-TileImage" content="https://d6x6me9j41n5u.cloudfront.net/favicon-270x270.png"/>
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
