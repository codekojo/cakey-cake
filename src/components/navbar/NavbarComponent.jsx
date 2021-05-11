import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
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
        <Nav className="mr-auto">
          <Nav.Link href="#features" className="nav-links">
            Home
          </Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#order">Order</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="nav-info-items d-none d-lg-flex">
        <div className="nav-info align-items-center d-flex justify-content-between">
          <span className="info-icon mx-lg-3">
            <FaPhoneAlt />
          </span>
          <p className="mb-0">+123 333</p>
        </div>

        <div className="cart-info align-items-center d-flex justify-content-between mx-lg-5">
          <span className="cart-info__icon mr-lg-3">
            <HiOutlineMenuAlt3 />
          </span>
          <p className="mb-0 text-capitalise">
            <span className="item-count">2</span>
            Item - $<span className="item-total">10.2</span>
          </p>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
