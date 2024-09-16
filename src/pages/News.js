import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const News = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>News & Events</h2>
          <p>Stay updated with the latest news and upcoming events at our school.</p>

          <h3>Latest News</h3>
          <p>Recent updates and achievements.</p>

          <h3>Events Calendar</h3>
          <p>An interactive calendar of school events.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
