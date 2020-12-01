import React from "react";
import { Button } from "../../ButtonElement";
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
} from "./AboutUsElements";

const AboutUs = ({
  lightText,
  lightBg,
  id,
  imgStart,
  headline,
  darktext,
  description1,
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
              <video
                width="480"
                height="300"
                controls
                src="https://cerindocorp.com/wp-content/uploads/2020/10/profile-vid_eng.mp4"
              ></video>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutUs;
