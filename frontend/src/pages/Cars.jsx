import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../components/CarCard.jsx";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // ✅ If you added proxy in vite.config.js, you can keep this as "/api/cars"
        const res = await axios.get("/api/cars");
        console.log("✅ Cars fetched:", res.data);
        setCars(res.data);
      } catch (err) {
        console.error("❌ Error fetching cars:", err);
        setError("Failed to load cars. Please check backend connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading cars...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">
        {error}
      </div>
    );
  }

  return (
    <section className="min-h-screen container mx-auto px-6 py-10 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Available Cars
      </h2>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No cars available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car._id || car.name} car={car} />
          ))}
        </div>
      )}
    </section>
  );
}
