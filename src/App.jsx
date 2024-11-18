// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import VendorLogin from './pages/VendorLogin';
import VendorRegister from './pages/VendorRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/signup" element={<UserRegister />} />
        
        
        <Route path="/vendorlogin" element={<VendorLogin />} />
        <Route path="/vendorsignup" element={<VendorRegister />} />
        
      </Routes>
    </Router>
  );
}

export default App;
