/* import '../Styles/styleHome.css'; */
import React from 'react';

const Promo = (props) => {
    return(
        <div className='promo'>
            <img src={props.img} alt={props.name} />
            <ol className='promoInfo'>
                <li className='promoName'>{props.name} {props.size}</li>
                <li className='promoPrice'>$ {props.price}</li>
            </ol>
        </div>
    )
}

export default Promo;