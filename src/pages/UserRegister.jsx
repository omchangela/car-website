import React from 'react';
import LoginNavbar from '../components/LoginNavbar';
import Footer from '../components/Footer';

const UserRegister = () => {
    return (
        <>
            <LoginNavbar />
            <div className="flex items-center bg-white justify-between min-h-screen bg-gray-50 py-8 flex-col lg:flex-row">
                {/* Welcome Section */}
                <div className="w-full lg:w-1/2 text-center mb-8 lg:mb-0">
                    <h1 className="text-5xl font-bold text-black-500">Ciao</h1>
                </div>

                {/* Register Form */}
                <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
                    <form>
                        <h5 className="mb-6">Welcome to Ciao</h5>
                        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-6">Sign In</h2>

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
                                pattern="[0-9]{10}" // This regex helps to validate the input when the form is submitted.
                                maxLength={10} // Limits the number of digits to 10
                                required
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} // Ensures only numbers are inputted
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

                        {/* Referral Code Field */}
                        <div className="mb-4">
                            <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-2">
                                Referral Code
                            </label>
                            <input
                                type="text"
                                id="referralCode"
                                name="referralCode"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your Referral Code"
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
                                <a href="/userlogin" className="text-red-500 hover:underline">
                                    Login Now
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

export default UserRegister;
