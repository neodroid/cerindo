import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import image from "../../images/logo.png";
import { newsService } from "../../service/News";
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
  SearchImage,
  SearchField,
  SearchInput,
  SearchButton,
  Nulity,
  SearchTermed,
} from "./NavbarElements";

import getFlagUrl from "./getFlagURL";
import { langContext } from "../../langContext";
import { Link } from "react-router-dom";
export let lang;

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
  const [newsList, setNewsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollNav, setScrollnav] = useState(false);
  const [searchbuttons, setSearchbuttons] = useState(true);

  const SearchedButton = () => {
    setSearchbuttons(!searchbuttons);
  };

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  const fetchData = async () => {
    const response = await newsService.getListNews();
    const data = response.data;
    setNewsList(data);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    SearchedButton();
    fetchData();
  }, []);

  const [val1, setValue1] = useState("en");
  const { language, setLanguage } = useContext(langContext);
  setLanguage(val1);
  if (newsList.length === 0) return null;
  console.log(newsList);

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
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                Business
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavText>Mining</NavText>
                    <NavDropLinks to="/Nickle-Ore-Mining">
                      Nickle Ore Mining
                    </NavDropLinks>
                    <NavDropLinks to="/Nickle-Cobalt-HPAL">
                      Nickle - Cobalt HPAL
                    </NavDropLinks>
                    <NavDropLinks to="/Ferronickle-Smelting">
                      Ferronickle Smelting
                    </NavDropLinks>
                    <NavDropLinks to="/Resource-Reserve">
                      Resource and Reserve
                    </NavDropLinks>
                  </DropDiv>
                  <DropDiv>
                    <NavText>Logistic</NavText>
                    <NavDropLinks to="/Jetty-Terminal">
                      Jetty Terminal
                    </NavDropLinks>
                    <NavText>Energy</NavText>
                    <NavDropLinks to="/Power-Plant">Power Plant</NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                Global Sustainability
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/QHSE">QHSE</NavDropLinks>
                    <NavDropLinks to="/Community-Activity">
                      Community Activity
                    </NavDropLinks>
                    <NavDropLinks to="/Report">Report</NavDropLinks>
                    <NavDropLinks to="/Award">Award</NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                About Us
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/Mission-Vision">
                      Mission, Vision and Value
                    </NavDropLinks>
                    <NavDropLinks to="/Subsidiary">
                      Company Subsidiary
                    </NavDropLinks>
                    <NavDropLinks to="/Board-of-Director">
                      Board of Director
                    </NavDropLinks>
                    <NavDropLinks to="/Organization-Structure">
                      Organization Structure
                    </NavDropLinks>
                  </DropDiv>
                  <DropDiv>
                    <NavDropLinks to="/History-Milestone">
                      History and Milestone
                    </NavDropLinks>
                    <NavDropLinks to="/Concession-Area">
                      Concession Area
                    </NavDropLinks>
                    <NavDropLinks to="/License-And-Award">
                      License and Award
                    </NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Career">Career</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <SearchImage onClick={SearchedButton} />
            {searchbuttons ? (
              <SearchField>
                <SearchInput
                  type="search"
                  placeholder="Type Anything Here....."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <SearchButton type="button" onClick={SearchedButton}>
                  Search
                </SearchButton>
              </SearchField>
            ) : (
              <Nulity></Nulity>
            )}
            {searchTerm ? (
              <SearchTermed>
                {newsList
                  .filter((val) => {
                    if (
                      val.title_en
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <Link to={"/News/" + val._id}>
                        <p>{val.title_en}</p>
                      </Link>
                    );
                  })}
              </SearchTermed>
            ) : (
              <Nulity></Nulity>
            )}
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
