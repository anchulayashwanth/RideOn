import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' }
    ],
    Services: [
      { name: 'Car Rental', href: '/cars' },
      { name: 'Business Rental', href: '/business' },
      { name: 'Airport Transfer', href: '/airport' },
      { name: 'Luxury Cars', href: '/luxury' }
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  };

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-extrabold text-amber-400">RideOn</Link>
            <p className="mt-4 text-sm text-gray-400">
              Experience the freedom of premium car rentals with RideOn. Your journey begins with us.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-amber-300 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
                  <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                          className="text-gray-400 hover:text-amber-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 text-sm text-center md:flex md:justify-between">
          <p>© {new Date().getFullYear()} RideOn. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="/terms" className="text-gray-400 hover:text-white mx-3 transition-colors duration-200">
              Terms
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white mx-3 transition-colors duration-200">
              Privacy
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white mx-3 transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
