import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  NavLogo,
  Logo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import image from "../../images/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <NavLogo>
        <Logo src={image} />
      </NavLogo>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Jakarta Office</FooterLinkTitle>
              <FooterLink>
                South Quarter Tower A 5th Floor Jl. RA Kartini Kav 8 Cilandak
                Jakarta 12430 Indonesia
              </FooterLink>
              <FooterLink>Phone +62 21 2276 9324</FooterLink>
              <FooterLink>Fax +62 21 291 25827</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Makassar Office</FooterLinkTitle>
              <FooterLink>
                Jl. Kima 12 Kav. N-1a, Kawasan Industrial Makassar Makassar
                90245
              </FooterLink>
              <FooterLink>Phone +62 (411) 4720747</FooterLink>
              <FooterLink>Fax +62 (411) 4720748</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/Mission-Vision">Mission, Vision and Value</FooterLink>
              <FooterLink to="/Subsidiary">Company Subsidiary</FooterLink>
              <FooterLink to="/Board-of-Director">Board of Directors</FooterLink>
              <FooterLink to="/Organization-Structure">Organization Structure</FooterLink>
              <FooterLink to="/History-Milestone">History and Milestone</FooterLink>
              <FooterLink to="/Concession-Area">Concession Area</FooterLink>
              <FooterLink to="/License-And-Award">License and Award</FooterLink>
              <FooterLinkTitle>Global Sustainability</FooterLinkTitle>
              <FooterLink to="/Activities">Activities</FooterLink>
              <FooterLink to="/Report">Report</FooterLink>
              <FooterLink to="/Commitmen">Commitmen</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Purpose</FooterLinkTitle>
              <FooterLink to="/">Press Release</FooterLink>
              <FooterLink to="/">Ceria in Media</FooterLink>
              <FooterLink to="/">Gallery</FooterLink>
              <FooterLinkTitle>Business</FooterLinkTitle>
              <FooterLinkTitle>Mining</FooterLinkTitle>
              <FooterLink to="/Nickle-Ore-Mining">Nickle Ore Mining</FooterLink>
              <FooterLink to="/Nickle-Cobalt-HPAL">Nickle - Cobalt HPAL</FooterLink>
              <FooterLink to="/Ferronickle-Smelting">Ferronickle Smelting</FooterLink>
              <FooterLink to="/Resource-Reserve">Resource and Reserve</FooterLink>
              <FooterLinkTitle>Logistic</FooterLinkTitle>
              <FooterLink to="/Jetty-Terminal">Jetty Terminal</FooterLink>
              <FooterLinkTitle>Energy</FooterLinkTitle>
              <FooterLink to="/Power-Plant">Power Plant</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Reach Us At</FooterLinkTitle>
              <FooterLink>
                <MdEmail /> info@cerindocorp.com
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/">CENS-UI 2020</SocialLogo> */}
            <WebsiteRights>
              ©2021 Copyright PT. Ceria Nugraha Indotama All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
