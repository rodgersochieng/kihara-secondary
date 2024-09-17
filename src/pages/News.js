
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaNewspaper, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const News = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 text-primary" style={{ fontWeight: 'bold' }}>News</h1>

      {/* Latest News Section */}
      <Card className="mb-5 border-primary" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-primary" style={{ fontWeight: 'bold' }}>
            <FaNewspaper className="me-2" /> Latest News
          </h2>
          <Row>
            {[
              { title: 'Prize Giving', date: 'September 15, 2024', content: 'Our annual Prize Giving ceremony celebrated the achievements of our students across various fields. The event saw numerous students receiving awards for academic excellence, sports achievements, and extracurricular involvement. The highlight of the ceremony was the awarding of the Best Student of the Year, which was presented to Jane Doe for her outstanding performance throughout the year. It was a memorable day for students, parents, and staff alike.' },
              { title: 'Science Awards', date: 'August 10, 2024', content: 'The Science Awards ceremony recognized the innovative projects and research conducted by our students. Several students were awarded for their exceptional science projects, including a first-place award for a groundbreaking experiment in environmental science. The event also featured presentations by the award winners, showcasing their work to an audience of peers and faculty. This recognition highlights our commitment to fostering scientific curiosity and excellence among our students.' },
              { title: 'Form 3 Parents Meeting', date: 'July 5, 2024', content: 'The Form 3 Parents Meeting provided an opportunity for parents to engage with teachers about their children’s academic progress and future plans. Discussions included upcoming curriculum changes, examination preparations, and ways to support students at home. The meeting was well-attended, with many parents expressing appreciation for the open dialogue and the detailed insights provided by the teachers. This event is part of our ongoing effort to strengthen the partnership between home and school.' },
              { title: 'Form 4 Coaching/Mentorship', date: 'June 20, 2024', content: 'Our Form 4 Coaching and Mentorship sessions were designed to prepare students for their final examinations. These sessions included intensive review of key subjects, practice exams, and personalized mentoring from teachers and alumni. The program aimed to boost students’ confidence and provide them with the tools they need to succeed in their exams. Feedback from participants was overwhelmingly positive, with many noting significant improvements in their study strategies and exam readiness.' },
              { title: 'Form 4 Prayers Day', date: 'May 15, 2024', content: 'The Form 4 Prayers Day was a day of reflection and spiritual support for our final-year students. The event included a series of prayer sessions, motivational talks, and group discussions to help students prepare mentally and emotionally for their upcoming exams. It was a meaningful experience that allowed students to come together and support one another as they approach a critical stage in their academic journey. The event was marked by a sense of unity and shared purpose among students and staff.' },
              { title: 'School Cabinets/Prefects Tour', date: 'April 25, 2024', content: 'The School Cabinets and Prefects Tour gave students and parents a behind-the-scenes look at the roles and responsibilities of our student leaders. The tour included visits to various parts of the school where prefects and cabinet members carry out their duties, such as overseeing student activities, managing school events, and assisting with administrative tasks. This initiative aimed to highlight the important contributions of our student leaders and provide insight into their leadership experiences.' }
            ].map((news, index) => (
              <Col key={index} md={6} className="mb-4">
                <Card className="border-info" style={{ borderRadius: '10px' }}>
                  <Card.Body>
                    <h5 className="text-info" style={{ fontWeight: 'bold' }}>{news.title}</h5>
                    <p className="text-muted"><FaCalendarAlt className="me-2" /> {news.date}</p>
                    <p>{expanded === index ? news.content : `${news.content.substring(0, 150)}...`}</p>
                    <Button 
                      variant="info" 
                      onClick={() => handleExpand(index)}
                    >
                      {expanded === index ? 'Show Less' : 'Read More'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Archived News Section */}
      <Card className="mb-5 border-secondary" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <h2 className="text-secondary" style={{ fontWeight: 'bold' }}>
            <FaSearch className="me-2" /> Archived News
          </h2>
          <p>Browse past news articles and updates from our archives.</p>
          <Row>
            {[
              { title: 'Summer Camp Highlights', date: 'July 20, 2024' },
              { title: 'New Teacher Introduction', date: 'June 10, 2024' }
            ].map((news, index) => (
              <Col key={index} md={6} className="mb-4">
                <Card className="border-light" style={{ borderRadius: '10px' }}>
                  <Card.Body>
                    <h5 className="text-dark" style={{ fontWeight: 'bold' }}>{news.title}</h5>
                    <p className="text-muted"><FaCalendarAlt className="me-2" /> {news.date}</p>
                    <Button variant="light">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default News;

