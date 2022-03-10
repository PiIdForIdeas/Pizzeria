function Nav() {
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <div className="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>

                </ul>
                <h1 class="logo">Pizzería Don Remolo</h1>
            </div>
        </div>
    )
  }
  export default Nav