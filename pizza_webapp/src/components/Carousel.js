import React, { useState } from 'react';
import Card from './Card.js';
import './styleCarousel.css';

import muzarella from './img_pizzas/muzzarella.jpg';
import napolitana from './img_pizzas/napolitana.jpg';
import jamonymorrones from './img_pizzas/jamonymorron.webp';
import empanada_carne from './img_empanadas/empanada_carne.jpg';
import empanada_jamonyqueso from './img_empanadas/empanada_jamonyqueso.jpg';
import empanada_atun from './img_empanadas/empanada_atun.jpg';
import gaseosa from './img_bebidas/gaseosa.jpg';
import agua from './img_bebidas/agua.jpg';
import cerveza from './img_bebidas/cerveza.jpg';
import almendrado from './img_postres/almendrado.jpg';
import bombones from './img_postres/bombones.jpg';
import helado from './img_postres/helado.jpg';
import logo from '../img/logo.jpg';

let Carousel = () => {
    let food = [
        {
            id:1,
            name:'Muzzarella',
            type:'pizzas',
            size:'1 Mtrs',
            price:2000,
            amount:1,
            img: {muzarella},
        },
        {
            id:2,
            name:'Napolitana',
            type:'pizzas',
            size:'Grande',
            price:2000,
            cantidad:1,
            img: {napolitana},
        },
        {
            id:3,
            name:'Jamón y morrones',
            type:'pizzas',
            size:'Pequeña',
            price:800,
            amount:1,
            img: {jamonymorrones},
        },
        {
            id:4,
            name:'Empanadas de carne',
            type:'empanadas',
            size:'standard',
            price:2000,
            amount:12,
            img: {empanada_carne},
        },
        {
            id:5,
            name:'Empanadas de jamón y queso',
            type:'empanadas',
            size:'standard',
            price:2000,
            amount:12,
            img: {empanada_jamonyqueso},
        },
        {
            id:6,
            name:'Empanadas de atún',
            type:'empanadas',
            size:'standard',
            price:2000,
            amount:12,
            img: {empanada_atun},
        },
        {
            id:7,
            name:'Coca Cola 2.5Lts',
            type:'bebidas',
            size:'2.5 Lts',
            price:1000,
            amount:1,
            img: {gaseosa},
        },
        {
            id:8,
            name:'Agua',
            type:'bebidas',
            size:'2.5 Lts',
            price:1000,
            amount:1,
            img: {agua},
        },
        {
            id:9,
            name:'Cerveza',
            type:'bebidas',
            size:'1 Lts',
            price:1200,
            amount:1,
            img: {cerveza},
        },
        {
            id:10,
            name:'Almendrado',
            type:'postres',
            size:'1 Kgs',
            price:2000,
            amount:1,
            img: {almendrado},
        },
        {
            id:11,
            name:'helado',
            type:'postres',
            size:'1 Kgs',
            price:2000,
            amount:1,
            img: {helado},
        },
        {
            id:12,
            name:'Bombones',
            type:'postres',
            size:'1 Kgs',
            price:2000,
            amount:1,
            img: {bombones},
        },
        {
            id:13,
            name:'faina',
            type:'fainas',
            size:'1 rebanada',
            price:2000,
            amount:1,
            img: {logo},
        },
    ]
    const [products,setProducts] = useState(food);
    return (
    <div> 
        {products.map((product) => {
        return(
            <div>
            <Card 
                img={product.img}
                key={product.id}
                name={product.name} 
                type={product.size} 
                price={product.price} 
            />
            </div>
        )
    })} 
    </div>);
}

export default Carousel;