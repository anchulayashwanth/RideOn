import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleBookNow = async () => {
    if (!user || !token) {
      alert("Please login first to book a car.");
      navigate("/login");
      return;
    }

    const bookingData = {
      carId: car._id,
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days later
      totalPrice: car.price * 2,
    };

    console.log("📤 Sending booking:", bookingData);

    try {
      const res = await axios.post("http://localhost:5000/api/bookings", bookingData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Booking successful!");
      console.log("✅ Booking saved:", res.data);
    } catch (err) {
      console.error("❌ Booking error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "❌ Booking failed.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-1">{car.name}</h3>
        <p className="text-gray-600 mb-2">{car.brand}</p>
        <p className="text-gray-800 font-semibold mb-4">₹{car.price}/day</p>
        <button
          onClick={handleBookNow}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
