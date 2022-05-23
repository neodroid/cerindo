import styled from "styled-components";
import {Link} from "react-router-dom";

export const ActivityTitle = styled.div`
    font-weight: bold;
    font-size: 26px;
    line-height: 36px;
    color: #333333;
    margin: 20px 0;
`;
export const ActivityBox = styled.div`
    width: 250px;
    height: 464px;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
        z-index:10;
        }
    @media screen and (max-width: 1015px) {
        margin: 0 auto;
    }
    @media screen and (max-width: 610px) {
        width: 150px;
        height: 350px;
        box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
        &:hover {
            transition: 0.2s ease-in-out;
            transform: scale(1.01);
            }
    }
`;

export const ActivityContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 40px;
    padding: 10px;
    margin-left: 10px;
    align-items:center;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
      }
    @media screen and (max-width: 610px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        padding: 0;
        grid-gap: 10px;
        margin-left:0;
    }
`;

export const BoxWrapper = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    height: 100%;
    margin: 15px
`;

export const BoxContainer = styled.p`
    font-weight: ${(props) => (props.titlee ? "bold" : "normal") };
    font-size: ${(props) => (props.titlee ? "14px" : "12px") };
    line-height: 20px;
    margin-top: ${(props) => (props.titlee ? "0" : "10px") };
    @media screen and (max-width: 610px) {
        line-height: 15px;
        font-size: ${(props) => (props.titlee ? "12px" : "11px") };
    }
`;

export const ActivityImage = styled.div`
    z-index: 3;
    width: 216px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 216px;
    @media screen and (max-width: 610px) {
        width: 120px;
        max-height: 120px;
    }
`;

export const ActivityContainerPart = styled.div`
    flex-basis: ${(props) => (props.btn ? "5%" : "38%")};
    overflow: ${(props) => (props.wrt ? "auto" : "none")};
    text-align: ${(props) => (props.wrt ? "none" : "center")};
    padding-top: ${(props) => (props.wrt ? "10px" : "0")};
    margin-bottom: ${(props) => (props.wrt ? "8px" : "0")};
    @media screen and (max-width: 610px) {
        margin-top: ${(props) => (props.wrt ? "0" : "6px")};
    }
`;

export const Activitybtn = styled(Link)`
    margin: 10px 0;
    border-radius: 5px;
    background: #EFB401;
    padding: 8px 32px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 50%;
    }
    @media screen and (max-width: 610px) {
        font-size: 12px;
        margin: 30px 0;
        padding: 5px;
    }
`;