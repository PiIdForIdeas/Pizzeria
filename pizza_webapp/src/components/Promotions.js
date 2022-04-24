import React, {useState} from 'react';

import Promo from './Promo.js';
import dataPromo from '../helpers/datapromo.js';

import '../Styles/styleHome.css';

const Promotions = ()=>{
    const [promotionProducts] = useState(dataPromo);
    return(
        <div className='promotions'>
            {promotionProducts.map((promotionProduct) => {
                return(
                    <div className='promo'>
                        <Promo
                            img={promotionProduct.img}
                            key={promotionProduct.id}
                            name={promotionProduct.name} 
                            type={promotionProduct.size} 
                            price={promotionProduct.price} 
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default Promotions;