import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDownward,
  ArrowDown,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Building a Shining Nickel and Cobalt Business</HeroH1>
        {/* <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </HeroP> */}

        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            to="register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Read More {hover ? <ArrowDownward /> : <ArrowDown />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
