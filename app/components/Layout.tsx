import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
        <Header />
        <main className="container mx-auto px-4 py-0">{children}</main>
      </div>
      <Footer />
    </>
  );
}