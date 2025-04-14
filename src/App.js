// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CafeNavbar from './components/CafeNavbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Location from './pages/Location';
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Checkout from './pages/Checkout';
import CarouselHero from './components/CarouselHero';

function App() {
  return (
    <Router>
      <CafeNavbar />
      <div className="container mt-4">
        <CarouselHero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
