import {Link} from "react-router-dom"
import '../App.css';



function Header() {
    return(<>
    <div className="nav-bar-blocks">

        <div className="nav-bar-container _main">
            <div className="nav-bar vp">
                <div className="context_menu place-home">
                    <ul className="context_menu-list">
                        <li className="context_menu-item">
                            <Link to="/">
                                <a>INICIO</a>
                            </Link>
                        </li>
                        <li className="context_menu-item">
                            <Link to="/zapatillas">
                                <a>CALZADO</a>
                            </Link>
                        </li>
                        <li className="context_menu-item">
                            <Link to="/gammer">
                                <a>GAMMER</a>
                            </Link>
                        </li>
                        <li className="context_menu-item">
                            <Link to="/libros">
                                <a>LIBROS</a>
                            </Link>
                        </li>
                        <li className="context_menu-item">
                            <Link to="/peliculas">
                                <a>PELICULAS</a>
                            </Link>
                        </li>
                        <li className="context_menu-item-last">
                            <Link to="/ropa">
                                <a>ROPA</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            
            <ul className="topbar-user">
                <li className="js-guest-user">
                    <a>
                        <i className="icon user-line"></i>
                        <strong>Iniciar sesión</strong>
                    </a>
                </li>
            </ul>
            
            </div>

            
        </div>

   
  
    </div>
    
    </>)
    }

    export default Header;