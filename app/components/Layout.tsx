import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle }: { children: React.ReactNode; pageTitle?: string }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} | Journey of Faith` : "Journey of Faith"}</title>
        <meta name="description" content="Explore the signs of Allah through science and faith." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="https://d6x6me9j41n5u.cloudfront.net/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://d6x6me9j41n5u.cloudfront.net/favicon-192x192.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="https://d6x6me9j41n5u.cloudfront.net/favicon-180x180.png"/>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/amsipro-regular"/>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/amsipro-bold"/>
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet"/>
        <meta name="msapplication-TileImage" content="https://d6x6me9j41n5u.cloudfront.net/favicon-270x270.png"/>
      </Head>

      <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        © {new Date().getFullYear()} Rays of Faith – All rights reserved.
      </footer>
    </>
  );
}