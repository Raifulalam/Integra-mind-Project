import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/login';
import ForgotPassword from './Pages/Forgot';
import Register from './Pages/Register';
import EditUserInfo from './Components/EditUser';

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<NavBar />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edituser" element={<EditUserInfo />} />

      </Routes>
    </Router>
  );
}

export default App;

