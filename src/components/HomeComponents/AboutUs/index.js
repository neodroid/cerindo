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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>
                  {HomeLangTitle(homeData, language)}
                </Heading>
                <Subtitle darktext={darktext}>
                  {HomeLangBody(homeData, language)}
                </Subtitle>
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
              </TextWrapper>
            </Column1>
            <Column2>
              <VideoContent
                controls
                src={HomeLangVideo(homeData, language).props.children}
              ></VideoContent>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutUs;
