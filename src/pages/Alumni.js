import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Alumni = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Alumni</h2>
          <p>Stay connected with our alumni community and see how past students are making an impact.</p>

          <h3>Alumni News</h3>
          <p>Updates on what our alumni are up to.</p>

          <h3>Events for Alumni</h3>
          <p>Information on upcoming events for alumni.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Alumni;
