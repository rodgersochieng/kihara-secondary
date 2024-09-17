
// import React from 'react';
// import './Home.css'; // Import your custom CSS file for styling

// const HomePage = () => {
//   return (
//     <div>
//       {/* Introduction Section */}
//       <section id="introduction">
//         <div className="intro-container">
//           <h1>Welcome to Kihara Secondary School</h1>
//           <p>Brief introduction about the school, history, and key achievements.</p>
//         </div>
//       </section>

//       {/* Principal's Welcome Section */}
//       <section id="principal-message">
//         <div className="principal-message-container">
//           <h2>A Welcome Message from Our Principal</h2>
//           <p>Message from the principal goes here...</p>
//         </div>
//       </section>

//       {/* Motto, Vision, and Mission Section */}
//       <section id="school-mvm">
//         <div className="motto" style={{ backgroundColor: '#FFA500' }}>
//           <h3>Motto</h3>
//           <p>Our school motto here...</p>
//         </div>
//         <div className="vision" style={{ backgroundColor: '#ADD8E6' }}>
//           <h3>Vision</h3>
//           <p>Our school vision here...</p>
//         </div>
//         <div className="mission" style={{ backgroundColor: '#90EE90' }}>
//           <h3>Mission</h3>
//           <p>Our school mission here...</p>
//         </div>
//       </section>

//       {/* Meet Our Teachers Section */}
//       <section id="meet-teachers">
//         <h2>Meet Our Teachers</h2>
//         <div className="teachers-container">
//           <div className="teacher-card">
//             <img src="teacher1.jpg" alt="Teacher 1" />
//             <h3>Teacher Name 1</h3>
//             <p>Subject: Mathematics</p>
//             <p>Years of Experience: 10</p>
//           </div>
//           <div className="teacher-card">
//             <img src="teacher2.jpg" alt="Teacher 2" />
//             <h3>Teacher Name 2</h3>
//             <p>Subject: English</p>
//             <p>Years of Experience: 8</p>
//           </div>
//           {/* Add more teacher cards here */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

// const teachers = [
//   { name: "John Doe", experience: 5, role: "Math Teacher", education: "M.Sc. in Mathematics", photo: "/api/placeholder/150/150" },
//   { name: "Jane Smith", experience: 8, role: "English Teacher", education: "M.A. in English Literature", photo: "/api/placeholder/150/150" },
//   { name: "Jane Smith", experience: 8, role: "English Teacher", education: "M.A. in English Literature", photo: "/api/placeholder/150/150" },
//   { name: "Jane Smith", experience: 8, role: "English Teacher", education: "M.A. in English Literature", photo: "/api/placeholder/150/150" },
//   { name: "Jane Smith", experience: 8, role: "English Teacher", education: "M.A. in English Literature", photo: "/api/placeholder/150/150" },



//   // Add more teachers here, up to 14 or more
// ];

// const TeacherCard = ({ teacher }) => (
//   <Card className="h-100 shadow-sm text-center">
//     <Card.Img variant="top" 
//               src={teacher.photo || "https://via.placeholder.com/150?text=Avatar"} 
//               className="rounded-circle mx-auto" 
//               style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//     <Card.Body>
//       <Card.Title>{teacher.name}</Card.Title>
//       <Card.Text>
//         Years of Experience: {teacher.experience}<br />
//         Role: {teacher.role}<br />
//         Education: {teacher.education}
//       </Card.Text>
//     </Card.Body>
//   </Card>
// );

// const SchoolHomepage = () => {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const reviews = [
//     { parent: 'John’s Parent', text: 'Wonderful school with excellent teachers.', photo: '/api/placeholder/50/50' },
//     { parent: 'Jane’s Parent', text: 'My daughter loves the school!', photo: '/api/placeholder/50/50' },
//     // Add more reviews here
//   ];

