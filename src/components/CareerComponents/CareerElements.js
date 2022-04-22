import styled from "styled-components";
import {Link} from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import {Link as LinkR} from "react-router-dom";


export const CareerTempl = styled.div`
    width: 65%;
    margin: 50px auto;
    h2 {
        font-size: 26px;
        line-height: 50px;
        color: black;
        margin-bottom: 15px;
        font-family: 'Montserrat',sans-serif;
    }
    @media screen and (max-width: 420px) {
        width: 80% !important;
    }
`;

export const Jobcer = styled.div`
    display: flex;
    margin-bottom: 50px;
    width: 100%;
    flex-direction: row;
    @media screen and (max-width: 952px) {
        flex-direction: column;
    }
`;

export const JobcerBoard = styled.div`
    width: 70px;
    height: 8px;
    background: #EFB401;
    margin: 8px 0;
`;
export const JobcerContent = styled.div`
    flex-basis: 55%;
    text-align: justify;
    white-space: pre-line;  
    vertical-align: bottom;
    p {
        font-size: 15px;
        line-height: 24px;
        margin: 15px 0;
    }
`;

export const JobcerImage = styled.div`
    flex-basis: 45%;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: right;
    @media screen and (max-width: 952px) {
        text-align: center;
    }
    img {
        width: 286px;
        margin: 0 auto;
    }
`;

export const Nulity = styled.div`
display:none;
`

export const JobvacContent = styled.div`
    display: flex;
    width: 100%;
    padding: 5px;
`;

export const Dropbtn = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  padding: 14px 16px;
  border-bottom: 1px solid #D6D6D6;
  text-decoration: none;
  width: 100%;
  align-items:center;
`;

export const TextButton = styled.p`
  width: 100%;
  text-align: left;
  font-weight: ${(props)=>(props.pos ? "500" : "bold")};
  font-size: ${(props)=>(props.pos ? "15px" : "20px")};
  line-height: ${(props)=>(props.pos ? "17px" : "24px")};
  color: #333333;
`;

export const ContentDiv = styled.div`
    flex-basis: 50%;
    justify-content: ${(props)=>(props.job ? "left" : "center")};
`;

export const ArrowDiv = styled.div`
  width: 5%;
  display: flex;
  justify-content: flex-end;
`;

export const DropDownContent = styled.div`
  width: 100%;
  display: none;
  z-index: 1;
  padding: 16px 16px;
  background: #f2f2f2;
`;

export const Linkeda = styled(Link)`
    display: flex;
    text-decoration: none;
    width: 100%;
    border-bottom: 1px solid #D6D6D6;
    transition: 0.3s all linear;
    &:hover{
        transform: scale(1.02);
    }
`;

export const Arrowchild = styled(FaAngleRight)`
    font-size: 26px;
    color: white;
    padding: 3px;
    border-radius: 50%;
    background: #EFB401;
`;
export const ButtonLink = styled.div`
display: flex;
flex-basis: 5%;
flex-direction: row-reverse;
align-self:center;
`;

export const ContentWrited = styled.div`
flex-basis: 95%;
font-size: 16px;
line-height: 24px;
color: #333333;
padding: 7px 0;
`;

export const ArrowDownLang = styled.div`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  position: relative;
  top: -2px;
  transition: all 0.6s;
  align-self: flex-end;
`;

export const ArrowBg = styled.div`
background: #EFB401;
border-radius: 60%;
padding: 8px 10px;
width: fit-content;
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
  & ${ArrowDownLang} {
    transform: rotate(45deg);
  }

  &:focus ${ArrowDownLang}, &:active ${ArrowDownLang} {
    transform: rotate(225deg);
  }

  &:focus ${DropDownContent}, &:active ${DropDownContent} {
    display: block;
    max-width: 100vw;
  }

  &:hover {
    color: #333;
  }
`;
export const EmployContent = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #D6D6D6;
    padding: 30px 0;
`;

export const EmployImage = styled.img`
  width: 183px;
  border-radius: 50%;
`;
export const WritedEmploy = styled.div`
font-size: ${(props)=>(props.name ? "20px" : "15px")};
line-height: ${(props)=>(props.name ? "24px" : "26px")};
font-weight: ${(props)=>(props.name ? "bold" : "400")};
margin: ${(props)=>(props.name ? "10px 0" : "0")};
white-space: pre-line;  
    vertical-align: bottom;
`;

export const InfoRow = styled.div`
  background: "#fff";
  display: grid;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1033px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1' 'col2'`};
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 40px;
  grid-area: col1;
  text-align:center;
  width: fit-content !important;
  @media screen and (max-width: 1033px) {
    padding: 0 20px;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 25px;
  /* padding: 0 15px; */
  grid-area: col2;
  text-align: justify;
  /* background: blue; */
`;

export const Vacancybtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    width: 100%;
    background: #EFB401;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    line-height: 50px;
    color: white;
`;

export const JobLink = styled.a`
    text-decoration: none
`;


