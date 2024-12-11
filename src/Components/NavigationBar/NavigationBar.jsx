import React from "react";
import "./NavigationBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Typography } from "@mui/material";


// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navigation-bar position-absolute w-100 z-2">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
            <Typography
              style={{ fontFamily: "'Pacifico', cursive", fontSize: "1.5rem",}}
              
            >
              HeathyLife
            </Typography>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link active">
              Trang chủ
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link active">
              Về chúng tôi
            </Nav.Link>
            {/* <NavDropdown title="About Us" id="about-dropdown" className="nav-link">
              <NavDropdown.Item as={Link} to="/about/history">Option 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/teachers">Option 2</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/blog" className="nav-link">
              Online Yoga
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="nav-link">
              Khóa học
            </Nav.Link>
            <Nav.Link as={Link} to="/calculate" className="nav-link">
              Công cụ hỗ trợ sức khỏe
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/workshops" className="nav-link">
              Workshops
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
