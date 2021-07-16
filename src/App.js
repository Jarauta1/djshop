import './App.css';
import {useState,useEffect} from "react"
import {BrowserRouter, Route, Redirect} from "react-router-dom"

import Header from "./components/header/header"

import Home from "./pages/home/home"
import LogIn_setUp from './pages/logIn_setUp/logIn_setUp';
import Books from "./pages/sections/books"
import Comics from "./pages/sections/comics/comics"
import Films from "./pages/sections/films/films"
import Sneakers from "./pages/sections/sneakers/sneakers"
import Tshirts from "./pages/sections/tshirts/tshirts"

import ComicDetail from "./pages/sections/subSections/comicDetail/comicDetail"
import FilmDetail from "./pages/sections/subSections/filmDetail/filmDetail"
import SneakerDetail from "./pages/sections/subSections/sneakerDetail/sneakerDetail"

import Cart from "./pages/cart/cart"
import Favs from "./pages/favs/favs"
import User from "./user/user.js"

import Dashboard from "./dashboard/dashboard.js"

import Footer from "./components/footer/footer"

function App() {

  let [user, setUser] = useState("")
  let [dia,setDia] = useState("")
  let [mes,setMes] = useState("")
  let [anyo,setAnyo] = useState("")
  let [apellido1,setApellido1] = useState("")
  let [apellido2,setApellido2] = useState("")
  let [mensaje,setMensaje] = useState("")
  let [vuelta,setVuelta] = useState("")
  let [datos, setDatos] = useState([])
  let [nombre, setNombre] = useState()
  let [edad, setEdad] = useState()
  let [rango,setRango] = useState()

  useEffect(function(){
    if (user !== "") {
      fetch("http://localhost:3000/usuarios/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user: user}),
      }).then((res)=>res.json()).then((res)=>{
        setDatos(res.datos[0])
        setNombre(res.datos[0].user)
        localStorage.setItem("mail",res.datos[0].mail)

        let anyo = res.datos[0].anyo
        let edad = 2021 - parseInt(anyo)
        setEdad(edad)
        setRango(res.datos[0].rango)          
      })
    }
  },[user])

  const login = (email, password) => {
    fetch("http://localhost:3000/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({mail: email, password: password}),
    }).then((res)=>res.json()).then((res)=>{
      setMensaje(res.mensaje)
      if (res.entrar == "si") {
        setVuelta("volver")
        setUser(res.user)
        setDia(res.dia)
        setMes(res.mes)
        setAnyo(res.anyo)
        setApellido1(res.apellido1)
        setApellido2(res.apellido2)
        localStorage.setItem("mail",res.user)
      }     
    })
  }

  function salir() {
    setUser("")
    localStorage.setItem("mail","")
  }

  let comprobarMail
  let indiceComprobar

  const registrar = (nombre,apellido1,apellido2,fecha,mail,password,confirmarPassword) => {
     
    if (password.length < 6) {
      document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña debe tener al menos 6 carácteres</span>"
    } else {
      if (confirmarPassword !== password) {
        document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña no coincide</span>"
      } else {
        indiceComprobar = mail.indexOf("@",0)
        comprobarMail = mail.substring(indiceComprobar)
        if (comprobarMail !== "@gmail.com") {
          document.getElementById("mensajeRegistro").innerHTML = "<span>El email no es válido</span>"
        } else {
          fetch("http://localhost:3000/usuarios/registro",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({nombre: nombre,apellido1: apellido1, apellido2: apellido2, fecha: fecha, mail: mail, password: password}),
          }).then((res)=>res.json()).then((res)=>{
          /*  setUsuario(res.usuario) */
          /*  console.log(res) */
          /*  setVuelta("volver") */
            document.getElementById("mensajeRegistro").innerHTML = `<span>${res.mensaje}</span>`
            setMensaje(res.mensaje)
            if (res.registro == "si") {
              setVuelta("volver")
              console.log(res.user)
              setUser(res.user)
              localStorage.setItem("mail",res.user)
            }     
          })
        } 
      } 
    }
  }

/* if(usuario.administrador){
return
}else{
  return <Redirect to="/" />
} */


  return(<BrowserRouter>
    <Header salir={salir} nombre={nombre} usuario={user}/>
    <Route exact path="/">
      <br></br>
        <div className="promociones"><p>SECCIONES</p><hr></hr></div>
        <div><Home/></div>
    </Route>
    <Route exact path="/djshop">
      <br></br>
        <div className="promociones"><p>SECCIONES</p><hr></hr></div>
        <div><Home/></div>
    </Route>
    <Route exact path="/login">
      <LogIn_setUp vuelta={vuelta} mensaje={mensaje} login={login} registrar={registrar}/>
    </Route>
    <Route exact path="/camisetas">
      <Tshirts edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/zapatillas">
      <Sneakers edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/zapatillas/:id">
      <SneakerDetail edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/peliculas">
      <Films edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/peliculas/:id">
      <FilmDetail edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/libros">
      <Books edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/comics">
      <Comics edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/comics/:id">
      <ComicDetail edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/usuario">
      <User rango={rango} edad={edad} nombre={nombre} usuario={user} dia={dia} mes={mes} anyo={anyo} apellido1={apellido1} apellido2={apellido2}/>
    </Route>
    <Route exact path="/dashboard">
      <Dashboard rango={rango} edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/cesta">
      <Cart rango={rango} edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/cesta_finalizada">
      <Cart rango={rango} edad={edad} usuario={user}/>
    </Route>
    <Route exact path="/favoritos">
      <Favs rango={rango} edad={edad} usuario={user}/>
    </Route>
    <Footer/>
  </BrowserRouter>)
}

export default App;

/* https://rapidapi.com/collection/how-to-get-amazon-product-reviews-api */
/* https://rapidapi.com/collection/amazon-products */
/* https://rapidapi.com/blog/email-apis-which-one-is-right-for-you/ */
/* https://blog.api.rakuten.net/top-retail-product-apis/ */