import styled from "styled-components";

export const GalleryAllContent = styled.div`
  margin: 20px;
  h2 {
    font-size: 26px;
    line-height: 50px;
    color: #111111;
    margin-top: 40px;
    margin-bottom:20px;
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
  display:flex;
  justify-content: start;
  @media screen and (max-width: 525px) {
    margin: 0 auto;
  }
`;
export const VideoGridOther = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
  justify-content: start;
  @media screen and (max-width: 884px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 618px) {
    grid-template-columns: 100%;
    justify-items: center;
    text-align: center;
    align-items: center;
    grid-gap: 16px;
    width: 100%;
  }
`;

export const VideoContainerOther = styled.div`
  width: 226px;
  p {
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    text-align: justify;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0;
  width: 256px;
  height: 100%;
  transition: 0.5s all ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.06);
  }
  img {
    width: 100%;
    height: 190px;
    object-fit: cover;

  }
  /* div {
    width: 100%;
    min-height: 127px;
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
  } */
  figcaption {
    text-align: left;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #111111;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: cover;
  
`;

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 14px 16px;
  gap:32px;
  justify-content: space-between;
  flex-direction: column;
`

export const ViewAlbum = styled.div`
  gap:12px;
  display: flex;
  align-items:center;
  color: #EFB401;

`

export const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  font-size:24px;

`

