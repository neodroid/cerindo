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
`;

export const NewsImage = styled.img`
    z-index: 3;
    width: 260px;
    height: 179px;
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