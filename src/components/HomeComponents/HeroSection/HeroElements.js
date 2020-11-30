import styled from "styled-components";
import {
  MdKeyboardArrowRight,
  MdArrowForward,
  MdArrowDownward,
  MdKeyboardArrowDown,
} from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 625px;
  position: relative;
  z-index: 1;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  max-width: 1200px;
  /* position: absolute; */
  padding: 8px 24px;
  display: grid;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
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

export const HeroNewsWrap = styled.div`
  z-index: 3;

  min-height: 471 px;
  min-width: 450;
  background: #fff;
  border-radius: 5px;
  /* position: absolute; */
  /* margin-top: 40px; */
  padding: 8px 24px;
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  align-items: flex-start;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  /* font-size: 48px;
  text-align: center; */
  max-width: 500px;
  font-size: 40px;
  line-height: 70px;
  font-family: "Montserrat-black";
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
  height: 94px;
  box-shadow: 5px 5px 2px #aaaaaa;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroNewsContent = styled.div`
  cursor: pointer;
  width: 100%;
  z-index: 3;
  margin: 10px 5px;

  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 2px solid #aaa;
  align-items: flex-start;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f5f5f5;
    transform: scale(1.02);
  }
`;
export const HeroNewsDesc = styled.div`
  max-width: 70%;
  z-index: 3;
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
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
