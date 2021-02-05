import React from "react";
import { 
  BannerContainer, 
  BannerWrapper, 
  Heading,
  BannerBottomContent,
  BannerBottom,
  BannerBotTop,
  BannerPlace
} from "./BannerElement";
import { FaAngleDoubleRight } from "react-icons/fa";

const Banner = ({ img, heading,lightText, texted, place }) => {
  return (
    <>
      <BannerContainer img={img}>
        <BannerWrapper texted={texted}>
          <BannerBottom>
            <BannerBottomContent>
              {/*<BannerBotTop>
                Home
                <FaAngleDoubleRight style={{paddingLeft:"5px"}}/>
              </BannerBotTop>*/}
              <BannerPlace>
                  {place}
              </BannerPlace>
            </BannerBottomContent>
          </BannerBottom>
        </BannerWrapper>
      </BannerContainer>
    </>
  );
};

export default Banner;
