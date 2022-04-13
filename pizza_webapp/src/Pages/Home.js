import React from 'react';
import Contact from '../Components/Contact.js';
import Testimonios from '../Components/Testimonios.js';
import Promotions from '../Components/Promotions.js';
import '../App.css';

function Home() {
  return (
    <div>
      <Contact />
      <Promotions /><br /><br />
      <Testimonios />
    </div>
  );
}

export default Home;
