'use client'

import ToolCard from "./ToolCard";
import QuranVerseQuote, { QuranVerseQuoteProps } from "./QuranVerseQuote";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function ToolsGrid({ tools }: { tools: any[] }) {
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
                        These interactive tools reveal the intricate design and complexity of Allah's creation, from the vastness of space to the tiniest particles. Each one is a window into the signs (ayaat) that Allah has placed in the universe for those who reflect.
                    </p>
                    <div className="relative w-full px-6 overflow-visible">
                        {/* Navigation Buttons */}
                        <button className="scientific-tools-prev absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#28348E] hover:bg-[#28348E] hover:text-white transition-all duration-300">
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView='auto'
                            pagination={{ clickable: true }}
                            navigation={{
                                enabled: true,
                                nextEl: '.scientific-tools-next',
                                prevEl: '.scientific-tools-prev',
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            loop={true}
                            className="scientific-tools-swiper relative"
                        >
                            {tools.map((tool, i) => (
                                <SwiperSlide key={i} className="tool-slide">
                                    <ToolCard {...tool} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="scientific-tools-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#28348E] hover:bg-[#28348E] hover:text-white transition-all duration-300">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <QuranVerseQuote {...quranQuote} />
                </div>
            </div>
        </section>
    );
}
