import React, { useState, useEffect } from "react";
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

const Business = () => {
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
    <InfoBg img={BusinessElementsDatas.background}>
      <InfoWrappered>
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <Heading>{homeData.title_en}</Heading>
                <Subtitle>{homeData.body_en}</Subtitle>
                <BtnWrap button={true}>
                  <Button
                    primary="false"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    to="/Nickle-Ore-Mining"
                  >
                    Learn More
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageInfo src={homeData.image.url} alt="image" />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoWrappered>
    </InfoBg>
  );
};

export default Business;
