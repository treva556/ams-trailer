

//////App code 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming you have Tailwind configured here
// import Services from './pages/services';
import Home from './pages/home'; // Home component
import Nav from './components/nav';
import Footer from './components/footer';
// import About from './sections/About'; // About component
import Mgm from './pages/management';
function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mgm" element={<Mgm />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;


////