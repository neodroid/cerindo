import React,{useState,useContext,useEffect} from "react";
import { 
  Home, 
  Business,  
  Sustainibility, 
  AboutUs, 
  Career, 
  BusinessOne, 
  BusinessTwo,
  SustainabilityDropdown,
  AboutUsDropdown
 } from '../Data/NavbarData/NavbarData';
import { SideBarLang, SideBarDropDown } from './SideBarLang';
import getFlagUrl from "../NavBar/getFlagURL";
import {setLang} from "../NavBar";
import {
  Item,
  Flag,
} from "../NavBar/NavbarElements"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ArrowDownLang,
    DropDown,
    Dropbtn,
    DropDownContent,
} from "./SideBarElements";
import { langContext } from "../../langContext";

function Menu ({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);
  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        {showFlag ? value ? <Flag src={getFlagUrl(value)} /> : null : null}
        <ArrowDownLang/>
      </Dropbtn>

      <DropDownContent>
        {items.map((row, idx) => (
          <Item
            role="button"
            tabIndex={idx + 1}
            onClick={() => setSelected(row)}
          >
            {showFlag && <Flag src={getFlagUrl(row)} />}
          </Item>
        ))}
      </DropDownContent>
    </DropDown>
  );
}
const Sidebar = ({ isOpen, toggle }) => {
  const [val2, setVal2] = useState("en");
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            <SideBtnWrap>
            {SideBarLang(Home, setLang)}
            </SideBtnWrap>
          </SidebarLink>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
            {SideBarLang(Business, setLang)}
            </Dropbtn>
            <DropDownContent>
              <SidebarLink to="/Nickle-Ore-Mining" onClick={toggle}>
              {SideBarDropDown(BusinessOne, 0, setLang)}
              </SidebarLink>
              <SidebarLink to="/Nickle-Cobalt-HPAL" onClick={toggle}>
              {SideBarDropDown(BusinessOne, 1, setLang)}
              </SidebarLink>
              <SidebarLink to="/Ferronickle-Smelting" onClick={toggle}>
              {SideBarDropDown(BusinessOne, 2, setLang)}
              </SidebarLink>
              <SidebarLink to="/Resource-Reserve" onClick={toggle}>
              {SideBarDropDown(BusinessTwo, 0, setLang)}
              </SidebarLink>
              <SidebarLink to="/Ore-Export" onClick={toggle}>
              {SideBarDropDown(BusinessTwo, 1, setLang)}
              </SidebarLink>
              <SidebarLink to="/Power-Supply" onClick={toggle}>
              {SideBarDropDown(BusinessTwo, 2, setLang)}
              </SidebarLink>
            </DropDownContent>
          </DropDown>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
            {SideBarLang(Sustainibility, setLang)}
            </Dropbtn>
            <DropDownContent>
            <SidebarLink to="/QHSE" onClick={toggle}>
            {SideBarDropDown(SustainabilityDropdown, 0, setLang)}
              </SidebarLink>
              <SidebarLink to="/Community-Activities" onClick={toggle}>
              {SideBarDropDown(SustainabilityDropdown, 1, setLang)}
              </SidebarLink>
              <SidebarLink to="/Reports" onClick={toggle}>
              {SideBarDropDown(SustainabilityDropdown, 2, setLang)}
              </SidebarLink>
              <SidebarLink to="/Awards" onClick={toggle}>
              {SideBarDropDown(SustainabilityDropdown, 3, setLang)}
            </SidebarLink>
            </DropDownContent>
          </DropDown>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
            {SideBarLang(AboutUs, setLang)}
            </Dropbtn>
            <DropDownContent>
            <SidebarLink to="/Mission-Vision" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 0, setLang)}
            </SidebarLink>
            <SidebarLink to="/Commitment" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 1, setLang)}
            </SidebarLink>
            <SidebarLink to="/Subsidiary" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 2, setLang)}
            </SidebarLink>
            <SidebarLink to="/Board-of-Director" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 3, setLang)}
            </SidebarLink>
            <SidebarLink to="/Organization-Structure" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 4, setLang)}
            </SidebarLink>
            <SidebarLink to="/History-Milestone" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 5, setLang)}
            </SidebarLink>
            <SidebarLink to="/Licenses-Concession" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 6, setLang)}
            </SidebarLink>
            <SidebarLink to="/Press-Release" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 7, setLang)}
            </SidebarLink>
            <SidebarLink to="/Gallery" onClick={toggle}>
            {SideBarDropDown(AboutUsDropdown, 8, setLang)}
            </SidebarLink>
            </DropDownContent>
          </DropDown>
          
          <SidebarLink to="/Career" onClick={toggle}>
          <SideBtnWrap>
          {SideBarLang(Career, setLang)}
            </SideBtnWrap>
          </SidebarLink>
        </SidebarMenu>
        {/* 
          <SidebarRoute to="/register" onClick={toggle}>
            Register
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
      <Menu
              value={val2}
              onChange={setVal2}
              showFlag
              placeholder="select language"
              items={["en", "cn", "id"]}
            />
    </SidebarContainer>
  );
};

export default Sidebar;
