import React from 'react';
import './styleCarousel.css';

let Promo = (props) => {
    return(
        <div className='box'>
            <img src={props.img} alt={props.name} />
            <ol className='productInfo'>
                <li className='productName'>{props.name} {props.size}</li>
                <li>$ {props.price}</li>
            </ol>
        </div>
    )
}

export default Promo;