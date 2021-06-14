import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/header.css";
import logo from "../Imagenes/logo_header_blanco.png"

function Header(props) {

    let [usuario, setUsuario] = useState(props.usuario)
    let [datos,setDatos] = useState([])
    let [cesta,setCesta] = useState(0)

    /*   function cambio() {
        localStorage.setItem("retorno", "")
    } */

    useEffect(function(){
  
        if (usuario !== "") {
        fetch("http://localhost:3000/usuarios/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({usuario: usuario}),
            }).then((res)=>res.json()).then((res)=>{
                setDatos(res.datos[0].cesta)
                setCesta(datos.length)
            })
          }
      },[usuario])


    if (props.usuario != "") {
        return(<>
             <section className="header-section">
                <div>
                    <Link to="/" className="logo">
                        <img src={logo} height="30" alt="djshop"/>
                    </Link>
                </div>
                <input className="menu-header-btn" type="checkbox" id="menu-header-btn"/>
                <label className="menu-header-icon" htmlFor="menu-header-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu-header">
                    <li>
                        <Link className="header-camisetas" to="/camisetas"><a>Camisetas</a></Link>
                    </li>
                    <li>
                        <Link className="header-comics" to="/comics"><a>Comics</a></Link>
                    </li>
                    <li>
                        <Link className="header-libros" to="/libros"><a>Libros</a></Link>
                    </li>
                    <li>
                        <Link className="header-peliculas" to="/peliculas"><a>Peliculas</a></Link>
                    </li>
                    <li>
                        <Link className="header-zapatillas" to="/zapatillas"><a>Zapatillas</a></Link>
                    </li>
                     {/*   <li><Link to="/buscador"><a>Buscador</a></Link></li> */}
                       <li></li>
                       <li></li>
                       <li></li>
                       <li className="material-icons"><Link to="/favoritos"><a>favorite</a></Link></li>
                       <li className="material-icons"><Link to="/cesta"><a className="shopping-bag">shopping_bag</a><a className="num-cesta"></a></Link></li>
                      {/*  <li><div className="user-div"><div className="material-icons"><Link to="/cesta"><a>shopping_bag</a></Link></div>{cesta}</div></li> */}
                       <li><div className="user-div">{props.nombre}<div className="material-icons"><Link to="/usuario"><a>manage_accounts</a></Link></div></div></li>
                       <li onClick={()=>props.salir()} className="material-icons"><Link to="/"><a>exit_to_app</a></Link></li>
                   </ul>
               </section>
           </>)
    } else {
        return (<>
            <section className="header-section">
                <div>
                    <Link to="/" className="logo">
                        <img src={logo} height="30" alt="djshop"/>
                    </Link>
                </div>
                <input className="menu-header-btn" type="checkbox" id="menu-header-btn"/>
                <label className="menu-header-icon" htmlFor="menu-header-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu-header">
                    <li>
                        <Link className="header-camisetas" to="/camisetas"><a>Camisetas</a></Link>
                    </li>
                    <li>
                        <Link className="header-comics" to="/comics"><a>Comics</a></Link>
                    </li>
                    <li>
                        <Link className="header-libros" to="/libros"><a>Libros</a></Link>
                    </li>
                    <li>
                        <Link className="header-peliculas" to="/peliculas"><a>Peliculas</a></Link>
                    </li>
                    <li>
                        <Link className="header-zapatillas" to="/zapatillas"><a>Zapatillas</a></Link>
                    </li>
                {/* </ul>
                <ul> */}
                    <li className="material-icons heart">
                        <Link className="header-login" to="/login">account_circle</Link>
                    </li>           
                </ul>
            </section>
        </>);
    }
    
}

export default Header;