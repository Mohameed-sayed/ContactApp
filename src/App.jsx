import Spline from '@splinetool/react-spline';
import React from 'react';
import { ChevronDown, Star, ShoppingCart, Heart, Truck, Shield, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with 3D Model */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10">
          <Spline scene="https://prod.spline.design/Y3hBWLNrksCezWHD/scene.splinecode" />
        </div>

        {/* Hero Content Overlay */}


        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="text-white text-4xl" />
        </div>
      </section>

      {/* Product Website Content */}
      <div className="relative z-30 bg-white">
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Why Choose MAX SCHNELL?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300">
                <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">Experience unprecedented speed and performance with our cutting-edge technology.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Quality</h3>
                <p className="text-gray-600">Built with the finest materials and engineered for exceptional durability.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300">
                <Truck className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Shipping</h3>
                <p className="text-gray-600">Worldwide shipping included with every purchase, delivered to your door.</p>
              </div>
            </div>
          </div>
        </section>

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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
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

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"The MAX SCHNELL Pro exceeded all my expectations. The quality and performance are outstanding!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">John Smith</h4>
                    <p className="text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"Amazing product! The 3D visualization helped me understand exactly what I was getting."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Maria Johnson</h4>
                    <p className="text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"Fast shipping and excellent customer service. Highly recommend MAX SCHNELL!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    DW
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">David Wilson</h4>
                    <p className="text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience MAX SCHNELL?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of satisfied customers and discover the future of automotive excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">MAX SCHNELL</h3>
                <p className="text-gray-400">Revolutionary automotive design and technology.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>MAX SCHNELL Pro</li>
                  <li>MAX SCHNELL Sport</li>
                  <li>MAX SCHNELL Classic</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Contact Us</li>
                  <li>Shipping Info</li>
                  <li>Returns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 MAX SCHNELL. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
