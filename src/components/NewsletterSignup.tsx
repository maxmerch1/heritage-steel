'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  className?: string;
  showIncentive?: boolean;
}

export default function NewsletterSignup({ className = '', showIncentive = true }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('✅ You\'re in! Check your inbox for Patriot\'s updates.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className={`bg-navy rounded-lg p-6 text-off-white ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold mb-2">
          Join the Patriot's List
        </h3>
        {showIncentive && (
          <p className="text-steel">
            Join 5,000+ patriots who get early access to new drops + 10% off their first order.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-navy placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-crimson"
              disabled={status === 'loading'}
              required
            />
          </div>
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
            className="bg-crimson hover:bg-crimson/90 text-off-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-off-white border-t-transparent rounded-full animate-spin"></div>
                <span>Joining...</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Join Now</span>
              </>
            )}
          </motion.button>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 text-sm ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </form>
    </div>
  );
}
