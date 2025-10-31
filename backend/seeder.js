const mongoose = require('mongoose');
const Car = require('./models/Car');
require('dotenv').config();

const indianCars = require('./indianCars');

const sampleCars = indianCars;

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rideon');
    console.log('Connected to MongoDB...');

    // Clear existing cars
    await Car.deleteMany({});
    console.log('Cleared existing cars...');

    // Insert sample cars
    await Car.insertMany(sampleCars);
    console.log('Sample cars added successfully!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData();