import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3 nav-custom">
        <Container>

          {/* Brand / Logo */}
          <Navbar.Brand as={Link} to="/" className="brand-text">
            🍽️ YouChef
          </Navbar.Brand>

          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/" className="nav-item-custom">
                View All
              </Nav.Link>

              <Nav.Link as={Link} to="/addnew" className="nav-item-custom">
                Add New
              </Nav.Link>

              <Nav.Link as={Link} to="/login" className="nav-item-custom">
                Login
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
