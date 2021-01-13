import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";

export const HisWrapped = styled.div`margin: 50px 20px 10px;`;
export const HisContent = styled.div`
    display: flex;
    flex-direction: ${(props)=>(props.wrap ? "column" : "row")};
    width: ${(props)=>(props.wrap ? "90%" : "100%")};
    padding: ${(props)=>(props.wrap ? "0" : "15px 0")};
    border-bottom: ${(props)=>(props.wrap ? "none" : "2px solid #E0E0E0")};
`;

export const HisBoxContent = styled.div`flex-basis: 50%;`;

export const HisBoxWrited = styled.div`
    font-weight: ${(props)=>(props.title ? "bold":"normal")};
    font-size: ${(props)=>(props.title ? "26px":"13px")};
    line-height: ${(props)=>(props.title ? "50px":"20px")};
    margin: 0 20px;
`;

export const MilestoneContent = styled.div`
    margin: 10px 20px;
    h2 {
        margin-bottom: 50px;
    }
`;

export const MilesBoxContent = styled.div`
    display: flex;
    self-align:center;
    align-items:center;
    align-self:center;
    height: 300px;

`;

export const MilesBoxApart = styled.div`
    flex-basis: ${(props)=>(props.year ? "15%" : "45%")};
`;

export const MilesYearContent = styled.div`
    padding: 150px 5px;
    border-right: 3px solid #E0E0E0;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #111111;
    box-sizing:border-box;
`;

export const Birght = styled(BsCircleFill)`
    color: #EFB401;
    margin-left:-12px;
    z-index:3;
    font-weight: bold;
    font-size: 20px;
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