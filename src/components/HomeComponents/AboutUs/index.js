import React from "react";
import { Button } from "../../ButtonElement";
import Vids from "../../../videos/video.mp4";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  Img,
  ImgWrap,
  BtnWrap,
} from "./AboutUsElements";

const AboutUs = ({
  lightText,
  lightBg,
  id,
  imgStart,
  headline,
  topLine,
  darktext,
  description1,
  buttonLabel,
  img,
  button,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darktext={darktext}>{description1}</Subtitle>
                <BtnWrap button={button}>
                  <Button
                    primary="true"
                    to="/about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <video width="430" height="275" controls src={Vids}></video>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutUs;
