import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const ContactText = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: column;
`;
export const ContactDiv = styled.p`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
