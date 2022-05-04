import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  ContactText,
  ContactDiv
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <ContactText to="/">
              <ContactDiv>
                <span>
                  <ion-icon
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "#fff",
                      marginRight: "1rem"
                    }}
                    name="call"
                  ></ion-icon>
                </span>
                88058822
              </ContactDiv>
              <ContactDiv>
                <span>
                  <ion-icon
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "#fff",
                      marginRight: "1rem"
                    }}
                    name="mail"
                  ></ion-icon>
                </span>
                munaa.tsetsegmaa@gmail.com
              </ContactDiv>
            </ContactText>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/Munaa.tse"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/munaa-tsetsegmaa-39a95664/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
