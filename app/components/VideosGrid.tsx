'use client';
import { useMemo } from "react";
import type {Video} from "@/types/collections";
import VideoCard from "./VideoCard";
import SwiperGrid from "./SwiperGrid";
import { SwiperSlide } from "swiper/react";

export default function VideosGrid({ videos, shorts }: { videos: Video[], shorts: Video[] }) {
  if ((!videos || videos.length === 0) && (!shorts || shorts.length === 0)) {
    return null;
  }
  const videoSlides = useMemo(() => {
    if (!videos || videos.length === 0) {
      return null;
    }
    return videos.map((video) => (
      <SwiperSlide key={video.title}>
        <VideoCard
          key={video.title}
          title={video.title}
          url={video.url}
          description={video.description}
        isShort={video.isShort}
        />
      </SwiperSlide>
    ));
  }, [videos]);

  const shortSlides = useMemo(() => {
    if (!shorts || shorts.length === 0) {
      return null;
    }
    return shorts.map((short) => (
      <SwiperSlide key={short.title}>
        <VideoCard
          key={short.title}
          title={short.title}
          url={short.url}
          description={short.description}
        isShort={short.isShort}
        />
      </SwiperSlide>
    ));
  }, [shorts]);

  return (
    <section className="mb-16">
      {videoSlides && (
        <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold section-title">Featured Videos</h2>
      </div>
      <SwiperGrid slides={videoSlides} showPagination={false} slideHeight="h-full" slideMaxWidth="max-w-[350px]" navigationClassPrefix="swiper-video"/>
      </>
      )}

      {shortSlides && (
        <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold section-title">Featured Shorts</h2>
        </div>
        <SwiperGrid slides={shortSlides} showPagination={false} slideHeight="h-full" navigationClassPrefix="swiper-short"/>
        </>
      )}
    </section>
  );
}