// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Line } from 'react-chartjs-2'; // Assuming you're using chart.js for the performance graph
// import 'chart.js/auto'; // To avoid issues with registering chart types
// // import './Academics.css'; 

// const Academics = () => {
//   // Sample data for progressive performance graph
//   const data = {
//     labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
//     datasets: [
//       {
//         label: 'Performance',
//         data: [65, 70, 75, 80, 85, 90, 95],
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(75,192,192,1)',
//       },
//       {
//         label: 'University Entries',
//         data: [50, 55, 60, 70, 75, 85, 90],
//         fill: false,
//         backgroundColor: 'rgba(153,102,255,1)',
//         borderColor: 'rgba(153,102,255,1)',
//       },
//     ],
//   };

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-5 text-primary"><i className="bi bi-book me-2"></i>Academics</h1>

//       {/* Academic Overview Section */}
//       <Card className="mb-5 border-primary">
//         <Card.Body>
//           <h2 className="text-primary"><i className="bi bi-info-circle me-2"></i>Overview</h2>
//           <p>Our school offers a comprehensive academic program designed to foster critical thinking, creativity, and a passion for learning. Our curriculum is aligned with national standards, ensuring our students receive the best education possible.</p>
//         </Card.Body>
//       </Card>

//       {/* Awards Section */}
//       <Card className="mb-5 border-warning">
//         <Card.Body>
//           <h2 className="text-warning"><i className="bi bi-award me-2"></i>Awards</h2>
//           <p>We are proud to be awarded the <strong>Best Day School in Kiambaa</strong> from 2018 to date. This recognition is a testament to our commitment to academic excellence and community involvement.</p>
//         </Card.Body>
//       </Card>

//       {/* Departments Section */}
//       <h2 className="text-center mb-4 text-primary"><i className="bi bi-building me-2"></i>Departments</h2>
//       <Row className="mb-5">
//         {[
//           { name: 'Science', icon: 'bi-flask', description: 'Our Science department offers courses in Physics, Chemistry, and Biology, with well-equipped labs.' },
//           { name: 'Mathematics', icon: 'bi-calculator', description: 'Our Mathematics department focuses on developing analytical skills and problem-solving techniques.' },
//           { name: 'Languages', icon: 'bi-book', description: 'Our Languages department offers courses in English, Kiswahili, and foreign languages.' },
//           { name: 'Humanities', icon: 'bi-globe', description: 'Our Humanities department includes History, Geography, and Religious Studies.' },
//           { name: 'Computer Lab', icon: 'bi-laptop', description: 'Equipped with modern computers, our lab ensures students stay at the forefront of technology.' },
//           { name: 'Business Studies', icon: 'bi-briefcase', description: 'Our Business Studies department provides practical and theoretical knowledge about the business world.' },
//           { name: 'Home Science', icon: 'bi-house', description: 'Our Home Science department equips students with essential life skills including cooking, textiles, and nutrition.' }
//         ].map((dept, index) => (
//           <Col key={index} md={3} sm={6} className="mb-3">
//             <Card className="text-center h-100 border-primary department-card">
//               <Card.Body>
//                 <i className={`bi ${dept.icon} fs-1 text-primary mb-3`}></i>
//                 <h4 className="text-primary">{dept.name}</h4>
//                 <p>{dept.description}</p>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Curriculum Section */}
//       <Card className="mb-5 border-success">
//         <Card.Body>
//           <h2 className="text-success"><i className="bi bi-journal-bookmark me-2"></i>Curriculum</h2>
//           <p>Our curriculum is designed to provide a well-rounded education, focusing on academic excellence as well as personal growth. We follow a national curriculum with additional enrichment programs to challenge our students and prepare them for future success.</p>
//         </Card.Body>
//       </Card>

