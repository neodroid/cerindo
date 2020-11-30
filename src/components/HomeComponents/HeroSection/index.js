import React, { useState } from "react";
import Bg from "../../../images/Home_background1.png";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroNewsContent,
  H1Wrap,
  HeroRow,
  Column1,
  Column2,
  HeroMediaH1,
  ImgWrap,
  Img,
  HeroNewsWrap,
  HeroNewsDesc,
  HeroNewsP,
  HeroNewsTimeP,
} from "./HeroElements";
import { homeNewsOne, homeNewsThree, homeNewsTwo } from "../../Data/HomeData";

const Berita = ({ img, title, time }) => {
  return (
    <HeroNewsContent>
      <ImgWrap>
        <Img src={img} />
      </ImgWrap>
      <HeroNewsDesc>
        <HeroNewsP>{title}</HeroNewsP>
        <HeroNewsTimeP>{time}</HeroNewsTimeP>
      </HeroNewsDesc>
    </HeroNewsContent>
  );
};

const HeroSection = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <HeroContainer img={Bg}>
      <HeroContent>
        <HeroRow>
          <Column1>
            <HeroH1>Building a Shining Nickel and Cobalt Business</HeroH1>
          </Column1>

          <Column2>
            <HeroNewsWrap>
              <HeroMediaH1>Recent Update</HeroMediaH1>
              <Berita {...homeNewsOne} />
              <Berita {...homeNewsTwo} />
              <Berita {...homeNewsThree} />
            </HeroNewsWrap>
          </Column2>
        </HeroRow>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
