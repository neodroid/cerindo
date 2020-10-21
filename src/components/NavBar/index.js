import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import image from "../../images/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  DropDownContent,
  ArrowDownLang,
  DropDown,
  Dropbtn,
  Item,
  Flag,
  Logo,
} from "./NavbarElements";
import getFlagUrl from "./getFlagURL";
import { ArrowDown } from "../HeroSection/HeroElements";

function Menu({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        {showFlag ? value ? <Flag src={getFlagUrl(value)} /> : null : null}
        {value || placeholder || ""}
        <ArrowDownLang />
      </Dropbtn>

      <DropDownContent>
        {items.map((row, idx) => (
          <Item
            role="button"
            tabIndex={idx + 1}
            onClick={() => setSelected(row)}
          >
            {showFlag && <Flag src={getFlagUrl(row)} />}
            {row}
          </Item>
        ))}
      </DropDownContent>
    </DropDown>
  );
}

const Navbar = ({ toggle }) => {
  const [val1, setValue1] = useState("en");

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Logo src={image} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" bottom="true">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">
                About
                <ArrowDown />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">
                Mining <ArrowDown />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="register">
                Corporate News
                <ArrowDown />
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Career</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Menu
              value={val1}
              onChange={setValue1}
              showFlag
              placeholder="select language"
              items={["en", "cn", "id"]}
            />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
