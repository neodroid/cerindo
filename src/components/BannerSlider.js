import styled from "styled-components";
import AwesomeSlider from 'react-awesome-slider';

export const BannerSlider = styled(AwesomeSlider)`
  .awssld__wrapper{
    margin: 0 auto !important;
    display: block;
    min-height: 330px;
    height: 340px;
    @media screen and (max-width: 1064px) {
      min-height: 350px;
      height: 350;
    }
  }
  .awssld__bullets{
    bottom: 30px;
    z-index: 5;
    height: 12px !important;
  }
  .awssld__content  {
    background-color: transparent;
    width: 100% !important;
    position: static !important;
  }
  .awssld__content > div {
    background-color: transparent;
    width: 100%;
    display: block;
    height: 100%;
  }
  .awssld__container{
    height: fit-content;
  }
`;