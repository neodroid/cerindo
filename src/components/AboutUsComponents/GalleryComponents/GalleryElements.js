import styled from "styled-components";

export const GalleryAllContent = styled.div`
  margin: 20px;
  h2 {
    font-size: 26px;
    line-height: 50px;
    color: #111111;
    margin-top: 40px;
    @media screen and (max-width: 525px) {
      text-align: center;
    }
  }
`;

export const VideoContentMain = styled.video`
  width: 709px;
  height: 505px;
  background: #f1f1f1;
  @media screen and (max-width: 884px) {
    width: 567px;
    height: 404px;
  }
  @media screen and (max-width: 709px) {
    width: 397px;
    height: 283px;
  }
  @media screen and (max-width: 525px) {
    width: 250px;
    height: 150px;
  }
`;
export const VideoContentPartMain = styled.div`
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 525px) {
    margin: 0 auto;
  }
`;
export const VideoGridOther = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: start;
  @media screen and (max-width: 884px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 618px) {
    grid-template-columns: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-gap: 10px;
    width: 100%;
  }
`;

export const VideoContainerOther = styled.div`
  width: 226px;
  p {
    font-size: 14px;
    line-height: 24px;
    color: #111111;
  }
  @media screen and (max-width: 609px) {
    width: 100%;
  }
`;
export const VideoContentOther = styled.video`
  width: 226px;
  height: 127px;
`;

export const Figured = styled.figure`
  margin: 10px auto;
  max-width: 226px;
  transition: 0.5s all ease;
  &:hover {
    transform: scale(1.08);
  }
  img {
    max-width: 226px;
    max-height: 128px;
  }
  div {
    width: 226px;
    height: 127px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 609px) {
      width: 158px;
      height: 100px;
    }
    @media screen and (max-width: 525px) {
      width: 226px;
      height: 127px;
    }
  }
  figcaption {
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    padding: 5px 0;
  }
`;
