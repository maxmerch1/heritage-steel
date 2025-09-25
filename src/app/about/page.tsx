'use client';

import { motion } from 'framer-motion';
import { Shield, Hammer, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Banner */}
      <section className="relative h-96 bg-navy flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy/70"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C0C0C0' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2v2h2v2.5h2v-2.5h2v-2h-2zM20 2.5V0H18v2.5h-2v2h2v2.5h2V4.5h2v-2h-2zM2.5 20.5V18H0v2.5H0v2h2.5v2.5h2v-2.5h2v-2H2.5zM2.5 2.5V0H0v2.5H0v2h2.5v2.5h2V4.5h2v-2H2.5z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center text-off-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Born in Tradition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-steel"
          >
            Built for Today
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Our Story
            </h2>
            <p className="text-xl text-navy/70 leading-relaxed">
              Heritage Steel is more than drinkware. It's a badge of loyalty, a symbol of strength, 
              and a daily reminder that America comes first. We believe in the values that built this 
              great nation: hard work, integrity, and unwavering commitment to what's right.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Hammer,
                title: "Crafted with Pride",
                description: "Every tumbler is hand-finished by American craftsmen who take pride in their work."
              },
              {
                icon: Shield,
                title: "Built to Last",
                description: "Like the values we hold dear, our products are designed to stand the test of time."
              },
              {
                icon: Star,
                title: "Made in America",
                description: "From steel to finish, every component is sourced and manufactured in the USA."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg border border-steel/20"
              >
                <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-off-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-navy/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy rounded-lg p-8 text-center text-off-white"
          >
            <h3 className="text-3xl font-serif font-bold mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-steel leading-relaxed max-w-3xl mx-auto">
              To create premium products that embody the American spirit and serve as daily reminders 
              of the values that make this country great. Every Heritage Steel product is a testament 
              to quality, durability, and the unwavering commitment to excellence that defines America.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-crimson to-crimson/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-off-white mb-4">
              Join the Heritage
            </h3>
            <p className="text-xl text-off-white/90 mb-8">
              Be part of a community that values quality, tradition, and American pride.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-off-white hover:bg-off-white/90 text-crimson px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Shop the Collection
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
