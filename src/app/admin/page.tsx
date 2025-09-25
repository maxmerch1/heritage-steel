'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Users, Calendar } from 'lucide-react';

interface EmailData {
  email: string;
  timestamp: string;
  source: string;
  date: string;
  time: string;
}

export default function Admin() {
  const [emails, setEmails] = useState<EmailData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await fetch('/api/admin/emails');
      if (response.ok) {
        const data = await response.json();
        setEmails(data.emails || []);
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadEmails = () => {
    const csvContent = [
      'Email,Date,Time,Source',
      ...emails.map(email => 
        `"${email.email}","${email.date}","${email.time}","${email.source}"`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-emails-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-crimson border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-navy">Loading emails...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="bg-navy rounded-lg p-6 text-off-white mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-serif font-bold mb-2">
                  📧 Newsletter Subscribers
                </h1>
                <p className="text-steel">
                  Manage your Patriot's List subscribers
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-crimson">
                  {emails.length}
                </div>
                <p className="text-steel text-sm">Total Subscribers</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">{emails.length}</p>
                  <p className="text-steel text-sm">Total Subscribers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">
                    {emails.filter(email => 
                      new Date(email.timestamp).toDateString() === new Date().toDateString()
                    ).length}
                  </p>
                  <p className="text-steel text-sm">Today's Signups</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-crimson/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">
                    {emails.filter(email => 
                      new Date(email.timestamp) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    ).length}
                  </p>
                  <p className="text-steel text-sm">This Week</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadEmails}
              className="bg-crimson hover:bg-crimson/90 text-off-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-crimson/25 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CSV</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchEmails}
              className="bg-navy hover:bg-navy/90 text-off-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Refresh</span>
            </motion.button>
          </div>

          {/* Email List */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-serif font-bold text-navy">
                Subscriber List
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emails.map((email, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy">
                        {email.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-steel">
                        {email.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-steel">
                        {email.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-steel">
                        {email.source}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {emails.length === 0 && (
            <div className="text-center py-12">
              <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">No subscribers yet</h3>
              <p className="text-steel">Newsletter signups will appear here once customers start joining.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
