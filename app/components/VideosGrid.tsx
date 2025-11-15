'use client';
import { useMemo } from "react";
import VideoCard from "./VideoCard";

interface Video {
  title: string;
  url: string;
  description: string;
}

export default function VideosGrid({ videos, shorts }: { videos: Video[], shorts: Video[] }) {
  if (!videos || videos.length === 0) {
    return null;
  }
  // Memoize the videos to prevent unnecessary re-renders
  const videoItems = useMemo(() => {
    if (!videos || videos.length === 0) {
      return null;
    }
    return videos.map((video) => (
      <VideoCard
        key={video.title}
        title={video.title}
        url={video.url}
        description={video.description}
      />
    ));
  }, [videos]);

  const shortItems = useMemo(() => {
    if (!shorts || shorts.length === 0) {
      return null;
    }
    return shorts.map((short) => (
      <VideoCard
        key={short.title}
        title={short.title}
        url={short.url}
        description={short.description}
        isShort={true}
      />
    ));
  }, [shorts]);
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold section-title">Featured Videos</h2>
        <a href="#" className="text-[#28348E] hover:text-[#FFC931] font-medium flex items-center">
          View More Videos <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
          {/* Stacked Videos Column */}
          <div className="space-y-4">
              {videoItems}
          </div>

          {/* YouTube Short Column */}
          <div className="bg-transparent rounded-xl overflow-hidden">
            {shortItems}
          </div>
      </div>
    </section>
  );
}