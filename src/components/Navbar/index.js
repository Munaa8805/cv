import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ImgLogo,
  ImgText
} from "./NavbarElements";
import imgzurag from "../../images/zurag.jpg";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <ImgLogo src={imgzurag} /> <ImgText>Мунаа</ImgText>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Танилцуулга
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Боловсрол
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="experience"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Ажлын туршлага
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="training"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Сургалт
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Холбоо барих
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
