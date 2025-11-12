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
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 article-title">{title}</h1>
                    <p className="text-lg text-gray-700 mb-8 paragraph">{description}</p>                    
                    <CTAs />
                </div>

                <div className="w-full lg:w-1/2 relative">
                {/* Navigation Buttons */}
                  {/* <button className="hero-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#28348E] hover:bg-[#28348E] hover:text-white transition-all duration-300">
                    <i className="fas fa-chevron-left"></i>
                  </button> */}
                  
                  <Swiper
                      modules={[Navigation, Pagination, Autoplay, HashNavigation]}
                      spaceBetween={30}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation={{ enabled: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                      hashNavigation={{ watchState: true }}
                      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                      loop={true}
                      className="rounded-xl overflow-hidden shadow-lg relative group"
                  >
                    {slides.map((slide) => (
                      <SwiperSlide key={slide.hash} data-hash={slide.hash}>
                        <img src={slide.image} alt={slide.altText} className="w-full h-auto object-cover"/>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* <button className="hero-next absolute right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#28348E] hover:bg-[#28348E] hover:text-white transition-all duration-300">
                    <i className="fas fa-chevron-right"></i>
                  </button> */}
                </div>
            </div>
        </div>
    </section>
  );
}