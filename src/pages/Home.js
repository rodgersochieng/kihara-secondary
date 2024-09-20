
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

// Sample data for teachers, parents' reviews, and board members
const teachers = [
  {
    name: "John Doe",
    experience: 5,
    role: "Math Teacher",
    education: "M.Sc. in Mathematics",
    photo: "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Jane Smith",
    experience: 8,
    role: "English Teacher",
    education: "M.A. in English Literature",
    photo: "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "John Doe",
    experience: 5,
    role: "Math Teacher",
    education: "M.Sc. in Mathematics",
    photo: "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  // Add more teachers here
];

const reviews = [
  { parent: 'John’s Parent', text: 'Wonderful school with excellent teachers.', photo: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGFyZW50fGVufDB8fDB8fHww' },
  { parent: 'Jane’s Parent', text: 'My daughter loves the school!', photo: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwcGFyZW50fGVufDB8fDB8fHww' },
  // Add more reviews here
];

const boardMembers = [
  { name: "Mr. Mbogo K", position: "Chairman", photo: "https://plus.unsplash.com/premium_photo-1723291331030-d6874d63e5bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9hcmQlMjBtZWV0aW5nfGVufDB8fDB8fHww" },
  { name: "Ms. Okoth", position: "Secretary", photo: "https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9hcmQlMjBtZWV0aW5nJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D" },
  { name: "Ms. Kanini", position: "Member", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D" },


  // Add more board members
];

// Teacher Card Component
const TeacherCard = ({ teacher }) => (
  <Card className="border-0 text-center bg-transparent">
    <Card.Img variant="top"
      src={teacher.photo || "https://via.placeholder.com/150?text=Avatar"}
      className="rounded-circle mx-auto mb-3"
      style={{
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        border: '4px solid #fff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
      }} />
    <Card.Body>
      <Card.Title className="text-dark">{teacher.name}</Card.Title>
      <Card.Text className="text-muted" style={{ fontStyle: 'italic' }}>
        {teacher.role} <br />
        {teacher.education} <br />
        Experience: {teacher.experience} years
      </Card.Text>
    </Card.Body>
  </Card>
);

// Main Component for the School Homepage
const SchoolHomepage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="mt-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="text-primary" style={{ fontStyle: 'italic', letterSpacing: '2px' }}>Kihara Secondary School</h1>
      </header>

      {/* Welcome Section */}
      <section className="mb-5">
        <h2 className="text-dark" style={{ fontStyle: 'italic' }}>Welcome to Our School</h2>
        <p className="text-muted" style={{ fontStyle: 'italic' }}>A brief introduction about the school...</p>
      </section>

      {/* Principal Section */}
      <section className="mb-5 d-flex align-items-center">
        <img src="https://media.istockphoto.com/id/522130231/photo/businessman-icon.jpg?s=612x612&w=is&k=20&c=uOPy3IB5dOVqnbwc7bHqk5sn7fSEWw1Q_7DuM0kCnxg=" alt="Principal"
          className="rounded-circle me-4" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <div>
          <h3 className="text-dark" style={{ fontStyle: 'italic' }}>Message from the Principal</h3>
          <p className="text-muted" style={{ fontStyle: 'italic' }}>We welcome you to Kihara Secondary School, where excellence meets dedication.</p>
        </div>
      </section>

      {/* Motto, Vision, Mission Section */}
      <Row className="mb-5">
        {['Motto', 'Vision', 'Mission'].map((item, index) => (
          <Col md={4} className="mb-3" key={index}>
            <div className={`bg-${['light', 'white', 'light'][index]} text-dark p-4 h-100 rounded`} style={{
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              fontStyle: 'italic',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <h4 className="text-primary">{item}</h4>
              <p>Our {item.toLowerCase()} is to nurture excellence in every student...</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* Teachers Section */}
      <section className="mb-5">
        <h3 className="text-center mb-4 text-dark" style={{ fontStyle: 'italic' }}>Meet Our Teachers</h3>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="mx-auto" style={{ maxWidth: '80%' }}>
          {Array.from({ length: Math.ceil(teachers.length / 3) }).map((_, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {teachers.slice(idx * 3, idx * 3 + 3).map((teacher, teacherIdx) => (
                  <Col key={teacherIdx} xs={12} sm={6} md={4} className="mb-4">
                    <TeacherCard teacher={teacher} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* What Parents Are Saying Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-dark" style={{ fontStyle: 'italic' }}>What Parents Are Saying </h2>
        <Carousel interval={3000} className="text-center mx-auto" style={{ maxWidth: '600px' }}>
          {reviews.map((review, idx) => (
            <Carousel.Item key={idx}>
              <img src={review.photo} alt={review.parent} 
                   className="rounded-circle mx-auto" 
                   style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <p className="mt-3">{review.text}</p>
              <footer>— {review.parent}</footer>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Board Members Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-dark" style={{ fontStyle: 'italic' }}>Board Members</h2>
        <Row className="justify-content-center">
          {boardMembers.map((member, idx) => (
            <Col key={idx} xs={12} sm={6} md={3} className="mb-4 text-center">
              <img src={member.photo} 
                   alt={member.name} 
                   className="rounded-circle mb-3" 
                   style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default SchoolHomepage;


