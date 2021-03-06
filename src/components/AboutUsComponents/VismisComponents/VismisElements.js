import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const VismisContent = styled.div`
    display: flex;
    margin: 1px 20px;
    @media screen and (max-width: 820px) {
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const VismisApart = styled.div`
    flex-basis: 50%;
    margin: 20px;
    align-self: center;
`;

export const VismisWrited = styled.div`
    font-weight: ${(props) => (props.title ? "bold" : "normal")};
    font-size: ${(props) => (props.title ? "26px" : "14px")};
    line-height: ${(props) => (props.title ? "50px" : "24px")};
    color: ${(props) => (props.title ? "#333333" : "#111111")};
    margin-bottom: ${(props) => (props.title ? "13px" : "0")};
    margin-top: ${(props) => (props.misi ? "40px" : "0")};
`;

export const VismisImagePart = styled.div`
    flex-direction: row-reverse;
    margin: ${(props) => (props.misi ? "20px 10px 0" : "20px 10px")};
`;
export const ValueContent = styled.div`
    margin: 0 40px 15px;
    h1 {
        font-weight: bold;
        font-size: 26px;
        line-height: 50px;
        color: #333333;
        font-family: 'Montserrat',sans-serif;
    }
    @media screen and (max-width: 820px) {
        margin: 15px 20px;
    }
`;

export const ValueWrite = styled.div`
    font-weight: 900;
    font-size: 50px;
    line-height: 40px;
    margin-bottom: 30px;
    letter-spacing: 0.1em;
    text-align: center;
    color: ${(props) => (props.choose ? "#EFB401" : "#e0e0e0")};
    margin: 30px 0;
    font-family: 'Montserrat',sans-serif;
    @media screen and (max-width: 820px) {
        font-size: 30px;
    }
`; 
export const ValuePartexp = styled.div`margin-bottom: 25px;`;

export const ValuesWritedTitle = styled.div`
    display: inline-block;
    font-weight: bold;
    font-size: 20px;
    line-height: 36px;
    color: ${(props) => (props.choosen ? "#EFB401" : "#111111")};
    margin-bottom: 5px;
    @media screen and (max-width: 820px) {
        font-size: 18px;
    }
`;

export const ValuesWrited = styled.div`
    font-weight: ${(props) => (props.title ? "bold" : "normal")};
    font-size: ${(props) => (props.title ? "20px" : "14px")};
    line-height: ${(props) => (props.title ? "36px" : "24px")};
    color: ${(props) => (props.choosen ? "#EFB401" : "#111111")};
    margin-bottom: ${(props) => (props.title ? "5px" : "0")};
    @media screen and (max-width: 820px) {
        font-size: ${(props) => (props.title ? "18px" : "14px")};
    }
`;
export const Valuexp = styled.div`
    background: #F2F2F2;
    border-radius: 100px;
    text-align: center;
    padding: 10px 100px !important;
    width: 100% !important;
    @media screen and (max-width: 820px) {
        padding: 20px 5px !important;
        border-radius: 25px;
    }
`;

export const Valuexpwrited = styled.div`
    font-weight: ${(props) => (props.title ? "900" : "500")};
    font-size: ${(props) => (props.title ? "20px" : "12px")};
    line-height: ${(props) => (props.title ? "30px" : "20px")};
    letter-spacing: ${(props) => (props.title ? "0.1em" : "none")};
    color: ${(props) => (props.title ? "#333333" : "#111111")};
    @media screen and (max-width: 820px) {
        font-size: ${(props) => (props.title ? "16px" : "10px")};
    }
`;

export const Image = styled.img`
    max-width: 50px;
    margin-right: 8px;
`;

export const FlexValue = styled.div`
    display: flex;
    margin: 0 auto;
`;
export const ValueApart = styled.div`
    flex-basis: ${(props)=>(props.image ? "10%" : "90%")};
    align-self: center;
`;

export const Angle = styled(Carousel)`
    margin: 0 auto;
    width: 90%;
    box-sizing: content-box !important;
    .rec-carousel-item-visible {
        width: 100% !important;
    }
    .rec-slider {
        transition: none !important;
    }
    button.rec-arrow{
        position: relative;
        font-weight:bold;
        background-color: white;
        color : #EFB401;
        font-size:20px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        min-width: 0;
        width:50px;
        height: 40px;
        margin-top: 100px;
        line-height: 10px;
        :hover,&:focus{
            background-color: #EFB401;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        };
    };
    button.rec-dot{
        display:none;
    };
`;