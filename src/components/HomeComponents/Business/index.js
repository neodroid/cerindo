import React, { useState, useEffect, useContext } from "react";
import { homeService } from "../../../service/Homepage";
import { BusinessElementsDatas } from "../../Data/HomeData/BusinessElementsDatas";
import { Link as LinkR } from "react-router-dom";
import { Button } from "../../ButtonElement";
import {
  InfoBg,
  InfoWrappered,
  ImageInfo,
  Heading,
  Subtitle,
} from "./BusinessElements";
import {
  InfoRow,
  Column1,
  TextWrapper,
  Column2,
  BtnWrap,
  InfoWrapper,
} from "../AboutUs/AboutUsElements";
import {
  FlexContainer,
  FlexWrap,
  HomeFlex,
  HomeFlexElement,
  HomeH1,
  HomeP,
  HomeTextWrap,
} from "../HomeElements";
import { langContext } from "../../../langContext";
import { HomeLangTitle, HomeLangBody, HomeLangButton } from "../HomeLang";

const Business = () => {
  const { language } = useContext(langContext);
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getListHome();
      const data = response.data;
      setHomeData(data.NickleOreMining);
    };
    fetchData();
  }, []);
  if (homeData.length === 0) return null;
  return (
    <InfoBg img={homeData.background_image.url}>
      <FlexWrap>
        <FlexContainer>
          <HomeFlex imgStart={false}>
            <HomeFlexElement>
              <ImageInfo src={homeData.image.url} alt="image" />
            </HomeFlexElement>
            <HomeFlexElement>
              <HomeTextWrap>
                <HomeH1 white right>{HomeLangTitle(homeData, language)}</HomeH1>
                <HomeP white right>{HomeLangBody(homeData, language)}</HomeP>
                <BtnWrap end button={true}>
                  <Button
                    primary="false"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    to="/Nickel-Ore-Mining"
                  >
                    {HomeLangButton(homeData, language)}
                  </Button>
                </BtnWrap>
              </HomeTextWrap>
            </HomeFlexElement>
          </HomeFlex>
        </FlexContainer>
      </FlexWrap>
    </InfoBg>
  );
};

export default Business;
