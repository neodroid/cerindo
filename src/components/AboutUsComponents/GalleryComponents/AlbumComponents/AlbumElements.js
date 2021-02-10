import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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

export const Image = styled.img`
    width: 150px;
    height: 150px;
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
