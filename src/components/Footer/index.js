import React, { useEffect, useState, useContext } from "react";
import { footerService } from "../../service/Footer";
import { FaFacebook, FaInstagram, FaLanguage, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
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
import { langContext } from '../../langContext'
import { FooterData, FooterDataSingle } from './FooterLang';
import { BusinessTwo, Inquiry, ContactUs, SocialNetworks, AboutUsFooter, BusinessFooter, SustainabilityFooter,JakartaOffice, MakassarOffice, AboutUsDropdown, BusinessOne, SustainabilityDropdown, Copyright } from '../Data/NavbarData/NavbarData';
import {setLang} from '../NavBar/index';

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await footerService.getFooter();
      const data = response.data;
      setFooterData(data);
    };
    fetchData();
  }, []); 
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <NavLogo>
                <Logo src={image} />
              </NavLogo>
              <FooterLinkTitle>{FooterDataSingle(JakartaOffice, setLang)}</FooterLinkTitle>
              <FooterLinked>
                South Quarter Tower A 5th Floor Jl. RA Kartini Kav 8 Cilandak
                Jakarta 12430 Indonesia
              </FooterLinked>
              <FooterLinked>Phone +62 21 2276 9324</FooterLinked>
              <FooterLinked>Fax +62 21 291 25827</FooterLinked>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{FooterDataSingle(SocialNetworks, setLang)}</FooterLinkTitle>
              <SocialIcons>
                <SocialIconLink
                  href={footerData.facebook}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.instagram}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.youtube}
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.linkedin}
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
              <FooterLinkTitle>{FooterDataSingle(MakassarOffice, setLang)}</FooterLinkTitle>
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
              <FooterLinkTitle>{FooterDataSingle(BusinessFooter, setLang)}</FooterLinkTitle>
              <FooterLink to="/Nickle-Ore-Mining">
                {FooterData(BusinessOne, 0, setLang)}
              </FooterLink>
              <FooterLink to="/Nickle-Cobalt-HPAL">
                {FooterData(BusinessOne, 1, setLang)}
              </FooterLink>
              <FooterLink to="/Ferronickle-Smelting">
                {FooterData(BusinessOne, 2, setLang)}
              </FooterLink>
              <FooterLink to="/Ore-Export">
                {FooterData(BusinessTwo, 1, setLang)}
              </FooterLink>
              <FooterLinkTitle>
                {FooterDataSingle(SustainabilityFooter, setLang)}
              </FooterLinkTitle>
              <FooterLink to="/QHSE">
                {FooterData(SustainabilityDropdown, 0, setLang)}
              </FooterLink>
              <FooterLink to="/Report">
                {FooterData(SustainabilityDropdown, 2, setLang)}
              </FooterLink>
              <FooterLink to="/Community-Activities">
                {FooterData(SustainabilityDropdown, 1, setLang)}
              </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>{FooterDataSingle(AboutUsFooter, setLang)}</FooterLinkTitle>
              <FooterLink to="/Mission-Vision">
                {FooterData(AboutUsDropdown, 0, setLang)}
              </FooterLink>
              <FooterLink to="/Commitment">{FooterData(AboutUsDropdown, 1, setLang)}</FooterLink>
              <FooterLink to="/Board-of-Director">
              {FooterData(AboutUsDropdown, 3, setLang)}
              </FooterLink>
              <FooterLink to="/Organization-Structure">
              {FooterData(AboutUsDropdown, 4, setLang)}
              </FooterLink>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Contact-Us"
              >
                <FooterLinkTitle>{FooterDataSingle(ContactUs, setLang)}</FooterLinkTitle>
              </Link>
              <FooterLinkTitle>{FooterDataSingle(Inquiry, setLang)}</FooterLinkTitle>
              <FooterLinked>
                <MdEmail /> info@cerindocorp.com
              </FooterLinked>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              {FooterDataSingle(Copyright, setLang)}
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
