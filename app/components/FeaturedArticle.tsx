'use client';
import Image from 'next/image';
import type {FeaturedArticle} from "@/types/collections";

export default function FeaturedArticle({ title, paragraphs, image }: FeaturedArticle) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 section-title">Featured Content</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative w-full h-64">
                    <Image src={image} alt={title} className="object-cover" fill priority />
                </div>
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