//   const boardMembers = [
//     { name: "Mr. X", position: "Chairman", photo: "/api/placeholder/100/100" },
//     { name: "Ms. Y", position: "Secretary", photo: "/api/placeholder/100/100" },
//     // Add more board members
//   ];

//   return (
//     <Container className="mt-5">
//       <header className="text-center mb-5">
//         <h1>School Name</h1>
//       </header>

//       <section className="mb-5">
//         <h2>Welcome to Our School</h2>
//         <p>Brief introduction about the school goes here...</p>
//       </section>

//       <section className="mb-5 d-flex align-items-center">
//         <img src="/api/placeholder/150/150" alt="Principal" className="rounded-circle me-4" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
//         <div>
//           <h2>Welcome Message from the Principal</h2>
//           <div className="position-relative">
//             <i className="bi bi-quote fs-1 text-primary position-absolute" style={{ top: '-15px', left: '-60px' }}></i>
//             <p className="lead ms-5">Principal's welcome message goes here...</p>
//           </div>
//         </div>
//       </section>

//       <Row className="mb-5">
//         {['Motto', 'Vision', 'Mission'].map((item, index) => (
//           <Col md={4} className="mb-3" key={index}>
//             <div className={`bg-${['primary', 'success', 'info'][index]} text-white p-4 h-100 rounded`} 
//                  style={{ transition: 'all 0.3s ease' }}
//                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
//               <h3>{item}</h3>
//               <p>Our {item.toLowerCase()} goes here...</p>
//             </div>
//           </Col>
//         ))}
//       </Row>

//       <section className="mb-5">
//         <h2 className="text-center mb-4">Meet Our Teachers</h2>
//         <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="mx-auto" style={{ maxWidth: '90%' }}>
//           {Array.from({ length: Math.ceil(teachers.length / 4) }).map((_, idx) => (
//             <Carousel.Item key={idx}>
//               <Row className="justify-content-center">
//                 {teachers.slice(idx * 4, idx * 4 + 4).map((teacher, teacherIdx) => (
//                   <Col key={teacherIdx} xs={12} sm={6} md={3} className="mb-4">
//                     <TeacherCard teacher={teacher} />
//                   </Col>
//                 ))}
//               </Row>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </section>

//       <section className="mb-5">
//         <h2 className="text-center mb-4">What Parents Are Saying</h2>
//         <Carousel interval={3000} className="text-center mx-auto" style={{ maxWidth: '600px' }}>
//           {reviews.map((review, idx) => (
//             <Carousel.Item key={idx}>
//               <img src={review.photo || "https://via.placeholder.com/50"} alt={review.parent} 
//                    className="rounded-circle mx-auto" 
//                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
//               <p className="mt-3">{review.text}</p>
//               <footer>— {review.parent}</footer>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </section>

//       <section className="mb-5">
//         <h2 className="text-center mb-4">Board Members</h2>
//         <Row className="justify-content-center">
//           {boardMembers.map((member, idx) => (
//             <Col key={idx} xs={12} sm={6} md={3} className="mb-4 text-center">
//               <img src={member.photo || "https://via.placeholder.com/100"} 
//                    alt={member.name} 
//                    className="rounded-circle mb-3" 
//                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//               <h4>{member.name}</h4>
//               <p>{member.position}</p>
//             </Col>
//           ))}
//         </Row>
//       </section>
//     </Container>
//   );
// };

// export default SchoolHomepage;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const teachers = [
  { name: "John Doe", experience: 5, role: "Math Teacher", education: "M.Sc. in Mathematics", photo: "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Jane Smith", experience: 8, role: "English Teacher", education: "M.A. in English Literature", photo: "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // Add more teachers here, up to 14 or more
];

