import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function Nav() {
    return (
        <nav>
            <button className="btn">BTN</button>
            <h1 className="logo">Pizzeria Don Remolo</h1>
            <ul className="mainMenu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
            </ul> 
        </ nav>
    )
}

  export default Nav