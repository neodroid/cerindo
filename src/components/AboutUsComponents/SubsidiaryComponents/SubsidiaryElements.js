import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const SubsidiaryContent = styled.div`
    margin: 50px 20px 10px;
    @media screen and (max-width: 820px) {
        margin: 0 auto;
    }
`;
export const Phasexp = styled(LinkR)`
    display: block;
    background: #EFB401;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 236px;
    margin: 15px 0 8px;
    font-weight: bold;
    font-size: 14px;
    line-height: 34px;
    color: #FFFFFF;
    padding: 0 5px;
    text-decoration: none;
`;

export const PhaseWrited = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;
export const PhaseWritedApart = styled.div`
    display: flex;
    flex-basis: ${(props)=>(props.simbol ? "8%" : "90%")};
    flex-direction: ${(props)=>(props.simbol ? "row-reverse" : "row")};
    self-align:center;
`;

export const SubsExpCon = styled.div`
    white-space: pre-line;  
    vertical-align: bottom;
`;
export const SubsidiaryExp = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    margin: 20px 0;
`;

export const Images = styled.img`
    width: 700px;
    @media screen and (max-width: 820px) {
        width: 500px;
    }
    @media screen and (max-width: 820px) {
        width: 330px;
    }
`;