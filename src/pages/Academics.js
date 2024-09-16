import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Academics = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Academics</h2>
          <p>Explore our curriculum and the various departments dedicated to providing a comprehensive education.</p>

          <h3>Departments</h3>
          <p>Science, Arts, Sports, and more.</p>

          <h3>Extracurricular Activities</h3>
          <p>Clubs, sports teams, and student organizations that enrich the student experience.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Academics;
