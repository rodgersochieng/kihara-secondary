// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <Container>
        <Row>
          <Col>
            <div className="footer-content">
              <p>Let's Connect</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100064557555243" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaYoutube />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <p>
              Made with ❤️ by <a href="  www.linkedin.com/in/ochieng-o-rodgers" className="text-white">Lazy Dev</a>
            </p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Kihara Secondary School. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
