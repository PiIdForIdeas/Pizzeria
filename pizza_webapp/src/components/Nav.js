import React from 'react';
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import Sidebar from "./NavSidebar.js";
import food from '../helpers/data.js';
import ListOfPromos from '../helpers/datapromo.js';

import '../Styles/styleNav.css';

const Nav =()=>{
    const [showSidebar,setShowSidebar] = useState(false);
    const location = useLocation();
    function sumProperty(arr, type) {
        return arr.reduce((total, obj) => {
          return total + obj[type];
        }, 0);
    };
    const sumAmount = sumProperty(food, "amount");
    const sumAmountPromo = sumProperty(ListOfPromos, "amount");

    const sumTotalAmount = sumAmount + sumAmountPromo;
    const links = [
        {
            info: "Inicio",
            path: "/"
        },
        {
            info: "Productos",
            path: "/products"
        },
        {
            info: "Promociones",
            path: "/promotions"
        },
        {
            info: "Sobre Nosotros",
            path: "/about"
        }
    ];

    function closeSidebar(){
        setShowSidebar(false);
    };
    return(
        <>
        <nav>
            <div className='navbar'>
                <div className='burger'>
                    <div onClick={() => setShowSidebar(true)} className={showSidebar ? "burgerBtnActive" : "burgerBtn"}>
                        <FaBars />
                    </div>
                </div>
                <Link to="/" className="logo">Pizzería Don Remolo</Link>
                <div className='nav-links'>
                    { links.map(link=>(
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.info}>{link.info}</Link>
                    )) }
                </div>
                <Link to="/" className="logo">Pizzería Don Remolo</Link>
                <div className='nav-links'>
                    { links.map(link=>(
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.info}>{link.info}</Link>
                    )) }
                </div>
                <div className='shoppingCart'>
                    <Link to="/invoice" className="cartIcon">
                        <p>
                            <FaShoppingCart /><span className='sumAmount'>{sumTotalAmount}</span>
                        </p>
                    </Link>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </nav>
        </>
    )
};

export default Nav;