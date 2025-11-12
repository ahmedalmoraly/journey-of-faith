export default function FeaturedArticle({ title, paragraphs, image }: { title: string; paragraphs: string[]; image: string }) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 section-title">Featured Content</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src={image} alt={title} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 article-title">{title}</h2>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-gray-600 mb-6 paragraph">{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}