import React from 'react'
//import { FaBars, FaTimesCircle } from "react-icons/fa";

export default function Nav() {
    return (
        <nav>
            <div className="nav">
                {/* <div className="logo">
                    <h1>Pizzeria Don Remolo</h1>
                </div> */}
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>  
                    <div className="menu-items">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                    </div>
                </div>
            </div>
        </nav>
    )
}