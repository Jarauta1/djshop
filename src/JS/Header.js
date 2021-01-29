import { useState, useEffect} from "react";
import {Link} from "react-router-dom"
/* import '../App.css'; */
import '../CSS/header.css';
import logo from "../Imagenes/logo_header_blanco.png"



function Header(props) {

    let [datos, setDatos] = useState([])

    useEffect(function(){
    
        fetch("http://localhost:3000/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: props.usuario}),
            }).then((res)=>res.json()).then((res)=>{
                setDatos(res.datos[0])
                console.log(res.datos[0])
            })
      },[props.usuario])

console.log(props.usuario)
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
                    <li></li>
                    <li>Cesta</li>
                    <li><span className="material-icons heart">account_circle</span></li>
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
                    <li></li>
                    <li></li>
                    <li className="material-icons heart"><Link to="/login">account_circle</Link></li>
                </ul>
            </section>
        </>)
    }


    
    }

export default Header;