'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hammer, Shield, Star } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-navy/90 to-navy/70"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C0C0C0' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full">
          <div className="relative h-full w-full">
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            
            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-start p-8 lg:p-16 z-20">
              <div className="text-center lg:text-left text-white max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white"
                >
                  Freedom in Your Hands.
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-xl mb-6 text-white/90 font-semibold"
                >
                  Forged for patriots who believe in strength, pride, and tradition. Built to last — just like our country.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-5xl font-bold text-crimson">$39</span>
                    <span className="text-white/80 text-lg">Premium Quality</span>
                  </div>
                  
                  {/* Scarcity Line */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white/90 text-sm mb-2"
                  >
                    Limited 1776 Drop — First Run, Only 500 Made. Once they're gone, they're gone.
                  </motion.p>
                  
                  {/* Live Scarcity Indicator */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-crimson font-bold text-sm mb-4"
                  >
                    🚨 128 of 500 already sold today
                  </motion.p>
                  
                  {/* Review Snippet */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-center mb-4"
                  >
                    <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
                    <p className="text-white/90 italic text-sm">
                      "Patriots love it."
                    </p>
                  </motion.div>
                  
                  <Link
                    href="/shop"
                    className="block w-full md:w-auto md:mx-auto bg-gradient-to-r from-red-500 to-red-900 hover:from-red-600 hover:to-red-800 text-white px-8 py-5 rounded-lg text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 border-2 border-red-400/30 shadow-lg shadow-red-500/20 text-center"
                    style={{
                      background: 'linear-gradient(135deg, #FF4D4D 0%, #990000 100%)',
                      boxShadow: '0 0 20px rgba(255, 77, 77, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    🔥 Get Yours Now — Only $39
                  </Link>
                  
                  {/* Trust Badges */}
                  <div className="mt-4 text-center">
                    <p className="text-steel text-sm">
                      🇺🇸 Made in America · Veteran-Owned · Fast U.S. Shipping
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Full Hero Image */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img 
                  src="/images/hero-image.jpg" 
                  alt="Patriot with Heritage Steel Tumbler" 
                  className="w-full h-full object-cover drop-shadow-2xl"
                  style={{ objectPosition: 'right center' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Heritage Steel Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              Forged in Steel, Built on Freedom
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Engraved for Patriots Who Refuse to Back Down. Double-Wall Insulation. Zero Compromise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🇺🇸",
                title: "Forged for Patriots, Not Tourists",
                description: "Every tumbler is crafted with American steel and American pride."
              },
              {
                icon: "⭐",
                title: "Laser-engraved freedom that won't fade, chip, or back down",
                description: "Laser-engraved designs that won't fade, chip, or wear away."
              },
              {
                icon: "🛡️",
                title: "Double-wall steel that outlasts every storm",
                description: "Like our values, these tumblers are built to stand the test of time."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-navy/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-off-white mb-4">
              The 1776 Collection
            </h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              Our flagship tumblers featuring iconic American designs. Premium 20oz steel construction with double-wall insulation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                id: 1,
                name: "1776 Patriot Tumbler",
                price: 39,
                image: "/images/product-2.jpg",
                description: "Raise a toast to freedom. Forged in double-wall steel, engraved with the eagle — built tough, just like American values.",
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
                scarcity: "🔥 Only 89 of 150 left in Drop #001"
              }
            ].map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
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
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-semibold text-navy">
                      {product.name}
                    </h3>
                    <span className="text-crimson font-bold text-xl">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-steel text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-steel">
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => {
                          const rating = product.rating || 4.6;
                          const fullStars = Math.floor(rating);
                          const hasPartialStar = rating % 1 !== 0;
                          const partialStarWidth = (rating % 1) * 100;
                          
                          if (i < fullStars) {
                            return (
                              <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            );
                          } else if (i === fullStars && hasPartialStar) {
                            return (
                              <div key={i} className="relative">
                                <svg className="w-4 h-4 text-gray-300" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <div className="absolute inset-0 overflow-hidden" style={{ width: `${partialStarWidth}%` }}>
                                  <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <svg key={i} className="w-4 h-4 text-gray-300" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            );
                          }
                        })}
                      </div>
                      <span>{product.rating || 4.6} ({product.reviews || 120})</span>
                    </div>
                    <span className="text-green-600">In Stock</span>
                  </div>
                  {product.scarcity && (
                    <p className="text-xs text-crimson mt-2">
                      {product.scarcity}
                    </p>
                  )}
                  
                  {/* Buy Now Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#d62828' }}
                  >
                    Buy Now — $39
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-off-white patriotic-bg relative">
        {/* Flag Watermark */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C1121F' fill-opacity='0.1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 0h50v50H0z' fill='%230A1A2F'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              What Patriots Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Bought one for every man in my unit. Solid as hell.",
                author: "Mike R.",
                location: "Army Veteran, Texas",
                avatar: "🇺🇸",
                highlight: true
              },
              {
                text: "Finally, a tumbler that matches my values. Quality you can feel.",
                author: "Sarah K.",
                location: "Patriot Mom, Ohio",
                avatar: "⭐",
                highlight: false
              },
              {
                text: "Worth every penny. This thing will outlast me.",
                author: "Tom W.",
                location: "Patriot Dad, Florida",
                avatar: "🛡️",
                highlight: false
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg p-6 shadow-lg border-2 ${review.highlight ? 'border-crimson' : 'border-steel/20'} ${review.highlight ? 'ring-2 ring-crimson/20' : ''}`}
              >
                <p className={`text-navy mb-4 italic ${review.highlight ? 'font-bold text-lg' : ''}`}>"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson to-red-600 rounded-full flex items-center justify-center mr-4 text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-navy">{review.author}</p>
                    <p className="text-steel text-sm">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Guarantee Strip */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-4xl">🛡️</div>
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-navy mb-2">
                Zero Risk. Full Patriot Guarantee.
              </h3>
              <p className="text-lg text-steel">
                If you don't love it, send it back within 30 days. No hassle, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Tagline */}
      <section className="py-8 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-serif font-bold text-navy">
            Forged for patriots. Built to last. Heritage Steel.
          </p>
        </div>
      </section>
    </div>
  );
}