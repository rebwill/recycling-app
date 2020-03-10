import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  navbarMain: {
    backgroundColor: "white !important",
    top: 0,
    position: "fixed",
    width: "100vw",
    zIndex: "1000",
    boxShadow: "0 8px 6px -6px black"
  },
  navbarBrand: {
    fontSize: "2rem",
    fontFamily: "Limelight"
  },
  navbarLink: {
    fontSize: "1.5rem",
    color: "red",
    backgroundColor: "pink"
    // marginLeft: "5px",
    // borderRadius: "5px"
  },
  navDropdown: {
    width: "auto"
  },
  navbarText: {
    fontSize: "1.5rem"
  }
}));

const MainNav = props => {
  const classes = useStyles();

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={classes.navbarMain}
      >
        <Navbar.Brand href="#home" className={classes.navbarBrand}>
          MIA Recycling
        </Navbar.Brand>
        <Navbar.Text className={classes.navbarText}>
          Find out what can be recycled in Miami Dade.
        </Navbar.Text>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ml-auto mr-auto mt-1 mb-1"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="navDropdown">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className={classes.navbarLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#home" className={classes.navbarLink}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainNav;
