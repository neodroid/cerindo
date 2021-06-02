import styled from "styled-components";

export const InfoContainer = styled.div`
  /* height: 700px; */
  color: #fff;
  background: #fff;
  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;

  /* height: 600px; */
  /* height: 840px; */
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 70px 0 60px;
  justify-content: center;
  @media screen and (max-width: 1033px) {
    width: 90%;
    max-width: auto;
  }
`;

export const InfoRow = styled.div`
  background: "#fff";
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items:center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1033px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 40px 0 15px;
  grid-area: col1;
  @media screen and (max-width: 1033px) {
    padding: 0 20px;
    text-align:center;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 25px;
  /* padding: 0 15px; */
  grid-area: col2;

  /* background: blue; */
  @media screen and (max-width: 1033px) {
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 1033px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align:center;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  /* font-size: 24px;
  line-height: 1.1;
  font-weight: 600; */
  color: ${({ lighText }) => (lighText ? "white" : "#333")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 50px;

  @media screen and (max-width: 480px) {
    /* font-size: 32px; */
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  /* font-size: 14px;
  line-height: 24px; */
  color: ${({ lighText }) => (lighText ? "#fff" : "#333")};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;

export const BtnWrap = styled.div`
  display: ${({ button }) => (button ? "flex" : "none")};
  justify-content: flex-start;
  @media screen and (max-width: 1033px) {
    justify-content: center;
    align-items:center;
    text-align:center;
  }
`;

export const ImgWrap = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  /* justify-items: center; */
  /* max-width: 555px; */
  height: 100%;
  background: #565656;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const VideoContent = styled.video`
  width:480px;
  height:300px;
  @media screen and (max-width: 577px) {
    width: 300px;
    height: 150px;
  }
`;