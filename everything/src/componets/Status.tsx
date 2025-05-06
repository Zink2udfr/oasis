import React from 'react';

// Define the status type
type ProductStatus = 'Undetected' | 'Updating' | 'Detected';

// Interface for product status
interface Product {
  name: string;
  game: string;
  status: ProductStatus;
}

// Product status data - easy to edit
const products: Product[] = [
  { name: "Temp Spoofer", game: "R6S", status: "Updating" },
  { name: "Haven Private", game: "FN", status: "Undetected" },
];

// Status color mapping
const statusColors = {
  Undetected: 'text-green-400',
  Updating: 'text-blue-400',
  Detected: 'text-red-400'
};

const statusDots = {
  Undetected: 'bg-green-400',
  Updating: 'bg-blue-400',
  Detected: 'bg-red-400'
};

export const Status = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold">
            Product <span className="text-red-500">Status</span>
          </h1>
        </div>

        <div className="space-y-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-between hover:border-white/20 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold">
                  {product.name} <span className="text-gray-400">[{product.game}]</span>
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`${statusColors[product.status]}`}>
                  {product.status}
                </span>
                <div className={`w-3 h-3 rounded-full ${statusDots[product.status]} animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
