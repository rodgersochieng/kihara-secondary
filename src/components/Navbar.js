import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { 
  FaHome, FaInfoCircle, FaGraduationCap, FaUniversity, FaNewspaper, 
  FaImages, FaUserFriends, FaEnvelope 
} from 'react-icons/fa';
import './Navbar.css';  // Make sure to create this CSS file

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand">
          <img src="" alt="School Logo" className="logo" />
          <span className="school-name">Kihara Secondary School</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-link">
              <FaHome className="icon" /> Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              <FaInfoCircle className="icon" /> About
            </Nav.Link>
            <Nav.Link href="/academics" className="nav-link">
              <FaGraduationCap className="icon" /> Academics
            </Nav.Link>
            <Nav.Link href="/admissions" className="nav-link">
              <FaUniversity className="icon" /> Admissions
            </Nav.Link>
            <Nav.Link href="/news" className="nav-link">
              <FaNewspaper className="icon" /> News
            </Nav.Link>
            <Nav.Link href="/gallery" className="nav-link">
              <FaImages className="icon" /> Gallery
            </Nav.Link>
            <Nav.Link href="/alumni" className="nav-link">
              <FaUserFriends className="icon" /> Alumni
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link">
              <FaEnvelope className="icon" /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;