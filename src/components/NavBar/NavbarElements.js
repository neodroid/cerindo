import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import {
  MdKeyboardArrowRight,
  MdArrowForward,
  MdArrowDownward,
  MdKeyboardArrowDown,
} from "react-icons/md";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1 rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: ${({ bottom }) => (bottom ? "#efb401" : "none")};

  &.active {
    border-bottom: 3px solid #efb401;
  }

  &:hover {
    color: #efb401;
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid #efb401;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

////////////////////////////////////////
//DROPDOWN LANGUAGE
export const DropDownContent = styled.div`
  max-width: 100vw;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ArrowDownLang = styled.div`
  border: solid white;

  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  position: relative;
  left: 6px;
  top: -2px;
  transition: all 0.6s;
`;
export const DropDown = styled.div`
  display: inline-block;
  cursor: pointer;
  max-width: 100vw;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  & ${ArrowDownLang} {
    transform: rotate(45deg);
  }

  &:focus ${ArrowDownLang}, &:active ${ArrowDownLang} {
    transform: rotate(225deg);
  }

  &:focus ${DropDownContent}, &:active ${DropDownContent} {
    display: block;
    max-width: 100vw;
  }

  &:hover {
    color: #efb401;
  }
`;
export const Dropbtn = styled.div`
  color: white;
  display: inline-block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  /* border: 1px solid;
	border-radius: 5px; */
`;

export const Item = styled.a`
  max-width: 100vw;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  /* border: 1px solid; */
  max-width: 90vw;
  &:hover {
    background-color: #efb401;
  }
`;

export const Flag = styled.img`
  max-width: 1.4rem;
  max-height: 1rem;
  position: relative;
  top: 2px;
  left: -4px;
`;

export const ArrowForward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;