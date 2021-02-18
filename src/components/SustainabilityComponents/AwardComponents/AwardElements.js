import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const AwardsesContent=styled.div`
    margin: 20px 0;
`;

export const Figured = styled.figure`
    margin: 10px 0;
    img {
        width: 232px;
        border: 1px solid black;
        @media screen and (max-width: 882px) {
            width:185px;
        }
        @media screen and (max-width: 461px) {
            width: 120px;
        }
    }
    figcaption {
        font-weight: bold;
        font-size: 14px;
        line-height: 25px;
        padding: 5px 0;
    }
    @media screen and (max-width: 461px) {
        width: 120px;
    }
`;

export const ContentAward = styled.div`
border-bottom: 1px solid #E0E0E0;
margin: 20px 0;
padding: 20px 0;
`;

export const ImageAward = styled.img`
    width: 124px;
    margin: 13px 15px 13px 0;
    @media screen and (max-width: 550px) {
        margin: 13px auto;
    }
`;

export const Linked = styled.a`
    color:black;
`;

export const Containerrs = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`;

export const ButtonCloser = styled(AiOutlineClose)`
    font-size: 26px;
    color: white;
`;
export const ContentDrop = styled.div`
margin: 20px auto;
max-width: 700px;
border-radius: 10px;
border-radius: 10px;
padding: 16px 16px;
z-index: 52;
background-color: transparent;`;

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
export const ContentDiv2 = styled.div`
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
    width: fit-content;
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
  &:focus ${ContentDiv}, &:active${ContentDiv} {
    display: none;
}
  &:hover {
    color: #333;
  }
`;

export const Dropbtn = styled.div`
  flex-basis: 10%;
`;
