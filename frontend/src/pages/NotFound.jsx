import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiPhone } from 'react-icons/fi';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-max mx-auto text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="mt-4 text-3xl font-semibold text-gray-900">Page not found</p>
        <p className="mt-4 text-lg text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <FiHome className="mr-2" />
            Go back home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <FiPhone className="mr-2" />
            Contact support
          </Link>
        </div>
      </div>
    </motion.div>
  );
}