import styled from "styled-components";
import Masonry from "react-masonry-component";


export const Bodwrapped = styled.div`
    margin: 50px 5px 10px 10px;
    @media screen and (max-width: 1125px) {
        margin: 50px 5px 10px;
    }
    @media screen and (max-width: 1050px) {
       width: 100%;
       margin: 0 auto;
    }
    @media screen and (max-width: 650px) {
        height: 750px;
        overflow-y: scroll;
    }
`;

export const Bodbox = styled.div`
    width: 400px;
    border: 1px solid #D2D2D2;
    box-sizing: border-box;
    height: fit-content !important;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 10px;
    @media screen and (max-width: 1125px) {
        width: 305px;
    }
    @media screen and (max-width: 1050px) {
        width: 400px;
    }
    @media screen and (max-width: 1010px) {
        width: 350px;
    }
    @media screen and (max-width: 896px) {
        width: 300px;
    }
    @media screen and (max-width: 776px) {
        width: 250px;
    }
    @media screen and (max-width: 650px) {
        margin: 10px 0;
        width: 100%;
    }
`;

export const BodBoxContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BodBoxIntro = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25px 32px;
    height: 130px;
    align-items:center;
`;

export const BodBoxIntroTitle = styled.p`
    margin: 0 10px;
    font-weight: ${(props)=>(props.title ? "bold" : "normal")};
    font-size: ${(props)=>(props.title ? "20px" : "12px")};
    line-height: ${(props)=>(props.title ? "30px" : "20px")};
    color: #111111;
    font-style: ${(props)=>(props.title ? "normal" : "italic")};
`;

export const BodDescriptionContent = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    margin: 0 32px 25px;
`;

export const Masonries = styled(Masonry)`
@media screen and (max-width: 1050px) {
    width: 100% !important;
}
`;