import React from "react";
import {Link as LinkR} from "react-router-dom";
import { Button } from "../../ButtonElement";
import {AboutUsDatas} from "../../Data/HomeData/AboutUsElementsDatas"
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
  VideoContent
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
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darktext={darktext}>{AboutUsDatas.about}</Subtitle>
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
                    {buttonLabel}
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
