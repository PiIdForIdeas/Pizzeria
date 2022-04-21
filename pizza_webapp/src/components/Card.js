/* import '../Styles/styleList.css'; */
import React from 'react';
import { Redirect } from "react-router-dom";

let Card = (props) => {
    return(
        <div className='card'>
            <img src={props.img} alt={props.name} />
            <ol className='productInfo'>
                <li className='productName'>{props.name} {props.size} {props.amount}</li>
                <li>$ {props.price}</li>
            </ol>
            {/* <button type="submit" className='submitPlus'>+</button> */}
            <div className='amountChange'>
            <button className="submitPlus" onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                }}>+
            </button>
            </div>
        </div>
    )
}

export default Card;