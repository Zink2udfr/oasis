import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative bg-[#18181B] py-12">
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

      {/* Section Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://imgur.com/5mFaGTn"
                alt="Oasis"
                className="h-8 w-6 object-cover rounded"
              />
              <span className="text-lg font-bold tracking-tight">Oasis™</span>
            </div>
            <p className="text-sm text-gray-400">© 2025 oasis™. All rights reserved.</p>
            <p className="text-xs text-gray-500">Website Made With ❤</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/status" className="text-gray-400 hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/havenud" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
