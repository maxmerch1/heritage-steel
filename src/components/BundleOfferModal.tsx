'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface BundleOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BundleOfferModal({ isOpen, onClose }: BundleOfferModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md mx-4 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-steel hover:text-crimson transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                Double Your Freedom
              </h3>
              <p className="text-steel mb-6">
                Get 2 Heritage Steel Tumblers for just $69 — Save $9!
              </p>
              
              <div className="bg-crimson/10 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-navy font-semibold">2x Heritage Steel Tumblers</span>
                  <span className="text-crimson font-bold text-xl">$69</span>
                </div>
                <div className="text-sm text-steel mt-1">
                  Regular price: $78 • You save: $9
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="block w-full bg-gradient-to-r from-crimson to-red-600 hover:from-red-600 hover:to-crimson text-off-white px-6 py-3 rounded-lg text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25 hover:scale-105"
                >
                  🔥 Get 2 for $69 — Save $9!
                </Link>
                <button
                  onClick={onClose}
                  className="block w-full bg-transparent border-2 border-crimson text-crimson hover:bg-crimson hover:text-off-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  No Thanks, Just One
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
