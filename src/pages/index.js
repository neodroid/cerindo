import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HomeComponents/HeroSection";

import Footer from "../components/Footer";
import AboutUs from "../components/HomeComponents/AboutUs";
import { homeObjOne } from "../components/Data/HomeData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutUs {...homeObjOne} />
      <Footer />
    </>
  );
};

export default Home;
