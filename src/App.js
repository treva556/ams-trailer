

//////App code 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming you have Tailwind configured here
import Careers from './pages/careers';
import Home from './pages/home'; // Home component
import Nav from './components/nav';
import Footer from './components/footer';
// import About from './sections/About'; // About component
import Mgm from './pages/management';
import Navbar from './components/navbar';


function App() {
  return (
    
    <Router>
      <div className="App">
        {/* <Nav/> */}
        <div className=' bg-black'>
        <Navbar/>
        </div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mgm" element={<Mgm />} />
          <Route path="/careers" element={<Careers/>} />
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;


////