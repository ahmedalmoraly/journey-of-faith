import VideoCard from "./VideoCard";

export default function VideosGrid({ videos }: { videos: any[] }) {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Featured Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((v, i) => (
          <VideoCard key={i} title={v.title} url={v.url} />
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-blue-600 hover:underline font-medium">
          View More Videos →
        </a>
      </div>
    </section>
  );
}