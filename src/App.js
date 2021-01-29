import './App.css';
import {useState,useEffect} from "react"
import {BrowserRouter, Route, Redirect} from "react-router-dom"

import Header from "./JS/Header.js"
import Login from "./JS/login.js"
import Peliculas from "./JS/peliculas.js"
import Portada from "./JS/portada.js"
import Libros from "./JS/libros.js"
import Footer from "./JS/Footer.js"
import PeliculaCard from "./JS/peliculaCard.js"
import Comics from "./JS/comics.js"
import ComicCard from "./JS/comicCard.js"
import Buscador from "./JS/buscador.js"
import Zapatillas from "./JS/zapatillas.js"


function App() {

let [usuario, setUsuario] = useState("")
let [mensaje,setMensaje] = useState("")
let [vuelta,setVuelta] = useState(false)

const login = (email, password) => {
  console.log(email,password)
  fetch("http://localhost:3000/usuarios/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({mail: email, password: password}),
  }).then((res)=>res.json()).then((res)=>{
    setMensaje(res.mensaje)
    console.log(res.mensaje)
    if (res.entrar == "si") {
      setVuelta(true)
      setUsuario(res.usuario)
    }
  })
}

const registrar = (nombre,apellido1,apellido2,fecha,mail,password,confirmarPassword) => {
   console.log(nombre,apellido1,apellido2,fecha,mail,password,confirmarPassword)
    
    if (password.length < 6) {
      document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña debe tener al menos 6 carácteres</span>"
    } else {
      if (confirmarPassword !== password) {
        document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña no coincide</span>"
      } else {
        fetch("http://localhost:3000/usuarios/registro",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({nombre: nombre,apellido1: apellido1, apellido2: apellido2, fecha: fecha, mail: mail, password: password}),
        }).then((res)=>res.json()).then((res)=>{
          setMensaje(res.mensaje)
          setUsuario(res.usuario)
          console.log(res)
         /*  setVuelta(true) */
        })
      } 
    }
  
    
  
  
}

/* if(usuario.administrador){
return
}else{
  return <Redirect to="/" />
} */


  return(<BrowserRouter>
  <Header usuario={usuario}/>
  <Route exact path="/">
    <br></br>
      <div className="promociones"><p>PROMOCIONES</p><hr></hr></div>
      <div><Portada/></div>
  </Route>
  <Route exact path="/buscador">
    <Buscador/>
  </Route>
  <Route exact path="/login">
    <Login vuelta={vuelta} mensaje={mensaje} login={login} registrar={registrar}/>
  </Route>
  <Route exact path="/zapatillas">
    <Zapatillas/>
  </Route>
  <Route exact path="/peliculas">
    <Peliculas usuario={usuario}/>
  </Route>
  <Route exact path="/peliculas/:titulo/:id">
    <PeliculaCard usuario={usuario}/>
  </Route>
  <Route exact path="/libros">
    <Libros />
  </Route>
  <Route exact path="/comics">
    <Comics/>
  </Route>
  <Route exact path="/comics/:id">
    <ComicCard usuario={usuario}/>
  </Route>
  <Footer/>
  </BrowserRouter>)
  
}

export default App;


/* https://rapidapi.com/collection/how-to-get-amazon-product-reviews-api */
/* https://rapidapi.com/collection/amazon-products */
/* https://rapidapi.com/blog/email-apis-which-one-is-right-for-you/ */
/* https://blog.api.rakuten.net/top-retail-product-apis/ */