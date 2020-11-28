import React, { useState } from "react";
import Bg from "../../../images/Home_background1.png";
import { HeroContainer, HeroContent, HeroH1 } from "./HeroElements";

const HeroSection = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <HeroContainer img={Bg}>
      <HeroContent>
        <HeroH1>Building a Shining Nickel and Cobalt Business</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
