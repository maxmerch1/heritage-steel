'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-serif font-bold text-crimson">
              Heritage Steel
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-off-white hover:text-crimson px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-off-white hover:text-crimson px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-off-white hover:text-crimson px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/patriots-list"
                className="text-off-white hover:text-crimson px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Patriot's List
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              href="/shop"
              className="bg-crimson hover:bg-crimson/90 text-off-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-crimson/25"
            >
              Shop Now
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-off-white hover:text-crimson focus:outline-none focus:text-crimson"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-steel">
              <Link
                href="/"
                className="text-off-white hover:text-crimson block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-off-white hover:text-crimson block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-off-white hover:text-crimson block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/patriots-list"
                className="text-off-white hover:text-crimson block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Patriot's List
              </Link>
              <Link
                href="/shop"
                className="bg-crimson hover:bg-crimson/90 text-off-white block px-3 py-2 text-base font-medium rounded-lg mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
