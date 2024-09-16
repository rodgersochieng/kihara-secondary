import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>About Our School</h2>
          <p>
            Founded in 19XX, our school is dedicated to providing a high-quality education that prepares students for success in a rapidly changing world.
          </p>
          <h3>Message from the Principal</h3>
          <p>"Welcome to our school. We are committed to ensuring every student reaches their full potential."</p>

          <h3>Mission & Vision</h3>
          <p>We aim to develop future leaders through innovative teaching and learning methods.</p>

          <h3>School Facilities</h3>
          <p>Our campus features state-of-the-art laboratories, libraries, and sporting facilities to enhance the learning experience.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
