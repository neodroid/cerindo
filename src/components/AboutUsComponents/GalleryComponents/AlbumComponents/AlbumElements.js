import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Carousel from "react-elastic-carousel";
import { FaAngleDoubleRight,FaAngleDoubleLeft } from "react-icons/fa";

export const AlbumGrid = styled.div`
    display: grid;
    grid-gap: 5px;
    justify-content:center;
    grid-template-columns: auto auto auto auto;
    @media screen and (max-width: 726px) {
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 538px) {
        grid-template-columns: auto auto;
    }
`;

export const Image = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ButtonCloser = styled(AiOutlineClose)`
    font-size: 26px;
    color: white;
`;
export const Imagees = styled.img`
  width:100%;
`;
export const ContentDropped = styled.div`
    max-width: 700px;
    overflow: hidden;
    display: flex;
`;
export const ContentDrop = styled.div`
margin: 20px auto;
max-width: 700px;
border-radius: 10px;
border-radius: 10px;
border: 1px solid #ccc;
padding: 16px;
z-index: 52;
display: ${({ played }) => (played ? "block" : "none")};
background-color: rgba(255,255,255);`;

export const DropDownContent = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0);
z-index: 51;
padding: 15px;
overflow-y: scroll;
`;
export const ContentDiv2 = styled.div`
    display: block;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 13px;
    line-height: 20px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    width: fit-content;
    z-index: 60;
    &:focus ${DropDownContent}, &:active ${DropDownContent} {
      display: none;
    }
`;

export const ContentDiv = styled.div`
    display: block;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 13px;
    line-height: 20px;
    text-decoration: underline;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0 auto;
`;

export const AngleRight = styled(FaAngleDoubleRight)`
position: absolute;
top: 50%;
z-index: 60;
right: 5px;
font-weight:bold;
background-color: transparent;
color : #EFB401;
font-size:50px;
cursor: pointer;
user-select: none;
`;
export const AngleLeft = styled(FaAngleDoubleLeft)`
position: absolute;
top: 50%;
z-index: 60;
left: 5px;
font-weight:bold;
background-color: transparent;
color : #EFB401;
font-size:50px;
cursor: pointer;
user-select: none;
`;
export const Angle = styled(Carousel)`
    margin: 0 auto;
    width: 90%;
    border: none;
    outline: none;
    box-sizing: content-box !important;
    .rec-carousel-item-visible {
        width: 100% !important;
    }
    .rec-slider {
        transition: none !important;
    }
    button.rec-arrow{
        position: relative;
        font-weight:bold;
        background-color: transparent;
        color : #EFB401;
        font-size:50px;
        min-width: 0;
        border: none !important;
        outline: none !important;
        width:50px;
        height: 40px;
        line-height: 10px;
        &:hover,&:focus{
            color: black;
        };
    };
    button.rec-dot{
        display:none;
    };
`;
export const Dropbtn = styled.div`
display: block;
  outline: none;
  cursor: pointer;
`;
export const DropDown = styled.div`
  margin-bottom: 32px;
  display: inline-block;
  border-bottom: 1px solid #D6D6D6;
  border: none;
  cursor: pointer;
  outline: none;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    /* background-color: rgba(0, 0, 0, 0.1); */
    border: none;
  }

  &:focus ${DropDownContent}, &:active ${DropDownContent} {
    display: block;
    max-width: 100vw;
    cursor: auto;
  }
  &:focus ${ContentDiv2}, &:active${ContentDiv2} {
      display: block;
  }
  
  &:focus ${Angle}, &:active${Angle} {
    display: block;
}
  &:focus ${ContentDiv}, &:active${ContentDiv} {
    display: none;
}
  &:hover {
    color: #333;
  }
`;

export const SliderRel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;