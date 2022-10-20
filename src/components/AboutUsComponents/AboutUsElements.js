import styled from "styled-components";
import { Link as LinkR } from "react-router-dom"

export const Aboutstyle = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    width: 85%;
    @media screen and (max-width: 1050px) {
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const AboutSideBar = styled.div`
    flex-basis: 20%; 
    margin-top: 55px;
    @media screen and (max-width: 810px) {
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        margin-top: 30px;
    }
`;

export const AboutSideBarContent = styled(LinkR)`
    background-color: ${(props) => (props.page ? "#FBFF47" : "white")};
    border-left: ${(props) => (props.page ? "2px solid #EFB401" : "none")};
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 14px;
    font-weight: 600;
    padding: 2px;
    display:block;
    color: black;
    text-decoration: none;
    &:hover {
      background-color: ${(props) => (props.page ? "#FBFF47" : "#dedede")};
  }
`;

export const AboutMain = styled.div`
    flex-basis: 75%;
    margin: 12px 20px 10px;
    @media screen and (max-width: 1050px) {
        margin: 10px 0;
    }
`;

export const ArrowDiv = styled.div`
display: none;
@media screen and (max-width: 1050px) {
  width: 35%;
  display: flex;
  justify-content: flex-end;
  align-self: center;
}
`;

export const ArrowDownLang = styled.div`
display: none;
@media screen and (max-width: 1050px) {
  border: solid white;
  /* color: #333; */
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  position: relative;
  margin-bottom: 4px;
  /* right: 100px; */
  /* top: 20px; */
  /* margin-right: 10px;
   
  /* right: 0px;
  left: 6px; */
  top: -2px;
  transition: all 0.6s;
  align-self: flex-end;
}
`;

export const TextButton = styled.p`
display: none;
@media screen and (max-width: 1050px) {
    display: ${(props) => (props.page ? "block" : "hidden")};
  width: 90%;
  text-align: left;
}
`;
export const DropDown = styled.div`
display: block;
outline: none;
@media screen and (max-width: 1050px) {
  margin-bottom: 32px;
  background-color: #EFB401;
  display: inline-block;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    /* background-color: rgba(0, 0, 0, 0.1); */
    border: none;
    outline: none;
  }
  & ${ArrowDownLang} {
    transform: rotate(45deg);
  }

  &:focus ${AboutSideBar}, &:active ${AboutSideBar} {
    display: block;
    max-width: 100vw;
    height: 100%;
    transition: height .2s;
    transform: scaleY(1);
  }

  &:hover {
    color: #333;
  }
}
`;
export const Dropbtn = styled.div`
display: none;
@media screen and (max-width: 1050px) {
  color: #fff;
  display: flex;
  text-align: center;
  flex-direction: row;
  padding: 14px 16px;
  text-decoration: none;
  border: none;
  /* border: 1px solid;
    border-radius: 5px; */
}
`;

export const Contentt = styled.div`
background: #FFFFFF;
box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.15);
border-radius: 10px;
padding: 15px;
margin-bottom: 20px;
@media screen and (max-width: 1050px) {
    background-color: #f5f5f5;
    border-radius: 0 0 10px 10px;
    padding:10px;
    margin-bottom:0px;
    box-shadow: none;
  }
`;
export const Changed = styled.div`
@media screen and (max-width: 1050px) {
    display: none;
  }
`

export const UnderCons = styled.div`
  display:flex;
  justify-content:start;
  align-items: start;
  width: 100%;
  height: 50vh;

`