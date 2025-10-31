const Booking = require('../models/Booking');
const Car = require('../models/Car');

exports.createBooking = async (req, res) => {
  try {
    const {
      car, fromDate, toDate, totalPrice,
      aadhaarNumber, drivingLicense, panCard, mobileNumber, address
    } = req.body;

    // Use authenticated user ID from middleware
    const user = req.user.id;

    // Validate required fields
    if (!aadhaarNumber || !drivingLicense || !panCard || !mobileNumber || !address) {
      return res.status(400).json({ message: 'All user details are required' });
    }

    // Validate formats
    if (!/^\d{12}$/.test(aadhaarNumber)) {
      return res.status(400).json({ message: 'Invalid Aadhaar number format' });
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panCard)) {
      return res.status(400).json({ message: 'Invalid PAN card format' });
    }
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      return res.status(400).json({ message: 'Invalid mobile number format' });
    }

    // Basic check: ensure car is available
    const foundCar = await Car.findById(car);
    if (!foundCar) return res.status(404).json({ message: 'Car not found' });
    if (!foundCar.available) return res.status(400).json({ message: 'Car not available' });

    const booking = await Booking.create({
      user, car, carName: foundCar.name, carModel: foundCar.model, carImage: foundCar.image,
      fromDate, toDate, totalPrice,
      aadhaarNumber, drivingLicense, panCard, mobileNumber, address
    });
    // Mark car unavailable
    foundCar.available = false;
    await foundCar.save();

    // Populate car details in response
    const populatedBooking = await Booking.findById(booking._id)
      .populate('user', 'name email')
      .populate('car', 'name model image pricePerDay');

    res.status(201).json({ booking: populatedBooking, car: foundCar });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name email')
      .populate('car', 'name model image pricePerDay');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
