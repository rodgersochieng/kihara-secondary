import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Admissions = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Admissions</h2>
          <p>Learn about the admissions process, school fees, and available scholarships.</p>

          <h3>Admission Process</h3>
          <p>Steps to apply and necessary documents.</p>

          <h3>School Fees</h3>
          <p>Information on tuition and other expenses.</p>

          <h3>Scholarships</h3>
          <p>Details about financial aid and scholarships available.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Admissions;
