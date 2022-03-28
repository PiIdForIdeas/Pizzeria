import React from 'react';

export default function Footer() {
    let food = [
        {
            food:'Muzzarella',
            tipo:'pizzas',
            precio:'2000',
            cantidad:'1'
        },
        {
            food:'Napolitana',
            tipo:'pizzas',
            precio:'2000',
            cantidad:'1'
        },
        {
            food:'Empanadas de carne',
            tipo:'empanadas',
            precio:'2000',
            cantidad:'12'
        },
        {
            food:'faina',
            tipo:'fainas',
            precio:'2000',
            cantidad:'1'
        },
        {
            food:'Coca Cola 2.5Lts',
            tipo:'bebidas',
            precio:'1000',
            cantidad:'1'
        },
        {
            food:'Helado',
            tipo:'postres',
            precio:'2000',
            cantidad:'1'
        },
    ]
    return (
        <div>
            <ol>
                <li><p>{food}</p></li>
                <li><p>{tipo}</p></li>
                <li><p>$ {precio}</p></li>
                <li><p>{cantidad}</p></li>
            </ol>
            <button type="submit">+</button>
        </div>
    )
}