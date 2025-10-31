import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BookingModal from './BookingModal'
import { useAuth } from '../App'

export default function CarCard({ car }){
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={
            car.image && car.image.length > 0
              ? car.image
              : `https://source.unsplash.com/800x600/?${encodeURIComponent(car.brand || car.type || car.name || 'car')}-car&sig=${encodeURIComponent(car._id || car.name || Math.floor(Math.random() * 100000))}`
          }
          alt={car.name || car.model || 'Car image'}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            car.available 
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {car.available ? 'Available' : 'Booked'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{car.name || car.model || 'Unnamed car'}</h3>
        <p className="text-sm text-gray-600 mt-1">{car.model || ''}</p>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Price per day:</span>
            <span className="text-lg font-semibold text-gray-900">₹{car.pricePerDay}</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            disabled={!car.available}
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-200 ${
              car.available
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {car.available ? 'Book Now' : 'Unavailable'}
          </button>
        </div>
      </div>

      <BookingModal
        car={car}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
