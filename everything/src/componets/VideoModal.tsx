import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-5xl mx-4">
        <div className="bg-zinc-900 rounded-lg shadow-2xl overflow-hidden">
          <div className="relative aspect-video">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white/75 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src="https://player.vimeo.com/video/1052679714?h=a46da87f58&autoplay=1&byline=0&title=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};