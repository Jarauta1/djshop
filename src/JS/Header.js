import {Link} from "react-router-dom"
/* import '../App.css'; */
import '../CSS/header.css';
import logo from "../Imagenes/logo_header_blanco.png"



function Header(props) {

    if (props.usuario !== "") {
        return(<>
         <section class="top-nav">
                <div>
                    <Link to="/"><img src={logo} height="30" alt=""/></Link>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu-header"> 
                    <li><Link to="/zapatillas"><a>Zapatillas</a></Link></li> 
                    <li><Link to="/ropa"><a>Ropa</a></Link></li>
                    <li><Link to="/libros"><a>Libros</a></Link></li>
                    <li><Link to="/comics"><a>Comics</a></Link></li>
                    <li><Link to="/peliculas"><a>Peliculas</a></Link></li>
                    <li><Link to="/buscador"><a>Buscador</a></Link></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>Iniciar</li>
                    <li>Cesta</li>
                    <li>Favoritos</li>
                </ul>
            </section>
        </>)
    } else {
        return(<>
          
            <section class="top-nav">
                <div>
                    <Link to="/"><img src={logo} height="30" alt=""/></Link>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu-header"> 
                    <li><Link to="/zapatillas"><a>Zapatillas</a></Link></li> 
                    <li><Link to="/ropa"><a>Ropa</a></Link></li>
                    <li><Link to="/libros"><a>Libros</a></Link></li>
                    <li><Link to="/comics"><a>Comics</a></Link></li>
                    <li><Link to="/peliculas"><a>Peliculas</a></Link></li>
                    <li><Link to="/buscador"><a>Buscador</a></Link></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>Iniciar</li>
                    <li>Cesta</li>
                    <li>Favoritos</li>
                </ul>
            </section>
        </>)
    }


    
    }

export default Header;