import React, { useState } from "react";
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
  DropDownContent,
  ArrowDown,
  DropDown,
  Dropbtn,
  Item,
  Flag,
} from "./NavbarElements";
import getFlagUrl from "./getFlagURL";

function getFlagCode(language) {
  switch (language) {
    case "en":
      return "us";
    case "ar":
      return "eg";
    default:
      return language;
  }
}

function Menu({ items, value, onChange, placeholder, showFlag }) {
  // so we can allow menu to work controlled or non-controlled.
  const [selected, setSelected] = React.useState(value || null);

  React.useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        {showFlag ? value ? <Flag src={getFlagUrl(value)} /> : null : null}
        {value || placeholder || ""}
        <ArrowDown />
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
          <NavLogo to="/">cerindo</NavLogo>
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