const TeacherCard = ({ teacher }) => (
  <Card className="border-0 shadow-sm text-center rounded-lg overflow-hidden">
    <Card.Img variant="top" 
              src={teacher.photo || "https://via.placeholder.com/150?text=Avatar"} 
              className="rounded-circle mx-auto mt-3" 
              style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
    <Card.Body className="py-4">
      <Card.Title className="h5 mb-2">{teacher.name}</Card.Title>
      <Card.Text className="text-muted">
        <div>Experience: {teacher.experience} years</div>
        <div>Role: {teacher.role}</div>
        <div>Education: {teacher.education}</div>
      </Card.Text>
    </Card.Body>
  </Card>
);

const SchoolHomepage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const reviews = [
    { parent: 'John’s Parent', text: 'Wonderful school with excellent teachers.', photo: "https://via.placeholder.com/50" },
    { parent: 'Jane’s Parent', text: 'My daughter loves the school!', photo: "https://via.placeholder.com/50" },
    // Add more reviews here
  ];

  const boardMembers = [
    { name: "Mr. X", position: "Chairman", photo: "https://via.placeholder.com/100" },
    { name: "Ms. Y", position: "Secretary", photo: "https://via.placeholder.com/100" },
    // Add more board members
  ];

  return (
    <Container className="mt-5">
      <header className="text-center mb-5">
        <h1 className="display-3 font-weight-bold text-primary">School Name</h1>
      </header>

      <section className="mb-5 text-center">
        <h2 className="display-4 font-weight-light">Welcome to Our School</h2>
        <p className="lead text-muted">Brief introduction about the school goes here...</p>
      </section>

      <section className="mb-5 d-flex align-items-center justify-content-center">
        <img src="https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Principal" className="rounded-circle me-4" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
        <div>
          <h2 className="display-5 font-weight-light">Welcome Message from the Principal</h2>
          <div className="position-relative mt-4">
            <i className="bi bi-quote fs-2 text-primary position-absolute" style={{ top: '-20px', left: '-40px' }}></i>
            <p className="lead ms-5">Principal's welcome message goes here...</p>
          </div>
        </div>
      </section>

      <Row className="mb-5">
        {['Motto', 'Vision', 'Mission'].map((item, index) => (
          <Col md={4} className="mb-3" key={index}>
            <div className={`bg-${['primary', 'success', 'info'][index]} text-white p-4 rounded-lg shadow-sm`} 
                 style={{ transition: 'transform 0.3s ease' }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <h3 className="mb-3">{item}</h3>
              <p>Our {item.toLowerCase()} goes here...</p>
            </div>
          </Col>
        ))}
      </Row>

      <section className="mb-5">
        <h2 className="text-center mb-4 font-weight-light">Meet Our Teachers</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="mx-auto" style={{ maxWidth: '80%' }}>
          {Array.from({ length: Math.ceil(teachers.length / 4) }).map((_, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {teachers.slice(idx * 4, idx * 4 + 4).map((teacher, teacherIdx) => (
                  <Col key={teacherIdx} xs={12} sm={6} md={3} className="mb-4">
                    <TeacherCard teacher={teacher} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="mb-5">
        <h2 className="text-center mb-4 font-weight-light">What Parents Are Saying</h2>
        <Carousel interval={3000} className="text-center mx-auto" style={{ maxWidth: '600px' }}>
          {reviews.map((review, idx) => (
            <Carousel.Item key={idx}>
              <img src={review.photo || "https://via.placeholder.com/50"} alt={review.parent} 
                   className="rounded-circle mx-auto" 
                   style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <p className="mt-3">{review.text}</p>
              <footer className="mt-2 text-muted">— {review.parent}</footer>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="mb-5">
        <h2 className="text-center mb-4 font-weight-light">Board Members</h2>
        <Row className="justify-content-center">
          {boardMembers.map((member, idx) => (
            <Col key={idx} xs={12} sm={6} md={3} className="mb-4 text-center">
              <img src={member.photo || "https://via.placeholder.com/100"} 
                   alt={member.name} 
                   className="rounded-circle mb-3" 
                   style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <h4 className="mb-1">{member.name}</h4>
              <p className="text-muted">{member.position}</p>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default SchoolHomepage;

