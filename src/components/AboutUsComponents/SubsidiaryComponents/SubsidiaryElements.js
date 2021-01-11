import styled from "styled-components";

export const SubsidiaryContent = styled.div`
    margin: 50px 20px 10px;
`;

export const BaganContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items:center;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 52% 32%;
    background-size: 620px auto;
`;

export const BaganApart = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
`;

export const BaganBox = styled.div`
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: ${(props) => props.bgcolor};
    font-weight: bold;
    font-size: ${(props) => props.phase ? "12px" : "14px"};
    line-height: 20px;
    padding: 15px 25px;
    width: 155px;
    height: ${(props) => props.height}px;
    color: ${(props) => props.color};
    margin: 0 8px 55px 0;
    alin-self: center;
`;