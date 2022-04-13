import React, { useState } from 'react';
import Promo from './Promo.js';
import './styleCarousel.css';

let Promotions = () => {
    let food = [
        {
            id:1,
            name:'Muzzarella',
            type:'pizzas',
            size:'1 Mtrs',
            price:2000,
            amount:1,
            img: "logo",
        },
        {
            id:2,
            name:'Napolitana',
            type:'pizzas',
            size:'Grande',
            price:2000,
            cantidad:1,
            img: "logo",
        },
        {
            id:3,
            name:'Jamón y morrones',
            type:'pizzas',
            size:'Pequeña',
            price:800,
            amount:1,
            img: "logo",
        },
        {
            id:4,
            name:'Empanadas de carne',
            type:'empanadas',
            size:'standard',
            price:2000,
            amount:12,
            img: "logo",
        },
        {
            id:5,
            name:'Empanadas de jamón y queso',
            type:'empanadas',
            size:'standard',
            price:2000,
            amount:12,
            img: "logo",
        },
        {
            id:6,
            name:'Empanadas de atún',
            type:'empanadas',
            size:'standard',
            price:2000,
            amount:12,
            img: "logo",
        },
        {
            id:7,
            name:'Coca Cola 2.5Lts',
            type:'bebidas',
            size:'2.5 Lts',
            price:1000,
            amount:1,
            img: "logo",
        },
        {
            id:8,
            name:'Agua',
            type:'bebidas',
            size:'2.5 Lts',
            price:1000,
            amount:1,
            img: "logo",
        },
        {
            id:9,
            name:'Cerveza',
            type:'bebidas',
            size:'1 Lts',
            price:1200,
            amount:1,
            img: "logo",
        },
        {
            id:10,
            name:'Almendrado',
            type:'postres',
            size:'1 Kgs',
            price:2000,
            amount:1,
            img: "logo",
        },
        {
            id:11,
            name:'helado',
            type:'postres',
            size:'1 Kgs',
            price:2000,
            amount:1,
            img: "logo",
        },
        {
            id:12,
            name:'Bombones',
            type:'postres',
            size:'1 Kgs',
            price:2000,
            amount:1,
            img: "logo",
        },
        {
            id:13,
            name:'faina',
            type:'fainas',
            size:'1 rebanada',
            price:2000,
            amount:1,
            img: "logo",
        },
    ]
    const [products,setProducts] = useState(food);
    return (
    <div> 
        {products.map((product) => {
        return(
            <div>
            <Promo 
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

export default Promotions;