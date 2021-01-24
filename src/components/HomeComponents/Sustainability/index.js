import React, { useState, useEffect, useContext } from "react";
import { homeService } from "../../../service/Homepage";
import { SustainabilityElementsDatas } from "../../Data/HomeData/SustainabilityElementsDatas";
import { Link as LinkR } from "react-router-dom";
import { Button } from "../../ButtonElement";
import { InfoBg } from "../Business/BusinessElements";
import {
  InfoRow,
  Column1,
  TextWrapper,
  BtnWrap,
  InfoWrapper,
} from "../AboutUs/AboutUsElements";
import { Heading, Subtitle, Column2 } from "./SustainabilityElements";
import {
  ImageRight,
  ImageCenter,
  ImageLeft,
  ImageCanvas,
  Imaging,
} from "./SustainabilityElements";
import { langContext } from "../../../langContext";
import { HomeLangTitle, HomeLangBody, HomeLangButton } from '../HomeLang';

const Sustainability = () => {
  const { language } = useContext(langContext); 
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getListHome();
      const data = response.data;
      setHomeData(data.CommunitySustainibility);
    };
    fetchData();
  }, []);
  if (homeData.length === 0) return null;
  return (
    <InfoBg>
      <InfoWrapper>
        <InfoRow imgStart={true}>
          <Column1>
            <TextWrapper>
              <Heading lightText={true}>{HomeLangTitle(homeData, language)}</Heading>
              <Subtitle darktext={false}>{HomeLangBody(homeData, language)}</Subtitle>
              <BtnWrap button={true}>
                <Button
                  primary="false"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  to="/QHSE"
                >
                  {HomeLangButton(homeData, language)}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <Imaging>
              <ImageRight img={homeData.image[0].url}></ImageRight>
              <ImageCenter img={homeData.image[1].url}>
                <ImageCanvas></ImageCanvas>
              </ImageCenter>
              <ImageLeft img={homeData.image[2].url}></ImageLeft>
            </Imaging>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoBg>
  );
};

export default Sustainability;
