import React, { useState, useRef, useEffect } from 'react';
import { X, Maximize2, Play } from 'lucide-react';
import { ProductMedia } from '../data/products';

interface MediaViewerProps {
  media: ProductMedia[];
  currentIndex: number;
  onClose: () => void;
}

export const MediaViewer: React.FC<MediaViewerProps> = ({ media, currentIndex, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !mediaRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white/75 hover:text-white transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl mx-4 aspect-video overflow-hidden rounded-lg"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setScale(1.5)}
        onMouseLeave={() => setScale(1)}
      >
        {currentMedia.type === 'image' ? (
          <img
            ref={mediaRef}
            src={currentMedia.url}
            alt={currentMedia.alt}
            className="w-full h-full object-contain transition-transform duration-200"
            style={{
              transform: scale > 1 ? `scale(${scale}) translate(${-position.x/2}%, ${-position.y/2}%)` : 'none',
              transformOrigin: `${position.x}% ${position.y}%`
            }}
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${currentMedia.youtubeId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
    </div>
  );
};