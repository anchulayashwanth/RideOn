const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rideon', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected (config)');
  } catch (err) {
    console.error('MongoDB connection error (config):', err);
    process.exit(1);
  }
};

module.exports = connectDB;
