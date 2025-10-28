import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Layout from '@/components/Layout';  // Your shared Layout component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Journey of Faith',
  description: 'Explore the signs of Allah through science and faith.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/amsipro-regular"/>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/amsipro-bold"/>
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
