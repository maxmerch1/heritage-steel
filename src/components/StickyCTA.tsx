'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show sticky CTA after scrolling past hero section
      if (scrollTop > windowHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t-2 border-crimson p-4 md:hidden sticky-cta"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-2xl font-bold text-crimson">$39</span>
            <span className="text-steel text-sm">Premium Quality</span>
          </div>
          <p className="text-steel text-xs">🔥 Only 437 Left — Get Yours Now</p>
        </div>
        <Link
          href="/shop"
          className="btn-primary text-off-white px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 border border-white/20"
        >
          🔥 Get Yours Now
        </Link>
      </div>
    </motion.div>
  );
}
