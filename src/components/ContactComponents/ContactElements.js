import styled from "styled-components";

export const BannerStyle = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    align-items:center;
    background: #F2F2F2;
    font-size: 30px;
line-height: 60px;
font-weight: bold;
@media screen and (max-width: 626px) {
    text-align: center;
}
`;

export const BannerContent = styled.div`
    width: 65%;
    margin: 0 auto;
    @media screen and (max-width: 626px) {
        width: 85%;
    }
`;

export const ContactContent = styled.div`
    margin: 30px auto;
    width: 65%;
    white-space: pre-line;  
    vertical-align: bottom;
    @media screen and (max-width: 626px) {
        width: 85%;
`;