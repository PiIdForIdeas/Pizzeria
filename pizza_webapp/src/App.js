import React from 'react';
import './Styles/styleNav.css';
import './Styles/styleFooter.css';
import './Styles/styleHome.css';
import './Styles/styleInvoice.css';
import './Styles/styleList.css';
import Nav from './Pages/Nav.js';
import Home from './Pages/Home.js';
import ListProducts from './Pages/ListProducts.js';
import Invoice from './Pages/Invoice.js';
import Footer from './Pages/Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Invoice />
      {/* <Home />
      <ListProducts /> */}
      <Footer />
    </div>
  );
}

export default App;