import styled from "styled-components";

export const Heading = styled.h1`
  margin-bottom: 24px;
  /* font-size: 24px;
  line-height: 1.1;
  font-weight: 600; */
  color: #333333;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;

  @media screen and (max-width: 480px) {
    /* font-size: 32px; */
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  /* font-size: 14px;
  line-height: 24px; */
  color: #333333;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;
export const Column2 = styled.div`
  margin-bottom: 25px;
  /* padding: 0 15px; */
  grid-area: col2;

  /* background: blue; */
  @media screen and (max-width: 1033px) {
    text-align: center;
    padding: 0 20px;
  }
`;

export const ImageRight = styled.div`
  height: 168px;
  width: 267px;
  position: relative;
  z-index: 2;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  transition: 0.6s all ease-in-out;
  &:hover{
    transform: scale(1.05);
  };
  @media screen and (max-width: 555px) {
    height: 126px;
    width: 200px;
  }
`;

export const ImageLeft = styled.div`
  height: 173px;
  width: 307px;
  position: relative;
  z-index: 2;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  margin-top: -40px;
  margin-left: 140px;
  transition: 0.6s all ease-in-out;
  &:hover{
    transform: scale(1.05);
};
@media screen and (max-width: 555px) {
    height: 129px;
    width: 230px;
    margin-top: -10px;
    margin-left: 90px;
  }
`;

export const ImageCenter = styled.div`
  height: 193px;
  width: 176px;
  position: relative;
  z-index: 1;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
  margin-top: -100px;
  margin-left: 200px;
  transition: 0.6s all ease-in-out;
  &:hover{
    transform: scale(1.05);
};
@media screen and (max-width: 555px) {
    height: 145px;
    width: 132px;
    margin-left: 140px;
  }
`;

export const ImageCanvas = styled.div`
  background-color: rgba(239, 180, 1, 0.8);
  z-index: 2;
  height:100%;
  width:100%;
`;

export const Imaging = styled.div`text-align: center;`;