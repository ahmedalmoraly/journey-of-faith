
export default function MainContainer({ mainContent, sidebarContent }: { mainContent: React.ReactNode, sidebarContent: React.ReactNode }) {
  return (
    <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            {mainContent}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-8">
            {sidebarContent}
          </aside>
        </div>
    </main>
  );
}
