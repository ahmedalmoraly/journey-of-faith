'use client'

import ToolCard from "./ToolCard";
import QuranVerseQuote, { QuranVerseQuoteProps } from "./QuranVerseQuote";
import SwiperGrid from "./SwiperGrid";
import type { Tool } from "@/types/collections";

interface ToolsGridProps {
    tools: Tool[];
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
    const quranQuote: QuranVerseQuoteProps = {
        text: "He ˹also˺ subjected for you whatever is in the heavens and whatever is on the earth—all by His grace. Surely in this are signs for people who reflect.",
        reference: "Quran 45:13",
        verse_id: "45/13"
    }
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 section-title">
                Scientific Marvels of Creation
            </h2>

            <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 w-full">
                    <p className="text-gray-600 mb-6 text-2xl article-title">
                        <span className="relative inline-block px-4 py-2 overflow-visible">
                            <span className="absolute inset-0 bg-[#FFC931] opacity-90"></span>
                            <span className="relative text-[#28348E] z-10">Signs for people who reflect!</span>
                        </span>
                    </p>
                    <p className="text-gray-600 mb-8 paragraph">
                        These interactive tools reveal the intricate design and complexity of Allah&#39;s creation, from the vastness of space to the tiniest particles. Each one is a window into the signs (ayaat) that Allah has placed in the universe for those who reflect.
                    </p>
                    <SwiperGrid 
                        slides={tools.map((tool, i) => (
                            <ToolCard key={i} {...tool} />
                        ))}
                        navigationClassPrefix="scientific-tools"
                    />

                    <QuranVerseQuote {...quranQuote} />
                </div>
            </div>
        </section>
    );
}
