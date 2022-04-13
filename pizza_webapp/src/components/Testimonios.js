/*import '../Styles/styleHome.css';*/
import React, { useState } from 'react';
import Opinion from './Opinion.js';
import {FaRegStar} from "react-icons/fa";

let Testimonios = () => {
    let review = [
        {   
            id: 1,
            star1: 'FaRegStar',
            star2: 'FaRegStar',
            star3: 'FaRegStar',
            star4: 'FaRegStar',
            star5: 'FaRegStar',
            opinion_text: 'Me animo a decir que es LA MEJOR pizza al molde de todo el mundo. De esos lugares de antaño que ya no hay, buena atención y servicio. Para sentarte en el salón tenes que sacar número pero rápidamente ya tenes lugar. No dejen de ir, excelente todo.',
        },
        {
            id: 2,
            star1: 'FaRegStar',
            star2: 'FaRegStar',
            star3: 'FaRegStar',
            star4: 'FaRegStar',
            star5: 'FaRegStar',
            opinion_text: 'Una pizza exquisita, una fugazza rellena que no falla.',
        }, 
        {
            id: 3,
            star1: 'FaRegStar',
            star2: 'FaRegStar',
            star3: 'FaRegStar',
            star4: 'FaRegStar',
            star5: 'FaRegStar',
            opinion_text: 'Buen servicio entrega rápida y en punto. Excelente app web para delivery.',
        },       
    ]
    const [opinions,setOpinions] = useState(review);
    return (
    <div> 
        {opinions.map((opinion) => {
        return(
            <div>
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