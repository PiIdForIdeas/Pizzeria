import React from 'react';
import './styleNav.css';
import './styleFooter.css';
import Nav from './Nav.js';
import Home from './Pages/Home.js'
import ListProducts from './Pages/ListProducts.js'
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <ListProducts />
      <Footer />
    </div>
  );
}

export default App;