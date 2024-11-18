import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaPhoneAlt } from 'react-icons/fa';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white px-4 py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          <h1>CIAO</h1>
        </Link>

        {/* Right-Aligned Buttons */}
        <div className="flex items-center gap-4">
          {/* Help Button */}
          <button
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full  hover:bg-red-600"
            onClick={() => navigate('/contact')}
          >
            <FaPhoneAlt className="text-xl" />
            <span>Help</span>
          </button>

          {/* User Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 bg-transparent text-black border border-red-500 px-4 py-2 rounded-md hover:bg-red-100"
            >
              <FaUserCircle className="text-2xl" />
              <span>Login</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <Link
                  to="/userlogin"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  User Login
                </Link>
                <Link
                  to="/vendorlogin"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Vendor Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
