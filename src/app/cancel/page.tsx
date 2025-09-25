'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingCart } from 'lucide-react';

export default function Cancel() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <XCircle className="w-16 h-16 text-red-600 mx-auto" />
        </motion.div>
        
        <h1 className="text-3xl font-serif font-bold text-navy mb-4">
          Order Cancelled
        </h1>
        
        <p className="text-lg text-steel mb-6">
          Your order was cancelled. No charges have been made to your account.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 bg-crimson hover:bg-crimson/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-steel hover:text-navy transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
