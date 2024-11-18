import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import Footer from '../components/Footer';

const UserLogin = () => {
  return (
    <>
      <LoginNavbar />
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 min-h-screen py-8">
        {/* Welcome Section */}
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-black">Ciao</h1>
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <form>
            <h5 className="mb-6">Welcome to Ciao</h5>
            <h2 className="text-2xl font-semibold text-left text-gray-800 mb-6">Login to your Account</h2>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your Phone Number"
                pattern="[0-9]{10}" // This regex helps to validate the input when the form is submitted.
                maxLength={10} // Limits the number of digits to 10
                required
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} // Ensures only numbers are inputted
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-200"
              >
                Login
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-red-500 hover:underline">
                  Register Now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserLogin;
