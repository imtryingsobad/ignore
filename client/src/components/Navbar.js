import React from 'react';
import Logo from "../images/logo.png";
import { Link } from "react-scroll";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    Nav,
    Bars,
    NavMenu,
    NavLink,
    NavDiv,
    Dot,
    NavLogo,
    MobileIcons,
    NavButton
  } from "./styles/NavbarStyles";

const useStyles = makeStyles((theme) => ({
    chipStyle: {
      padding: "1rem 1.3rem",
      backgroundColor: "#fff",
      color: "#000",
      fontSize: "1rem",
      marginLeft: "1.5rem",
      letterSpacing: "0.1rem",
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.only("sm")]: {
        fontSize: "0.8rem",
        padding: "0.7rem 0.95rem",
      },
    },
    links: {
      padding: "0.3rem 0",
    },
  }));

export const Navbar = ({toggle}) => {
    const classes = useStyles();
    return (
        <>
        <Nav style={{ position: "relative", height: "9vh" }}>
        <MobileIcons onClick={toggle}>
          <Bars />
        </MobileIcons>

        <NavDiv style={{ display: "flex", justifyContent: "space-around" }}>
          <NavLogo to="/" className="logo-name-img">
            <NavLink to="/">
              <img className="Logo" src={Logo} alt="logo" style={{height: "3vw", width: "auto"}}/>
            </NavLink>
            <NavButton to="/">
              <h2 className="LogoName" style={{ fontFamily: "Bauman" }}>
                LOGO
              </h2>
            </NavButton>
          </NavLogo>
          <NavMenu>
            <Link smooth={true} duration={1000}>
              <NavLink to="/about" activeStyle className={classes.links}>
                About
              </NavLink>
            </Link>
            <Dot />
            <Link  smooth={true} duration={2000}>
              <NavLink to="/contact" activeStyle className={classes.links}>
                Contact Us
              </NavLink>
            </Link>
            <Dot />
            <NavLink to="/" activeStyle className={classes.links}>
              Support
            </NavLink>            
            <Dot />
            <NavLink to="/signup" activeStyle className={classes.links}>
              Sign Up
            </NavLink>
            <NavButton to="/login"><Chip label="Sign In!" className={classes.chipStyle} /></NavButton>
          </NavMenu>
        </NavDiv>
      </Nav>
        </>
    );
};

export default Navbar;