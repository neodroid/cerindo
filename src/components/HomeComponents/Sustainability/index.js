import React, { useState, useEffect } from "react";
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

const Sustainability = () => {
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
              <Heading lightText={true}>{homeData.title_en}</Heading>
              <Subtitle darktext={false}>{homeData.body_en}</Subtitle>
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
                  {homeData.button_en}
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
