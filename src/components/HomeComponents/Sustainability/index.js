import React, { useState, useEffect, useContext } from "react";
import { homeService } from "../../../service/Homepage";
import { communityService } from "../../../service/Community";
import { SustainabilityElementsDatas } from "../../Data/HomeData/SustainabilityElementsDatas";
import { Link as LinkR } from "react-router-dom";
import { Button } from "../../ButtonElement";
import { InfoBg } from "../Business/BusinessElements";
import { BsArrowRight } from "react-icons/bs"
import {
  InfoRow,
  Column1,
  TextWrapper,
  BtnWrap,
  InfoWrapper,
} from "../AboutUs/AboutUsElements";
import { Heading, Subtitle, Column2, SustainabilityNewsFlex, ActivityDesc, ActivityImg, ActivityImgWrap, ActivityContent, ActivityReadMore } from "./SustainabilityElements";
import {
  ImageRight,
  ImageCenter,
  ImageLeft,
  ImageCanvas,
  Imaging,
} from "./SustainabilityElements";
import { langContext } from "../../../langContext";
import { HomeLangTitle, HomeLangBody, HomeLangButton } from '../HomeLang';
import { ActivityLangTitle } from "../../NewsGalleryComponents/ActivityComponents/ActivityLang"
import {
  ActivityBtn,
  FlexContainer,
  FlexWrap,
  HeaderFlex,
  HomeFlex,
  HomeFlexElement,
  HomeH1,
  HomeH2,
  HomeP,
  HomeTextWrap,
} from "../HomeElements";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroNewsContent,
  HeroMediaH1,
  ImgWrap,
  Img,
  HeroNewsWrap,
  HeroNewsDesc,
  HeroNewsP,
  HeroNewsTimeP,
  HeroNewsFlex,
  ViewedAll,
  TitleNewsApart,
  VideoWrapped,
  VideoTemptWrapped,
  VideoWrited,
  Angle,
  BgColoring,
  Slider,
  ReadMore,
} from "../HeroSection/HeroElements";

const Sustainability = () => {
  const { language } = useContext(langContext);
  const [homeData, setHomeData] = useState([]);
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getListHome();
      const data = response.data;
      setHomeData(data.CommunitySustainibility);
    };

    const fetchCommunity = async () => {
      const response = await communityService.getListCommunity();
      const data = response.data;
      setActivity(data);
    };

    fetchData();
    fetchCommunity();

  }, []);
  if (homeData.length === 0) return null;

  const sortedActivities = activity.sort((a, b) => {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d - c;

  });

  const style = { fontSize: "1.5rem" }

  return (
    <>
      <FlexWrap>
        <FlexContainer>
          <HomeFlex>
            <HomeFlexElement>
              <HomeTextWrap>
                <HomeH1 lightText={true}>{HomeLangTitle(homeData, language)}</HomeH1>
                <HomeP darktext={false}>{HomeLangBody(homeData, language)}</HomeP>
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
              </HomeTextWrap>
            </HomeFlexElement>
            <HomeFlexElement>
              <Imaging>
                <ImageRight img={homeData.image[0].url}></ImageRight>
                <ImageCenter img={homeData.image[1].url}>
                  <ImageCanvas></ImageCanvas>
                </ImageCenter>
                <ImageLeft img={homeData.image[2].url}></ImageLeft>
              </Imaging>
            </HomeFlexElement>
          </HomeFlex>
        </FlexContainer>
      </FlexWrap>
      <HeroNewsWrap>
        <FlexContainer>
          <HeaderFlex>
            <HomeH2>Community Activities</HomeH2>
            <ActivityBtn to={`/Community-Activities`} href={`/Community-Activities`}>
              <span>See More</span>
              <BsArrowRight style={style} />
            </ActivityBtn>
          </HeaderFlex>
          <SustainabilityNewsFlex content>
            {sortedActivities
              .filter((e, idx) => idx < 4)
              .map((data, idx) => {
                if (sortedActivities.indexOf(data) !== -1) {
                  return (
                    <>
                      {idx > 1 ? (
                        <ActivityContent
                          to={`/Community-Activity/${data._id}`}
                          key={idx}
                          lastIndex
                        >
                          <ActivityImgWrap>
                            <ActivityImg src={data.image.url} />
                          </ActivityImgWrap>
                          <ActivityDesc>
                            <HeroNewsTimeP>{data.date}</HeroNewsTimeP>
                            <HeroNewsP>{ActivityLangTitle(data, language)}</HeroNewsP>
                          </ActivityDesc>
                          <ActivityReadMore>Read More</ActivityReadMore>
                        </ActivityContent>
                      ) : (
                        <ActivityContent
                          to={`/Community-Activity/${data._id}`}
                          key={idx}
                        >
                          <ActivityImgWrap>
                            <ActivityImg src={data.image.url} />
                          </ActivityImgWrap>
                          <ActivityDesc>
                            <HeroNewsTimeP>{data.date}</HeroNewsTimeP>
                            <HeroNewsP>{ActivityLangTitle(data, language)}</HeroNewsP>
                          </ActivityDesc>
                          <ActivityReadMore>Read More</ActivityReadMore>
                        </ActivityContent>
                      )}
                    </>
                  );
                }
              })}
          </SustainabilityNewsFlex>
        </FlexContainer>
      </HeroNewsWrap>
    </>
  );
};

export default Sustainability;
