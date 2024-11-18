import React from "react";
import car1 from "../assets/rental.png"; // Replace with actual image paths
import car2 from "../assets/rental.png";
import car3 from "../assets/rental.png";

const RentalServices = () => {
  const cars = [
    { name: "AP30CV3434", price: "50$/hr", image: car1 },
    { name: "AP30CV3434", price: "40$/hr", image: car2 },
    { name: "AP30CV3434", price: "60$/hr", image: car3 },
  ];

  return (
    <section className="bg-white-50 py-8 px-10">
      <div className="w-full mx-0">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Car Rental Services</h3>
          <h6 className="text-blue-600 cursor-pointer hover:underline">
            View All
          </h6>
        </div>

        {/* Cars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <h4 className="text-black-600 font-semibold">{car.name}</h4>
                <h4 className="text-red-600 font-semibold">{car.price}</h4>
              </div>
              <div className="flex justify-between items-center mt-4 p-4" style={{background: '#ECE0E0'}}>
                <h4 className="text-black-600 font-semibold">3500HP</h4>
                <h4 className="text-Black-600 font-semibold">Manual</h4>
                <h4 className="text-black-600 font-semibold">Petrol</h4>
                <h4 className="text-black-600 font-semibold">7 seats</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalServices;
