import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false); // State for the modal
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate('/login');
  };

  const toggleLocationModal = () => {
    setLocationModalOpen(!locationModalOpen);
  };

  return (
    <>
      <nav className="bg-white px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black-500 p-4">
            <h1>CIAO</h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={toggleLocationModal}
              className="text-black-700 hover:text-blue-500 focus:outline-none"
            >
              Select Location
            </button>
            <Link to="/" className="text-black-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-black-700 hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="text-black-700 hover:text-blue-500">
              Services
            </Link>
            <Link to="/contact" className="text-black-700 hover:text-blue-500">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black-700 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>

          {/* Desktop User Icon with Dropdown */}
          <div className="hidden md:block relative mr-6">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <FaUserCircle className="text-3xl text-black-700" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <Link
                  to="/userlogin"
                  className="block px-4 py-2 text-black-700 hover:bg-black-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  User Login
                </Link>
                <Link
                  to="/vendorlogin"
                  className="block px-4 py-2 text-black-700 hover:bg-black-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Vendor Login
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Links and User Icon */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-black-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="block text-black-700 hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="block text-black-700 hover:text-blue-500">
              Services
            </Link>
            <Link to="/contact" className="block text-black-700 hover:text-blue-500">
              Contact Us
            </Link>

            {/* Mobile User Icon with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="focus:outline-none flex items-center space-x-2"
              >
                <FaUserCircle className="text-3xl text-black-700" />
                <span className="text-black-700">User</span>
              </button>
              {dropdownOpen && (
                <div className="mt-2 w-full bg-white border rounded shadow-lg z-10">
                  <Link
                  to="/userlogin"
                  className="block px-4 py-2 text-black-700 hover:bg-black-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  User Login
                </Link>
                <Link
                  to="/vendorlogin"
                  className="block px-4 py-2 text-black-700 hover:bg-black-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Vendor Login
                </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Location Modal */}
      {locationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={toggleLocationModal}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-center text-blue-800 mb-4">
              Select Your Location
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Use the form below to search for or select a location.
            </p>
            <input
              type="text"
              placeholder="Search for a location..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
