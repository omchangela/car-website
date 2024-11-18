import React from "react";
import locationIcon from "../assets/location.png"
import carwashImg from "../assets/download 28.png"; // Replace with your carwash image path

const CarWash = () => {
  // Dummy data for car wash services
  const carWashServices = [
    {
      name: "HK Car Services",
      location: "Downtown",
      orders: 120,
      image: carwashImg,
    },
    {
      name: "Premium Shine",
      location: "Uptown",
      orders: 85,
      image: carwashImg,
    },
    {
      name: "Clean Pro",
      location: "Suburbs",
      orders: 70,
      image: carwashImg,
    },
    {
      name: "Sparkle Auto",
      location: "City Center",
      orders: 150,
      image: carwashImg,
    },
  ];

  return (
    <section className="bg-gray-50 py-8 px-10">
      <div className="w-full">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Car Wash Services</h3>
          <h6 className="text-blue-600 cursor-pointer hover:underline">
            View All
          </h6>
        </div>
        {/* Car Wash Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {carWashServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  p-4 flex flex-col items-center"
            >
              <div className="flex items-center w-full">
                {/* Image on Left */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-24 h-24 object-cover rounded-md"
                />

                {/* Service Details on Right */}
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-semibold">{service.name}</h4>
                  <div className="flex items-center mt-2 text-gray-600">
                    <img
                      src={locationIcon}
                      alt="Location"
                      className="w-4 h-4 mr-2"
                    />
                    <p>{service.location}</p>
                  </div>
                  <p className="mt-1 text-sm text-center  px-3 py-2 bg-blue-600 text-white rounded-xl">
                    Total Orders: {service.orders}
                  </p>
                </div>
              </div>

              {/* Full-width Book Now Button */}
              <button className="mt-4 w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarWash;
