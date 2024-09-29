

//////App code 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming you have Tailwind configured here
import Careers from './pages/careers';
import Home from './pages/home'; // Home component
// import Nav from './components/nav';
import Footer from './components/footer';
// import About from './sections/About'; // About component
import Mgm from './pages/management';
import Navbar from './components/navbar';
import Apply from './pages/applypage';
import Terms from './pages/ToS';


function App() {
  return (
    
    <Router>
    <div className="App">
      <div className=' bg-black'>
      <Navbar />
      </div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mgm" element={<Mgm />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  </Router>
    
  );
}

export default App;


////