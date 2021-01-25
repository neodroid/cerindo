import styled from "styled-components";

export const AwardsesContent=styled.div`
    margin: 10px 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap-rows: 20px;
    grid-gap-columns: 0px;
    @media screen and (max-width: 740px) {
        grid-template-columns: auto auto;
        margin: 0 auto;
    }
    @media screen and (max-width: 740px) {
        grid-template-columns: auto auto;
        margin: 0 auto;
    }
`;

export const Figured = styled.figure`
    margin: 10px 0;
    img {
        width: 232px;
        border: 1px solid black;
        @media screen and (max-width: 882px) {
            width:185px;
        }
        @media screen and (max-width: 461px) {
            width: 120px;
        }
    }
    figcaption {
        font-weight: bold;
        font-size: 14px;
        line-height: 25px;
        padding: 5px 0;
    }
    @media screen and (max-width: 461px) {
        width: 120px;
    }
`;