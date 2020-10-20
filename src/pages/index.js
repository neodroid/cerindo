import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

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
    </>
  );
};

export default Home;