//       {/* Academic Performance Section */}
//       <Card className="mb-5 border-info">
//         <Card.Body>
//           <h2 className="text-info"><i className="bi bi-bar-chart me-2"></i>Academic Performance</h2>
//           <p>Our students consistently perform well in national examinations, with many progressing to prestigious universities both locally and abroad. Below is a progressive graph showing our performance trends and university entries from 2010 to now:</p>
//           <Line data={data} />
//         </Card.Body>
//       </Card>

//       {/* Extracurricular Activities Section */}
//       <Card className="mb-5 border-secondary">
//         <Card.Body>
//           <h2 className="text-secondary"><i className="bi bi-people me-2"></i>Extracurricular Activities</h2>
//           <p>Our school offers a variety of extracurricular activities to help students develop leadership skills, teamwork, and personal responsibility. These include:</p>
//           <Row>
//             {[
//               { name: 'Sports', icon: 'bi-trophy' },
//               { name: 'Science Congress', icon: 'bi-flask' },
//               { name: 'Academic Competitions', icon: 'bi-graph-up' },
//               { name: 'Music', icon: 'bi-music-note-beamed' },
//               { name: 'Drama', icon: 'bi-film' },
//               { name: 'Clubs', icon: 'bi-people' }
//             ].map((activity, index) => (
//               <Col key={index} md={2} sm={4} className="text-center mb-3">
//                 <i className={`bi ${activity.icon} fs-1 text-secondary`}></i>
//                 <h6>{activity.name}</h6>
//               </Col>
//             ))}
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Academics;



import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import {
  FaFlask,
  FaCalculator,
  FaBook,
  FaGlobe,
  FaLaptop,
  FaBriefcase,
  FaHouseUser,
  FaTrophy,
  FaMusic,
  FaFilm,
  FaUsers,
  FaInfoCircle,
  FaBuilding,
  FaChartLine
} from 'react-icons/fa';

