import styled from "styled-components";

export const BannerContainer = styled.div`
  color: #333;
  height: 340px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BannerWrapper = styled.div`
  position: inherit;
  display: flex;
  background-color: ${({texted})=>(texted ? "transparent" : "rgba(0, 0, 0, 0.7)")};
  width: 100%;
  height: 100%;
  text-align: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  line-height: 1.1;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#333")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const BannerBottom = styled.div`
height: 100%;
bottom: 0px;
  right: 200px;
  position: relative;
  align-self: flex-end !important;
  flex-direction: column-reverse !important;
  display: flex !important;
  @media screen and (max-width: 865px) {
    position: static;
    align-items:center;
    margin: 0 auto;
    width: 100%;
    text-align: left;
  }

`
export const BannerBottomContent = styled.div`
  background: rgba(0,0,0,0.7);
  border-radius: 5px;
  color: white; 
  padding: 15px;
  margin: 0 30px 20px 0;
  transition: 0.4s all ease;
  &:hover{
    transform: scale(1.06)
  }
  @media screen and (max-width: 865px) {
    margin: 10px;
    width: 100%;
  }
`;

export const BannerBotTop = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  align-self: center;
  align-items: center;
`;
export const BannerPlace = styled.p`
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;
  color: #FFFFFF;
`;