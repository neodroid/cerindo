import styled from "styled-components";


export const FlexContainer = styled.div`
  display: flex;
  max-width: 1440px;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`

export const FlexWrap = styled.div`
  z-index: 3;
  overflow: hidden;
  padding: 3rem 6rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1280px){
    padding: 3rem 5rem;
  }
  @media screen and (max-width: 1065px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1.5rem;
    align-items: center;
  }
`;

export const HomeFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 4rem;

    @media screen and (max-width: 1280px){
        flex-direction: column;
    }
`

export const HomeFlexElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    @media screen and (max-width: 1033px){
        
    }
    
`

export const HomeH1 = styled.h1`
    color: ${props => props.white ? "white" : "black"};
    text-align: ${props => props.right ? "right" : "left"};
    font-weight: 400;
    font-size: 3rem;
    margin-bottom: 2rem;
`

export const HomeP = styled.p`
    color: ${props => props.white ? "white" : "black"};
    text-align: ${props => props.right ? "right" : "left"};
    font-size: 1rem;
    line-height: 2rem;
`

export const HomeTextWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomeH2 = styled.h2`
    font-weight: 400;
    font-size:2rem;
    @media screen and (max-width: 720px){
      font-size:1.75rem;
    }
`

export const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:2rem;
  align-items: center;

`

export const ActivityBtn = styled.a`
  cursor: pointer;
  height:100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;
  color:#000000;
  text-align: right;
  white-space: nowrap;

  span{
    &:after{
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #EFB401;
    transition: width .3s;
  }
  &:hover{

  &:after{
    width: 100%;
    color: #EFB401;
  }
}
  }
`
