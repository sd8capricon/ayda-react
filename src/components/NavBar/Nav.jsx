// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

//Brand
import Logo from "../../images/YCDLogo2.png";

function NavBar({ transparency }) {
  return (
    <Navbar
      variant="dark"
      collapseOnSelect={true}
      className={"navbar " + (transparency === true ? "transparency" : "")}
      expand="lg"
    >
      <Navbar.Brand href="/" className="nav-brand">
        <img
          src={Logo}
          className="d-inline-block align-top nav-img"
          alt="AYDA Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ zIndex: "1" }}>
        <Nav className="ml-auto">
          <Nav.Link className="nav-links" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-links" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="nav-links" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="nav-links" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
