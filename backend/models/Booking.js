const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  carName: { type: String, required: true }, // Store car name for reference
  carModel: { type: String }, // Store car model for reference
  carImage: { type: String }, // Store car image for reference
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  totalPrice: { type: Number },
  // Required user details for booking
  aadhaarNumber: { 
    type: String, 
    required: true,
    match: /^\d{12}$/,  // 12 digits
  },
  drivingLicense: { 
    type: String, 
    required: true,
  },
  panCard: { 
    type: String, 
    required: true,
    match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,  // PAN format
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/,  // Indian mobile format
  },
  address: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
