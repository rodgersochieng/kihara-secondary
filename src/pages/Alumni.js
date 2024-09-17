
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
// import { FaUserGraduate, FaCalendarAlt, FaLink, FaEnvelope, FaPhone, FaDonate, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaUserGraduate, FaCalendarAlt, FaLink, FaEnvelope, FaPhone, FaDonate, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Alumni = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#2C3E50' }}>Alumni</h1>

      {/* Welcome Message */}
      <Card className="mb-5 border-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-dark" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Welcome Alumni  🤝🏾  </h2>
          <p>Welcome to the alumni page of Kihara Secondary School! We are proud of our graduates and their accomplishments. Stay connected with us to keep up with the latest news, events, and opportunities.</p>
        </Card.Body>
      </Card>

      {/* Alumni Success Stories */}
      <Card className="mb-5 border-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-primary" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
            <FaUserGraduate className="me-2" /> Alumni Success Stories
          </h2>
          <Row>
            {[
              { name: 'Jane Doe', achievement: 'CEO at TechCorp', description: 'Jane has been leading TechCorp with innovation and vision. Her journey from Kihara Secondary School to the top of the tech industry is truly inspiring.' },
              { name: 'John Smith', achievement: 'Renowned Scientist', description: 'John’s groundbreaking research in environmental science has earned him numerous accolades. His work continues to make a significant impact on global environmental policies.' }
            ].map((alumnus, index) => (
              <Col key={index} md={6} className="mb-4">
                <Card className="border-primary" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <Card.Body>
                    <h5 className="text-primary" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>{alumnus.name}</h5>
                    <p className="text-muted">{alumnus.achievement}</p>
                    <p>{alumnus.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Alumni Events */}
      <Card className="mb-5 border-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-success" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
            <FaCalendarAlt className="me-2" /> Alumni Events
          </h2>
          <p>Stay updated with upcoming alumni events and reunions. Join us for networking opportunities and reconnect with old friends.</p>
          <Row>
            {[
              { event: 'Annual Alumni Reunion', date: 'December 10, 2024', details: 'Join us for our annual reunion where alumni from all years gather for an evening of fun and reminiscing. Don’t miss this chance to catch up with old friends and make new connections!' },
              { event: 'Career Networking Event', date: 'November 5, 2024', details: 'A networking event designed to help alumni connect with professionals and explore new career opportunities. Perfect for those looking to advance their careers or explore new paths.' }
            ].map((event, index) => (
              <Col key={index} md={6} className="mb-4">
                <Card className="border-success" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <Card.Body>
                    <h5 className="text-success" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>{event.event}</h5>
                    <p className="text-muted"><FaCalendarAlt className="me-2" /> {event.date}</p>
                    <p>{event.details}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Stay Connected */}
      {/* <Card className="mb-5 border-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-info" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
            <FaLink className="me-2" /> Stay Connected
          </h2>
          <p>Follow us on social media to stay updated with the latest news and connect with fellow alumni:</p>
          <div className="d-flex justify-content-center">
            <Button variant="info" className="me-2" href="https://www.facebook.com" target="_blank"><FaFacebook /> Facebook</Button>
            <Button variant="info" className="me-2" href="https://www.linkedin.com" target="_blank"><FaLinkedin /> LinkedIn</Button>
            <Button variant="info" className="me-2" href="https://twitter.com" target="_blank"><FaTwitter /> Twitter</Button>
            <Button variant="info" className="me-2" href="https://wa.me/123456789" target="_blank"><FaWhatsapp /> WhatsApp</Button>
          </div>
        </Card.Body>
      </Card> */}


<Card className="mb-5 border-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-info" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
            <FaLink className="me-2" /> Stay Connected
          </h2>
          <p>Follow us on social media to stay updated with the latest news and connect with fellow alumni:</p>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-2">
              <FaFacebookF size={30} color="#4267B2" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-2">
              <FaTwitter size={30} color="#1DA1F2" />
            </a>
            
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-2">
              <FaLinkedinIn size={30} color="#0077B5" />
            </a>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} color="#25D366" />
            </a>
          </div>
        </Card.Body>
      </Card>

      {/* Alumni Directory */}
      <Card className="mb-5 border-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-warning" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Alumni Directory</h2>
          <p>Search our directory to find and connect with fellow alumni. Log in to access detailed profiles and networking options.</p>
          <Button variant="warning">Access Directory</Button>
        </Card.Body>
      </Card>

      {/* Give Back Section */}
      <Card className="border-light mb-5" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-danger" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
            <FaDonate className="me-2" /> Give Back to Kihara Secondary School
          </h2>
          <p>Your support helps us continue providing excellent education and facilities for our students. Consider making a donation to help us achieve our goals.</p>
          <Button variant="danger" onClick={handleShow}>Donate Now</Button>
        </Card.Body>
      </Card>

      {/* Donation Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Donation Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To make a donation, please use the following payment details:</p>
          <ul>
            <li><strong>Bank Name:</strong> Example Bank</li>
            <li><strong>Account Name:</strong> Kihara Secondary School Donations</li>
            <li><strong>Account Number:</strong> 1234567890</li>
            <li><strong>Code:</strong> EXAMPLE123</li>
          </ul>
          <p>For more information or to donate via other methods, please contact us at <a href="mailto:donate@kihara.school">donate@kihara.school</a>.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Contact Information */}
      <Card className="border-light" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-dark" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Contact Us</h2>
          <p>If you have any questions or need further information, please reach out to our alumni office:</p>
          <p><FaEnvelope className="me-2" /> Email: <a href="mailto:alumni@kihara.school" className="text-dark">alumni@kihara.school</a></p>
          <p><FaPhone className="me-2" /> Phone: <a href="tel:+123456789" className="text-dark">+123 456 789</a></p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Alumni;

