import React, { useEffect, useState, useContext } from "react";
import Bg from "../../../images/Home_background1.png";
import { MdTrendingFlat } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { newsService } from "../../../service/News";
import { NewsData } from "../../Data/News";
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
} from "./HeroElements";
import { langContext } from "../../../langContext";
import { NewsLangTitle } from "./HeroLang";

const HeroSection = () => {
  const {language} = useContext(langContext);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await newsService.getListNews();
      const data = response.data;
      setNewsData(data);
    };
    fetchData();
  }, []);
  if (newsData.length === 0) return null;
  console.log(newsData);
  return (
    <HeroContainer img={Bg}>
      <HeroContent>
        <HeroH1>Building a Shining Nickel and Cobalt Business</HeroH1>

        <VideoWrapped>
          <VideoTemptWrapped>
            <FaPlayCircle />
          </VideoTemptWrapped>
          <VideoWrited>PLAY VIDEO</VideoWrited>
        </VideoWrapped>

        <HeroNewsWrap>
          <HeroNewsFlex>
            <TitleNewsApart>
              <HeroMediaH1>Recent Update</HeroMediaH1>
            </TitleNewsApart>
            <TitleNewsApart>
              <ViewedAll to="/News-Release">
                <MdTrendingFlat target="_blank" />
                View All
              </ViewedAll>
            </TitleNewsApart>
          </HeroNewsFlex>
          <HeroNewsFlex content>
            {newsData.map((data, idx) => {
              if (idx<3){
              return (
                <HeroNewsContent to={`/News/${data._id}`} key={idx}>
                  <ImgWrap>
                    <Img src={data.news_img.url} />
                  </ImgWrap>
                  <HeroNewsDesc>
                    <HeroNewsP>{NewsLangTitle(data, language)}</HeroNewsP>
                    <HeroNewsTimeP>{data.news_date}</HeroNewsTimeP>
                  </HeroNewsDesc>
                </HeroNewsContent>
              );
              }
            })}
          </HeroNewsFlex>
        </HeroNewsWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
