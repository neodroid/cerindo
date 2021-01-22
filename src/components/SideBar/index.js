import React, {useState, useEffect} from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarDropContent,
  Nulity
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const [selectedone, setSelectedone] = useState(true);
  const [selectedtwo, setSelectedtwo] = useState(true);
  const [selectedthree, setSelectedthree] = useState(true);

  const ClickitOne = ()=>{setSelectedone(!selectedone);}
  const ClickitTwo = ()=>{setSelectedtwo(!selectedtwo);}
  const ClickitThree = ()=>{setSelectedthree(!selectedthree);}

  useEffect(() => {
    ClickitOne();
    ClickitTwo();
    ClickitThree();
  }, []);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>

          <SideBtnWrap onClick={ClickitOne}>Business</SideBtnWrap>
          {selectedone ?
          <SidebarDropContent> 
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
          <SidebarLink to="/Jetty-Terminal" onClick={toggle}>
          Jetty Terminal
          </SidebarLink>
          <SidebarLink to="/Power-Plant" onClick={toggle}>
          Power Plant
          </SidebarLink>
          </SidebarDropContent>
          : <Nulity/>}

          <SideBtnWrap onClick={ClickitTwo}>Global Sustainability</SideBtnWrap>
          {selectedtwo ?
          <SidebarDropContent> 
          <SidebarLink to="/QHSE" onClick={toggle}>
          QHSE
          </SidebarLink>
          <SidebarLink to="/Community-Activity" onClick={toggle}>
          Community Activity
          </SidebarLink>
          <SidebarLink to="/Report" onClick={toggle}>
          Report
          </SidebarLink>
          <SidebarLink to="/Award" onClick={toggle}>
          Award
          </SidebarLink>
          </SidebarDropContent>
          : <Nulity/>}

          <SideBtnWrap onClick={ClickitThree}>About Us</SideBtnWrap>
          {selectedthree ?
          <SidebarDropContent> 
          <SidebarLink to="/Mission-Vision" onClick={toggle}>
          Mission, Vision and Value
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
          <SidebarLink to="/Concession-Area" onClick={toggle}>
          Concession Area
          </SidebarLink>
          <SidebarLink to="/License-And-Award" onClick={toggle}>
          License and Award
          </SidebarLink>
          </SidebarDropContent>
          : <Nulity/>}
          
          <SidebarLink to="/Career" onClick={toggle}>
            Career
          </SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to="/register" onClick={toggle}>
            Register
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
