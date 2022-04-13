import React from 'react';
import './styleNav.css';
import './styleFooter.css';
import Nav from './Nav.js';
import Carousel from './components/Carousel.js';
import Testimonios from './components/Testimonios.js';
import Footer from './Footer.js';
import './App.css';
//import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div>
      <Nav /><br />
      <Carousel /><br />
      <Testimonios />
      <Footer />
    </div>
  );
}

export default App;
