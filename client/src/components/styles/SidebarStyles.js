import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;
  z-index: 100 !important;
  background: #000;
  left: 0;
  display: grid;
  position: fixed;
  align-items: centre;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Close = styled(FaTimes)`
  color: #fff;
  top: 0;
  right: 0;
  align-self: center;
`;

export const Icons = styled.div`
  outline: none;
  top: 1.2rem;
  right: 1.2rem;
  height: 3vh;
  background: transparent;
  cursor: pointer;
  position: absolute;
`;

export const SideLink = styled(Link)`
  display: flex;
  z-index: 100 !important;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  color: #fff;
  cursor: pointer;
`;

export const SideMenu = styled.ul`
  display: grid;
  z-index: 100 !important;
  margin-top: 20vh;
  justify-content: centre;
  grid-template-columns: 1;
  grid-template-rows: repeat(5, 10vh);
  text-align: centre;
`;
