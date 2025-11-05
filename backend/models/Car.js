import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fuel: { type: String, enum: ["Petrol", "Diesel", "EV", "Hybrid"], required: true },
  transmission: { type: String, enum: ["Manual", "Automatic"], required: true },
  seats: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  image: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Car", carSchema);
