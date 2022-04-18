import React from 'react';
import Contact from '../components/Contact.js';
import Testimonios from '../components/Testimonios.js';
import Promotions from '../components/Promotions.js';
import '../App.css';

const Home = () => {
  return (
    <div>
      <Contact />
      <Promotions /><br /><br />
      <Testimonios />
    </div>
  );
}

export default Home;
