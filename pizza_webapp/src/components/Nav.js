import React from 'react';
import { FaBars, FaShoppingCart } from "react-icons/fa";
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
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <Link to="/" className="logo">Pizzería Don Remolo</Link>
                <div className='nav-links'>
                    { links.map(link=>(
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div >
                    <Link to="/invoice" classname="cartIcon">
                    <p>
                        <FaShoppingCart />
                        5
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