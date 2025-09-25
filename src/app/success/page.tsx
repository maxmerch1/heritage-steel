'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Package, Truck, Mail } from 'lucide-react';

export default function Success() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Success Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto" />
            </motion.div>
            
            <h1 className="text-4xl font-serif font-bold text-navy mb-4">
              🎉 Order Confirmed!
            </h1>
            
            <p className="text-xl text-steel mb-8">
              Your Heritage Steel tumbler is on its way to becoming a reality.
            </p>
          </div>

          {/* Order Status Timeline */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6 text-center">
              What Happens Next
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Payment Processed</h3>
                  <p className="text-steel">Your payment has been successfully processed</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Order Being Prepared</h3>
                  <p className="text-steel">Your tumbler is being crafted with precision</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Shipping Soon</h3>
                  <p className="text-steel">We'll notify you when your order ships</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-navy rounded-lg p-6 mb-8 text-off-white">
            <h3 className="text-xl font-serif font-bold mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-steel">Heritage Steel Tumbler</span>
                <span className="text-off-white font-semibold">$39.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-steel">Shipping</span>
                <span className="text-off-white font-semibold">FREE</span>
              </div>
              <hr className="border-steel" />
              <div className="flex justify-between text-lg">
                <span className="text-off-white font-bold">Total</span>
                <span className="text-crimson font-bold">$39.00</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-crimson/20 rounded-lg">
              <p className="text-off-white text-sm">
                <strong>Thank you for your order!</strong> Your tumbler is being prepared. 
                Expect delivery in 5–7 business days. You'll receive updates by email.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 text-steel">
              <Mail className="w-5 h-5" />
              <span>Check your email for order confirmation and tracking details</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 bg-crimson hover:bg-crimson/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 bg-navy hover:bg-navy/90 text-off-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Package className="w-4 h-4" />
                <span>Shop More</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
