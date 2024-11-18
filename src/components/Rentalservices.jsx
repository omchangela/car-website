import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import car1 from "../assets/rental.png"; // Replace with actual image paths
import car2 from "../assets/rental.png";
import car3 from "../assets/rental.png";

// Import icons for HP, Manual, Petrol, and Seats
import hpIcon from "../assets/hp.png"; // Replace with your actual icon path
import manualIcon from "../assets/manual.png"; // Replace with your actual icon path
import petrolIcon from "../assets/petrol.png"; // Replace with your actual icon path
import seatsIcon from "../assets/seats.png"; // Replace with your actual icon path

const RentalServices = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const cars = [
    { name: "AP30CV3434", price: "50$/hr", image: car1 },
    { name: "AP30CV3434", price: "40$/hr", image: car2 },
    { name: "AP30CV3434", price: "60$/hr", image: car3 },
  ];

  // Handler for View All click
  const handleViewAllClick = () => {
    navigate("/allcar");  // Redirect to the AllCar page
  };

  return (
    <section className="bg-white-50 py-8 px-4 md:px-10">
      <div className="w-full mx-0">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl md:text-2xl font-semibold">Car Rental Services</h3>
          <h6
            onClick={handleViewAllClick}  // Add the click handler here
            className="text-blue-600 cursor-pointer hover:underline"
          >
            View All
          </h6>
        </div>

        {/* Cars Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-contain rounded-t-lg"
              />

              {/* Car Details */}
              <div className="flex justify-between items-center mt-4">
                <h4 className="text-black-600 font-semibold text-sm sm:text-base">{car.name}</h4>
                <h4 className="text-red-600 font-semibold text-sm sm:text-base">{car.price}</h4>
              </div>
              <div
                className="flex flex-wrap justify-between items-center mt-4 p-4"
                style={{ background: "#ECE0E0" }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalServices;
