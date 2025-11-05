import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Car from "./models/Car.js";

// Setup __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const carsPath = path.join(__dirname, "../frontend/src/data/cars.json");
const carsData = JSON.parse(fs.readFileSync(carsPath, "utf-8"));

const seedCars = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/rideon");
    await Car.deleteMany();
    await Car.insertMany(carsData);
    console.log(`✅ Inserted ${carsData.length} cars successfully.`);
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedCars();
