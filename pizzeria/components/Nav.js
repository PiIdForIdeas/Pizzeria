import { FaBars, FaTimesCircle } from "react-icons/fa"

function Nav() {
    const openNav = () => {
        const open = {
            color: "white",
            backgroundColor: "DodgerBlue",
          };
        const btnOpen={
            display: "none"
          }
        const btnClose={
            display: "inline"
        }

    }

    return (
        <nav>
            <button className="btn"><FaBars /></button>
            <button className="btn"><FaTimesCircle /></button>
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