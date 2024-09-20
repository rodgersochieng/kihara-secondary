import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Admissions = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 text-primary" style={{ fontWeight: 'bold' }}>Admissions</h1>

      <Card className="mb-5 border-primary" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-primary" style={{ fontWeight: 'bold' }}>Admission Process</h2>
          <p>Learn about the steps to apply and the necessary documents:</p>
          <ul>
            <li>Complete the online application form.</li>
            <li>Submit required documents: birth certificate, previous school reports, and passport-sized photographs.</li>
            <li>Attend an interview with the admissions team.</li>
            <li>Receive an offer letter and complete the enrollment process.</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-5 border-success" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-success" style={{ fontWeight: 'bold' }}>School Fees</h2>
          <p>Information on tuition and other expenses:</p>
          <ul>
            <li>Tuition: $XXXX per year</li>
            <li>Registration Fee: $XXX</li>
            <li>Other Fees: $XXX (e.g., books, extracurricular activities)</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-5 border-info" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-info" style={{ fontWeight: 'bold' }}>Scholarships</h2>
          <p>Details about financial aid and scholarships available:</p>
          <ul>
            <li>Merit-based scholarships for top-performing students.</li>
            <li>Need-based financial aid for qualifying families.</li>
            <li>Special scholarships for outstanding achievements in sports or academics.</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Contact Buttons */}
      <Row className="justify-content-center mt-5">
        <Col md={4} className="text-center">
          <a 
            href="https://wa.me/+254729942447" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success mb-3" 
            style={{ borderRadius: '25px', fontWeight: 'bold', padding: '10px 20px' }}
          >
            <FaWhatsapp className="me-2" /> Contact Us on WhatsApp
          </a>
          <br />
          <a 
            href="tel: 020 521385" 
            className="btn btn-primary" 
            style={{ borderRadius: '25px', fontWeight: 'bold', padding: '10px 20px' }}
          >
            <FaPhoneAlt className="me-2" /> Call Us
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Admissions;
