/* import '../Styles/styleList.css'; */
import React from 'react';

let Card = (props) => {
    return(
        <div className='card'>
            <img src={props.img} alt={props.name} />
            <ol className='productInfo'>
                <li className='productName'>{props.name} {props.size}</li>
                <li>$ {props.price}</li>
            </ol>
            <button type="submit" className='submitPlus'>+</button>
        </div>
    )
}

export default Card;