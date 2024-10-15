import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import MineEmissionCalculator from './components/ui/MineEmissionCalculator';
import HomePage from './components/ui/HomePage';
import Footer from './components/ui/Footer';
// import ServicesPage from './components/ServicesPage';
// import AboutPage from './components/AboutPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<MineEmissionCalculator />} />
          
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;