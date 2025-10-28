import ToolCard from "./ToolCard";

export default function ToolsGrid({ tools }: { tools: any[] }) {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Scientific Marvels of Creation
      </h2>
      <p className="text-center text-lg text-gray-600 mb-10 italic">
        Signs for people who reflect!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, i) => (
          <ToolCard key={i} {...tool} />
        ))}
      </div>
    </section>
  );
}