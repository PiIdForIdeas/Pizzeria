import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

 function Footer() {
    return (
        <footer>
            <div className='social'>
                <p>Siganos en:</p>
                <p className='instagram'><FaInstagram /></p>
                <p className='facebook'><FaFacebook /></p>
                <p className='whatsapp'><FaWhatsapp /></p>
            </div>
            <p className='create'>Pagina creada por Pi ID for Ideas</p>
        </footer>
    )
}

export default Footer;