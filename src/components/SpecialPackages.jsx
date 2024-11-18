import React from "react";
import img from "../assets/image 2.png";

const SpecialPackages = () => {
  return (
    <section className="bg-white py-8 px-10">
      <div className="w-full mx-0">
        <h3 className="text-left text-xl font-semibold mb-6">
          Special Packages
        </h3>
        <div className="w-full">
          <div className="relative">
            <img
              src={img}
              alt="Special Package"
              className="w-full h-auto block "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPackages;
