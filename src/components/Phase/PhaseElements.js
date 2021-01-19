import styled from "styled-components";
import { FaFilePdf } from "react-icons/fa";

export const PhaseContent = styled.div`
    margin: 5px;
    h2 {
        font-size: 26px;
        line-height: 50px;
        margin-top: 30px;
    }
`;

export const TextPhase = styled.div`
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    white-space: pre-line;  
    vertical-align: bottom;
`;

export const ImagePart = styled.div`
    overflow-x: scroll
`;
export const Imagess = styled.img`
    width:782px;
    @media screen and (max-width: 940px) {
        width:600px;
    }
    @media screen and (max-width: 940px) {
        width:300px;
    }
`;

export const PdfPart = styled.a`
    display: flex;
    background: #FFFFFF;
    border: 1px solid #787878;
    border-radius: 3px;
    width: fit-content !important;
    align-self: center;
    padding: 30px;
    cursor: pointer;
`;
export const PdfImage = styled(FaFilePdf)`
    color: #5A5A5A;
    font-size: 35px;
`;