'use client';

import { useEffect, useRef } from 'react';

interface VideoCardProps {
  title: string;
  url: string;
  description: string;
  isShort?: boolean;
}

export default function VideoCard({ title, url, description, isShort }: VideoCardProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Add any necessary effects here if needed
  useEffect(() => {
    // Any side effects related to the iframe can go here
  }, [url]);

  const videoContent = (
    <div className={`relative ${isShort ? 'pt-[177.78%]' : 'pt-[56.25%]'} bg-gray-100`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-t-xl"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
  return (
    <div className={`rounded-xl shadow-sm overflow-hidden bg-white'}`}>
      {isShort ? (
        <div className="relative w-full max-w-sm mx-auto">
          {videoContent}
        </div>
      ) : (
        videoContent
      )}
      <div className="p-4">
        <h3 className="font-bold mb-1 article-title">{title}</h3>
        <p className="text-sm text-gray-600 paragraph">{description}</p>
      </div>
    </div>
  );
}