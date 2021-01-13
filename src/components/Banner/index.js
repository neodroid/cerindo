import React from "react";
import { BannerContainer, BannerWrapper, Heading } from "./BannerElement";

const Banner = ({ img, heading,lightText, texted }) => {
  return (
    <>
      <BannerContainer img={img}>
        <BannerWrapper texted={texted}>
          <Heading lightText={lightText}>{heading}</Heading>
        </BannerWrapper>
      </BannerContainer>
    </>
  );
};

export default Banner;
