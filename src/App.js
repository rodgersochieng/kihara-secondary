// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/academics" component={Academics} />
//         <Route path="/admissions" component={Admissions} />
//         <Route path="/news" component={News} />
//         <Route path="/gallery" component={Gallery} />
//         <Route path="/alumni" component={Alumni} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


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


function App() {
  return (
    <Router>
      <NavigationBar />
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
      <Footer />
    </Router>
  );
}

export default App;

