import React from "react";
import Bg from "../../../images/Home_background1.png";
import { MdTrendingFlat } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import circle from "../../../images/Ellipse 17.png";
import {NewsData} from "../../Data/News";
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
  VideoWrited
} from "./HeroElements";
import { homeNewsOne, homeNewsThree, homeNewsTwo } from "../../Data/HomeData";

const HeroSection = () => {
  return (
    <HeroContainer img={Bg}>
      <HeroContent>
            <HeroH1>Building a Shining Nickel and Cobalt Business</HeroH1>

            <VideoWrapped>
              <VideoTemptWrapped img={circle}>
                <FaPlayCircle/>
              </VideoTemptWrapped>
              <VideoWrited>PLAY VIDEO</VideoWrited>
            </VideoWrapped>

            <HeroNewsWrap>
              <HeroNewsFlex>
              <TitleNewsApart><HeroMediaH1>Recent Update</HeroMediaH1></TitleNewsApart>
              <TitleNewsApart><ViewedAll to="/News-Release"><MdTrendingFlat target="_blank"/>View All</ViewedAll></TitleNewsApart>
              </HeroNewsFlex>
              <HeroNewsFlex>
              {NewsData.map((data,idx)=>{
                return (
                  <HeroNewsContent to={`/News/${data._id}`} key={idx}>
                    <ImgWrap>
                      <Img src={data.image} />
                    </ImgWrap>
                    <HeroNewsDesc>
                      <HeroNewsP>{data.title}</HeroNewsP>
                      <HeroNewsTimeP>{data.date}</HeroNewsTimeP>
                    </HeroNewsDesc>
                  </HeroNewsContent>
                )
              })}
              </HeroNewsFlex>
            </HeroNewsWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
