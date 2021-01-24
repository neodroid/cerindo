import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import { Button } from "../../ButtonElement";
import { AboutUsDatas } from "../../Data/HomeData/AboutUsElementsDatas";
import { homeService } from "../../../service/Homepage";
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
                <Heading lightText={lightText}>{homeData.title_en}</Heading>
                <Subtitle darktext={darktext}>{homeData.body_en}</Subtitle>
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
                    {homeData.button_en}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <VideoContent
                controls
                src="https://cerindocorp.com/wp-content/uploads/2020/10/profile-vid_eng.mp4"
              ></VideoContent>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutUs;
