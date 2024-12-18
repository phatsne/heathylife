import React from "react";
import "./NavigationBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const NavigationBar = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  return (
    <Navbar expand="lg" className="navigation-bar position-absolute w-100 z-2">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Link to="/home" className="text-decoration-none text-dark d-flex align-items-center">
            <Typography
              style={{ fontFamily: "'Pacifico', cursive", fontSize: "1.5rem" }}
            >
              HeathyLife
            </Typography>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="nav-link active">
              Trang chủ
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="nav-link active">
              Về chúng tôi
            </Nav.Link>
            <Nav.Link as={Link} to="/Blog" className="nav-link">
              Online Yoga
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" className="nav-link">
              Khóa học
            </Nav.Link>
            <Nav.Link as={Link} to="/Calculate" className="nav-link">
              Công cụ hỗ trợ sức khỏe
            </Nav.Link>
          </Nav>
          {/* Button điều hướng đến trang Login */}
          <Button
            variant="contained"
            style={{
              marginLeft: "1rem",
              // fontWeight: "bold",
              borderRadius: "20px",
              // padding: "5px 20px",
              backgroundColor: "#40E0D0",
            }}
            onClick={() => navigate("/login")} // Điều hướng đến trang Login
          >
            Đăng nhập
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
