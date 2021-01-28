import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";

export const HisWrapped = styled.div`
margin: 20px 20px 10px;
@media screen and (max-width: 882px) {
    margin: 5px auto;
}
`;

export const HisContents = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 882px) {
    width: 100%;
}
`;
export const HisContent = styled.div`
    display: flex;
    flex-direction: ${(props)=>(props.wrap ? "column" : "row")};
    width: ${(props)=>(props.wrap ? "90%" : "100%")};
    padding: ${(props)=>(props.wrap ? "0" : "15px 0")};
    @media screen and (max-width: 882px) {
        flex-direction: ${(props)=>(props.wrap ? "column" : "column")};
        width: 100%;
    }
`;

export const HisImageApart = styled.div`
text-align:center;
@media screen and (max-width: 882px) {
    margin: 10px 0;
}
`;
export const HisImage = styled.img`
    width:332px;
    @media screen and (max-width: 882px) {
        width: 250px;
    }
`;

export const HisBoxWrited = styled.div`
    font-weight: ${(props)=>(props.title ? "bold":"normal")};
    font-size: ${(props)=>(props.title ? "26px":"13px")};
    line-height: ${(props)=>(props.title ? "50px":"20px")};
    text-align: ${(props)=>(props.title ? "left":"justify")};
    margin: 0 20px;
    white-space: pre-line;  
    vertical-align: bottom;
`;

export const MilestoneContent = styled.div`
    margin: 10px 20px;
    h2 {
        margin-bottom: 50px;
    }
    @media screen and (max-width: 579px) {
        h2 {
            margin-bottom: 100px;
        }
    }
`;

export const MilesBoxContent = styled.div`
    display: flex;
    self-align:center;
    align-items:center;
    align-self:center;
    height: 300px;
    @media screen and (max-width: 579px) {
        margin: 0 auto;
        height: 160px;
    }
`;

export const MilesBoxApart = styled.div`
    flex-basis: ${(props)=>(props.year ? "15%" : "45%")};
    @media screen and (max-width: 579px) {
        flex-basis: ${(props)=>(props.year ? "12%" : "35%")};
    }
`;

export const MilesYearContent = styled.div`
    padding: 150px 5px;
    border-right: 3px solid #E0E0E0;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #111111;
    box-sizing:border-box;
    @media screen and (max-width: 579px) {
        padding: 80px 5px;
    }
`;

export const Birght = styled(BsCircleFill)`
    color: #EFB401;
    margin-left:-12px;
    z-index:3;
    font-weight: bold;
    font-size: 20px;
    @media screen and (max-width: 579px) {
        font-size: 12px;
        margin-left: -8px;
    }
`;

export const MilesImage = styled.div`
    margin-left: 20px;
    border-left: 5px solid #EFB401;
    width: 367px;
    height: 180px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 0.5s all ease;
    &:hover {
        transform: scale(1.03);
    }
    @media screen and (max-width: 579px) {
        width: 180px;
        height: 120px;
    }
`;

export const MilesImageDesc = styled.div`
    display: flex;
    align-self: flex-end;
    flex-direction: column-reverse;
    height: 100%;
    background: linear-gradient(357.39deg, #000000 2.63%, rgba(0, 0, 0, 0.9) 23%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 90.58%);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    bottom:0;
    flex-basis: 50%;
    padding: 27px;
`;

export const Opac = styled.div`
    display:flex;
    flex-basis:50%;
`;

export const Images = styled.img`
    width: 758px;
`;
export const ImagWrited = styled.div`
font-weight: bold;
font-size: 26px;
line-height: 50px;
margin-top: 15px;
`;
export const ImagePart = styled.div`
    margin-bottom: 50px;
    width: 758px;
    @media screen and (max-width: 900px) {
        overflow-x: auto;
        width: 100%;
    }
`;