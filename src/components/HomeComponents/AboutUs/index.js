import React, { useState, useEffect, useContext } from "react";
import { Link as LinkR } from "react-router-dom";
import { Button } from "../../ButtonElement";
import { AboutUsDatas } from "../../Data/HomeData/AboutUsElementsDatas";
import { homeService } from "../../../service/Homepage";
import { VideoProfileData } from "../../Data/AboutusData/GalleryDatas";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
  BtnWrap,
  VideoContent,
} from "./AboutUsElements";
import { langContext } from "../../../langContext";
import {
  HomeLangTitle,
  HomeLangBody,
  HomeLangButton,
  HomeLangVideo,
} from "../HomeLang";
import {
  FlexContainer,
  FlexWrap,
  HomeFlex,
  HomeFlexElement,
  HomeH1,
  HomeP,
  HomeTextWrap,
} from "../HomeElements";

const AboutUs = ({
  lightText,
  lightBg,
  id,
  imgStart,
  headline,
  darktext,
  buttonLabel,
  button,
}) => {
  const { language } = useContext(langContext);
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getListHome();
      const data = response.data;
      setHomeData(data.AboutUs);
    };
    fetchData();
  }, []);
  if (homeData.length === 0) return null;
  return (
    <>
      <FlexWrap>
        <FlexContainer>
          <HomeFlex>
            <HomeFlexElement>
              <HomeTextWrap>
                <HomeH1 lightText={lightText}>
                  {HomeLangTitle(homeData, language)}
                </HomeH1>
                <HomeP darktext={darktext}>
                  {HomeLangBody(homeData, language)}
                </HomeP>
              </HomeTextWrap>
              <BtnWrap button={button}>
                <Button
                  primary="true"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  to="/Mission-Vision"
                >
                  {HomeLangButton(homeData, language)}
                </Button>
              </BtnWrap>
            </HomeFlexElement>
            <HomeFlexElement>
              <VideoContent
                controls
                poster="https://cerindo.s3.ap-southeast-1.amazonaws.com/thumbnail_ceria_profile_03fc7e7c01.webp"
                src={HomeLangVideo(homeData, language).props.children}
              ></VideoContent>
            </HomeFlexElement>
          </HomeFlex>
        </FlexContainer>
      </FlexWrap>
    </>
  );
};

export default AboutUs;
