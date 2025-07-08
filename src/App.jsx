import Spline from '@splinetool/react-spline';
import React, { Suspense } from 'react';
import { ChevronDown, Star, ShoppingCart, Heart, Truck, Shield, Zap } from 'lucide-react';

// Memoized Spline component for better performance
const MemoizedSpline = React.memo(({ scene }) => (
  <Spline scene={scene} />
));

// Simple loading component
const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-white text-2xl animate-pulse">Loading 3D Model...</div>
  </div>
);

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with 3D Model */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <MemoizedSpline scene="https://prod.spline.design/Y3hBWLNrksCezWHD/scene.splinecode" />
          </Suspense>
        </div>

     
       

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="text-white text-4xl" />
        </div>
      </section>

      {/* Product Website Content */}
      <div className="relative z-30 bg-white">
        {/* Features Section */}
      

        {/* Product Showcase */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Product Showcase
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <div className="text-white text-6xl">🚗</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">(4.9)</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">MAX SCHNELL Pro</h3>
                  <p className="text-gray-600 mb-4">Premium edition with advanced features and enhanced performance.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">$299</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <div className="text-white text-6xl">🏎️</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">(4.8)</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">MAX SCHNELL Sport</h3>
                  <p className="text-gray-600 mb-4">Sport edition designed for maximum speed and agility.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">$249</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                  <div className="text-white text-6xl">🚙</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">(4.7)</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">MAX SCHNELL Classic</h3>
                  <p className="text-gray-600 mb-4">Classic edition with timeless design and reliable performance.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">$199</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      
      </div>
    </div>
  );
}
