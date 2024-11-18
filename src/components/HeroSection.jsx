import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mainimg from "../assets/slider.png"; // Placeholder image
import secondimg from "../assets/slider.png"; // Placeholder image
import thirdimg from "../assets/slider.png"; // Placeholder image

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-[350px] md:h-[500px] lg:h-[550px]"
      >
        <SwiperSlide>
          <img
            src={mainimg}
            alt="Slider 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={secondimg}
            alt="Slider 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={thirdimg}
            alt="Slider 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Search Bar */}
      <div className="absolute top-4 left-4 right-4 lg:top-8 lg:left-1/4 lg:right-1/4 z-50 flex flex-col lg:flex-row items-center lg:items-stretch">
        <input
          type="text"
          placeholder="Search vehicle by model feature"
          className="flex-grow w-full lg:w-full h-[40px] lg:h-[45px] border border-gray-300 px-4 text-gray-700 text-sm rounded-md lg:rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full lg:w-[149px] h-[40px] lg:h-[45px] bg-[#0B20EE] text-white text-sm rounded-md lg:rounded-r-md flex items-center justify-center shadow-sm hover:bg-blue-700"
        >
          View Vehicle
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
