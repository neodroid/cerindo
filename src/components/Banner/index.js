import React from "react";
import { BannerContainer, BannerWrapper, Heading } from "./BannerElement";

const Banner = ({ img, heading,lightText }) => {
  return (
    <>
      <BannerContainer img={img}>
        <BannerWrapper>
          <Heading lightText={lightText}>{heading}</Heading>
        </BannerWrapper>
      </BannerContainer>
    </>
  );
};

export default Banner;
