import React from "react";

// Importing images
import carRentIcon from "../assets/car-rent.svg";
import carWashIcon from "../assets/carwash.png";
import buySellIcon from "../assets/buysell.png";
import hireDriverIcon from "../assets/hire.png";
import drivingSchoolIcon from "../assets/drivingschool.png";
import carShopIcon from "../assets/carshop.png";
import servicesIcon from "../assets/services.png";
import mechanicIcon from "../assets/mechnic.png";
import drivingTestIcon from "../assets/drivingtest.png";
import newsIcon from "../assets/news.png";

const Services = () => {
  const serviceData = [
    { name: "Car Rental", icon: carRentIcon },
    { name: "Car Wash", icon: carWashIcon },
    { name: "Buy & Sell", icon: buySellIcon },
    { name: "Hire Driver", icon: hireDriverIcon },
    { name: "Driving School", icon: drivingSchoolIcon },
    { name: "Car Shop", icon: carShopIcon },
    { name: "Services", icon: servicesIcon },
    { name: "Mechanic", icon: mechanicIcon },
    { name: "Driving Test", icon: drivingTestIcon },
    { name: "News", icon: newsIcon },
  ];

  return (
    <section className="bg-gray-50 py-8">
      {/* Header */}
      <div className="text-left m-6 ml-10">
        <h3 className="text-xl font-semibold mt-2">Our Services</h3>
      </div>

      {/* Services in one line with gap and responsiveness */}
      <div className="container mx-auto overflow-x-auto">
        <div className="flex items-center px-3 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
          {serviceData.map((service, index) => (
            <div key={index} className="text-center min-w-[120px]">
              <img
                src={service.icon}
                alt={service.name}
                className="w-14 h-14 mx-auto"
              />
              <p className="mt-2 text-sm">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
