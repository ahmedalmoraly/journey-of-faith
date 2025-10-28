import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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