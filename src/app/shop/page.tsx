'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

export default function Shop() {
  // Checkout handler function
  const handleCheckout = async () => {
    try {
      console.log('Proceeding to checkout...');
      
      // Call the new checkout API
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      // Redirect to Stripe checkout
      window.location.href = url;
      
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout failed. Please try again.');
    }
  };
  const products = [
        {
          id: 1,
          name: "1776 Patriot Tumbler",
          price: 39,
          image: "/images/product-2.jpg",
          description: "Raise a toast to freedom. Forged in double-wall steel, engraved with the eagle — built tough, just like American values.",
          inStock: true,
          scarcity: "🔥 Only 437 of 500 left in Drop #001",
          rating: 4.3,
          reviews: 89
        },
        {
          id: 4,
          name: "Heritage Classic – Forged in Tradition",
          price: 39,
          image: "/images/product1.jpg",
          description: "Timeless design with subtle patriotic accents",
          inStock: true,
          scarcity: "🔥 Only 89 of 150 left in Drop #001"
        }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold text-off-white mb-4"
          >
            The 1776 Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-steel max-w-2xl mx-auto"
          >
            Premium engraved steel tumblers forged for patriots
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-lg shadow-lg border border-steel/20 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                    {/* Product Image */}
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover drop-shadow-lg"
                      />
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Quick Add Button */}
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute bottom-4 right-4 bg-crimson hover:bg-crimson/90 text-off-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </motion.button>
                    </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold text-navy">
                      {product.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-crimson font-semibold mr-1">{product.rating || 4.6}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => {
                          const rating = product.rating || 4.6;
                          const fullStars = Math.floor(rating);
                          const hasPartialStar = rating % 1 !== 0;
                          const partialStarWidth = (rating % 1) * 100;
                          
                          if (i < fullStars) {
                            return (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            );
                          } else if (i === fullStars && hasPartialStar) {
                            return (
                              <div key={i} className="relative">
                                <Star className="w-4 h-4 text-gray-300" />
                                <div className="absolute inset-0 overflow-hidden" style={{ width: `${partialStarWidth}%` }}>
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <Star key={i} className="w-4 h-4 text-gray-300" />
                            );
                          }
                        })}
                      </div>
                      <span className="text-steel text-sm ml-1">({product.reviews || 120})</span>
                    </div>
                  </div>
                  
                  <p className="text-steel text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Scarcity Indicator */}
                  <div className="bg-navy/5 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-crimson font-semibold text-sm">Drop #001</span>
                      <span className="text-steel text-sm">{product.scarcity}</span>
                    </div>
                    <div className="w-full bg-steel/20 rounded-full h-1.5">
                      <div className="bg-crimson h-1.5 rounded-full" style={{ width: '87.4%' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-crimson">
                      ${product.price}
                    </span>
                    <span className="text-green-600 text-sm font-semibold">In Stock</span>
                  </div>
                  
                  {/* Buy Now Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#d62828' }}
                  >
                    Buy Now — $39
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-navy rounded-lg p-8 text-off-white">
              <h3 className="text-2xl font-serif font-bold mb-4">
                More Drops Coming Soon
              </h3>
              <p className="text-steel mb-6">
                Join the Patriot's List to be the first to know about new limited drops.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-crimson hover:bg-crimson/90 text-off-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25"
              >
                Join Patriot's List
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
