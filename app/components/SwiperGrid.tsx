'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface SwiperGridProps {
    slides: React.ReactNode[];
    navigationClassPrefix?: string;
    slideMaxWidth?: string;
    slideHeight?: string;
    spaceBetween?: number;
    autoplayDelay?: number;
    showPagination?: boolean;
    showNavigation?: boolean;
    swiperClassName?: string;
    navigationButtonClassName?: string;
    autoplay?: boolean;
    loop?: boolean;
    slidesPerView?: 'auto' | number;
}

export default function SwiperGrid({ 
    slides, 
    navigationClassPrefix = 'swiper-grid',
    slideMaxWidth = 'max-w-[300px]',
    slideHeight = 'h-120',
    spaceBetween = 30,
    autoplayDelay = 5000,
    showPagination = true,
    showNavigation = true,
    swiperClassName = 'relative',
    navigationButtonClassName = 'absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#28348E] hover:bg-[#28348E] hover:text-[#FFC931] transition-all duration-300',
    autoplay = true,
    loop = true,
    slidesPerView = 'auto'
}: SwiperGridProps) {
    const prevClass = `${navigationClassPrefix}-prev`;
    const nextClass = `${navigationClassPrefix}-next`;
    const nextButtonClassName = navigationButtonClassName.replace('-left-5', '-right-5');

    return (
        <div className={`relative w-full px-6 mb-12 overflow-visible`}>
            {/* Navigation Buttons */}
            {showNavigation && (
                <>
                    <button className={`${prevClass} ${navigationButtonClassName}`}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className={`${nextClass} ${nextButtonClassName}`}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </>
            )}

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                pagination={showPagination ? { clickable: true } : false}
                navigation={showNavigation ? {
                    enabled: true,
                    nextEl: `.${nextClass}`,
                    prevEl: `.${prevClass}`,
                } : false}
                autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
                loop={loop}
                className={`${navigationClassPrefix}-swiper ${swiperClassName}`}
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i} className={`${slideHeight} ${slideMaxWidth} mb-6`}>
                        <div className={`flex flex-col justify-between ${slideHeight || 'h-full'}`}>
                            {slide}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
