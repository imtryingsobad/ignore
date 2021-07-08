import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";

export const Nav = styled.nav`
  background: #000;
  height: 7.5vh;
  ${"" /* width: 100vw; */}
  position: fixed;
  z-index: 2;
  padding: 1vh 2vw;
`;

export const NavDiv = styled.nav`
  display: grid;
  grid-template-columns: 40vw 55% repeat(5, auto);
  align-content: centre;

  @media screen and (max-width: 1020px) {
    grid-template-columns: 40vw 55% repeat(5, 10vw);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 70vw 0% repeat(5, 10vw);
  }
`;

export const NavLogo = styled.div`
  display: flex;
  justify-self: start !important;
  margin-left: 3vw;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: flex-end;
  font-size: 1em;

  @media screen and (max-width: 1050px) {
    font-size: 1em;
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #9e9e9e;
  display: flex;
  align-items: centre;
  justify-content: centre;
  text-decoration: none;
  cursor: pointer;
  margin: 0vh 1vw;
  transition: 0.3s ease-in-out;

  &:hover {
    color: white;
    transition: 0.5s ease-in-out;
    border-bottom: 1px solid #eb6e55 !important;
    text-decoration: none;
  }
`;

export const NavButton = styled(Link)`
  color: #f8f8f8;
  display: flex;
  align-items: centre;
  justify-content: centre;
  text-decoration: none;
  cursor: pointer;
  margin: 0vh 1vw;
  transition: 0.3s ease-in-out;
  &:hover {
    color: white;
    transition: 0.5s ease-in-out;
  }
`;

export const Dot = styled(BsCircleFill)`
  color: #dedede;
  width: 0.5vh;
  margin: 0px 0.8vw;
`;

export const Bars = styled(FaBars)`
  display: none;
  align-self: center;
  color: #fff;
  top: 0;

  @media screen and (max-width: 850px) {
    display: flex;
    position: relative;
    right: 20px;
    align-self: center;
    margin-top: 0.9vh;

    font-size: 1.8rem;
    cursor: pointer;
  }
  @media screen and (max-width: 440px) {
    font-size: 1.2rem;
  }
`;

export const MobileIcons = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;
