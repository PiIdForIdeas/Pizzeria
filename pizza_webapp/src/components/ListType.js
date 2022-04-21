/* import '../Styles/styleList.css'; */
import React, { useState } from 'react';
import Card from './Card.js';
import ListOfProducts from '../helpers/data.js';
import {FaShoppingCart} from "react-icons/fa";

let List = () => {
    const {food} = ListOfProducts;
    const [products,setProducts] = useState(food);
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
                    />
                </div>
            )
    })}
        <button>Comprar</button> 
    </div>);
}

export default List;

/* import React, { useState } from 'react';
import Card from './Card.js';
import ListOfTypes from '../helpers/type.js';


let List = () => {
    const {types} = ListOfTypes;
    const [productType,setProductsType] = useState(types);
    return(
        
    );
    return (
    <div>
        {productType.map((productType) => {
        return(
        <Nav countProducts={products.length} />
        <div className='card'>
            <p>{productType.id}</p>
            <img src={props.img} alt={props.name} />
            <ol className='productInfo'>
                <li className='productName'>{props.name} {props.size} {props.amount}</li>
                <li>$ {props.price}</li>
                <li>{productType.id}</li>
            </ol>
            <button type="submit" className='submitPlus'>+</button>
        </div>
        )
    })}
</div>);
}

export default List; */