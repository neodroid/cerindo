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
  NavDropLinks,
  DropDiv,
  NavText,
  NavbarDropdownContent,
} from "./NavbarElements";
import getFlagUrl from "./getFlagURL";
// import { ArrowDown } from "../HeroSection/HeroElements";

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
  const [scrollNav, setScrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const [val1, setValue1] = useState("en");

  return (
    <>
      <Nav scrollNav={scrollNav}>
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
              <NavLinks>
                About Us
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/">
                      Mission, Vision and Value
                    </NavDropLinks>
                    <NavDropLinks to="/">Company Subsidiary</NavDropLinks>
                    <NavDropLinks to="/">Board of Director</NavDropLinks>
                    <NavDropLinks to="/">Organization Structure</NavDropLinks>
                  </DropDiv>
                  <DropDiv>
                    <NavDropLinks to="/">History and Milestone</NavDropLinks>
                    <NavDropLinks to="/">Concession Area</NavDropLinks>
                    <NavDropLinks to="/">Legal and Awards</NavDropLinks>
                    <NavDropLinks to="/">
                      Sustainability Commitment
                    </NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">
                Investor Relation
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/">Reports</NavDropLinks>
                    <NavDropLinks to="/">Stock Information</NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">
                QHSE-CSR
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavText>QHSE</NavText>
                    <NavDropLinks to="/">Quality</NavDropLinks>
                    <NavDropLinks to="/">
                      Health, Safety, Environtment
                    </NavDropLinks>
                  </DropDiv>
                  <DropDiv>
                    <NavText>CSR</NavText>
                    <NavDropLinks to="/">CSR Activities</NavDropLinks>
                    <NavDropLinks to="/">Economic Responsibility</NavDropLinks>
                    <NavDropLinks to="/">
                      Environmental Responsibility
                    </NavDropLinks>
                    <NavDropLinks to="/">Social Responsibility</NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">
                Business
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavText>Mining</NavText>
                    <NavDropLinks to="/">Nickle Ore Mining</NavDropLinks>
                    <NavDropLinks to="/">Nickle - Cobalt HPAL</NavDropLinks>
                    <NavDropLinks to="/">Ferronickle Smelting</NavDropLinks>
                    <NavDropLinks to="/">Resource and Reserve</NavDropLinks>
                  </DropDiv>
                  <DropDiv>
                    <NavText>Logistic</NavText>
                    <NavDropLinks to="/">Jetty Terminal</NavDropLinks>
                    <NavText>Energy</NavText>
                    <NavDropLinks to="/">Power Plant</NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="register">
                Corporate News
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavText>Press</NavText>
                    <NavDropLinks to="/">News Release</NavDropLinks>
                    <NavDropLinks to="/">Internal News</NavDropLinks>
                    <NavDropLinks to="/">Ceria in Media</NavDropLinks>

                    <NavText>Gallery</NavText>
                    <NavDropLinks to="/">Photos</NavDropLinks>
                    <NavDropLinks to="/">Videos</NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
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
