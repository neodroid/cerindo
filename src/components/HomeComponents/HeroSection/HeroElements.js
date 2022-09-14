import styled from "styled-components";
import { MdArrowDownward, MdKeyboardArrowDown } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";
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
  align-self: center;
  justify-content: center;
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
height: 100%;
  z-index: 3;
  max-width: 1440px;
  justify-content:center;
  margin: auto;
  padding: 3rem 6rem;
  /* position: absolute; */
  display: flex;
  /* margin: 240px auto 0; */
  flex-direction: column;
  align-self: center;
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
  height: 440px;
  width: 100%;
  display:flex;
  gap: 2rem;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 1033px) {
  flex-direction : column;
  align-items : center;
  height: 100%;
}
`;

export const HeroNewsWrap = styled.div`
  z-index: 3;
  overflow: hidden;
  /* position: absolute; */
  /* margin-top: 40px; */
  padding: 3rem 6rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  @media screen and (max-width: 1280px){
    padding: 3rem 5rem;
  }
  @media screen and (max-width: 1065px) {
    width: 100%;
    align-items: center;

  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1.5rem;
    align-items: center;


  }
`;

export const HeroH1 = styled.div`
  /* font-size: 48px;
  text-align: center; */
  width: 100%;
  white-space: pre-line;  
    vertical-align: bottom;
  font-size: ${({ size }) => (size ? "32px" : "40px")};
  line-height: 50px;
  font-family: 'Multicolore', sans serif;
  color: #EFB401;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 502px) {
    font-size: 29px;
    line-height: 35px;
    margin-bottom: 15px;
  }
`;

export const HeroMediaH1 = styled.h1`
  /* background: #333; */
  color: #333;
  width: 100%;
  /* font-size: 48px;
  text-align: center; */
  max-width: 100%;
  font-weight: 400;
  padding:0;
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: "Montserrat";
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 40px;
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
  /* flex-basis:50%; */
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  object-fit: cover;
  overflow: hidden;
 
`;

export const HeroNewsContent = styled(LinkR)`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction:column;
  display: flex;
  text-decoration: none;
  /* transition: all 0.5s ease-in-out; */
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  
  @media screen and (max-width: 1033px) {
    height: 450px;
    width: 100%;
  }

  @media screen and (max-width: 486px) {
    height: 450px;
    width: 100%;
  }
`;

export const Img = styled.div`
  transition: all 0.5s ease-in-out;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;

  ${HeroNewsContent}:hover &{
    transform: scale(1.08);
  }
`;

export const HeroNewsDesc = styled.div`
  height: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 480px) {
    /* align-items:center;
    padding: 10px;
    text-align: center; */
  }
`;

export const ReadMore = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  transform: translateY(2.4rem);
  background-color: #EFB401;
  justify-content: center;
  padding: 8px 4px;
  color: white;
  transition: all 0.5s ease-in-out;

  ${HeroNewsContent}:hover &{
    transform: translateY(0);
  }
`;

export const HeroNewsP = styled.div`
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 1.5rem;
  color: black;
`;

export const HeroNewsTimeP = styled.div`
  font-family: "Montserrat";
  margin-bottom: 4px;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #858585;
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
  height: 100%;
`;

export const Slider = styled(AwesomeSlider)`
  .awssld__wrapper{
    margin: 0 auto !important;
    display: block !important;
    height: 90vh;
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
  .awssld__timer {
    background-color: transparent;
    z-index: -1;
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