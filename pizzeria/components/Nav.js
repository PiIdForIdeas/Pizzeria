import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { bars, squareXmark } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <nav>

            <div><FontAwesomeIcon icon="fa-regular fa-bars" /></div>
            <h1 className="logo">Pizzeria Don Remolo</h1><ul className="mainMenu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Sobre Nosotros</a></li>

                <div><FontAwesomeIcon icon="fa-regular fa-square-xmark" /></div>
            </ul>    
        </nav>
    )
  }




  export default Nav