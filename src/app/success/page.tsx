'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function Success() {
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
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
        </motion.div>
        
        <h1 className="text-3xl font-serif font-bold text-navy mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-lg text-steel mb-6">
          Thank you for your purchase. Your Heritage Steel tumbler is being prepared with pride.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-crimson hover:bg-crimson/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <p className="text-sm text-steel">
            You'll receive a confirmation email shortly.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
