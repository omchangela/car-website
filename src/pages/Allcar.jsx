import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

// Reusable car images and data
import car1 from "../assets/rental.png";
import car2 from "../assets/images 1.png";
import car3 from "../assets/image 2.png";
import car4 from "../assets/image 3.png";

// Sample icons
import hpIcon from "../assets/hp.png";
import manualIcon from "../assets/manual.png";
import petrolIcon from "../assets/petrol.png";
import seatsIcon from "../assets/seats.png";

const Allcar = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [selectedCarTypes, setSelectedCarTypes] = useState([]);
  const [selectedCarBrands, setSelectedCarBrands] = useState([]);
  const [sortOption, setSortOption] = useState("priceLowToHigh"); // Default sorting option

  const cars = [
    { name: "AP30CV3434", price: 50, image: car1, brand: "Lamborghini", year: 2021 },
    { name: "AP30CV3434", price: 40, image: car2, brand: "Ferrari", year: 2020 },
    { name: "AP30CV3434", price: 60, image: car3, brand: "McLaren", year: 2022 },
    { name: "AP30CV3434", price: 55, image: car4, brand: "Rolls Royce", year: 2019 },
    { name: "AP30CV3434", price: 10, image: car1, brand: "Lamborghini", year: 2023 },
    { name: "AP30CV3434", price: 20, image: car2, brand: "Ferrari", year: 2010 },
    { name: "AP30CV3434", price: 30, image: car3, brand: "McLaren", year: 2012 },
    { name: "AP30CV3434", price: 25, image: car4, brand: "Rolls Royce", year: 2015 },
    { name: "AP30CV3434", price: 60, image: car1, brand: "Lamborghini", year: 2022 },
    { name: "AP30CV3434", price: 70, image: car2, brand: "Ferrari", year: 2010 },
    { name: "AP30CV3434", price: 80, image: car3, brand: "McLaren", year: 2012 },
    { name: "AP30CV3434", price: 95, image: car4, brand: "Rolls Royce", year: 2019 },
    { name: "AP30CV3434", price: 96, image: car1, brand: "Lamborghini", year: 2020 },
    { name: "AP30CV3434", price: 23, image: car2, brand: "Ferrari", year: 2017 },
    { name: "AP30CV3434", price: 42, image: car3, brand: "McLaren", year: 2016 },
    { name: "AP30CV3434", price: 65, image: car4, brand: "Rolls Royce", year: 2009 },
  ];

  const carTypes = [
    "Super Cars", "Luxury Cars", "SUVs", "Sports Cars", "Convertible Cars", "Economy Cars"
  ];

  const carBrands = [
    "Lamborghini", "Ferrari", "McLaren", "Rolls Royce"
  ];

  // Handle checkbox changes for Car Type
  const handleCarTypeChange = (event) => {
    const value = event.target.value;
    setSelectedCarTypes(prevSelected =>
      prevSelected.includes(value)
        ? prevSelected.filter(item => item !== value)
        : [...prevSelected, value]
    );
  };

  // Handle checkbox changes for Car Brand
  const handleCarBrandChange = (event) => {
    const value = event.target.value;
    setSelectedCarBrands(prevSelected =>
      prevSelected.includes(value)
        ? prevSelected.filter(item => item !== value)
        : [...prevSelected, value]
    );
  };

  // Handle sorting option change
  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  // Filter cars based on selected brands
  const filteredCars = cars.filter(car =>
    selectedCarBrands.length === 0 || selectedCarBrands.includes(car.brand)
  );

  // Sort cars based on the selected option
  const sortedCars = filteredCars.sort((a, b) => {
    switch (sortOption) {
      case "priceLowToHigh":
        return a.price - b.price;
      case "priceHighToLow":
        return b.price - a.price;
      case "yearLatestFirst":
        return b.year - a.year;
      case "yearOldFirst":
        return a.year - b.year;
      default:
        return 0;
    }
  });

  // Handle Book Now button click
  const handleBookNow = (carIndex) => {
    navigate(`/car-details/${carIndex}`); // Navigate to the car details page with the car index
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        {/* Left Sidebar with Filters */}
        <div className="w-1/4 bg-white-100 p-4">
          <h3 className="font-semibold text-lg mb-4">Filter by</h3>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold">Total Price</h4>
            <select className="w-80 p-2 mt-2 border rounded">
              <option value="INR1SO-INR2056">INR1SO - INR 2056</option>
              {/* Add more price ranges as needed */}
            </select>
          </div>

          {/* Car Type Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold">Car Type</h4>
            <div className="mt-2">
              {carTypes.map((type, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`carType-${index}`}
                    value={type}
                    onChange={handleCarTypeChange}
                    checked={selectedCarTypes.includes(type)}
                    className="mr-2"
                  />
                  <label htmlFor={`carType-${index}`} className="text-sm">{type}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Car Brands Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold">Car Brands</h4>
            <div className="mt-2">
              {carBrands.map((brand, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`carBrand-${index}`}
                    value={brand}
                    onChange={handleCarBrandChange}
                    checked={selectedCarBrands.includes(brand)}
                    className="mr-2"
                  />
                  <label htmlFor={`carBrand-${index}`} className="text-sm">{brand}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cars Section */}
        <div className="w-3/4 p-4">

          {/* Car Listing */}
          <div className="flex justify-end items-center mb-4">
            {/* Sorting Dropdown */}
            <h4 className="text-sm text-gray-500 mb-4 mr-4">Sort by:</h4>
            <div className="mb-4">
              <select
                onChange={handleSortOptionChange}
                value={sortOption}
                className="w-60 p-2 font-semibold text-red-500"
              >
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="yearLatestFirst">Model Year: Latest First</option>
                <option value="yearOldFirst">Model Year: Old First</option>
              </select>
            </div>
          </div>

          {/* Car Listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {sortedCars.map((car, index) => (
              <div key={index} className="p-4 border">
                <img src={car.image} alt={car.name} className="w-full h-40 object-contain rounded-md mb-4" />
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{car.name}</h4>
                  <h5 className="font-semibold">₹{car.price}/Day</h5>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <p>{car.year} Model</p>
                  <p>{car.brand}</p>
                </div>

                {/* Car Features */}
                <div
                className="flex flex-wrap justify-between items-center mt-4 p-4"
               
              >
                <div className="flex items-center mb-2 sm:mb-0">
                  <img
                    src={hpIcon}
                    alt="HP Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  <h4 className="text-black-600 font-semibold text-sm sm:text-base">3500HP</h4>
                </div>

                <div className="flex items-center mb-2 sm:mb-0">
                  <img
                    src={manualIcon}
                    alt="Manual Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  <h4 className="text-black-600 font-semibold text-sm sm:text-base">Manual</h4>
                </div>

                <div className="flex items-center mb-2 sm:mb-0">
                  <img
                    src={petrolIcon}
                    alt="Petrol Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  <h4 className="text-black-600 font-semibold text-sm sm:text-base">Petrol</h4>
                </div>

                <div className="flex items-center">
                  <img
                    src={seatsIcon}
                    alt="Seats Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  <h4 className="text-black-600 font-semibold text-sm sm:text-base">7 seats</h4>
                </div>
              </div>

                <button
                  onClick={() => handleBookNow(index)}
                  className="w-full p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Allcar;
