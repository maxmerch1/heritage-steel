'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, CreditCard, Truck } from 'lucide-react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const subtotal = 39;
  const shipping = 8.99;
  const tax = 3.12;
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
              Checkout
            </h1>
            <p className="text-xl text-steel">
              Complete your order securely
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg border border-steel/20 p-8"
              >
                <h2 className="text-2xl font-serif font-bold text-navy mb-6">
                  Shipping Information
                </h2>

                <form className="space-y-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-navy mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                      placeholder="123 Main St"
                    />
                  </div>

                  {/* City, State, ZIP */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-navy mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                        placeholder="Anytown"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-navy mb-2">
                        State
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select State</option>
                        <option value="TX">Texas</option>
                        <option value="FL">Florida</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-navy mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                        placeholder="12345"
                      />
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="border-t border-steel/20 pt-8">
                    <h3 className="text-xl font-serif font-bold text-navy mb-6">
                      Payment Information
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-navy mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-navy mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-navy mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="nameOnCard" className="block text-sm font-medium text-navy mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="nameOnCard"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="bg-navy/5 rounded-lg p-4 flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-crimson mt-0.5" />
                    <div>
                      <p className="text-sm text-navy font-medium">
                        Secure Checkout
                      </p>
                      <p className="text-xs text-navy/70">
                        Your payment information is encrypted and secure.
                      </p>
                    </div>
                  </div>
                </form>
              </motion.div>
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

                {/* Product */}
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-steel/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-steel/20 to-steel/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/mockup-of-a-serious-and-handsome-man-holding-a-travel-mug-24399.png" 
                      alt="1776 Collection Tumbler"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy">1776 Collection Tumbler</h4>
                    <p className="text-steel text-sm">Qty: 1</p>
                  </div>
                  <span className="text-crimson font-bold">$39</span>
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-navy">Subtotal</span>
                    <span className="text-navy">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy">Shipping</span>
                    <span className="text-navy">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy">Tax</span>
                    <span className="text-navy">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-steel/20 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-navy">Total</span>
                      <span className="text-crimson">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-crimson hover:bg-crimson/90 text-off-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25 mb-4"
                >
                  Complete Order
                </motion.button>

                {/* Security Icons */}
                <div className="flex items-center justify-center space-x-4 text-steel">
                  <Shield className="w-5 h-5" />
                  <CreditCard className="w-5 h-5" />
                  <Truck className="w-5 h-5" />
                </div>

                <p className="text-xs text-steel text-center mt-4">
                  Remember: once this drop is gone, it's retired forever.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
