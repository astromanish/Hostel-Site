import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./css/header.css";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        <Navbar.Brand>(Site Title/Logo)</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href={`/fests`}>Festivals</Nav.Link>
          <Nav.Link href={`/alumni`}>Alumni</Nav.Link>
          <Nav.Link href={`/achivements`}>Achivements</Nav.Link>
          <Nav.Link href={`/donate-us`}>Donate Us</Nav.Link>   
        </Nav>
        <Nav className="mr-auto">
          <NavDropdown
            title="More"
            id="collasible-nav-dropdown"
            className="nav-link"
          >
            <NavDropdown.Item as={Link} to="/gallery">
              Gallery
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item as={Link} to="/miscellanous-guide">
              Miscellanous 
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav>
          <NavDropdown
            title="Get in Touch"
            id="collasible-nav-dropdown"
            className="nav-link"
          >
            <NavDropdown.Item as={Link} to="/about-us">
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/feedback">
              Feedback
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/tnc">
              Terms and Conditions
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
