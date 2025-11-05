import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white shadow-md">
      {/* Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        RideOn
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/cars" className="hover:text-yellow-300">
          Cars
        </Link>
        <Link to="/contact" className="hover:text-yellow-300">
          Contact
        </Link>

        {/* Show login/signup when not logged in */}
        {!user && (
          <>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition"
            >
              Signup
            </Link>
          </>
        )}

        {/* Show logout only when logged in */}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
