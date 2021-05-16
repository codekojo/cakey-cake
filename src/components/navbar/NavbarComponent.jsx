import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/images/img/logo.svg";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <a href="#ss" className="mr-5">
        <img src={Logo} alt="Logo of Cake Cakey Cake" />
      </a>

      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <HiOutlineMenuAlt3 />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" className=" link">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="link">
            About
          </Nav.Link>
          <Nav.Link href="#store" className="link">
            Store
          </Nav.Link>
          <Nav.Link href="#services" className="link">
            Services
          </Nav.Link>
          <Nav.Link href="#order" className="link">
            Order
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
