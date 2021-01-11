import styled from "styled-components";

export const LicWrapped = styled.div`margin: 50px 20px 10px;`;
export const LicContent = styled.div`
    display: flex;
    flex-direction: ${(props)=>(props.wrap ? "column" : "row")};
    border-bottom: ${(props)=>(props.wrap ? "none" : "2px solid #E0E0E0")};
    width: ${(props)=>(props.wrap ? "90%" : "100%")};
    padding: ${(props)=>(props.wrap ? "0" : "15px 0")};
`;

export const LicBoxContent = styled.div`flex-basis: 50%;`;

export const LicBoxWrited = styled.div`
    font-weight: ${(props)=>(props.title ? "bold":"normal")};
    font-size: ${(props)=>(props.title ? "26px":"13px")};
    line-height: ${(props)=>(props.title ? "50px":"20px")};
    margin: 0 20px;
`;

export const AwardContent=styled.div`
    margin: 10px 20px;
`;

export const Figured = styled.figure`
    margin: 15px 10px 10px;
    img {
        width: 356px;
    }
    figcaption {
        font-weight: bold;
        font-size: 14px;
        line-height: 25px;
        padding: 5px 0;
    }
`;