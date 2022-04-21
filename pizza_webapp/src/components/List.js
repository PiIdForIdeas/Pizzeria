/* import '../Styles/styleList.css'; */
import React, { useState } from 'react';
import Card from './Card.js';
import ListOfProducts from '../helpers/data.js';
import PageNotFound from '../helpers/PageNotFound.js';

let List = () => {
    const {food} = ListOfProducts;
    const [products,setProducts] = useState(food);
    if(products.length > 0){
        return (
    <div>
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
    }
    )}
    </div>);
    } else{
        const PageNotFound = <PageNotFound />
    }
}

export default List;