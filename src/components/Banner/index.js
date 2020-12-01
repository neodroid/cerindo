import React from "react";
import { BannerContainer, BannerWrapper, Heading } from "./BannerElement";

const Banner = ({ img, heading }) => {
  return (
    <>
      <BannerContainer img={img}>
        <BannerWrapper>
          <Heading>{heading}</Heading>
        </BannerWrapper>
      </BannerContainer>
    </>
  );
};

export default Banner;
