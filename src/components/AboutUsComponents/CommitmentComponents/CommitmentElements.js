import styled from "styled-components";

export const CommitmentWrited = styled.div`
    font-weight: ${(props) => (props.title ? "bold" : "normal")};
    font-size: ${(props) => (props.title ? "16px" : "14px")};
    line-height: 25px;
    color: ${(props) => (props.title ? "#333333" : "#111111")};
    white-space: pre-line;  
    vertical-align: bottom;
    text-align: ${(props) => (props.title ? "left" : "justify")};
    margin-top: ${(props) => (props.title ? "25px" : "0")};
`;
export const CommitmentContent = styled.div`
    margin: 35px 20px;
`;