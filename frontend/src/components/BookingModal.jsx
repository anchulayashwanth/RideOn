import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../App';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingModal({ car, isOpen, onClose }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    aadhaarNumber: '',
    drivingLicense: '',
    panCard: '',
    mobileNumber: '',
    address: '',
    startDate: null,
    endDate: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: date
    }));
  };

  const calculateTotalPrice = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    const days = Math.ceil(
      (formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24)
    );
    return days * car.pricePerDay;
  };

  const validateForm = () => {
    if (!formData.startDate || !formData.endDate) {
      setError('Please select both start and end dates');
      return false;
    }
    if (!formData.aadhaarNumber.match(/^\d{12}$/)) {
      setError('Please enter a valid 12-digit Aadhaar number');
      return false;
    }
    if (!formData.drivingLicense) {
      setError('Driving license is required');
      return false;
    }
    if (!formData.panCard.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
      setError('Please enter a valid PAN card number');
      return false;
    }
    if (!formData.mobileNumber.match(/^[6-9]\d{9}$/)) {
      setError('Please enter a valid Indian mobile number');
      return false;
    }
    if (!formData.address.trim()) {
      setError('Address is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check authentication before proceeding
    if (!isAuthenticated) {
      onClose();
      navigate('/login');
      return;
    }

    if (!validateForm()) return;

    try {
      setLoading(true);
      setError('');

      const payload = {
        car: car._id,
        fromDate: formData.startDate,
        toDate: formData.endDate,
        aadhaarNumber: formData.aadhaarNumber,
        drivingLicense: formData.drivingLicense,
        panCard: formData.panCard,
        mobileNumber: formData.mobileNumber,
        address: formData.address,
        totalPrice: calculateTotalPrice()
      };

      await api.post('/bookings', payload);
      onClose();

      // Show success popup
      alert(`🎉 Car booked successfully!\n\nCar: ${car.name}\nDuration: ${Math.ceil((formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24))} days\nTotal Price: ₹${calculateTotalPrice()}\n\nThank you for choosing RideOn!`);

      // Refresh the page to update car availability
      window.location.reload();
    } catch (err) {
      setError(err?.response?.data?.message || 'Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Book {car.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <DatePicker
                selected={formData.startDate}
                onChange={(date) => handleDateChange(date, 'startDate')}
                selectsStart
                startDate={formData.startDate}
                endDate={formData.endDate}
                minDate={new Date()}
                placeholderText="Select start date"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <DatePicker
                selected={formData.endDate}
                onChange={(date) => handleDateChange(date, 'endDate')}
                selectsEnd
                startDate={formData.startDate}
                endDate={formData.endDate}
                minDate={formData.startDate || new Date()}
                placeholderText="Select end date"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhaar Number
            </label>
            <input
              type="text"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleInputChange}
              placeholder="Enter 12-digit Aadhaar number"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              maxLength="12"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Driving License Number
            </label>
            <input
              type="text"
              name="drivingLicense"
              value={formData.drivingLicense}
              onChange={handleInputChange}
              placeholder="Enter driving license number"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PAN Card Number
            </label>
            <input
              type="text"
              name="panCard"
              value={formData.panCard}
              onChange={handleInputChange}
              placeholder="Enter PAN card number"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              style={{ textTransform: 'uppercase' }}
              maxLength="10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter 10-digit mobile number"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              maxLength="10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your full address"
              rows="3"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {formData.startDate && formData.endDate && (
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>Total Price:</span>
              <span className="text-green-600">₹{calculateTotalPrice()}</span>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 text-white rounded ${
                loading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}