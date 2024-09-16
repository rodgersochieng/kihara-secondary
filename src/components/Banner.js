// import React from 'react';
// import { Jumbotron, Button } from 'react-bootstrap';

// const Banner = () => {
//   return (
//     <Jumbotron className="bg-primary text-white text-center">
//       <h1>Welcome to Our School</h1>
//       <p>Your future starts here.</p>
//       <Button variant="light" href="/admissions">Learn More</Button>
//     </Jumbotron>
//   );
// };

// export default Banner;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css'; // Ensure you have a CSS file for custom styles

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <h1>Welcome to Our School</h1>
            <p>Providing quality education and nurturing future leaders.</p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

