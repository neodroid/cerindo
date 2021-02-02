import styled from "styled-components";
import Masonry from "react-masonry-component";


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
    align-items:center;
    text-align: center;
    @media screen and (max-width: 650px) {
        margin: 0 auto;
    }
`;

export const BodBoxIntroTitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin: 0 10px;
    font-weight: ${(props)=>(props.title ? "bold" : "normal")};
    font-size: ${(props)=>(props.title ? "20px" : "14px")};
    line-height: ${(props)=>(props.title ? "30px" : "20px")};
    color: #111111;
    font-style: ${(props)=>(props.title ? "normal" : "italic")};
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
export const DropDownContent = styled.div`
  width: 100%;
  display: none;
  z-index: 1;
  padding: 16px 16px;
`;
export const ContentDiv2 = styled.button`
    display: none;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    text-decoration: underline;
    border: none;
    background: transparent;
    cursor: pointer;
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
`;
export const DropDown = styled.div`
  margin-bottom: 32px;
  display: inline-block;
  border-bottom: 1px solid #D6D6D6;
  border: none;
  cursor: pointer;
  width: 100%;
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
  width: 100%;
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