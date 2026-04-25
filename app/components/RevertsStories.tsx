'use client';
import { useMemo } from "react";
import type {Video} from "@/types/collections";
import VideoCard from "./VideoCard";
import SwiperGrid from "./SwiperGrid";
import { SwiperSlide } from "swiper/react";

export default function RevertsStories({ videos }: { videos: Video[] }) {
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

  if (!videoSlides) {
    return null;
  }

  return (
    <section className="mb-16">
      {videoSlides && (
        <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold section-title">Reverts Stories</h2>
      </div>
      <SwiperGrid slides={videoSlides} showPagination={false} slideHeight="h-full" slideMaxWidth="max-w-[400px]" navigationClassPrefix="swiper-video"/>
      </>
      )}
    </section>
  );
}