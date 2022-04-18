import React from 'react';
import Home from '../pages/Home.jsx';

export default function Success() {
    return (
        <div>
            <h1>Exito!!!</h1>
            <p>Su envío esta en camino.<br /> 
            Llegará pronto.<br />
            Disfrute su día!</p>
            <button onClick={<Home />}>Inicio</button>
            
        </div>
    )
}