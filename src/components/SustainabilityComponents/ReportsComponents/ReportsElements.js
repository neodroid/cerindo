import styled from "styled-components";

export const ReportsFlex = styled.div`
    display: flex;
    width: 90%;
    margin: 20px auto;
    @media screen and (max-width: 679px) {
        flex-direction: column;
    }
`;

export const ReportsContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    width: 100%;
`;

export const ReportWrited = styled.div`
    font-weight: ${(props)=>(props.title ? "bold" : "normal")};
    font-size: ${(props)=>(props.title ? "26px" : "14px")};
    line-height: 24px;${(props)=>(props.title ? "50px" : "24px")};
    color: #000000;${(props)=>(props.title ? "#333333" : "#000000")};
    padding: 10px;
    white-space: pre-line;  
    vertical-align: bottom;
`;

export const ReportImage = styled.div`
text-align: center;
    img {width: 331px;
    @media screen and (max-width: 818px) {
        width: 280px;
    }
}
`;

export const ImageB = styled.div`
    margin-top: 30px;
    text-align: center;
    width: 100%:
    img {
        width: 709px;
    }
    @media screen and (max-width: 818px) {
        overflow-x:auto;
    }
`;