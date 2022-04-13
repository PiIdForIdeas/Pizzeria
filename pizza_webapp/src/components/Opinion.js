/* import '../Styles/styleHome.css'; */
import React from 'react';
import { FaRegStar } from "react-icons/fa";

let Opinion = (props) => {
    return(
        <div className='box'>
            <div className='productInfo'>
            <div className='stars'>
                <p><FaRegStar />{props.star1}</p>
                <p><FaRegStar />{props.star2}</p>
                <p><FaRegStar />{props.star3}</p>
                <p><FaRegStar />{props.star4}</p>
                <p><FaRegStar />{props.star5}</p>
            </div>
            <p className='testimoniosText'>{props.opinion_text}</p>
            </div>
        </div>
    )
}

export default Opinion;