import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faBolt, faHeadset, faCreditCard, faGauge, faStar } from '@fortawesome/free-solid-svg-icons';

const features = [
  { icon: faShieldHalved, title: "Guaranteed Safety" },
  { icon: faBolt, title: "Easy to Use" },
  { icon: faHeadset, title: "Exceptional Support" },
  { icon: faCreditCard, title: "Secure Payments" },
  { icon: faStar, title: "Amazing Features" },
];

export const Features = () => {
  return (
    <div className="relative py-12 bg-zinc-900 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 h-full w-[100px] slider-gradient-left z-10"></div>
      <div className="absolute top-0 right-0 h-full w-[100px] slider-gradient-right z-10"></div>
      
      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className="animate-scroll flex">
          {[...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex-none w-[300px] px-6"
            >
              <div className="flex items-center space-x-4 group">
                <div className="text-3xl text-white/90 group-hover:scale-110 group-hover:text-sky-400 transition-all">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
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
