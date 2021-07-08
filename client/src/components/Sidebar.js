import React from "react";
import {
  SidebarContainer,
  Close,
  Icons,
  SideLink,
  SideMenu,
} from "./styles/SidebarStyles";
import { Chip } from "@material-ui/core";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icons onClick={toggle}>
          <Close />
        </Icons>
        <SideMenu>
          <SideLink to="/about">About</SideLink>
          <SideLink to="/products">Contact Us</SideLink>
          <SideLink to="/compare">Support</SideLink>
          <SideLink to="/support">Sign Up</SideLink>
          <SideLink>
            <Chip label="Sign In!"/>
          </SideLink>
        </SideMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;