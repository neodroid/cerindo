import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
    DropDown,
    Dropbtn,
    DropDownContent,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            <SideBtnWrap>
            Home
            </SideBtnWrap>
          </SidebarLink>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
            Business
            </Dropbtn>
            <DropDownContent>
              <SidebarLink to="/Nickle-Ore-Mining" onClick={toggle}>
                Nickle Ore Mining
              </SidebarLink>
              <SidebarLink to="/Nickle-Cobalt-HPAL" onClick={toggle}>
                Nickle - Cobalt HPAL
              </SidebarLink>
              <SidebarLink to="/Ferronickle-Smelting" onClick={toggle}>
                Ferronickle Smelting
              </SidebarLink>
              <SidebarLink to="/Resource-Reserve" onClick={toggle}>
                Resource and Reserve
              </SidebarLink>
              <SidebarLink to="/Ore-Export" onClick={toggle}>
                Direct Ore Shipping
              </SidebarLink>
              <SidebarLink to="/Power-Supply" onClick={toggle}>
                Power Supply
              </SidebarLink>
            </DropDownContent>
          </DropDown>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
            Global Sustainability
            </Dropbtn>
            <DropDownContent>
            <SidebarLink to="/QHSE" onClick={toggle}>
              QHSE
              </SidebarLink>
              <SidebarLink to="/Community-Activities" onClick={toggle}>
              Community Activities
              </SidebarLink>
              <SidebarLink to="/Reports" onClick={toggle}>
              Report
              </SidebarLink>
              <SidebarLink to="/Awards" onClick={toggle}>
              Award
            </SidebarLink>
            </DropDownContent>
          </DropDown>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
            About Us
            </Dropbtn>
            <DropDownContent>
            <SidebarLink to="/Mission-Vision" onClick={toggle}>
               Mission, Vision and Value
            </SidebarLink>
            <SidebarLink to="/Commitment" onClick={toggle}>
              Commitment
            </SidebarLink>
            <SidebarLink to="/Subsidiary" onClick={toggle}>
              Subsidiary
            </SidebarLink>
            <SidebarLink to="/Board-of-Director" onClick={toggle}>
              Board of Director
            </SidebarLink>
            <SidebarLink to="/Organization-Structure" onClick={toggle}>
              Organization Structure
            </SidebarLink>
            <SidebarLink to="/History-Milestone" onClick={toggle}>
              History and Milestone
            </SidebarLink>
            <SidebarLink to="/Licenses-Concession" onClick={toggle}>
              Licenses and Concession
            </SidebarLink>
            <SidebarLink to="/Press-Release" onClick={toggle}>
              Press Release
            </SidebarLink>
            <SidebarLink to="/Gallery" onClick={toggle}>
              Gallery
            </SidebarLink>
            </DropDownContent>
          </DropDown>
          
          <SidebarLink to="/Career" onClick={toggle}>
          <SideBtnWrap>
            Career
            </SideBtnWrap>
          </SidebarLink>
        </SidebarMenu>
        {/* 
          <SidebarRoute to="/register" onClick={toggle}>
            Register
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
