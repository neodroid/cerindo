import styled from "styled-components";

export const BannerContainer = styled.div`
  color: #333;
  height: 340px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const BannerWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: "Montserrat-black";
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#333")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
