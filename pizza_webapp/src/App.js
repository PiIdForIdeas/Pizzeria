import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './Styles/styleHome.css';
import './Styles/styleInvoice.css';
import './Styles/styleList.css';

import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Promotions from "./components/Promotions.js";
import Home from './pages/Home.jsx';
import ListProducts from './pages/ListProducts.js';
import Invoice from './pages/Invoice.js';
import About from './pages/About.js';
import Success from './helpers/Success.js';
import PageNotFound from './helpers/PageNotFound.js';

import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ListProducts />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/about" element={<About />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </div>
      </Router>
      {/* <Home />
      <Nav />
      <Invoice />
      <ListProducts />  */}
      <Footer />
    </div>
  );
}

export default App;