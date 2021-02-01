import styled from "styled-components";

export const ReportsFlex = styled.div`
    display: flex;
    width: 100%;
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

export const TabelDownload = styled.div`
    width: 90%;
    margin: 20px 0;
    div {
        display: flex;
        transition: 0.4s all linear;
        &:hover{
            transform:scale(1.02)
        }
    }
`;

export const ApartContentTable = styled.div`
      flex-basis: ${(props)=>(props.content ? "80%" : "20%")}
      padding: 20px;
      width:100%;
      flex-direction: ${(props)=>(props.content ? "row" : "row-reverse")}
`;

export const ContentTable = styled.p`
    font-size: 14px;
    line-height: 24px;
    padding: 20px;
`;

export const ButtonTable = styled.a`
display:flex;
align-self:center;
font-size: 10px;
line-height: 24px;
border: 1px solid #000000;
box-sizing: border-box;
background: #FFFFFF;
padding: 0 8px;
margin: 20px;
color: black;
`;