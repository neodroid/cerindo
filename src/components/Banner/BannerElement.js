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
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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
