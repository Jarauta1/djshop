import './logIn_setUp.css';
import accederFoto from "../Imagenes/acceder.jpg"
import registarFoto from "../Imagenes/registro.jpg"

import {useState,useEffect} from "react"
import {Redirect} from "react-router-dom"

function LogIn_setUp (props) {
  let [retorno,setRetorno] = useState(localStorage.getItem("retorno"))
  let [mensaje,setMensaje] = useState(props.mensaje)
  let [num,setNum] = useState(0)
  let [emailAcceso, setEmailAcceso] = useState("")
  let [contrasenaAcceso, setContrasenaAcceso] = useState("")

  let [nombreRegistro,setNombreRegistro] = useState("")
  let [apellido1Registro,setApellido1Registro] = useState("")
  let [apellido2Registro,setApellido2Registro] = useState("")
  let [fechaRegistro,setFechaRegistro] = useState("")
  let [emailRegistro,setEmailRegistro] = useState("")
  let [passwordRegistro,setPasswordRegistro] = useState("")
  let [confirmacionRegistro,setConfirmacionRegistro] = useState("")

  useEffect(function(){
    setMensaje(props.mensaje)
  },[num])

  function cambioPantalla () {
    setNum(num+1)
  setMensaje("")
  document.querySelector('.container-login').classList.toggle('active');
  }

function changeMailAcceso(e) {
  setEmailAcceso(e.target.value)
}

function changeContrasenaAcceso(e) {
  setContrasenaAcceso(e.target.value)
}

function changeNombreRegistro(e) {
  setNombreRegistro(e.target.value)
}

function changeApellido1Registro(e) {
  setApellido1Registro(e.target.value)
}

function changeApellido2Registro(e) {
  setApellido2Registro(e.target.value)
}

function changeFechaRegistro(e) {
  setFechaRegistro(e.target.value)
}

function changeEmailRegistro(e) {
  setEmailRegistro(e.target.value)
}

function changePasswordRegistro(e) {
  setPasswordRegistro(e.target.value)
}

function changeConfirmacionRegistro(e) {
  setConfirmacionRegistro(e.target.value)
}

/* function login() {
  setEmailAcceso(eventMailAcceso)
  setContrasenaAcceso(eventContrasenaAcceso)

  fetch("http://localhost:3000/usuarios/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({mail: emailAcceso, password: contrasenaAcceso}),
  }).then((res)=>res.json()).then((res)=>{
    window.alert(res.mensaje)
    document.getElementById("mensajeAcceso").innerHTML = `<span>${res.mensaje}</span>`
    if (res.entrar == "si") {
      console.log(emailAcceso)
      setVuelta(true)
    }
  })
} */

/* function registrar() {
  setNombreRegistro(eventNombreRegistro)
  setApellido1Registro(eventApellido1Registro)
  setApellido2Registro(eventApellido2Registro)
  setFechaRegistro(eventFechaRegistro)
  setEmailRegistro(eventEmailRegistro)
  setPasswordRegistro(eventPasswordRegistro)
  setConfirmacionRegistro(eventConfirmacionRegistro)
  if (passwordRegistro.length < 6) {
    document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña debe tener al menos 6 carácteres</span>"
  } else {
    if (confirmacionRegistro !== passwordRegistro) {
      document.getElementById("mensajeRegistro").innerHTML = "<span>La contraseña no coincide</span>"
    } else {
      fetch("http://localhost:3000/usuarios/registro",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre: nombreRegistro,apellido1: apellido1Registro, apellido2: apellido2Registro, fecha: fechaRegistro, mail: emailRegistro, password: passwordRegistro}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        setVuelta(true)
      })
    } 
  }

  

} */


    

if (props.mensaje === "Logueado correctamente") {
  return(<Redirect to={`/${retorno}`}/>)
} else if (props.mensaje === "Usuario registrado correctamente")
{
  return(<Redirect to={`/${retorno}`}/>)
} else {
  return(<>
  <section className="login-page">
    <div className="container-login">
      <div className="user signinBx">
        <div className="imgBx"><img src={accederFoto} alt="" /></div>
        <div className="formBx">
          <div className="opcion-registro">
            <h2>IniciaR sesión</h2>
            <input onChange={changeMailAcceso} className="input-long" type="text" name="" placeholder="Correo electrónico" />
            <input onChange={changeContrasenaAcceso} className="input-long" type="password" name="" placeholder="Contraseña" />
            <div className="boton-mensaje">
            <input onClick={()=>props.login(emailAcceso,contrasenaAcceso)} className="input-long" type="submit" name="" value="Acceder"/>
            <div id="mensajeAcceso">{mensaje}</div>
            </div>
            <p className="signup">
              ¿No tienes cuenta?
              <a onClick={cambioPantalla}>  Regístrate</a>
            </p>
          </div>
        </div>
      </div>
      <div className="user signupBx">
        <div className="formBx">
          <div className="opcion-registro">
            <h2>CREAR UNA CUENTA</h2>
            <input onChange={changeNombreRegistro} className="input-long" type="text" name="nombre" placeholder="Nombre"/>
            <input onChange={changeApellido1Registro} className="input-short1" type="text" name="primerApellido" placeholder="Primer apellido"/>
            <input onChange={changeApellido2Registro} className="input-short2" type="text" name="segundoApellido" placeholder="Segundo apellido"/>
            <input onChange={changeFechaRegistro} className="input-long" type="date" name="fecha" placeholder="Fecha nacimiento" />
            <input onChange={changeEmailRegistro} className="input-long" type="text" name="email" placeholder="Correo electrónico" />
            <input onChange={changePasswordRegistro} className="input-long" type="password" name="contraseña" placeholder="Contraseña" />
            <input onChange={changeConfirmacionRegistro} className="input-long" type="password" name="confContraseña" placeholder="Confirmar contraseña" />
            <div className="boton-mensaje">
            <input onClick={()=>props.registrar(nombreRegistro,apellido1Registro,apellido2Registro,fechaRegistro,emailRegistro,passwordRegistro,confirmacionRegistro)} className="input-long" type="submit" name="" value="Regístrate" />
            <div id="mensajeRegistro">{mensaje}</div>
            </div>
            <p className="signup">
              ¿Ya tienes una cuenta? 
              <a onClick={cambioPantalla}>  INICIAR SESIÓN</a>
            </p>
          </div>
        </div>
        <div className="imgBx"><img src={registarFoto} alt="" /></div>
      </div>
    </div>
  </section>
    </>)
}
}

export default LogIn_setUp;