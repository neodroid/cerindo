import React, { useEffect, useState, useContext } from "react";

import { MdTrendingFlat } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { newsService } from "../../../service/News";
import { communityService } from "../../../service/Community";
import { homeService } from "../../../service/Homepage";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { HeroData } from "../../Data/HomeData";
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
} from "./HeroElements";
import { langContext } from "../../../langContext";
import { NewsLangTitle, NewsLangBanner } from "./HeroLang";
const AutoplaySlider = withAutoplay(Slider);

const HeroSection = () => {
  const { language } = useContext(langContext);
  const [newsData, setNewsData] = useState([]);
  const [communityData, setCommunityData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [type, setType] = useState("news");

  useEffect(() => {
    const fetchNews = async () => {
      const response = await newsService.getListNews();
      const data = response.data;
      setNewsData(data);
    };

    const fetchHome = async () => {
      const response = await homeService.getListHome();
      const data = response.data;
      setHomeData(data);
    };

    const fetchCommunity = async () => {
      const response = await communityService.getListCommunity();
      const data = response.data;
      setCommunityData(data);
    };
    fetchNews();
    fetchCommunity();
    fetchHome();
  }, []);

  console.log(homeData);

  const joinedData = newsData.concat(communityData);

  function compareDate(a, b) {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    }
    return 0;
  }
  if (homeData.length === 0) return null;

  const sortedContent = joinedData.sort(compareDate);
  return (
    <>
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      className="aws-btn"
    >
      {homeData.hero_banner.map((data, idx) => {
        return (
          <>
            <HeroContainer img={data.banner.url} key={idx}>
              <BgColoring>
                <HeroContent>
                  {NewsLangBanner(data, language).length > 8 ? 
                  (
                  <HeroH1 size={true}>{NewsLangBanner(data, language)}</HeroH1>
                  )
                :
                (
                <HeroH1 size={false}>{NewsLangBanner(data, language)}</HeroH1>
                )}
                </HeroContent>
              </BgColoring>
            </HeroContainer>
          </>
        );
      })}
    </AutoplaySlider>
    <HeroNewsWrap>
    <HeroNewsFlex>
      <TitleNewsApart>
        <HeroMediaH1>Recent Update</HeroMediaH1>
      </TitleNewsApart>
    </HeroNewsFlex>
    <HeroNewsFlex content>
      {sortedContent.slice(0, 3).map((data, idx) => {
        if (newsData.indexOf(data) !== -1) {
          return (
            <HeroNewsContent to={`/News/${data._id}`} key={idx}>
              <ImgWrap>
                <Img src={data.image.url} />
              </ImgWrap>
              <HeroNewsDesc>
                <HeroNewsP>
                  {NewsLangTitle(data, language)}
                </HeroNewsP>
                <HeroNewsTimeP>{data.date}</HeroNewsTimeP>
              </HeroNewsDesc>
            </HeroNewsContent>
          );
        } else {
          return (
            <HeroNewsContent
              to={`/Community-Activity/${data._id}`}
              key={idx}
            >
              <ImgWrap>
                <Img src={data.image.url} />
              </ImgWrap>
              <HeroNewsDesc>
                <HeroNewsP>
                  {NewsLangTitle(data, language)}
                </HeroNewsP>
                <HeroNewsTimeP>{data.date}</HeroNewsTimeP>
              </HeroNewsDesc>
            </HeroNewsContent>
          );
        }
      })}
    </HeroNewsFlex>
  </HeroNewsWrap>
  </>
  );
};

export default HeroSection;
