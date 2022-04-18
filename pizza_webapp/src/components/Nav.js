import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./NavSidebar.js";

import '../Styles/styleNav.css';

const Nav =()=>{
    const [showSidebar,setShowSidebar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Inicio",
            path: "/"
        },
        {
            name: "Productos",
            path: "/products"
        },
        {
            name: "Promociones",
            path: "/promotions"
        },
        {
            name: "Sobre Nosotros",
            path: "/about"
        }
    ];

    function closeSidebar(){
        setShowSidebar(false);
    };
    return(
        <>
        <div className='nav'>
            <Link to="/" className="logo">Pizzería Don Remolo</Link>
            <div className='nav-links'>
                { links.map(link=>(
                    <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                )) }
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar ? "burgerBtnActive" : "burgerBtn"}>
                <FaPizzaSlice />
            </div>
        </div>
        { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
};

export default Nav;

/* export default function Nav() {
    return (
        <nav>
            <div className="nav">
                <div className="logo">
                    <h1>Pizzeria Don Remolo</h1>
                </div>
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>  
                    <div className="menu-items">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="./Pages/ListProducts.js">Productos</a></li>
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                    </div>
                </div>
            </div>
        </nav>
    )
} */