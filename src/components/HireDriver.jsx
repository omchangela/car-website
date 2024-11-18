import React from "react";
import localImg from "../assets/local.png"; // Replace with actual image paths
import outstationImg from "../assets/outstation.png";
import permanentImg from "../assets/permanent.png";
import dropImg from "../assets/drop.png";

const HireDriver = () => {
  const driverOptions = [
    { name: "Local", img: localImg },
    { name: "Outstation", img: outstationImg },
    { name: "Permanent", img: permanentImg },
    { name: "Outstation Drop", img: dropImg },
  ];

  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold">Hire Driver</h3>
          <button className="text-blue-600 hover:underline">View More</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {driverOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-2"
            >
              <img
                src={option.img}
                alt={option.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <h4 className="text-lg font-medium">{option.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireDriver;
