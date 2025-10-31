import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiInfo, FiDollarSign, FiArrowLeft } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function CarDetails({ cars, loading }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const car = cars?.find(c => c._id === id);

  useEffect(() => {
    if (startDate && endDate && car) {
      const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      setTotalPrice(days * car.pricePerDay);
    }
  }, [startDate, endDate, car]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Car not found</h2>
        <p className="text-gray-600 mb-8">The car you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/cars')}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <FiArrowLeft className="mr-2" /> Back to Cars
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <button
        onClick={() => navigate('/cars')}
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mb-8"
      >
        <FiArrowLeft className="mr-2" /> Back to Cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Car Image and Details */}
        <div>
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
            <img
              src={car.image || 'https://via.placeholder.com/600x400?text=No+Image'}
              alt={car.name}
              className="w-full h-96 object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{car.model}</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <FiDollarSign className="text-blue-600 mr-2" />
              <span className="text-gray-700">₹{car.pricePerDay}/day</span>
            </div>
            <div className="flex items-center">
              <FiInfo className="text-blue-600 mr-2" />
              <span className="text-gray-700">{car.type}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-4">About this car</h3>
            <p className="text-gray-600">
              {car.description || 'Experience luxury and comfort with our premium vehicle. Perfect for both business and leisure trips.'}
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Book this car</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiCalendar className="inline mr-2" />
                Pick-up Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                className="w-full p-2 border rounded-md"
                placeholderText="Select start date"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiClock className="inline mr-2" />
                Return Date
              </label>
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate || new Date()}
                dateFormat="dd/MM/yyyy"
                className="w-full p-2 border rounded-md"
                placeholderText="Select end date"
              />
            </div>

            {totalPrice > 0 && (
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Daily Rate:</span>
                  <span className="font-medium">₹{car.pricePerDay}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Number of Days:</span>
                  <span className="font-medium">
                    {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))}
                  </span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-blue-600">₹{totalPrice}</span>
                  </div>
                </div>
              </div>
            )}

            <button
              disabled={!startDate || !endDate || !car.available}
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                car.available
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {car.available ? 'Book Now' : 'Currently Unavailable'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}