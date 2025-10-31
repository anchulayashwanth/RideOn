import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiClock, FiDollarSign, FiMapPin, FiThumbsUp, FiHeadphones } from 'react-icons/fi';

const features = [
  {
    icon: <FiShield className="w-6 h-6" />,
    title: 'Safe & Secure',
    description: 'All our vehicles undergo rigorous safety inspections and are fully insured.'
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: '24/7 Availability',
    description: 'Book your car anytime, anywhere. Our service never sleeps.'
  },
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: 'Best Rates',
    description: 'Competitive pricing with no hidden fees. Get the best value for your money.'
  },
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: 'Convenient Locations',
    description: 'Multiple pickup and drop-off locations for your convenience.'
  },
  {
    icon: <FiThumbsUp className="w-6 h-6" />,
    title: 'Quality Guaranteed',
    description: 'Premium cars maintained to the highest standards.'
  },
  {
    icon: <FiHeadphones className="w-6 h-6" />,
    title: 'Customer Support',
    description: 'Dedicated support team ready to assist you anytime.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Why Choose RideOn?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of comfort, convenience, and reliability with our premium car rental service.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}