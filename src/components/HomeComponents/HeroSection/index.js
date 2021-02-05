import React, { useEffect, useState, useContext } from "react";

import { MdTrendingFlat } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { newsService } from "../../../service/News";
import { communityService } from "../../../service/Community";

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
import { NewsLangTitle } from "./HeroLang";
const AutoplaySlider = withAutoplay(Slider);

const HeroSection = () => {
  const { language } = useContext(langContext);
  const [newsData, setNewsData] = useState([]);
  const [communityData, setCommunityData] = useState([]);
  const [allData, setAlldata] = useState({
    newsData: [],
    communityData: [],
  });
  useEffect(() => {
    const fetchNews = async () => {
      const response = await newsService.getListNews();
      const data = response.data;
      setNewsData(data);
    };

    const fetchCommunity = async () => {
      const response = await communityService.getListCommunity();
      const data = response.data;
      setCommunityData(data);
    };
    fetchNews();
    fetchCommunity();
  }, []);

  const joinedData = newsData.concat(communityData);

  function compareDate(a, b) {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    }
    return 0;
  }

  const sortedContent = joinedData.sort(compareDate);

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      className="aws-btn"
    >
      {HeroData.map((data, idx) => {
        return (
          <>
            <HeroContainer img={data.img} key={idx}>
              <BgColoring>
                <HeroContent>
                  <HeroH1>{data.title}</HeroH1>
                  <HeroNewsWrap>
                    <HeroNewsFlex>
                      <TitleNewsApart>
                        <HeroMediaH1>Recent Update</HeroMediaH1>
                      </TitleNewsApart>
                      <TitleNewsApart>
                        <ViewedAll to="/Press-Release">
                          <MdTrendingFlat target="_blank" />
                          View All
                        </ViewedAll>
                      </TitleNewsApart>
                    </HeroNewsFlex>
                    <HeroNewsFlex content>
                      {sortedContent.map((data, idx) => {
                        if (idx < 3) {
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
                        }
                      })}
                    </HeroNewsFlex>
                  </HeroNewsWrap>
                </HeroContent>
              </BgColoring>
            </HeroContainer>
          </>
        );
      })}
    </AutoplaySlider>
  );
};

export default HeroSection;
