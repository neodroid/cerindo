import React from "react";
import HeroSection from "../components/HomeComponents/HeroSection";

import AboutUs from "../components/HomeComponents/AboutUs";
import { homeObjOne } from "../components/Data/HomeData";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs {...homeObjOne} />
    </>
  );
};

export default Home;
