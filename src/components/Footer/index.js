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
              <FooterLink to="/">Mission, Vision and Value</FooterLink>
              <FooterLink to="/">Company Holding</FooterLink>
              <FooterLink to="/">Board of Directors</FooterLink>
              <FooterLink to="/">History</FooterLink>
              <FooterLinkTitle>QHSE - CSR</FooterLinkTitle>
              <FooterLink to="/">Quality</FooterLink>
              <FooterLink to="/">HSE</FooterLink>
              <FooterLink to="/">CSR</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Corporate News</FooterLinkTitle>
              <FooterLink to="/">Press Release</FooterLink>
              <FooterLink to="/">Ceria in Media</FooterLink>
              <FooterLink to="/">Gallery</FooterLink>
              <FooterLinkTitle>Business</FooterLinkTitle>
              <FooterLink to="/">Mining</FooterLink>
              <FooterLink to="/">Logistics</FooterLink>
              <FooterLink to="/">Energy</FooterLink>
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
              ©2020 Copyright PT. Ceria Nugraha Indotama All rights reserved
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
