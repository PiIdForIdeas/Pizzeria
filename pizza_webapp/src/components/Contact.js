/* import '../Styles/styleHome.css'; */
/* import List from './Components/List.js';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"; */
import { FaSearch, FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return(
        <>
        <p><a href="./Pages/ListProducts.js"></a>Bienvenido! Qué desea pedir? <FaSearch /></p> 
        <div>
            <p><FaPhoneAlt /> 11 5555 5555</p><br />
            <p>Av. Cordoba 5000</p>
        </div>
        </>
    );
}

export default Contact;