import React from "react";
import img from "../assets/image 3.png";

const SpecialPackages = () => {
  return (
    <section className="bg-white py-8 px-10">
      <div className="w-full mx-0">
        {/* Title and View All in one row */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Featured Cars</h3>
          <h6 className="text-blue-600 cursor-pointer hover:underline">
            View All
          </h6>
        </div>
        
        {/* Image Section */}
        <div className="w-full">
          <div className="relative">
            <img
              src={img}
              alt="Special Package"
              className="w-full h-auto block"
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-6">
          <h4 className="text-black-600 font-semibold">Ferrai G30</h4>
          <h4 className="text-black-600 font-semibold">45$/hr</h4>
        </div>
      </div>
    </section>
  );
};

export default SpecialPackages;
