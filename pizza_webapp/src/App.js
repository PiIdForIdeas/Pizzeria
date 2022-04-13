import React from 'react';
import './styleNav.css';
import './styleFooter.css';
import Nav from './Nav.js';
import List from './Components/List.js';
import Testimonios from './Components/Testimonios.js';
import Promotions from './Components/Promotions.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <List />
      <Promotions /><br /><br />
      <Testimonios />
      <Footer />
    </div>
  );
}

export default App;
