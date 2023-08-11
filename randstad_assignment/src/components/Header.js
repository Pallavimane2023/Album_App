import React from "react";
import { Nav, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import '../App.css'

const Header = () => {
  return (
    <Navbar bg="secondary" data-bs-theme="dark" className="Header">
      <Container>
        <Navbar.Brand href="#home">Album</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>

        <Nav className="justify-content-end">
          <Nav.Link active={true} href="/">
            BackToHome
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
