import React, { useState } from 'react';

import Opinion from './Opinion.js';
import dataOpinion from '../helpers/dataOpinion.js';

import '../Styles/styleHome.css';

//import {FaRegStar} from "react-icons/fa";

let Testimonios = () => {
    
   /*  const [opinions,setOpinions] = useState(dataOpinion); */
   const [opinions] = useState(dataOpinion);
   return (
    <div className='stars'> 
        {opinions.map((opinion) => {
        return(
            <div className='opinion'>
            <Opinion 
                star1={opinion.star1}
                star2={opinion.star2}
                star3={opinion.star3} 
                star4={opinion.star4} 
                star5={opinion.star5} 
                opinion_text={opinion.opinion_text} 
            />
            </div>
        )
    })} 
    </div>
    );
}

export default Testimonios;