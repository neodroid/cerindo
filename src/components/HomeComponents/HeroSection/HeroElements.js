import styled from "styled-components";
import { MdArrowDownward, MdKeyboardArrowDown} from "react-icons/md";
import {Link as LinkR} from "react-router-dom";
import Carousel from "react-elastic-carousel";
import AwesomeSlider from 'react-awesome-slider';

export const HeroContainer = styled.div`
  display: flex;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  /*margin-top:-80px;*/
  /* add before styles */
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// export const VideoBg = styled.video`
//   width: 100%;
//   height: 100%;
//   --o-object-fit: cover;
//   object-fit: cover;
//   background: #232a34;
// `;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  /* position: absolute; */
  padding: 8px 24px;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 80px; */
  @media screen and (max-width: 577px) {
    text-align:center;
  }
`;

export const HeroRow = styled.div`
  background: "#fff";
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-top: 120px;
  }
`;

export const Column2 = styled.div`
  /* margin-bottom: 25px; */
  /* padding: 0 15px; */
  grid-area: col2;
  z-index: 3;
  /* background: #fff; */

  margin-top: 25px;
`;
export const H1Wrap = styled.div`
  z-index: 3;

  /* position: absolute; */
  padding: 8px 24px;
  display: flex;

  align-items: center;
`;

export const HeroNewsFlex = styled.div`
  display:flex;
  flex-direction: ${(props)=>(props.content ? "row" : "row")};
  @media screen and (max-width: 1065px) {
    flex-direction: ${(props)=>(props.content ? "column" : "row")};
  }
`;

export const HeroNewsWrap = styled.div`
  z-index: 3;
  min-height: 471 px;
  overflow: hidden;
  width: 1000px;
  background: rgba(255,255,255,0.8);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  /* position: absolute; */
  /* margin-top: 40px; */
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  /* align-items: center; */
  @media screen and (max-width: 1065px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  /* font-size: 48px;
  text-align: center; */
  max-width: 500px;
  font-size: 40px;
  line-height: 70px;
  font-family: "Montserrat-black";
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroMediaH1 = styled.h1`
  /* background: #333; */
  color: #333;
  /* font-size: 48px;
  text-align: center; */
  max-width: 500px;
  /* font-family: Montserrat; */
  /* font-style: normal; */
  font-weight: 900;

  font-size: 16px;
  margin-top: 5px;
  font-family: "Montserrat-black";
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroP = styled.p`
  margin-top: 32px;
  margin-bottom: 20px;
  color: #fff;
  max-width: 600px;
  font-size: 24px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleNewsApart = styled.div`
  flex-basis:50%;
  width:100%;
`;
export const ViewedAll = styled(LinkR)`
  display: flex;
  flex-direction: row-reverse;
  font-weight: bold;
  font-size: 15px;
  color: #EFB401;
  align-items: center;
  text-decoration: none;
  margin-top: 5px;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ImgWrap = styled.div`
  width: 124px;
  height: 96px;
  box-shadow: 5px 5px 2px #aaaaaa;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroNewsContent = styled(LinkR)`
  cursor: pointer;
  min-width: 295px;
  margin: 15px;

  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-right: 2px solid #aaa;
  text-decoration: none;
  color: black;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 486px) {
    flex-direction: column;
    align-items:center;
    text-align:center;
    border-bottom: 2px solid #aaa;
    border-right: none;
    min-width: 0px;
  }
`;
export const HeroNewsDesc = styled.div`
  max-width: 70%;
  z-index: 3;
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  @media screen and (max-width: 480px) {
    align-items:center;
    margin-left: 0px;
    padding: 10px;
  }
`;

export const HeroNewsP = styled.p`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
`;

export const HeroNewsTimeP = styled.p`
  font-family: "Montserrat";
  font-weight: normal;
  font-size: 10px;
  line-height: 30px;
`;

export const VideoWrapped = styled.a`
  display: flex;
  align-items:center;
  margin: 24px 0;
  text-decoration: none;
  width: fit-content;
  cursor:pointer;
`;
export const VideoWrited = styled.p`
font-weight: 600;
font-size: 15px;
line-height: 70px;
color: #333333;
`;

export const VideoTemptWrapped = styled.div`
  display: flex;
  align-items:center;
  background: rgba(137, 204, 255,0.5);
  margin: 0 8px;
  color: white;
  font-size: 40px;
  padding: 15px;
  border-radius: 60%;
`;

export const Angle = styled(Carousel)`
    margin: 0 auto;
    width: 90%;
    box-sizing: content-box !important;
    .rec-carousel-item-visible {
        width: 100% !important;
    }
    .rec-slider {
        transition: none !important;
    }
    button.rec-arrow{
        display: none;
    };
    button.rec-dot{
      color: #EFB401;
    };
`;

export const BgColoring = styled.div`
  background-color: rgba(0,0,0,0.3);
  width: 100%;
`;

export const Slider = styled(AwesomeSlider)`
  .awssld__wrapper{
    margin: 0 auto !important;
    display: block;
    height: 650px;
    @media screen and (max-width: 502px) {
      height: 720px;
    }
    @media screen and (max-width: 434px) {
      height: 820px;
    }
  }
  .awssld__bullets{
    bottom: 30px;
    z-index: 5;
  }
  .awssld__content  {
    background-color: transparent;
    width: 100% !important;
    position: static !important;
  }
  .awssld__content > div {
    background-color: transparent;
    width: 100%;
    display: block;
    height: 100%;
  }
  .awssld__container{
    height: fit-content;
  }
`;