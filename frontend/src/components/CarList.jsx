import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarCard from './CarCard';
import { FiFilter, FiX } from 'react-icons/fi';

export default function CarList({ cars }) {
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    availability: 'all'
  });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = {
    type: ['all', 'sedan', 'suv', 'hatchback', 'mpv'],
    priceRange: ['all', 'budget', 'mid-range', 'premium'],
    availability: ['all', 'available', 'unavailable']
  };

  const filteredCars = cars?.filter(car => {
    if (filters.type !== 'all' && car.type !== filters.type) return false;
    if (filters.availability !== 'all' && car.available !== (filters.availability === 'available')) return false;
    if (filters.priceRange !== 'all') {
      if (filters.priceRange === 'budget' && car.pricePerDay > 5000) return false;
      if (filters.priceRange === 'mid-range' && (car.pricePerDay <= 5000 || car.pricePerDay > 10000)) return false;
      if (filters.priceRange === 'premium' && car.pricePerDay <= 10000) return false;
    }
    return true;
  });

  if (!cars) return null;

  return (
    <div className="relative">
      {/* Filter Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="mb-6 px-4 py-2 bg-white rounded-lg shadow-sm border flex items-center space-x-2 hover:bg-gray-50"
      >
        <FiFilter />
        <span>Filters</span>
      </motion.button>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute z-10 left-0 right-0 bg-white rounded-lg shadow-lg p-6 mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(filterOptions).map(([key, options]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <select
                    value={filters[key]}
                    onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Car Grid */}
      {filteredCars.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No cars found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results.</p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                key={car._id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
