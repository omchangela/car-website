import React from "react";
import locationIcon from "../assets/location.png"; // Replace with your location icon path
import carwashImg from "../assets/images 1.png"; // Replace with your image path

const BuySell = () => {
  // Dummy data for services
  const buySellServices = [
    {
      name: "HK Car Services",
      location: "Downtown",
      sellerName: "John Doe",
      time: "2 hours ago",
      image: carwashImg,
    },
    {
      name: "Premium Shine",
      location: "Uptown",
      sellerName: "Jane Smith",
      time: "4 hours ago",
      image: carwashImg,
    },
    {
      name: "Clean Pro",
      location: "Suburbs",
      sellerName: "Michael Brown",
      time: "1 day ago",
      image: carwashImg,
    },
    {
      name: "Sparkle Auto",
      location: "City Center",
      sellerName: "Emily White",
      time: "3 days ago",
      image: carwashImg,
    },
  ];

  return (
    <section className="bg-gray-50 py-8 px-10">
      <div className="w-full">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Buy & Sell</h3>
          <h6 className="text-blue-600 cursor-pointer hover:underline">
            View All
          </h6>
        </div>
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {buySellServices.map((service, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-600"
    >
      {/* Full-width Image */}
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 object-contain"
      />
      {/* Service Details */}
      <div className="p-4 border-t-2 border-blue-600">
        <h4 className="text-lg font-semibold">{service.name}</h4>
        <div>₹ 20,650.00</div>
        <div className="flex items-center text-gray-600 mt-2">
          <img
            src={locationIcon}
            alt="Location"
            className="w-4 h-4 mr-2"
          />
          <p>{service.location}</p>
        </div>
        <div className="mt-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div className="ml-3">
            <p className="text-sm font-medium">{service.sellerName}</p>
            <p className="text-sm text-gray-500">{service.time}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default BuySell;
