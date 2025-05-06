import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const categories = [
  { id: "all", name: "All Products" },
  { id: "UB", name: "Unban Software [UB]" },
  { id: "FN", name: "Fortnite [FN]" }
];

export const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter(product => selectedCategory === "all" || product.game === selectedCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div id="products" className="relative py-24 bg-zinc-900">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Our <span className="text-sky-400">Products</span></h2>
        </div>

        {/* Search and filters container */}
        <div className="mb-12 space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-white/10 rounded-lg focus:outline-none focus:border-sky-400 text-white placeholder-gray-400 transition-colors"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30'
                    : 'bg-zinc-900/90 text-white/70 hover:bg-zinc-800 border border-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group relative bg-zinc-900/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Product image with overlay */}
              <div className="relative w-full pt-[75%] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Product details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">Starting from</p>
                    <p className="text-2xl font-bold text-sky-400">${product.price}+</p>
                  </div>
                  <div className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30">
                    <span>Purchase</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
