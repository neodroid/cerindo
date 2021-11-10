import styled from "styled-components";
import Masonry from "react-masonry-component";
import { AiFillCloseCircle } from "react-icons/ai";

export const Bodwrapped = styled.div`
    margin: 50px 5px 10px 10px;
    @media screen and (max-width: 1125px) {
        margin: 50px 5px 10px;
    }
    @media screen and (max-width: 1050px) {
       width: 100%;
       margin: 0 auto;
    }
    @media screen and (max-width: 650px) {
    }
`;

export const BODTitle = styled.div`
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    text-align : left;
    color: black;
    margin: 20px 0;
    margin-top: 36px;
`;

export const BodGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px;
    justify-content: center;
    @media screen and (max-width: 650px) {
        grid-template-columns: auto;
`;
export const Bodbox = styled.div`
    width: 400px;
    height: fit-content !important;
    border-radius: 10px;
    margin: 10px auto;
    @media screen and (max-width: 1125px) {
        width: 305px;
    }
    @media screen and (max-width: 1050px) {
        width: 400px;
    }
    @media screen and (max-width: 1010px) {
        width: 350px;
    }
    @media screen and (max-width: 896px) {
        width: 300px;
    }
    @media screen and (max-width: 776px) {
        width: 250px;
    }
    @media screen and (max-width: 650px) {
        margin: 10px 0;
        width: 100%;
    }
`;

export const BodBoxContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BodBoxIntro = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 32px;
    align-items:${(props) => (props.change ? "left" : "center")};
    text-align: ${(props) => (props.change ? "left" : "center")};
    @media screen and (max-width: 650px) {
        margin: 0 auto;
    }
`;
export const FlexBod = styled.div`
display: flex;
margin-bottom: 20px;
@media screen and (max-width: 528px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
}
`;
export const WritedFlex = styled.div`
display: flex;
flex-direction: column;
align-self: center;
margin-left: 10px;
@media screen and (max-width: 528px) {
    margin-left: 0;
}
`;
export const BodBoxIntroTitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin: 0 10px;
    font-weight: ${(props) => (props.title ? "bold" : "normal")};
    font-size: ${(props) => (props.title ? "20px" : "14px")};
    line-height: ${(props) => (props.title ? "30px" : "20px")};
    color: #111111;
    font-style: ${(props) => (props.title ? "normal" : "italic")};
`;

export const BodDescriptionContent = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    margin: 0 auto;
    text-align: justify;
`;

export const Masonries = styled(Masonry)`
display: block !important;
@media screen and (max-width: 1050px) {
    width: 100% !important;
}
`;

export const ButtonCloser = styled(AiFillCloseCircle)`
    font-size: 26px;
    color: #EB5757;
`;

export const ContentDrop = styled.div`
margin: 20px auto;
max-width: 686px;
border-radius: 10px;
border-radius: 10px;
border: 1px solid #ccc;
padding: 16px 16px;
z-index: 52;
background-color: rgba(255,255,255);`;

export const DropDownContent = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
display: none;
z-index: 51;
padding: 15px;
overflow-y: scroll;
`;
export const ContentDiv2 = styled.button`
    display: none;
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
    width: fit-content;
`;
export const ContentDiv = styled.div`
    display: block;
    color:#EFB401;
    font-weight: bold;
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
    width: fit-content !important;
    

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
      display: flex;
      width: 100%;
      flex-direction: row-reverse;
  }
  &:focus ${ContentDiv}, &:active${ContentDiv} {
    display: none;
}
  &:hover {
    color: #333;
  }
`;

export const Dropbtn = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items:center;
`;

export const TheKing = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const KingBox = styled.div`
    height: fit-content !important;
    border-radius: 10px;
    margin: 10px auto;
`;