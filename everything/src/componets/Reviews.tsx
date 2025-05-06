import React from 'react';

const reviews = [
  { rating: 5, text: "+Rep, was so good and the support was so fast and top tier!!", user: "Anonymous", time: "1 month ago" },
  { rating: 5, text: "+Rep was so fun to use, and me and my friends had such a good time.", user: "Anonymous", time: "2 weeks ago" },
  { rating: 5, text: "+Rep this temp spoofer by far is the best i have ever used, its so fast and changes everything in one click :)", user: "Anonymous", time: "2 weeks ago" },
  { rating: 5, text: "+Rep i love this chair, and with the constant updates with almost 0 downtime it makes the chair always feel fresh and amazing to use 10/10", user: "Anonymous", time: "3 weeks ago" },
];

export const Reviews = () => {
  return (
    <div className="relative py-16 bg-zinc-900 overflow-hidden">
      {/* Animated star background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'twinkle 4s infinite'
          }}>
        </div>
      </div>

      {/* Section Title */}
      <div className="relative text-center mb-12">
        <h2 className="text-4xl font-bold">What Our <span className="text-sky-400">Users</span> Say</h2>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 h-full w-[100px] slider-gradient-left z-10"></div>
      <div className="absolute top-0 right-0 h-full w-[100px] slider-gradient-right z-10"></div>
      
      {/* Reviews Slider */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className="animate-scroll flex">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-none w-[300px] px-4"
            >
              <div className="bg-zinc-900/90 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-sky-400/30 transition-all duration-300">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${i < review.rating ? 'text-pink-400' : 'text-zinc-700'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg font-medium text-white mb-4">{review.text}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{review.user}</span>
                  <span>{review.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};
