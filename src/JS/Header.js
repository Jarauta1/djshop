import { useState, useEffect} from "react";
import {Link} from "react-router-dom"
/* import '../App.css'; */
import '../CSS/header.css';
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
                console.log(res.datos[0].cesta)
                setCesta(datos.length)
                console.log(cesta)
            })
          }
      },[usuario])
  
    

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
                    <li><Link to="/camisetas"><a>Camisetas</a></Link></li>
                    <li><Link to="/comics"><a>Comics</a></Link></li>
                    <li><Link to="/libros"><a>Libros</a></Link></li>
                    <li><Link to="/peliculas"><a>Peliculas</a></Link></li>
                    <li><Link to="/zapatillas"><a>Zapatillas</a></Link></li> 
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
       /*  localStorage.setItem("retorno", "/") */
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
                    <li><Link to="/camisetas"><a>Camisetas</a></Link></li>
                    <li><Link to="/comics"><a>Comics</a></Link></li>
                    <li><Link to="/libros"><a>Libros</a></Link></li>
                    <li><Link to="/peliculas"><a>Peliculas</a></Link></li>
                    <li><Link to="/zapatillas"><a>Zapatillas</a></Link></li> 
                   {/*  <li><Link to="/buscador"><a>Buscador</a></Link></li> */}
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li /* onClick={cambio} */ className="material-icons heart"><Link to="/login">account_circle</Link></li>
                </ul>
            </section>
        </>)
    }


    
    }

export default Header;