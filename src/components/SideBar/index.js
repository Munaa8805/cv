import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              Танилцуулга
            </SidebarLink>
            <SidebarLink to="education" onClick={toggle}>
              Боловсрол
            </SidebarLink>
            <SidebarLink to="experience" onClick={toggle}>
              Ажлын туршлага
            </SidebarLink>
            <SidebarLink to="training" onClick={toggle}>
              Сургалт
            </SidebarLink>
            <SidebarLink to="project" onClick={toggle}>
              Төсөл
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
