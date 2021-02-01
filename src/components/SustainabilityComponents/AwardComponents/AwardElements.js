import styled from "styled-components";

export const AwardsesContent=styled.div`
    margin: 20px 0;
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

export const ContentAward = styled.div`
border-bottom: 1px solid #E0E0E0;
margin: 20px 0;
padding: 20px 0;
height: 400px;
overflow: hidden;
@media screen and (max-width: 550px) {
    height: 450px;
}
`;

export const ImageAward = styled.img`
    height: 200px;
    margin: 13px 0;
`;

export const Linked = styled.a`
    color:black;
`;