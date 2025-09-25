'use client';

import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function Cart() {
  const [items, setItems] = useState([
        {
          id: 1,
          name: "1776 Collection Tumbler",
          price: 39,
          quantity: 1,
          image: "/images/mockup-of-a-serious-and-handsome-man-holding-a-travel-mug-24399.png"
        }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setItems(items.filter(item => item.id !== id));
    } else {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 8.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-off-white mb-4">
              Your Cart
            </h1>
            <p className="text-xl text-steel">
              Review your items before checkout
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <ShoppingBag className="w-24 h-24 text-steel mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-navy mb-4">
                Your cart is empty
              </h2>
              <p className="text-navy/70 mb-8">
                Add some patriotic gear to get started.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-crimson hover:bg-crimson/90 text-off-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25"
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg border border-steel/20 p-6"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-gradient-to-br from-steel/20 to-steel/10 rounded-lg flex items-center justify-center overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-semibold text-navy mb-1">
                            {item.name}
                          </h3>
                          <p className="text-steel text-sm mb-2">
                            Premium 20oz steel tumbler
                          </p>
                          <div className="text-xl font-bold text-crimson">
                            ${item.price}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-steel/20 hover:bg-steel/30 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold text-navy">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-steel/20 hover:bg-steel/30 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 bg-crimson/10 hover:bg-crimson/20 text-crimson rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-lg border border-steel/20 p-6 sticky top-8"
                >
                  <h3 className="text-xl font-serif font-bold text-navy mb-6">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-navy">Subtotal</span>
                      <span className="text-navy">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy">Shipping</span>
                      <span className="text-navy">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy">Tax</span>
                      <span className="text-navy">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-steel/20 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-navy">Total</span>
                        <span className="text-crimson">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <div className="bg-navy/5 rounded-lg p-4 mb-6">
                      <p className="text-navy text-sm">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                      </p>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-crimson hover:bg-crimson/90 text-off-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25 mb-4"
                  >
                    Proceed to Checkout
                  </motion.button>

                  <p className="text-xs text-steel text-center">
                    Remember: once this drop is gone, it's retired forever.
                  </p>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
