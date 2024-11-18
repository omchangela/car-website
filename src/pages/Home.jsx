import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import SpecialPackages from "../components/SpecialPackages";
import FeaturedCars from "../components/FeaturedCars";
import RentalServices from "../components/Rentalservices";
import CarWash from "../components/carwash";
import BuySell from "../components/buysell";
import Ads from "../components/ads";
import HireDriver from "../components/HireDriver";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <SpecialPackages />
      <FeaturedCars />
      <RentalServices />
      <CarWash />
      <BuySell />
      <Ads />
      <HireDriver />
      <Footer />
    </div>
  );
};

export default Home;
