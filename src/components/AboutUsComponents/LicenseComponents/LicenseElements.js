import styled from "styled-components";

export const LicWrapped = styled.div`
margin: 20px 10px 10px;
@media screen and (max-width: 882px) {
    margin: 10px auto;
}`;
export const LicContent = styled.div`
    display: flex;
    flex-direction: ${(props)=>(props.wrap ? "column" : "row")};
    width: ${(props)=>(props.wrap ? "90%" : "100%")};
    padding: ${(props)=>(props.wrap ? "0" : "15px 0")};
    @media screen and (max-width: 882px) {
        flex-direction: ${(props)=>(props.wrap ? "column" : "column")};
        width: 100%;
    }
`;
export const LicImage = styled.img`
    width:332px;
    @media screen and (max-width: 882px) {
        width: 250px;
    }
`;
export const LicContents = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 882px) {
    width: 100%;
}
`;
export const LicImageApart = styled.div`
text-align:center;
@media screen and (max-width: 882px) {
    margin: 10px 0;
}
`;

export const LicBoxWrited = styled.div`
    font-weight: ${(props)=>(props.title ? "bold":"normal")};
    font-size: ${(props)=>(props.title ? "26px":"14px")};
    line-height: ${(props)=>(props.title ? "30px":"24px")};
    margin: 10px 20px;
    white-space: pre-line;  
    vertical-align: bottom;
    text-align: ${(props)=>(props.title ? "left":"justify")};
`;

export const AwardContent=styled.div`
    margin: 10px 20px;
    h2{
        font-weight: bold;
        font-size: 26px;
        line-height: 50px;
        color: #111111;
    }
`;

export const ImageCentered = styled.img`
    width: 800px;
    @media screen and (max-width: 874px) {
        width: 100%;
        overflow-x:scroll;
    }
`;

export const ConcessionExp = styled.div`
    display: flex;
    margin: 30px auto;
    @media screen and (max-width: 797px) {
        flex-direction: column;
    }
`;

export const ConcessionContent = styled.div`
    display: flex;
    flex-basis: 50%;
    padding: 10px;
`;

export const ConcessionWrited = styled.div`
    font-size: 14px;
    line-height: 24px;
    white-space: pre-line;  
    vertical-align: bottom;
    text-align: justify;
`;

export const ConcessionImage = styled.img`
    width: 355px;
    @media screen and (max-width: 882px) {
        width: 300px;
    }
    @media screen and (max-width: 500px) {
        width: 240px;
    }
`;