import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";
import Business from "../components/HomeComponents/Business"
import AboutUs from "../components/HomeComponents/AboutUs";
import { homeObjOne } from "../components/Data/HomeData";
import Sustainability from "../components/HomeComponents/Sustainability"

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs {...homeObjOne} />
      <Business/>
      <Sustainability/>
    </>
  );
};

export default Home;
