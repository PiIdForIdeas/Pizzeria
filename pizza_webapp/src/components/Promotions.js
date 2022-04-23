/* import '../Styles/styleHome.css'; */
import React, {useState} from 'react';
import Promo from '../helpers/promo.js';

const Promotions = ()=>{
    const {food} = Promo;
    const [products,setProducts] = useState(food);
    /* return(
        <div>
            { products.map((product)=> {
                return(
                    <Promo 
                    img={product.img}
                    key={product.id}
                    name={product.name} 
                    type={product.size} 
                    price={product.price} 
                    />
                )
            })
            }
        </div>
    ) */
    return(
        <div>
            <p>Da error al querer mostrar promociones</p>
        </div>
    )
    
};

export default Promotions;