import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinked,
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
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <NavLogo>
                <Logo src={image} />
              </NavLogo>
              <FooterLinkTitle>Jakarta Office</FooterLinkTitle>
              <FooterLinked>
                South Quarter Tower A 5th Floor Jl. RA Kartini Kav 8 Cilandak
                Jakarta 12430 Indonesia
              </FooterLinked>
              <FooterLinked>Phone +62 21 2276 9324</FooterLinked>
              <FooterLinked>Fax +62 21 291 25827</FooterLinked>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle>Social Networks</FooterLinkTitle>
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
              <FooterLinkTitle>Makassar Office</FooterLinkTitle>
              <FooterLinked>
                Jl. Kima 12 Kav. N-1a, Kawasan Industrial Makassar Makassar
                90245
              </FooterLinked>
              <FooterLinked>Phone +62 (411) 4720747</FooterLinked>
              <FooterLinked>Fax +62 (411) 4720748</FooterLinked>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Business</FooterLinkTitle>
              <FooterLink to="/Nickle-Ore-Mining">Nickle Ore Mining</FooterLink>
              <FooterLink to="/Nickle-Cobalt-HPAL">Nickle - Cobalt HPAL</FooterLink>
              <FooterLink to="/Ferronickle-Smelting">Ferronickle Smelting</FooterLink>
              <FooterLink to="/Ore-Export">Ore Export</FooterLink>
              <FooterLinkTitle>Global Sustainability</FooterLinkTitle>
              <FooterLink to="/QHSE">QHSE</FooterLink>
              <FooterLink to="/Report">Report</FooterLink>
              <FooterLink to="/Community-Activities">Community Activities</FooterLink>
            </FooterLinkItems>
         
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/Mission-Vision">Vision, Mission, Value</FooterLink>
              <FooterLink to="/Commitment">Commitment</FooterLink>
              <FooterLink to="/Board-of-Director">Board of Directors</FooterLink>
              <FooterLink to="/Organization-Structure">Organizational Structure</FooterLink>
              <Link style={{textDecoration:"none", color:"black"}} to="/Contact-Us">
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
              </Link>
              <FooterLinkTitle>For inquiries, email to:</FooterLinkTitle>
              <FooterLinked>
                <MdEmail /> info@cerindocorp.com
              </FooterLinked>
            </FooterLinkItems>

          </FooterLinkWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              ©2021 Copyright PT. Ceria Nugraha Indotama All rights reserved
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