const Academics = () => {
  const [flipped, setFlipped] = useState({});

  const data = {
    labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 70, 75, 80, 85, 90, 95],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'University Entries',
        data: [50, 55, 60, 70, 75, 85, 90],
        fill: false,
        backgroundColor: 'rgba(153,102,255,1)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const handleFlip = (index) => {
    setFlipped(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <Container className="py-5">
      <style>
        {`
          .department-card {
            transition: transform 0.3s ease-in-out;
          }
          .department-card:hover {
            transform: scale(1.05);
          }
          .extracurricular-card {
            perspective: 1000px;
            height: 150px;
            cursor: pointer;
          }
          .extracurricular-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .extracurricular-card.flipped .extracurricular-inner {
            transform: rotateY(180deg);
          }
          .extracurricular-front, .extracurricular-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .extracurricular-back {
            background-color: #f8f9fa;
            transform: rotateY(180deg);
          }
        `}
      </style>

      <h1 className="text-center mb-5 text-success"><FaBook className="me-2" />Academics</h1>

      <Card className="mb-5 border-success">
        <Card.Body>
          <h2 className="text-success"><FaInfoCircle className="me-2" />Overview</h2>
          <p>Our school offers a comprehensive academic program designed to foster critical thinking, creativity, and a passion for learning. Our curriculum is aligned with national standards, ensuring our students receive the best education possible.</p>
        </Card.Body>
      </Card>

      <Card className="mb-5 border-danger">
        <Card.Body>
          <h2 className="text-danger"><FaTrophy className="me-2" />Awards</h2>
          <p>We are proud to be awarded the <strong>Best Day School in Kiambaa</strong> from 2018 to date. This recognition is a testament to our commitment to academic excellence and community involvement.</p>
        </Card.Body>
      </Card>

      <h2 className="text-center mb-4 text-success"><FaBuilding className="me-2" />Departments</h2>
      <Row className="mb-5">
        {[
          { name: 'Science', icon: <FaFlask />, description: 'Our Science department offers courses in Physics, Chemistry, and Biology, with well-equipped labs.', color: 'success' },
          { name: 'Mathematics', icon: <FaCalculator />, description: 'Our Mathematics department focuses on developing analytical skills and problem-solving techniques.', color: 'secondary' },
          { name: 'Languages', icon: <FaBook />, description: 'Our Languages department offers courses in English, Kiswahili, and foreign languages.', color: 'danger' },
          { name: 'Humanities', icon: <FaGlobe />, description: 'Our Humanities department includes History, Geography, and Religious Studies.', color: 'success' },
          { name: 'Computer Lab', icon: <FaLaptop />, description: 'Equipped with modern computers, our lab ensures students stay at the forefront of technology.', color: 'secondary' },
          { name: 'Business Studies', icon: <FaBriefcase />, description: 'Our Business Studies department provides practical and theoretical knowledge about the business world.', color: 'danger' },
          { name: 'Home Science', icon: <FaHouseUser />, description: 'Our Home Science department equips students with essential life skills including cooking, textiles, and nutrition.', color: 'success' }
        ].map((dept, index) => (
          <Col key={index} md={3} sm={6} className="mb-3">
            <Card className={`text-center h-100 border-${dept.color} department-card`}>
              <Card.Body>
                <span className={`fs-1 text-${dept.color} mb-3`}>{dept.icon}</span>
                <h4 className={`text-${dept.color}`}>{dept.name}</h4>
                <p>{dept.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mb-5 border-success">
        <Card.Body>
          <h2 className="text-success"><FaBook className="me-2" />Curriculum</h2>
          <p>Our curriculum is designed to provide a well-rounded education, focusing on academic excellence as well as personal growth. We follow a national curriculum with additional enrichment programs to challenge our students and prepare them for future success.</p>
        </Card.Body>
      </Card>

      <Card className="mb-5 border-info">
        <Card.Body>
          <h2 className="text-info"><FaChartLine className="me-2" />Academic Performance</h2>
          <p>Our students consistently perform well in national examinations, with many progressing to prestigious universities both locally and abroad. Below is a progressive graph showing our performance trends and university entries from 2010 to now:</p>
          <Line data={data} />
        </Card.Body>
      </Card>

      <Card className="mb-5 border-secondary">
        <Card.Body>
          <h2 className="text-secondary"><FaUsers className="me-2" />Extracurricular Activities</h2>
          <p>Our school offers a variety of extracurricular activities to help students develop leadership skills, teamwork, and personal responsibility. These include:</p>
          <Row>
            {[
              { name: 'Sports', icon: <FaTrophy />, color: 'success', awards: ['Regional Champions 2022', 'Regional Champions 2023'] },
              { name: 'Science Congress', icon: <FaFlask />, color: 'danger', awards: ['Regional Champions 2021', 'Regional Champions 2022'] },
              { name: 'Academic Competitions', icon: <FaChartLine />, color: 'secondary', awards: ['Regional Champions 2020', 'Regional Champions 2021'] },
              { name: 'Music', icon: <FaMusic />, color: 'success', awards: ['Regional Champions 2019', 'Regional Champions 2022'] },
              { name: 'Drama', icon: <FaFilm />, color: 'danger', awards: ['Regional Champiosn 2021', 'Regional Champions 2022'] },
              { name: 'Clubs', icon: <FaUsers />, color: 'secondary', awards: ['Regional Champions 2020', 'Regional Champions 2021'] }
            ].map((activity, index) => (
              <Col key={index} md={2} sm={4} className="mb-3">
                <div 
                  className={`extracurricular-card ${flipped[index] ? 'flipped' : ''}`} 
                  onClick={() => handleFlip(index)}
                >
                  <div className="extracurricular-inner">
                    <div className="extracurricular-front">
                      <span className={`fs-1 text-${activity.color}`}>{activity.icon}</span>
                      <h6 className={`text-${activity.color}`}>{activity.name}</h6>
                    </div>
                    <div className="extracurricular-back">
                      {activity.awards.map((award, i) => (
                        <p key={i} className="text-dark mb-1">{award}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Academics;