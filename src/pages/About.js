
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './AboutUs.css'; // Custom CSS for hover effects
import { FaMicroscope } from 'react-icons/fa'; // Import the microscope icon

const AboutUs = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 text-primary"><i className="bi bi-book me-2"></i>About Our School</h1>
      
      <Card className="mb-5 border-primary">
        <Card.Body>
          <h2 className="text-primary"><i className="bi bi-clock-history me-2"></i>Our History</h2>
          <p>Founded in 19XX, our school has a rich history of academic excellence and community engagement. We've grown from a small local school to a renowned institution, adapting to meet the evolving needs of our students.</p>
        </Card.Body>
      </Card>

      <Card className="mb-5 border-success">
        <Card.Body>
          <h2 className="text-success"><i className="bi bi-info-circle me-2"></i>About Our School</h2>
          <p>We provide a high-quality education that prepares students for success. Our environment fosters creativity, critical thinking, and character development.</p>
        </Card.Body>
      </Card>

      <Row className="mb-5">
        <Col md={4}>
          <Card className="h-100 border-warning">
            <Card.Body className="text-center">
              <h3 className="text-warning"><i className="bi bi-quote me-2"></i>Motto</h3>
              <p>"Learning Today, Leading Tomorrow"</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-info">
            <Card.Body className="text-center">
              <h3 className="text-info"><i className="bi bi-eye me-2"></i>Vision</h3>
              <p>To be a leading institution shaping innovative thinkers and global citizens.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-danger">
            <Card.Body className="text-center">
              <h3 className="text-danger"><i className="bi bi-bullseye me-2"></i>Mission</h3>
              <p>We aim to provide a comprehensive education that prepares students to thrive in an interconnected world.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-5 border-secondary">
        <Card.Body>
          <Row>
          <Col md={4}>
              <Image src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="principal-image mb-3" alt="Principal" />
             </Col>

            <Col md={8}>
              <h2 className="text-secondary"><i className="bi bi-chat-quote me-2"></i>Message from the Principal</h2>
              <blockquote className="blockquote">
                <p>"Welcome to our school. Our dedicated staff and innovative programs ensure students reach their full potential."</p>
                <footer className="blockquote-footer">Dr.Peter M , Principal</footer>
              </blockquote>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Core Values */}
      <h2 className="text-center mb-4 text-primary"><i className="bi bi-star me-2"></i>Our 7 Core Values</h2>
      <Row className="mb-5">
        {[
          { value: 'Integrity', icon: 'shield-check', color: 'success' },
          { value: 'Excellence', icon: 'trophy', color: 'info' },
          { value: 'Respect', icon: 'people', color: 'primary' },
          { value: 'Innovation', icon: 'lightbulb', color: 'warning' },
          { value: 'Collaboration', icon: 'people-fill', color: 'danger' },
          { value: 'Diversity', icon: 'globe', color: 'secondary' },
          { value: 'Responsibility', icon: 'check-circle', color: 'success' }
        ].map((item, index) => (
          <Col key={index} md={3} sm={6} className="mb-3">
            <Card className={`text-center h-100 border-${item.color} core-value-card`}>
              <Card.Body>
                <i className={`bi bi-${item.icon} fs-1 text-${item.color} mb-3`}></i>
                <h4 className={`text-${item.color}`}>{item.value}</h4>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* School Facilities */}
      <h2 className="text-center mb-4 text-primary"><i className="bi bi-building me-2"></i>School Facilities</h2>
      <Row>
        {[
          { name: 'Science Lab', icon: < FaMicroscope />, color: 'success', description: 'Our state-of-the-art science labs provide hands-on learning in physics, chemistry, and biology.' },
          { name: 'Computer Lab', icon: 'laptop', color: 'info', description: 'Equipped with modern computers, our lab ensures students stay at the forefront of technology.' },
          { name: 'Library', icon: 'book', color: 'warning', description: 'Our library offers a vast collection of books and resources to support academic research and personal growth.' },
          { name: 'Classrooms', icon: 'pencil-square', color: 'danger', description: 'Our classrooms are designed for interactive learning, fostering a collaborative environment.' }
        ].map((facility, index) => (
          <Col key={index} md={3} sm={6} className="mb-3">
            <Card className={`text-center h-100 border-${facility.color} facility-card`}>
              <Card.Body>
                <i className={`bi bi-${facility.icon} fs-1 text-${facility.color} mb-2`}></i>
                <h4 className={`text-${facility.color}`}>{facility.name}</h4>
                <p>{facility.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
