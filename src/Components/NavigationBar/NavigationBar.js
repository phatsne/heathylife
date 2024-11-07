import React from "react";
import "./NavigationBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navigation-bar position-absolute w-100 z-2">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          {/* <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
            <img
              src="link/to/your-logo.png"
              alt="Sivananda Logo"
              className="navbar-logo"
            />
            <div className="navbar-title ms-2">
              <span>New Delhi</span>
              <br />
              <strong>Sivananda Yoga Vedanta Nataraja Centre</strong>
            </div>
          </Link> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="aboutus" className="nav-link active">
              About Us
            </Nav.Link>
            {/* <NavDropdown title="About Us" id="about-dropdown" className="nav-link">
              <NavDropdown.Item as={Link} to="/about/history">Option 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/teachers">Option 2</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/" className="nav-link">
              Online Yoga
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="nav-link">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/schedule" className="nav-link">
              Schedule
            </Nav.Link>
            <Nav.Link as={Link} to="/workshops" className="nav-link">
              Workshops
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
