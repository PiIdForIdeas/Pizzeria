/* import '../Styles/styleList.css'; */
import React, { useState } from 'react';
import Card from './Card.js';
import ListOfProducts from '../Helpers/ListOfProducts.js';
import {FaShoppingCart} from "react-icons/fa";

let List = () => {
    const {food} = ListOfProducts;
    const [products,setProducts] = useState(food);
    const onAdd =(product)=>{
        const exist = products.find((x)=>x.id===product.id);
        if(exist){
            setProducts(
                products.map((x)=>
                    x.id === product.id ? {...exist, qty:exist.qty+1} :x
                )
            );
        }else{
            setProducts(
                [...products,{...products, qty:1}]
            );
        }
    };
    const onRemove =(product)=>{
        const exist = products.find((x)=>x.id===product.id);
        if(exist){
            setProducts(
                products.map((x)=>
                    x.id === product.id ? {...exist, qty:exist.qty-1} :x
                )
            );
        }else{
            setProducts(
                [...products,{...products, qty:1}]
            );
        }
    };
    return (
    <div>
        <FaShoppingCart />
        {products.map((product) => {
        return(
            <div>
                {/* <Nav countProducts={products.length} /> */}
                <Card 
                    img={product.img}
                    key={product.id}
                    name={product.name} 
                    type={product.size} 
                    amount={product.amount}
                    price={product.price}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            </div>
        )
    })}
        <button>Comprar</button> 
    </div>);
}

export default List;