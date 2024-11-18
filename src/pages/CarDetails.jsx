import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import car images and data
import car1 from "../assets/rental.png";
import car2 from "../assets/images 1.png";
import car3 from "../assets/image 2.png";
import car4 from "../assets/image 3.png";

// Sample icons for features
import hpIcon from "../assets/hp.png";
import manualIcon from "../assets/manual.png";
import petrolIcon from "../assets/petrol.png";
import seatsIcon from "../assets/seats.png";

const CarDetails = () => {
  const { carId } = useParams(); // Get carId from URL

  // Sample cars array (This should be fetched from a database or API in a real app)
  const cars = [
    { name: "AP30CV3434", price: 50, image: car1, brand: "Lamborghini", year: 2021, hp: 1600, seats: 7, type: "Manual", fuel: "Petrol", km: 650, carType: "Luxury", acType: "AC" },
    { name: "AP30CV3434", price: 40, image: car2, brand: "Ferrari", year: 2020, hp: 1500, seats: 4, type: "Automatic", fuel: "Diesel", km: 800, carType: "Sports", acType: "Non-AC" },
    { name: "AP30CV3434", price: 60, image: car3, brand: "McLaren", year: 2022, hp: 1200, seats: 2, type: "Manual", fuel: "Petrol", km: 500, carType: "Supercar", acType: "AC" },
    { name: "AP30CV3434", price: 55, image: car4, brand: "Rolls Royce", year: 2019, hp: 1000, seats: 4, type: "Automatic", fuel: "Electric", km: 400, carType: "Luxury", acType: "AC" },
  ];

  // Find the selected car based on carId
  const car = cars[carId]; // In a real app, you'd likely fetch this data from an API

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="car-details-container">
        <div className="car-image">
          <img src={car.image} alt={car.name} className="w-50 h-auto" />
        </div>
        <div className="car-info p-4">
          <h1 className="text-3xl font-semibold">{car.name}</h1>
          <p className="text-xl text-gray-500">Brand: {car.brand} | Year: {car.year}</p>
          <p className="text-lg mt-2">Price: ${car.price}/Day</p>
          
          {/* Car Details */}
          <div className="car-features mt-4">
            <div className="flex items-center mb-2">
              <img src={hpIcon} alt="HP Icon" className="w-6 h-6 mr-2" />
              <p>{car.hp} HP</p>
            </div>
            <div className="flex items-center mb-2">
              <img src={manualIcon} alt="Manual Icon" className="w-6 h-6 mr-2" />
              <p>{car.type}</p>
            </div>
            <div className="flex items-center mb-2">
              <img src={petrolIcon} alt="Petrol Icon" className="w-6 h-6 mr-2" />
              <p>{car.fuel}</p>
            </div>
            <div className="flex items-center mb-2">
              <img src={seatsIcon} alt="Seats Icon" className="w-6 h-6 mr-2" />
              <p>{car.seats} Seats</p>
            </div>
          </div>

          <div className="car-description mt-4">
            <h2 className="text-2xl">About This Car</h2>
            <p className="text-lg mt-2">
              This is a {car.carType} car with {car.hp} HP, ideal for both city and highway driving.
              It offers comfort with {car.seats} seats and an {car.acType} air conditioning system.
            </p>
          </div>

          <div className="car-additional-info mt-4">
            <h2 className="text-2xl">Additional Info</h2>
            <p>Car Number: {car.name}</p>
            <p>Total Km: {car.km} km</p>
          </div>
          
          <button className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Book Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetails;
