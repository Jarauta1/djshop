import {Link} from "react-router-dom"
import '../App.css';



function Header() {
    return(<>
            <div className="nav-bar-blocks">
                <div className="nav-bar-container _main">
                    <div className="nav-bar vp">
                        <div className="context_menu place-home">
                            <header className="nav-menu">
	                            <label for="nav-toggle" className="nav-toggle-label"></label>
                            </header>
                            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>	
                            <ul id="menu-topo" className="context_menu-list">
                                <li className="context_menu-item nav-item">
                                    <Link to="/">
                                        <a href="/">INICIO</a>
                                    </Link>
                                </li>
                                <li className="context_menu-item nav-item">
                                    <Link to="/zapatillas">
                                        <a href="/zapatillas">ZAPATILLAS</a>
                                    </Link>
                                </li>
                                <li className="context_menu-item nav-item">
                                    <Link to="/ropa">
                                        <a href="/ropa">ROPA</a>
                                    </Link>
                                </li>
                                <li className="context_menu-item nav-item">
                                    <Link to="/comics">
                                        <a href="/comics">COMICS</a>
                                    </Link>
                                </li>
                                <li className="context_menu-item nav-item">
                                    <Link to="/libros">
                                        <a href="/libros">LIBROS</a>
                                    </Link>
                                </li>
                                <li className="context_menu-item nav-item">
                                    <Link to="/peliculas">
                                        <a href="/peliculas">PELICULAS</a>
                                    </Link>
                                </li>
                                <li className="context_menu-item-last">
                                    <Link to="/buscador">
                                        <a href="/">BUSCADOR</a>
                                    </Link>
                                </li>
                                <ul id="menu-topo" className="topbar-user">
                                    <li className="js-guest-user context_menu-item-last">
                                        <a href="/">
                                            <i className="icon user-line"></i>
                                            <strong>Iniciar sesión</strong>
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }

export default Header;