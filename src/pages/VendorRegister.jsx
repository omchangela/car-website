import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import Footer from '../components/Footer';

const VendorRegister = () => {
    return (
        <>
            <LoginNavbar />
            <div className="flex items-center justify-center bg-white min-h-screen bg-gray-50 py-8">
                <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 md:flex-row">
                    {/* Welcome Section */}
                    <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold text-black-500">Ciao</h1>
                    </div>

                    {/* Register Form */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
                        <form>
                            <h5 className="mb-6">Welcome to Ciao</h5>
                            <h2 className="text-2xl font-semibold text-left text-blue-800 mb-6">Sign In</h2>

                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter your Name"
                                    required
                                />
                            </div>

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
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    required
                                    onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                                />
                            </div>

                            {/* Address Field */}
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter your Address"
                                    required
                                />
                            </div>

                            {/* Area Name Dropdown Field */}
                            <div className="mb-4">
                                <label htmlFor="areaName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Area Name
                                </label>
                                <select
                                    id="areaName"
                                    name="areaName"
                                    className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg focus:outline-none"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select your area
                                    </option>
                                    <option value="Area1">Area 1</option>
                                    <option value="Area2">Area 2</option>
                                    <option value="Area3">Area 3</option>
                                    <option value="Area4">Area 4</option>
                                    <option value="Area5">Area 5</option>
                                </select>
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
                                    placeholder="Enter your Password"
                                    required
                                />
                            </div>

                            {/* Re-Enter Password Field */}
                            <div className="mb-4">
                                <label htmlFor="repassword" className="block text-sm font-medium text-gray-700 mb-2">
                                    Re-Enter Password
                                </label>
                                <input
                                    type="password"
                                    id="repassword"
                                    name="repassword"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Re-Enter your Password"
                                    required
                                />
                            </div>

                            {/* Send OTP Button */}
                            <div className="mb-4">
                                <button
                                    type="button"
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition duration-200"
                                >
                                    Send OTP
                                </button>
                            </div>

                            {/* Login Redirect */}
                            <div className="text-center">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <a href="/vendorlogin" className="text-red-500 hover:underline">
                                        Login Now
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default VendorRegister;
