function Nav() {
    return (
        <nav classNmae="navbar">
            <div classNmae="navbar-container container">
                <input type="checkbox" name="checkboxNav" id="checkboxNav"/>
                <div classNmae="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                </ul>
                <h1 className="logo">Pizzeria</h1>
            </div>
        </nav>
    )
  }
  export default Nav