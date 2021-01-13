import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const Businessstyle = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 85%;
`;

export const BusinessSideBar = styled.div`
    flex-basis: 15%; 
    margin-top: 55px;
    justify-content:center;
    text-align:center;
    flex-direction: column;
    h1 {
        font-size: 18px;
        line-height: 30px;
        color: #111111;
        font-weight: bold;
    }
`;

export const BusinessSideBarImage = styled.div`
    margin: 5px 0 20px;
    width: 160px;
    height: 112px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const BusinessSideBarContent = styled(LinkR)`
    display: flex;
    align-self: flex-end;
    flex-direction: column-reverse;
    justify-content:center;
    background: ${(props)=>(props.page ? "linear-gradient(90deg, #EFB401 -5.04%, rgba(239, 180, 1, 0) 69.56%)" : "rgba(33, 33, 33, 0.6);")};
    height: 100%;
    line-height: 25px;
    padding: 5px;
    text-decoration: none;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
`;

export const BusinessMain = styled.div`
    flex-basis: 65%;
    margin: 12px 60px 10px;
`;

export const BusinessWrited = styled.div`
    font-weight: ${(props) => (props.title ? "bold" : "normal")};
    font-size: ${(props) => (props.title ? "30px" : "15px")};
    line-height: ${(props) => (props.title ? "50px" : "24px")};
    color: #111111;
    white-space: pre-line;  
    vertical-align: bottom;
    margin-top:${(props) => (props.title ? "8px" : "30px")};
`;