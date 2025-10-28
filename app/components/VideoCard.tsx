import ReactPlayer from "react-player";

interface VideoCardProps {
  title: string;
  url: string;
}

export default function VideoCard({ title, url }: VideoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <ReactPlayer src={url}
          width="100%"
          height="220px"
          light={true}
          controls
          style={{ aspectRatio: '16/9' }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-blue-800">{title}</h3>
      </div>
    </div>
  );
}