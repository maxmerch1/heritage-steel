'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Shield, Star } from 'lucide-react';

export default function PatriotsList() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-off-white mb-6">
              Stay Ahead of the Next Drop
            </h1>
            <p className="text-xl text-steel mb-8 max-w-2xl mx-auto">
              Limited runs only. Join 5,000+ patriots who get first access to exclusive drops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-navy mb-8">
                Why Join the Patriot's List?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Star,
                    title: "First Access",
                    description: "Be the first to know about new drops before they sell out."
                  },
                  {
                    icon: Shield,
                    title: "Exclusive Content",
                    description: "Get behind-the-scenes content and stories from our workshop."
                  },
                  {
                    icon: Mail,
                    title: "Special Offers",
                    description: "Receive exclusive discounts and early bird pricing."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-crimson rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-off-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-navy mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-navy/70">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg border border-steel/20 p-8"
            >
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                    Join the Patriot's List
                  </h3>
                  <p className="text-navy/70 mb-6">
                    Get exclusive access to limited drops and special offers.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-steel/30 rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-crimson hover:bg-crimson/90 text-off-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25"
                    >
                      Join Now
                    </motion.button>
                  </form>
                  
                  <p className="text-xs text-steel mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-off-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                    Welcome to the Patriot's List!
                  </h3>
                  <p className="text-navy/70 mb-6">
                    You're now part of an exclusive community. Check your email for confirmation.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSubmitted(false)}
                    className="bg-steel hover:bg-steel/80 text-navy py-2 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    Join Another Email
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-serif font-bold text-off-white mb-8">
              Join Thousands of Patriots
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "5,000+", label: "Patriots Joined" },
                { number: "15", label: "Drops Completed" },
                { number: "98%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-crimson mb-2">
                    {stat.number}
                  </div>
                  <div className="text-steel">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
