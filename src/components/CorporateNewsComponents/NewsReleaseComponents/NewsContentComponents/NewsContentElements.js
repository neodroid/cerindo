import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const NewsContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 25px;
    padding: 5px;
    width: 900px;
    margin: 50px auto;
    @media screen and (max-width: 930px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        grid-gap: 10px;
        width: 700px;
        margin: 0 auto;
    }
    @media screen and (max-width: 719px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        grid-gap: 10px;
        width: 500px;
        margin: 0 auto;
    }
    @media screen and (max-width: 594px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-gap: 5px;
        width: 100%;
        margin: 0 auto;
    }
`;

export const NewsBox = styled.div`
    width: 290px;
    height: 433px;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    &:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
    };
    @media screen and (max-width: 930px) {
        margin: 10px auto;
        width: 260px;
    }
    @media screen and (max-width: 594px) {
        width: 200px;
    }
    @media screen and (max-width: 403px) {
        width: 150px;
        height: 350px;
        box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
        &:hover {
            transition: 0.2s ease-in-out;
            transform: scale(1.01);
            }
    }
`;

export const BoxWrapper = styled.div`
    display: flex;
    height: 100%;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
`;

export const BoxContainer = styled.p`
    font-weight: ${(props) => (props.titlee ? "bold" : "normal") };
    font-size: ${(props) => (props.titlee ? "14px" : "12px") };
    line-height: ${(props) => (props.titlee ? "28px" : "20px") };
    @media screen and (max-width: 930px) {
        line-height: ${(props) => (props.titlee ? "15px" : "15px") };
    }
`;

export const NewsImage = styled.img`
    z-index: 3;
    width: 260px;
    height: 179px;
    @media screen and (max-width: 930px) {
        width: 230px;
    }
    @media screen and (max-width: 594px) {
        width: 170px;
    }
    @media screen and (max-width: 403px) {
        width: 120px;
        max-height: 120px;
    }
`;

export const NewsContainerPart = styled.div`
    flex-basis: ${(props) => (props.btn ? "12%" : "42%")};
    overflow: ${(props) => (props.wrt ? "auto" : "none")};
    text-align: ${(props) => (props.wrt ? "none" : "center")};
    padding-top: ${(props) => (props.wrt ? "10px" : "0")};
    margin-bottom: ${(props) => (props.wrt ? "8px" : "0")};
`;

export const Newsbtn = styled(LinkR)`
    font-weight: bold;
    font-size: 12px;
    line-height: 30px;
    border-radius: 5px;
    background: #EFB401;
    padding: 8px 75px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 50%;
    }
    @media screen and (max-width: 930px) {
        padding: 8px 60px;
    }
    @media screen and (max-width: 594px) {
        padding: 8px 10px;
    }
    @media screen and (max-width: 403px) {
        padding: 5px;
    }
`;

export const Pagination = styled.div`
    display: flex;
    margin: 30px 0;
    align-self: center;
    justify-content: center;
    a {
        color: black;
        cursor: pointer;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
        border: 1px solid #ddd;

        :hover{
            background-color: #ddd;
        }
    }
`;