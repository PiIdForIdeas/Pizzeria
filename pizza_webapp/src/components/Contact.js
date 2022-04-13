/* import '../Styles/styleHome.css'; */
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return(
        <>
        <div className='searchBtn'>
            <p>Bienvenido! Qué desea pedir? <FaSearch /></p>
        </div>
        <div>
            <p><FaPhoneAlt /> 11 5555 5555</p><br />
            <p>Av. Cordoba 5000</p>
        </div>
        </>
    );
}

export default Contact;