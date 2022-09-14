import styled from "styled-components";

export const InfoBg = styled.div`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${(props) => props.img});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;
`;

export const InfoWrappered = styled.div`
    background-color: rgba(0,0,0,0.7)
`;

export const ImageInfo = styled.img`
    width: 100%;
    height: auto;
    transition: 0.6s ease-in-out;
    &:hover{
        transform: scale(1.05);
    };
   
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  /* font-size: 24px;
  line-height: 1.1;
  font-weight: 600; */
  color: white;
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
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;