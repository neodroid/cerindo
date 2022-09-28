import styled from "styled-components";

export const BannerContainer = styled.div`
  color: #333;
  height: 340px;
  background-image: radial-gradient(108.47% 253.52% at -13.58% 95.83%,#000 0,rgba(0,0,0,.28125) 40%,rgba(0,0,0,.113963) 81.96%,transparent 100%) , url(${(props) => props.img}) ;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BannerWrapper = styled.div`
  position: inherit;
  display: flex;
  background-color: ${({texted})=>(texted ? "transparent" : "rgba(0, 0, 0, 0.7)")};
  width:80%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 4rem;
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
  position: relative;
  align-self: flex-start !important;
  flex-direction: column-reverse !important;
  display: flex !important;
  @media screen and (max-width: 865px) {
    position: static;
    align-items:center;
    width: 100%;
    text-align: center;
  }

`
export const BannerBottomContent = styled.div`
  background: #FBFF47;
  border-radius: 3px;
  color: black; 
  padding: 15px;
  margin: 0 30px 20px 0;
  transition: 0.4s all ease;
  border-left: 10px solid #EFB401;
  &:hover{
    transform: scale(1.06)
  }
  @media screen and (max-width: 865px) {
    margin: 10px;
    width: 100%;
    border-right: 10px solid #EFB401;
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
  font-weight: 400;
  font-size: 3rem;
  line-height: 3rem;
  color: white;

  @media screen and (max-width: 865px){
    font-size: 2.5rem;
  }
`;