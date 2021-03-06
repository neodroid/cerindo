import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import { AiFillWarning} from "react-icons/ai";
import {FaSearch} from "react-icons/fa";

export const NewsContent = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto auto;
grid-gap: 20px;
padding: 10px;
margin-left: 10px;
align-items: center;
@media screen and (max-width: 1015px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
@media screen and (max-width: 610px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    padding: 0;
    grid-gap: 30px;
    margin-left: -15px;
}
`;

export const NewsBox = styled.div`
width: 100%;
text-overflow: ellipsis;
overflow: hidden;
margin: 20px 0;
border-bottom: 0.5px solid #B2B2B2;
box-sizing: border-box;
transition: 0.5s ease-in-out;
&:hover {
    transform: scale(1.03);
    }
@media screen and (max-width: 610px) {
    transition: 0.5s ease-in-out;
    &:hover {
        transform: scale(1.01);
        }
}
`;

export const BoxWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
`;

export const BoxContainer = styled.div`
    font-weight: ${(props) => (props.titlee ? "bold" : "normal") };
    font-size: ${(props) => (props.titlee ? "24px" : "16px") };
    line-height: ${(props) => (props.titlee ? "25px" : "24px") };
    padding: 2px 0;
    text-overflow: ellipsis;
    display: inline-block;
    text-align: ${(props) => (props.titlee ? "left" : "justify") };
    width: 100%;
    &:hover{
        text-decoration: ${(props) => (props.titlee ? "underline" : "none") };
    }
`;

export const NewsImage = styled.img`
z-index: 3;
width: 216px;
height: 216px;
@media screen and (max-width: 610px) {
    width: 120px;
    max-height: 130px;
}
`;

export const NewsContainerPart = styled.div`
    flex-basis: ${(props) => (props.btn ? "12%" : "42%")};
    overflow: ${(props) => (props.wrt ? "auto" : "none")};
    text-align: ${(props) => (props.wrt ? "none" : "center")};
    padding-top: ${(props) => (props.wrt ? "10px" : "0")};
    margin-bottom: ${(props) => (props.wrt ? "8px" : "0")};
`;

export const Newsbtn = styled(LinkR)`
margin: 10px 0;
border-radius: 5px;
background: #EFB401;
padding: 8px 32px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: all 0.5s ease-in-out;
&:hover {
    opacity: 50%;
}
@media screen and (max-width: 610px) {
    font-size: 12px;
    margin: 30px 0;
    padding: 5px;
}
`;

export const Pagination = styled.div`
    display: flex;
    margin: 30px 0;
    align-self: center;
    justify-content: center;
    a {
        color: black;
        cursor: pointer;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
        border: 1px solid #ddd;

        :hover{
            background-color: #ddd;
        }
    }
`;

export const NewsWrapped = styled.div`
margin: 20px;
h2{
    font-size: 26px;
    line-height: 50px;
    color: #333333;
    margin-bottom: 10px;
}
`;

export const AnnounWrapped = styled.div`
width: 100%;
background: #FFFFFF;
border: 1px solid #E1E1E1;
box-sizing: border-box;
border: 0.5px solid #B2B2B2;
box-sizing: border-box;
border-radius: 10px;
margin-bottom: 15px;
transition: 0.6s ease-in;
&:hover{
    transform: scale(1.03);
};
`;

export const AnnounContent = styled.div`
    display: flex;
    padding: 15px;
`;

export const AnnounApart = styled.div`
    flex-basis: ${(props) => (props.warned ? "10%" : "90%")};
    align-self: center;
    text-align: ${(props) => (props.warned ? "right" : "left")};
`;
export const AnnounWrited = styled.div`
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: #111111;
`;
export const Warned = styled(AiFillWarning)`
    color: #EFB401;
    font-size: 30px;
`;

export const Nulity = styled.div`display: none`;

export const ChoisenNews = styled.div`
    display: flex;
    margin: 30px auto;
    justify-content: center;
    align-items:center;
    text-align:center;
`;

export const ChoisenDesc = styled.div`
    color: ${(props)=>(props.choose ? "#EFB401" : "#C4C4C4")};
    border-bottom: ${(props)=>(props.choose ? "10px solid #EFB401" : "10px solid #C4C4C4")};
    font-weight: bold;
    font-size: 26px;
    line-height: 50px;
    width: 300px;
    cursor: pointer;
    @media screen and (max-width: 480px) {
        font-size: 14px;
        border-bottom: ${(props)=>(props.choose ? "8px solid #EFB401" : "8px solid #C4C4C4")};
    }
`;

export const SearchBar = styled.div`
    width: 100%;
    background: #E0E0E0;
    border-radius: 2px;
    margin: 30px auto;
    padding: 15px;
`;
export const ContentSearch = styled.div`
    display: flex;
    width: 100%;
    align-items:center;
    justify-content: center;
    margin: 0 auto;
    @media screen and (max-width: 568px) {
        flex-direction: column;
    }
`;

export const FlexContent = styled.div`
    flex-basis: ${(props)=>(props.search ? "6%" : "70%")};
    margin: 0 5px;
    @media screen and (max-width: 568px) {
        width: 100%;
        margin: 5px;
    }
`;

export const FlexDate = styled.div`
    flex-basis: 40%;
    margin: 0 5px;
    @media screen and (max-width: 568px) {
        width: 100%;
        margin: 5px;
    }
`;

export const InputNews = styled.input`
border: 0.5px solid #E0E0E0;
box-sizing: border-box;
border-radius: 5px;
padding: ${(props) => (props.date ? "14px" : "17px")};
outline: none;
width: 100%;
`;

export const SearchImage = styled(FaSearch)`
  font-size: 50px;
  color: white;
  cursor: pointer;
  padding: 8px;
  background: #EFB401;
    border-radius: 2px;
    @media screen and (max-width: 568px) {
        width: 100%;
    }
`;