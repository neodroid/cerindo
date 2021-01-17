import styled from "styled-components";

export const Bodwrapped = styled.div`
    margin: 50px 5px 10px 10px;
`;

export const Bodbox = styled.div`
    width: 400px !important;
    border: 1px solid #D2D2D2;
    box-sizing: border-box;
    height: fit-content !important;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 10px;
    @media screen and (max-width: 1125px) {
        width: 250px !important;
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