
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import News from './pages/News';
// import Gallery from './pages/Gallery';
// import Alumni from './pages/Alumni';
// import Contact from './pages/Contact';


// function App() {
//   return (
//     <Router>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/academics" element={<Academics />} />
//         <Route path="/admissions" element={<Admissions />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/alumni" element={<Alumni />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import './App.css';  // Import the custom CSS for layout
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavigationBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
