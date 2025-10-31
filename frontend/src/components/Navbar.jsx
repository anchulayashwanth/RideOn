import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCalendar, FiHome, FiPhone, FiLogIn, FiLogOut, FiUser } from 'react-icons/fi';
import { useAuth } from '../App';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'Cars', path: '/cars', icon: <FiCalendar /> },
    { name: 'Contact', path: '/contact', icon: <FiPhone /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}
            >
              RideOn
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 ${
                  scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-300'
                } transition-colors duration-200`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Auth Links */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/bookings"
                  className={`flex items-center space-x-1 ${
                    scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  } transition-colors duration-200`}
                >
                  <FiUser />
                  <span>Bookings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-1 ${
                    scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  } transition-colors duration-200`}
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`flex items-center space-x-1 ${
                    scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  } transition-colors duration-200`}
                >
                  <FiLogIn />
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className={`flex items-center space-x-1 ${
                    scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  } transition-colors duration-200`}
                >
                  <FiUser />
                  <span>Signup</span>
                </Link>
              </div>
            )}

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}

              {/* Mobile Auth Links */}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/bookings"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser />
                    <span>Bookings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 w-full text-left"
                  >
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiLogIn />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser />
                    <span>Signup</span>
                  </Link>
                </>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
