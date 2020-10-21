import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">LOGO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Mining</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="register">Corporate News</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Career</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLinks to="register">EN</NavLinks>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
