import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #f2f2f2;
`;

export const FooterWrap = styled.div`
  padding: 32px 24px;
  /* background: #333; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  max-width: 200px;
  /* min-width: 160px; */
  box-sizing: border-box;
  color: #111;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin: 16px 0;
`;

export const FooterLink = styled(Link)`
  color: #111;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    color: #111;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  border-top: 1px solid #111111;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #111;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #111;
  margin-bottom: 16px;
  text-align:center;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 175px;
`;

export const SocialIconLink = styled.a`
  color: #111;
  font-size: 40px;
  margin: 0 3px;
`;

export const Logo = styled.img`
  width: 175px;
  height: 61px;
`;

export const NavLogo = styled.div`
  margin: 16px 0 26px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
