/* import '../Styles/styleHome.css'; */
import React, { useState } from 'react';
import Promo from './Promo.js';
import ListOfPromos from '../helpers/promo.js';


const Promotions = () => {
    const {food} = ListOfPromos;
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