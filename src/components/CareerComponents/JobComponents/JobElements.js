import styled from "styled-components";
import {Link} from "react-router-dom"

export const BannerStyle = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    align-items:center;
    justify-content: center;
    background: #F2F2F2;
    font-size: 30px;
line-height: 60px;
font-weight: bold;
`;

export const MainCareer = styled.div`
    margin: 30px auto;
    width: 65%;
    white-space: pre-line;  
    vertical-align: bottom;
    @media screen and (max-width: 626px) {
        width: 85%;
    }
    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 50px;
        color: #333333;
        margin-top: 38px;
    }
    p {
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-top: 10px;
    }
`;

export const Upsiv = styled.div`
    font-size: 16px;
    line-height: 26px;
    color: #333333;
    margin: 30px 0px 50px 0px;
`;

export const Mail = styled.span`
font-size: 16px;
line-height: 26px;
color: #EFB401;
text-decoration: underline;
cursor: pointer;
`;

export const ArrowLeft = styled(Link)`
display: flex;
align-items: center;
font-size: 16px;
line-height: 20px;
color: #EFB401;
margin-bottom: 20px;
text-decoration: none;
`;

export const Inputan = styled.input`
width: 60%;
border-bottom: 0.5px solid #5C5C5C;
outline: none;
padding: 16px;
border-top:none;
border-left:none;
border-right:none;
margin: 20px 15px 20px 0;
&:focus,&:active {
    border-bottom: 2px solid #5C5C5C;
}
@media screen and (max-width: 707px) {
    width: 100%;
}
`;

export const ApartInputan = styled.div`
    display: flex;
    width: 62%;
    @media screen and (max-width: 707px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const InputanArea = styled.textarea`
width: 60%;
border: 0.5px solid #5C5C5C;
outline: none;
padding: 16px;
margin: 20px 15px 20px 0;
&:focus,&:active {
    border: 2px solid #5C5C5C;
}
@media screen and (max-width: 707px) {
    width: 100%;
}
`;
export const Buttons = styled.div`
display: flex; 
align-items: center;
`
export const Buttonscv = styled.button`
background: #EFB401;
border-radius: 50px;
cursor: pointer
border:0;
outline:none;
color: white;
font-size: 18px;
line-height: 30px;
padding: 8px 32px;
margin: 20px 0;
`;

export const Buttonscvs = styled.div`
background: #EFB401;
border-radius: 50px;
cursor: pointer
border:0;
outline:none;
color: white;
font-size: 18px;
line-height: 30px;
padding: 8px 32px;
margin: 20px 0;
`;

export const ContentDrop = styled.div`
margin: 20px auto;
max-width: 500px;
border-radius: 10px;
border-radius: 10px;
border: 1px solid #ccc;
padding: 16px 16px;
z-index: 52;
color: white;
text-align: center;
background-color: rgba(92,184,92);`;

export const DropDownContent = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
background-color: rgba(0,0,0,0.7);
display: none;
z-index: 51;
padding: 20px;
overflow-y: scroll;
`;
export const ContentDiv2 = styled.button`
    display:block;
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
    margin: 0 auto;
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
  &:focus ${ContentDiv}, &:active${ContentDiv} {
    display: none;
}
  &:hover {
    color: #333;
  }
`;

export const Dropbtn = styled.div`
  display: block;
`;
export const Nulity = styled.div`
display:none;
`;