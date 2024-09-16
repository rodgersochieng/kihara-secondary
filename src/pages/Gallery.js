import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Gallery</h2>
          <p>Browse through images of school events, facilities, and activities.</p>

          <h3>Photo Gallery</h3>
          <p>Collection of photos from various school events.</p>

          <h3>Video Gallery</h3>
          <p>Videos of school activities and events.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
