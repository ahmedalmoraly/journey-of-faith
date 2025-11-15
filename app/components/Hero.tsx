'use client'

import CTAs from "./CTAs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/hash-navigation";

interface HeroSlide {
  image: string;
  altText: string;
  hash: string;
}

interface HeroProps {
  title: string;
  description: string;
  slides: HeroSlide[];
}

export default function Hero({ title, description, slides }: HeroProps) {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-linear-to-br from-[#e0dcdc] to-[#e0dcdc] py-12 md:py-20">
      {/* Full-screen Swiper Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, HashNavigation]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          hashNavigation={{ watchState: true }}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true 
          }}
          loop
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.hash} data-hash={slide.hash} className="h-full">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
              </div>
              <div className="absolute inset-0 bg-black opacity-50" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-title">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 hero-paragraph">
            {description}
          </p>
          <CTAs />
        </div>
      </div>
    </section>
    
  );
}