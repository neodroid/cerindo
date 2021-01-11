import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const NewsMapWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 55px 0px;
    text-align: center;
    flex-direction: column;
    h1 {
        font-weight: bold;
        font-size: 26px;
        line-height: 50px;
        color: #333333;
    }
`;

export const NewsMapsImg = styled.div`flex-direction:row; align-self:center;`

export const NewsMapImg = styled.img`
    flex-basis: 10%;
    padding: 10px;
    align-items: center;
`;

export const NewsMap = styled(LinkR)`
    flex-basis: 10%;
    padding: 5px;
    width: 200px;
    font-weight: ${(props) => (props.page ? "bold" : "normal")};
    border-bottom: ${(props) => (props.page ? "8px solid #EFB401" : "5px solid #C4C4C4")};
    align-items: center;
    text-decoration: none;
    font-size: 12px;
    line-height: 30px;
    color: black;
    transition: border-bottom 2s ease-in-out ;
`;