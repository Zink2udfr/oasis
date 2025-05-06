import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-40 top-0 transition-[top] duration-300" style={{ top: 'var(--announcement-height, 0px)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://imgur.com/5mFaGTn"
                alt="Oasis™"
                className="h-16 w-12 object-cover rounded-lg"
              />
            </Link>
            <Link to="/" className="ml-3 text-xl font-bold tracking-tight">Oasis™ </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
              <button 
                onClick={scrollToProducts}
                className="text-white/90 hover:text-white transition-colors"
              >
                Products
              </button>
              <Link to="/status" className="text-white/90 hover:text-white transition-colors">Status</Link>
              <Link to="https://discord.gg/oasisud" className="text-white/90 hover:text-white transition-colors">Support</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-t border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block py-2 text-white/90 hover:text-white transition-colors">Home</Link>
              <button 
                onClick={scrollToProducts}
                className="block py-2 text-white/90 hover:text-white transition-colors w-full text-left"
              >
                Products
              </button>
              <Link to="/status" className="block py-2 text-white/90 hover:text-white transition-colors">Status</Link>
              <Link to="https://discord.gg/oasisud" className="block py-2 text-white/90 hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
