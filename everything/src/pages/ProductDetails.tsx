import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCode, faCrosshairs, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { Play } from 'lucide-react';
import { MediaViewer } from '../components/MediaViewer';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShoppingCart } from 'lucide-react';
import { storeConfig } from '../data/products';

declare global {
  interface Window {
    sellAuthEmbed: {
      checkout: (element: HTMLElement, options: {
        cart: Array<{
          productId: number;
          variantId: number;
          quantity: number;
        }>;
        shopId: number;
        modal: boolean;
      }) => void;
    };
  }
}

export const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = getProductById(productId || '');
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const getFeatureIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'aimbot':
        return faCrosshairs;
      case 'visuals':
        return faEye;
      case 'features':
        return faStar;
      default:
        return faCode
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Product not found</h1>
        </div>
      </div>
    );
  }

  const currentMedia = product.media[currentMediaIndex];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: 'Products', href: '/' },
              { label: product.name }
            ]}
          />
        </div>

        {/* Product Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            {product.name} <span className="text-sky-400">[{product.game}]</span>
          </h1>
          {product.description && (
            <p className="text-xl text-gray-400 mb-4">{product.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media Display */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setIsFullscreen(true)}
            >
              <div className="absolute inset-0 bg-sky-400/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              {currentMedia.type === 'image' ? (
                <img
                  src={currentMedia.url}
                  alt={currentMedia.alt}
                  className="relative w-full aspect-video object-cover rounded-lg border border-white/10 group-hover:border-sky-400/30 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="relative aspect-video">
                  <img
                    src={currentMedia.thumbnailUrl}
                    alt={currentMedia.alt}
                    className="w-full h-full object-cover rounded-lg border border-white/10 group-hover:border-sky-400/30 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
                    <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              )}
            </div>

            {/* Media Thumbnails */}
            <div className="flex justify-center mt-4 space-x-2">
              {product.media.map((media, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMediaIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentMediaIndex === index
                      ? 'border-sky-400 scale-110'
                      : 'border-white/10 hover:border-sky-400/50'
                  }`}
                >
                  <img
                    src={media.type === 'video' ? media.thumbnailUrl : media.url}
                    alt={media.alt}
                    className="w-full h-full object-cover"
                  />
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Subscription Options */}
          <div className="space-y-6">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-3 h-3 rounded-full ${product.status === 'Undetected' ? 'bg-green-400' : product.status === 'Updating' ? 'bg-blue-400' : 'bg-red-400'} animate-pulse`}></div>
                <span className={`${product.status === 'Undetected' ? 'text-green-400' : product.status === 'Updating' ? 'text-blue-400' : 'text-red-400'} font-medium`}>
                  {product.status}
                </span>
              </div>
              <p className="text-gray-400">Choose your subscription plan below:</p>
            </div>
            
            {product.subscriptions.map((sub, index) => (
              <div
                key={index}
                className="group bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center justify-between hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-sky-400 transition-colors">{sub.name}</h3>
                  <p className="text-gray-400">{sub.duration}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-sky-400">${sub.price}</span>
                  <button
                    className="sellauth-button bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:scale-105 flex items-center space-x-2"
                    onClick={(e) => {
                      window.sellAuthEmbed.checkout(e.currentTarget, {
                        cart: [{
                          productId: storeConfig.productId,
                          variantId: sub.variantId,
                          quantity: 1
                        }],
                        shopId: storeConfig.shopId,
                        modal: false
                      });
                    }}
                  >
                    <span>Purchase</span>
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 space-y-12">
          <h2 className="text-4xl font-bold">Product <span className="text-sky-400">Details</span></h2>
          
          {/* Compatibility */}
          <div className="group bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 flex items-center group-hover:text-sky-400 transition-colors">
              <FontAwesomeIcon icon={faDesktop} className="text-sky-400 mr-3 group-hover:scale-110 transition-transform" />
              Compatibility
            </h3>
            <ul className="space-y-3">
              {product.compatibility.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-300 group-hover:text-white/90 transition-colors">
                  <span className="text-sky-400 group-hover:scale-110 transition-transform">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          {product.features.map((feature, index) => (
            <div key={index} className="group bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center group-hover:text-sky-400 transition-colors">
                <FontAwesomeIcon 
                  icon={getFeatureIcon(feature.title)}
                  className="text-sky-400 mr-3 group-hover:scale-110 transition-transform" 
                />
                {feature.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3 text-gray-300 group-hover:text-white/90 transition-colors">
                    <span className="text-sky-400 group-hover:scale-110 transition-transform">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Media Viewer */}
      {isFullscreen && (
        <MediaViewer
          media={product.media}
          currentIndex={currentMediaIndex}
          onClose={() => setIsFullscreen(false)}
        />
      )}
    </div>
  );
};
