'use client';

import { useState } from 'react';
import type {Video} from "@/types/collections";

export default function VideoCard({ title, url, description, isShort }: Video) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  const videoContent = (
    <div className={`relative ${isShort ? 'pt-[177.78%]' : 'pt-[56.25%]'} bg-gray-100 group transition-all duration-300 hover:shadow-lg`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-t-xl">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 rounded-t-xl">
          <div className="text-center p-4">
            <p className="text-red-600 text-sm">Failed to load video</p>
            <button 
              onClick={() => window.open(url, '_blank')}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm underline"
              aria-label={`Open video ${title} in new tab`}
            >
              Open in new tab
            </button>
          </div>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-t-xl transition-opacity duration-300"
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          aria-label={`Video: ${title}`}
        />
      )}
    </div>
  );

  const cardDescription = (
    <div className="p-4 transition-all duration-300 group-hover:bg-gray-50">
      <h3 className="font-bold mb-1 article-title group-hover:text-blue-700 transition-colors duration-200">{title}</h3>
      <p className="text-sm text-gray-600 paragraph line-clamp-3">{description}</p>
    </div>
  );
  return (
    <article 
      className="rounded-xl shadow-sm overflow-hidden bg-transparent mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500"
      role="article"
      aria-labelledby={`video-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {isShort ? (
        <div className="relative w-full max-w-sm mx-auto">
          {videoContent}
          {cardDescription}
        </div>
      ) : (
        <>
          {videoContent}
          {cardDescription}
        </>
      )}
    </article>
  );
}