import styled from "styled-components";
import {Link as LinkR} from "react-router-dom"

export const Aboutstyle = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 85%;
`;

export const AboutSideBar = styled.div`
    flex-basis: 15%; 
    flex-direction: row-reverse;
    margin-top: 55px;
`;

export const AboutSideBarContent = styled(LinkR)`
    background-color: ${(props)=>(props.page ? "#FBFF47" : "white")};
    border-left: ${(props)=>(props.page ? "2px solid #EFB401" : "none")};
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 14px;
    padding: 2px;
    display:block;
    color: black;
    text-decoration: none;
`;

export const AboutMain = styled.div`
    flex-basis: 75%;
    margin: 12px 20px 10px;
`;