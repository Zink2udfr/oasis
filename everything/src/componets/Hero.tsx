import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { VideoModal } from './VideoModal';

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="relative h-[85vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1052679714?h=a46da87f58&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="w-full h-full scale-150 object-cover opacity-60"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        {/* Hero content */}
        <div className="relative z-20 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="w-full lg:w-3/5 pt-20 space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10">
                <span className="text-sky-400 text-sm font-medium">New Release</span>
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                We <span className="text-sky-400">provide</span>
                <br />
                what people <span className="text-sky-400">need.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Our products guarantee to change the way you play for the better. Experience the next level of gaming enhancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-sky-600 hover:bg-pink-500 text-white px-8 py-4 rounded-md font-medium flex items-center justify-center space-x-2 transition-all">
                  <span>Explore Our Offer</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="group text-sky-400 hover:text-sky-300 px-8 py-4 rounded-md flex items-center justify-center space-x-2 transition-colors border border-pink-400/20 hover:border-pink-400/40"
                >
                  <Play className="h-5 w-5" />
                  <span>How Oasis Works</span>
                </button>
              </div>
            </div>

            {/* Hero Character */}
            <div className="absolute right-0 bottom-0 w-[45%] h-[90%] hidden lg:block">
              <img
                src="https://imgur.com/L9pEyfo"
                alt="Character"
                className="h-full w-full object-contain object-right-bottom drop-shadow-[0_0_25px_rgba(135,206,235,1)] filter brightness-110"
              />
            </div>
          </div>
        </div>
        
        {/* Section Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && <VideoModal onClose={() => setIsVideoOpen(false)} />}
    </>
  );
};
