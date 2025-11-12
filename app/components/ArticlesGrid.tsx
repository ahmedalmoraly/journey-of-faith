import ArticleCard from "./ArticleCard";

export default function ArticlesGrid({ articles }: { articles: any[] }) {
  return (
    
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 section-title">From Around the Web</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articles.map((article, i) => (
            <div key={i} className="w-full">
                <ArticleCard {...article} />
            </div>
        ))}
        </div>
    </section>
  );
}
