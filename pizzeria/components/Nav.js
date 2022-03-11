import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import React, {useState, useEffect} from 'react'


function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
  }, [])

    return (
        <nav>
            <button onClick={toggleNav} className="btn">BTN</button>
            <h1 className="logo">Pizzeria Don Remolo</h1>
            {(toggleMenu || screenWidth > 600) && (
            <ul className="mainMenu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
            </ul>
            )}      
        </nav>
    )
}

  export default Nav